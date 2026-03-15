/**
 * 敌人类型映射表 (基础 ID)
 */
export const EnemyTypeMap = {
    CRAZY_WORKER: "crazy_worker",
    CRAZY_SOLDIER: "crazy_soldier",
    GAS_TANK: "gas_tank",
    HELL_SENTRY: "hell_sentry",
} as const;

/**
 * 敌人 ID 类型
 */
export type EnemyType = typeof EnemyTypeMap[keyof typeof EnemyTypeMap];

/**
 * 敌人详细定义接口
 */
export interface EnemyDefinition {
    id: EnemyType;
    name: string;
    description: string;
    
    /**
     * 基础生命值 (BigInt)
     */
    baseHealth: bigint;
}

/**
 * 敌人详细数据表
 */
export const EnemyDataMap: Record<EnemyType, EnemyDefinition> = {
    [EnemyTypeMap.CRAZY_WORKER]: {
        id: "crazy_worker",
        name: "疯狂的工人",
        description: "曾经辛勤工作的蓝领，现在只剩下对活物的盲目仇恨。",
        baseHealth: 50n
    },
    [EnemyTypeMap.CRAZY_SOLDIER]: {
        id: "crazy_soldier",
        name: "疯狂的士兵",
        description: "由于某种精神污染，这些训练有素的士兵变成了战场上的梦魇。",
        baseHealth: 150n
    },
    [EnemyTypeMap.GAS_TANK]: {
        id: "gas_tank",
        name: "毒气罐",
        description: "一个移动的生化武器，缓慢而致命。",
        baseHealth: 80n
    },
    [EnemyTypeMap.HELL_SENTRY]: {
        id: "hell_sentry",
        name: "地狱哨兵",
        description: "来自深渊的守卫者，身披黑色重甲，双眼闪烁着地狱之火。",
        baseHealth: 1000n
    }
};
