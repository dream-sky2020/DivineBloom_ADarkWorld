import type { EnemyDefinition } from './types';

export * from './types';

/**
 * 敌人 ID 映射表 (基础 ID)
 */
export const EnemyTypeMap = {
    // 示例:
    // SLIME: 'slime',
} as const;

/**
 * 敌人 ID 类型
 */
export type EnemyID = typeof EnemyTypeMap[keyof typeof EnemyTypeMap];

/**
 * 敌人详细数据表
 */
export const EnemyDataMap: Record<string, EnemyDefinition> = {
    // 示例:
    /*
    [EnemyTypeMap.SLIME]: {
        id: EnemyTypeMap.SLIME,
        name: '史莱姆',
        description: '一种粘糊糊的弱小生物',
        stats: {
            hp: 20,
            maxHp: 20,
            attack: 5,
            defense: 2,
            speed: 10,
        },
        rewards: {
            exp: 10,
            drops: [
                {
                    itemId: 'slime_gel',
                    probability: 0.5,
                    amount: { min: 1, max: 2 },
                }
            ],
        },
    },
    */
} as Record<string, EnemyDefinition>;
