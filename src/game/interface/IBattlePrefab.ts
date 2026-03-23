import type { IPrefab } from './IPrefab';

/**
 * 战斗预制体接口
 * 用于定义一场战斗的详细配置，作为“编译”成战斗实体的原始数据。
 */
export interface IBattlePrefab extends IPrefab {
    /** 战斗场景背景图 ID 或路径 */
    backgroundId?: string;
    /** 战斗难度系数 */
    difficulty?: number;
    /** 该场战斗特有的掉落奖励 ID 列表 */
    extraDrops?: string[];
}
