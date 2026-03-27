import type { IObjectTemplate } from '../../../interface/IObjectTemplate';

/**
 * 肉体韧性强化系列 ID 映射表
 */
export const PhysicalToughnessUpgrades = {
    TYPE_1: 'physical_toughness_1',
    TYPE_2: 'physical_toughness_2',
    TYPE_3: 'physical_toughness_3',
    TYPE_4: 'physical_toughness_4',
} as const;

/**
 * 肉体韧性强化系列详细数据表
 */
export const PhysicalToughnessData: Record<string, IObjectTemplate> = {
    [PhysicalToughnessUpgrades.TYPE_1]: {
        id: PhysicalToughnessUpgrades.TYPE_1,
        name: '1类肉体韧性强化',
        description: '永久强化身体，每级增加 100 点最大血量',
        categoryPath: ['转生', '肉体强化', '韧性'],
        tags: ['转生', '肉体', '韧性', '永久', '生命'],
        kind: 'item',
        stats: {}
    },
    [PhysicalToughnessUpgrades.TYPE_2]: {
        id: PhysicalToughnessUpgrades.TYPE_2,
        name: '2类肉体韧性强化',
        description: '进一步强化身体，每级增加 250 点最大血量',
        categoryPath: ['转生', '肉体强化', '韧性'],
        tags: ['转生', '肉体', '韧性', '永久', '生命'],
        kind: 'item',
        stats: {}
    },
    [PhysicalToughnessUpgrades.TYPE_3]: {
        id: PhysicalToughnessUpgrades.TYPE_3,
        name: '3类肉体韧性强化',
        description: '深度强化身体，每级增加 500 点最大血量',
        categoryPath: ['转生', '肉体强化', '韧性'],
        tags: ['转生', '肉体', '韧性', '永久', '生命'],
        kind: 'item',
        stats: {}
    },
    [PhysicalToughnessUpgrades.TYPE_4]: {
        id: PhysicalToughnessUpgrades.TYPE_4,
        name: '4类肉体韧性强化',
        description: '终极强化身体，每级增加 1250 点最大血量',
        categoryPath: ['转生', '肉体强化', '韧性'],
        tags: ['转生', '肉体', '韧性', '永久', '生命', '终极'],
        kind: 'item',
        stats: {}
    },
};
