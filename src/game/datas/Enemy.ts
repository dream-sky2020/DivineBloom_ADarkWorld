import type { IAttribute } from '../interface/IAttribute';

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
 * 敌人详细定义接口
 * 继承自 IAttribute，包含 id, name, description 等基础信息
 */
export interface Enemy extends IAttribute {
    /**
     * 基础属性 (增量游戏中使用 bigint | number 支持超大数值)
     */
    stats: {
        /** 当前生命值 */
        hp: bigint | number;
        /** 最大生命值 */
        maxHp: bigint | number;
        /** 攻击力 */
        attack: bigint | number;
        /** 防御力 */
        defense: bigint | number;
        /** 行动速度/先攻值 */
        speed?: bigint | number;
    };
    /**
     * 击败奖励
     */
    rewards?: {
        /** 经验值奖励 */
        exp?: bigint | number;
        /** 金钱奖励 (如果有货币系统) */
        money?: bigint | number;
        /** 掉落物品列表 */
        drops?: EnemyDrop[];
    };
}
