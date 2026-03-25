import type { IData } from './IData';
import type { CalcNode } from '../tool/Calculation';

/**
 * 游戏公式定义接口
 * 用于持久化存储复杂的计算逻辑、判定条件及其元数据。
 */
export interface IFormula extends IData {
    /** 
     * 公式版本（用于逻辑更新后的版本兼容性处理） 
     */
    version?: string;
    
    /** 
     * 计算逻辑节点序列
     * 保存了 Calculator 所有的运算步骤、变量引用和逻辑分支。
     */
    nodes: CalcNode[];

    /**
     * 默认上下文变量 (可选)
     * 定义该公式运行时建议的基础变量值
     */
    defaultContext?: Record<string, number | bigint>;
}
