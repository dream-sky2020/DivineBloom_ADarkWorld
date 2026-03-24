import type { IPrefab } from './IPrefab';
import type { EnemyAttributeID } from '../maps/AttributeMap';

/**
 * 敌人掉落配置
 */
export interface EnemyDrop {
    /**
     * 物品 ID
     */
    itemId: string;
    /**
     * 掉落概率 (0-1)
     */
    probability: number;
    /**
     * 数量范围
     */
    amount: {
        min: number;
        max: number;
    };
}

/**
 * 敌人奖励配置
 */
export interface EnemyRewards {
    /** 经验值奖励 */
    exp?: bigint | number;
    /** 金钱奖励 (如果有货币系统) */
    money?: bigint | number;
    /** 掉落物品列表 */
    drops?: EnemyDrop[];
}

/**
 * 敌人预制体接口
 * 定义敌人的基础属性、奖励、等级等静态数据
 */
export interface IEnemyPrefab extends IPrefab<EnemyAttributeID> {
    /** 
     * 击败奖励 (合并自原 IEnemy 接口)
     */
    rewards?: EnemyRewards;

    /** 关卡难度系数 (可选) */
    level?: number;
    
    /** 
     * 掉落表 ID (可选)
     * 也可以通过 rewards.drops 直接配置，
     * 若两者都存在，通常优先考虑掉落表或叠加计算。
     */
    lootTableId?: string;
}
