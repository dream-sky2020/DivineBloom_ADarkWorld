import type { IData } from './IData';

/**
 * 预制体接口
 * 用于存储具体的游戏内容（如敌人、物品、技能等）。
 * 预制体是基础数据（IData）和逻辑枚举（IEnum）的组合。
 * @template TAttrUnion 该预制体允许使用的属性 ID 的联合类型
 */
export interface IObject<TAttrUnion extends string = string> extends IData {
    /** 
     * 初始属性集 (Key 为属性 ID)
     * 只能使用 TAttrUnion 中定义的属性 ID
     */
    stats?: Partial<Record<TAttrUnion, number | bigint | string | string[]>>;

    /** 预制体版本 (可选) */
    version?: string;
    /** 其他可供搜索的数据 (如：稀有度、来源) */
    metadata?: Record<string, any>;

    /** 允许任意其他属性 */
    [key: string]: any;
}
