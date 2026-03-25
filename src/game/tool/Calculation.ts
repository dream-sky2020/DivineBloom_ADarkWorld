/**
 * 运算操作符类型
 */
export type CalcOperator = '+' | '-' | '*' | '/' | 'max' | 'min' | 'base' | 'set' | 'if';

/**
 * 运算节点接口
 */
export interface CalcNode {
    /** 节点类型 */
    type: 'op' | 'branch' | 'var' | 'set';
    /** 操作符 */
    op: CalcOperator;
    /** 标签/名称 */
    label: string;
    /** 数值（直接量） */
    value?: number | bigint;
    /** 变量名 */
    varName?: string;
    /** 详细描述 */
    description?: string;
    /** 条件判定（仅 if 节点使用） */
    condition?: boolean;
    /** 成立分支（仅 if 节点使用） */
    thenBranch?: CalcNode[];
    /** 不成立分支（仅 if 节点使用） */
    elseBranch?: CalcNode[];
    /** 运行后的实际值（缓存用于解释生成） */
    executedValue?: number | bigint;
    /** 分支是否被执行 */
    wasTaken?: boolean;
}

/**
 * 运算计算器：支持变量、逻辑分支及自动化解释。
 * 它可以看作是一个微型的、可解释的运算引擎。
 */
export class Calculator {
    private nodes: CalcNode[] = [];
    private context: Record<string, number | bigint>;

    /**
     * 初始化计算器
     * @param baseValue 初始基础值或变量名
     * @param label 标签
     * @param context 变量上下文
     */
    constructor(baseValue: number | bigint | string = 0, label: string = '基础值', context: Record<string, number | bigint> = {}) {
        this.context = context;
        if (typeof baseValue === 'string') {
            this.nodes.push({ type: 'var', op: 'base', varName: baseValue, label });
        } else {
            this.nodes.push({ type: 'op', op: 'base', value: baseValue as number | bigint, label });
        }
    }

    /**
     * 静态工厂方法
     */
    static start(baseValue: number | bigint | string, label: string = '基础值'): Calculator {
        return new Calculator(baseValue, label);
    }

    /**
     * 从持久化的节点序列中加载并执行公式
     * @param nodes 节点序列 (JSON 数组)
     * @param context 运行时的变量上下文
     */
    static runFormula(nodes: CalcNode[], context: Record<string, number | bigint> = {}): Calculator {
        const calc = new Calculator(0, 'internal', context);
        // 恢复节点中的 BigInt 值
        calc.nodes = JSON.parse(JSON.stringify(nodes), (_, value) => {
            if (typeof value === 'string' && /^-?\d+n$/.test(value)) {
                return BigInt(value.slice(0, -1));
            }
            return value;
        });
        calc.getResult();
        return calc;
    }

    /**
     * 获取当前计算器的节点序列（用于序列化保存）
     * 返回可序列化的 JSON 数组，BigInt 会被转换为 "100n" 格式的字符串。
     */
    exportNodes(): CalcNode[] {
        return JSON.parse(JSON.stringify(this.nodes, (_, value) =>
            typeof value === 'bigint' ? value.toString() + 'n' : value
        ));
    }

    /**
     * 定义/更新变量
     */
    setVar(name: string, value: number | bigint, label: string = '定义变量'): this {
        this.context[name] = value;
        this.nodes.push({ type: 'set', op: 'set', varName: name, value, label });
        return this;
    }

    /**
     * 基础运算添加节点
     */
    private addNode(op: CalcOperator, valueOrVar: number | bigint | string, label: string, description?: string): this {
        if (typeof valueOrVar === 'string') {
            this.nodes.push({ type: 'var', op, varName: valueOrVar, label, description });
        } else {
            this.nodes.push({ type: 'op', op, value: valueOrVar as number | bigint, label, description });
        }
        return this;
    }

    add(v: number | bigint | string, l: string, d?: string) { return this.addNode('+', v, l, d); }
    sub(v: number | bigint | string, l: string, d?: string) { return this.addNode('-', v, l, d); }
    mul(v: number | bigint | string, l: string, d?: string) { return this.addNode('*', v, l, d); }
    div(v: number | bigint | string, l: string, d?: string) { return this.addNode('/', v, l, d); }
    max(v: number | bigint | string, l: string, d?: string) { return this.addNode('max', v, l, d); }
    min(v: number | bigint | string, l: string, d?: string) { return this.addNode('min', v, l, d); }

    /**
     * 条件逻辑分支
     * @param label 分支描述
     * @param condition 判定条件
     * @param thenFn 成立时的逻辑回调
     * @param elseFn 不成立时的逻辑回调
     */
    if(label: string, condition: boolean, thenFn: (c: Calculator) => void, elseFn?: (c: Calculator) => void): this {
        const thenCalc = new Calculator(0, 'internal', this.context);
        thenFn(thenCalc);
        
        let elseNodes: CalcNode[] | undefined;
        if (elseFn) {
            const elseCalc = new Calculator(0, 'internal', this.context);
            elseFn(elseCalc);
            elseNodes = elseCalc.nodes.slice(1); // 移除 internal base
        }

        this.nodes.push({
            type: 'branch',
            op: 'if',
            label,
            condition,
            thenBranch: thenCalc.nodes.slice(1),
            elseBranch: elseNodes
        });
        return this;
    }

