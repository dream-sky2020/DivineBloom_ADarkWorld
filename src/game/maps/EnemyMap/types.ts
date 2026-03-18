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
 */
export interface EnemyDefinition {
    id: string;
    name: string;
    description: string;
    /**
     * 基础属性
     */
    stats: {
        hp: number;
        maxHp: number;
        attack: number;
        defense: number;
        speed?: number;
    };
    /**
     * 击败奖励
     */
    rewards?: {
        exp?: number;
        money?: number;
        drops?: EnemyDrop[];
    };
    /**
     * 敌人标签 (例如: boss, undead, etc.)
     */
    tags?: string[];
}
