import type { IData } from './IData';
import type { IObject } from './IObject';
import type { ICommand } from './ICommand';

/**
 * 世界数据接口
 * 用于存储大量的游戏对象数据，作为一个完整游戏世界的顶层容器。
 * @template TAttrUnion 该世界允许使用的全局属性 ID 的联合类型
 */
export interface IWorld<TAttrUnion extends string = string> extends IData {
    /** 
     * 全局属性集 (Key 为属性 ID)
     * 用于存储世界范围内的数值，如：游戏天数、世界难度因子、全局掉落倍率等。
     */
    stats?: Partial<Record<TAttrUnion, number | bigint | string | string[]>>;

    /** 世界包含的所有对象映射表 (ID -> IObject) */
    objects: Record<string, IObject>;

    /** 
     * 命令队列 (外部交互接口)
     * 外部 UI 将指令推入该队列，引擎在每一帧逻辑开始前批量处理。
     */
    commands: ICommand[];

    /** 世界的版本信息 (可选) */
    version?: string;

    /** 允许任意其他扩展属性 */
    [key: string]: any;
}
