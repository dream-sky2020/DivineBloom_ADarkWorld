import type { IAttribute } from './IAttribute';

/**
 * 预制体接口
 * 用于存储具体的游戏内容（如敌人、物品、技能等）。
 * 预制体是原子属性（IAttribute）和逻辑枚举（IEnum）的组合。
 */
export interface IPrefab extends IAttribute {
    /** 预制体版本 (可选) */
    version?: string;
    /** 其他可供搜索的数据 (如：稀有度、来源) */
    metadata?: Record<string, any>;
}