    /**
     * 执行计算并返回结果。
     * 调用此方法后，内部节点会缓存执行时的具体数值，用于 explain() 输出。
     */
    getResult(): number | bigint {
        let result: any = this.resolveNodeValue(this.nodes[0]);
        this.nodes[0].executedValue = result;

        for (let i = 1; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            if (node.type === 'branch' && node.op === 'if') {
                node.wasTaken = node.condition;
                const activeBranch = node.condition ? node.thenBranch : node.elseBranch;
                if (activeBranch) {
                    result = this.runBranch(result, activeBranch);
                }
            } else if (node.type === 'set') {
                if (node.varName) this.context[node.varName] = node.value!;
            } else {
                const val = this.resolveNodeValue(node);
                node.executedValue = val;
                result = this.applyOp(result, node.op, val);
            }
        }
        return result;
    }

    /**
     * 解析节点数值（处理变量引用）
     */
    private resolveNodeValue(node: CalcNode): number | bigint {
        if (node.type === 'var' && node.varName) {
            return this.context[node.varName] ?? node.value ?? 0;
        }
        return node.value ?? 0;
    }

    /**
     * 运行分支逻辑
     */
    private runBranch(current: number | bigint, branch: CalcNode[]): number | bigint {
        let res = current;
        for (const node of branch) {
            if (node.type === 'branch' && node.op === 'if') {
                 node.wasTaken = node.condition;
                 const activeBranch = node.condition ? node.thenBranch : node.elseBranch;
                 if (activeBranch) res = this.runBranch(res, activeBranch);
            } else if (node.type === 'set') {
                 if (node.varName) this.context[node.varName] = node.value!;
            } else {
                const val = this.resolveNodeValue(node);
                node.executedValue = val;
                res = this.applyOp(res, node.op, val);
            }
        }
        return res;
    }

    /**
     * 执行具体数学运算（支持 BigInt/Number 混合）
     */
    private applyOp(a: any, op: CalcOperator, b: any): number | bigint {
        const isBig = typeof a === 'bigint' || typeof b === 'bigint';
        if (isBig) {
            const av = BigInt(a), bv = BigInt(b);
            switch (op) {
                case '+': return av + bv;
                case '-': return av - bv;
                case '*': return av * bv;
                case '/': return bv !== 0n ? av / bv : 0n;
                case 'max': return av > bv ? av : bv;
                case 'min': return av < bv ? av : bv;
            }
        } else {
            const av = Number(a), bv = Number(b);
            switch (op) {
                case '+': return av + bv;
                case '-': return av - bv;
                case '*': return av * bv;
                case '/': return bv !== 0 ? av / bv : 0;
                case 'max': return Math.max(av, bv);
                case 'min': return Math.min(av, bv);
            }
        }
        return a;
    }

    /**
     * 生成计算过程的逻辑解释 (兼容方法，默认调用 explainResult)
     */
    explain(): string {
        return this.explainResult();
    }

    /**
     * 生成计算结果解释
     * 要求：必须先执行 getResult() 填充数值。
     * 特点：展示实际运行时的数值、展示被选中的逻辑分支、展示变量的具体赋值。
     */
    explainResult(): string {
        const lines: string[] = [];
        this.buildExplain(this.nodes, lines, 0, true);
        return lines.join('\n');
    }

    /**
     * 生成公式结构解释
     * 要求：无需执行 getResult()。
     * 特点：展示公式的完整逻辑树（包括 if 和 else 所有分支）、展示变量引用关系、不展示具体数值。
     */
    explainFormula(): string {
        const lines: string[] = [];
        this.buildExplain(this.nodes, lines, 0, false);
        return lines.join('\n');
    }

    private buildExplain(nodes: CalcNode[], lines: string[], indent: number, isResultMode: boolean) {
        const prefix = '  '.repeat(indent);
        nodes.forEach(node => {
            // 内部占位符不显示
            if (node.op === 'base' && node.label === 'internal') return;

            const opStr = (node.op === 'base' || node.op === 'set') ? '' : `${this.getOpDisplay(node.op)} `;
            
            if (node.type === 'branch') {
                if (isResultMode) {
                    // 结果模式：仅显示已执行的分支
                    lines.push(`${prefix}判断: ${node.label} -> ${node.condition ? '成立' : '不成立'}`);
                    if (node.condition && node.thenBranch) {
                        this.buildExplain(node.thenBranch, lines, indent + 1, isResultMode);
                    } else if (!node.condition && node.elseBranch) {
                        this.buildExplain(node.elseBranch, lines, indent + 1, isResultMode);
                    }
                } else {
                    // 公式模式：展示完整的条件逻辑结构
                    lines.push(`${prefix}如果 ${node.label}:`);
                    if (node.thenBranch && node.thenBranch.length > 0) {
                        this.buildExplain(node.thenBranch, lines, indent + 1, isResultMode);
                    }
                    if (node.elseBranch && node.elseBranch.length > 0) {
                        lines.push(`${prefix}否则:`);
                        this.buildExplain(node.elseBranch, lines, indent + 1, isResultMode);
                    }
                }
            } else if (node.type === 'set') {
                if (isResultMode) {
                    lines.push(`${prefix}变量设置: ${node.varName} = ${node.value} (${node.label})`);
                } else {
                    lines.push(`${prefix}设置变量 ${node.varName} (${node.label})`);
                }
            } else {
                // 只有在结果模式且节点被执行过时才显示具体数值
                const valStr = (isResultMode && node.executedValue !== undefined) ? `[${node.executedValue}]` : '';
                const descStr = node.description ? ` (${node.description})` : '';
                lines.push(`${prefix}${opStr}${node.label}${valStr}${descStr}`);
            }
        });
    }

    private getOpDisplay(op: CalcOperator): string {
        switch (op) {
            case '+': return '+';
            case '-': return '-';
            case '*': return '×';
            case '/': return '÷';
            case 'max': return 'max';
            case 'min': return 'min';
            default: return '';
        }
    }
}
