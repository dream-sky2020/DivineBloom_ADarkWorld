import type { ReincarnationUpgradeDefinition } from './types';

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
export const PhysicalStrengthData: Record<string, ReincarnationUpgradeDefinition> = {
    [PhysicalStrengthUpgrades.TYPE_1]: {
        id: PhysicalStrengthUpgrades.TYPE_1,
        name: '1类肉体力量强度强化',
        description: '永久强化肌肉，每级增加 5 点力量',
        maxLevel: 20,
        calculateCost: (level) => level * 15, // 消耗稍微设高一点，因为力量更关键
        getEffectDescription: (level) => `力量 +${level * 5}`,
    },
    [PhysicalStrengthUpgrades.TYPE_2]: {
        id: PhysicalStrengthUpgrades.TYPE_2,
        name: '2类肉体力量强度强化',
        description: '进一步强化肌肉，每级增加 10 点力量',
        maxLevel: 20,
        calculateCost: (level) => level * 30,
        getEffectDescription: (level) => `力量 +${level * 10}`,
    },
    [PhysicalStrengthUpgrades.TYPE_3]: {
        id: PhysicalStrengthUpgrades.TYPE_3,
        name: '3类肉体力量强度强化',
        description: '深度强化肌肉，每级增加 25 点力量',
        maxLevel: 20,
        calculateCost: (level) => level * 60,
        getEffectDescription: (level) => `力量 +${level * 25}`,
    },
    [PhysicalStrengthUpgrades.TYPE_4]: {
        id: PhysicalStrengthUpgrades.TYPE_4,
        name: '4类肉体力量强度强化',
        description: '终极强化肌肉，每级增加 50 点力量',
        maxLevel: 100,
        calculateCost: (level) => level * 150,
        getEffectDescription: (level) => `力量 +${level * 50}`,
    },
};
