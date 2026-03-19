import type { Enemy } from '../../interface';

export * from '../../interface';

/**
 * 敌人 ID 映射表 (基础 ID)
 */
export const EnemyTypeMap = {
    /** 史莱姆 */
    SLIME: 'slime',
    /** 野狼 */
    WILD_WOLF: 'wild_wolf',
    /** 骷髅兵 */
    SKELETON: 'skeleton',
    /** 哥布林 */
    GOBLIN: 'goblin',
} as const;

/**
 * 敌人 ID 类型
 */
export type EnemyID = typeof EnemyTypeMap[keyof typeof EnemyTypeMap];

/**
 * 敌人详细数据表
 */
export const EnemyDataMap: Record<EnemyID, Enemy> = {
    [EnemyTypeMap.SLIME]: {
        id: EnemyTypeMap.SLIME,
        name: '史莱姆',
        description: '一种粘糊糊的弱小生物',
        stats: {
            hp: 20n,
            maxHp: 20n,
            attack: 5n,
            defense: 2n,
            speed: 10n,
        },
        rewards: {
            exp: 10n,
            drops: [
                {
                    itemId: 'slime_gel',
                    probability: 0.5,
                    amount: { min: 1, max: 2 },
                }
            ],
        },
    },
    [EnemyTypeMap.WILD_WOLF]: {
        id: EnemyTypeMap.WILD_WOLF,
        name: '野狼',
        description: '森林中的掠食者，具有较快的行动速度',
        stats: {
            hp: 50n,
            maxHp: 50n,
            attack: 12n,
            defense: 4n,
            speed: 25n,
        },
        rewards: {
            exp: 30n,
            drops: [
                {
                    itemId: 'wolf_fur',
                    probability: 0.3,
                    amount: { min: 1, max: 1 },
                }
            ],
        },
    },
    [EnemyTypeMap.SKELETON]: {
        id: EnemyTypeMap.SKELETON,
        name: '骷髅兵',
        description: '被诅咒而复活的亡灵，防御力不俗',
        stats: {
            hp: 80n,
            maxHp: 80n,
            attack: 15n,
            defense: 8n,
            speed: 8n,
        },
        rewards: {
            exp: 50n,
            drops: [
                {
                    itemId: 'bone_fragment',
                    probability: 0.6,
                    amount: { min: 1, max: 3 },
                }
            ],
        },
    },
    [EnemyTypeMap.GOBLIN]: {
        id: EnemyTypeMap.GOBLIN,
        name: '哥布林',
        description: '贪婪而狡诈的小型生物',
        stats: {
            hp: 40n,
            maxHp: 40n,
            attack: 10n,
            defense: 3n,
            speed: 18n,
        },
        rewards: {
            exp: 25n,
            drops: [
                {
                    itemId: 'rusty_dagger',
                    probability: 0.1,
                    amount: { min: 1, max: 1 },
                }
            ],
        },
    },
};
