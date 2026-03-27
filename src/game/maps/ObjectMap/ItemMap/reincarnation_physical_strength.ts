import type { IObjectTemplate } from '../../../interface/IObjectTemplate';

/**
 * 肉体力量强度强化系列 ID 映射表
 */
export const PhysicalStrengthUpgrades = {
    TYPE_1: 'physical_strength_1',
    TYPE_2: 'physical_strength_2',
    TYPE_3: 'physical_strength_3',
    TYPE_4: 'physical_strength_4',
} as const;

/**
 * 肉体力量强度强化系列详细数据表
 */
export const PhysicalStrengthData: Record<string, IObjectTemplate> = {
    [PhysicalStrengthUpgrades.TYPE_1]: {
        id: PhysicalStrengthUpgrades.TYPE_1,
        name: '1类肉体力量强度强化',
        description: '永久强化肌肉，每级增加 5 点力量',
        categoryPath: ['转生', '肉体强化', '力量'],
        tags: ['转生', '肉体', '力量', '永久'],
        kind: 'item',
        stats: {}
    },
    [PhysicalStrengthUpgrades.TYPE_2]: {
        id: PhysicalStrengthUpgrades.TYPE_2,
        name: '2类肉体力量强度强化',
        description: '进一步强化肌肉，每级增加 10 点力量',
        categoryPath: ['转生', '肉体强化', '力量'],
        tags: ['转生', '肉体', '力量', '永久'],
        kind: 'item',
        stats: {}
    },
    [PhysicalStrengthUpgrades.TYPE_3]: {
        id: PhysicalStrengthUpgrades.TYPE_3,
        name: '3类肉体力量强度强化',
        description: '深度强化肌肉，每级增加 25 点力量',
        categoryPath: ['转生', '肉体强化', '力量'],
        tags: ['转生', '肉体', '力量', '永久'],
        kind: 'item',
        stats: {}
    },
    [PhysicalStrengthUpgrades.TYPE_4]: {
        id: PhysicalStrengthUpgrades.TYPE_4,
        name: '4类肉体力量强度强化',
        description: '终极强化肌肉，每级增加 50 点力量',
        categoryPath: ['转生', '肉体强化', '力量'],
        tags: ['转生', '肉体', '力量', '永久', '终极'],
        kind: 'item',
        stats: {}
    },
};
