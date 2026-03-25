import type { IAttribute } from '../../interface';

/**
 * 行为冷却相关属性 ID 映射表
 */
export const ActionCooldownAttributes = {
    /** 现行为冷却时间（秒） */
    CURRENT_COOLDOWN: 'current_cooldown',
    /** 初始行为冷却时间（秒） */
    INITIAL_COOLDOWN: 'initial_cooldown',
    /** 重置后行为冷却时间（秒） */
    RESET_COOLDOWN: 'reset_cooldown',
    /** 最小重置后行为冷却时间（秒） */
    MIN_RESET_COOLDOWN: 'min_reset_cooldown',
    /** 冷却完毕后是否自动重置并计数充能 (0: 否, 1: 是) */
    AUTO_COOLDOWN_ACCUMULATE: 'auto_cooldown_accumulate',
    /** 最大计数充能层数 */
    MAX_COOLDOWN_ACCUMULATE_CHARGES: 'max_cooldown_accumulate_charges',
} as const;

/**
 * 行为冷却相关属性详细数据表
 */
export const ActionCooldownAttributeData: Record<string, IAttribute> = {
    [ActionCooldownAttributes.CURRENT_COOLDOWN]: {
        id: ActionCooldownAttributes.CURRENT_COOLDOWN,
        kind: 'current',
        name: '现行为冷却时间',
        description: '当前行为剩余的冷却时间（秒）。',
        defaultValue: 0,
        minValue: 0,
        unit: 's',
        category: 'combat',
        categoryPath: ['属性', '战斗', '冷却'],
        tags: ['战斗', '冷却', '实时'],
    },
    [ActionCooldownAttributes.INITIAL_COOLDOWN]: {
        id: ActionCooldownAttributes.INITIAL_COOLDOWN,
        kind: 'raw',
        name: '初始行为冷却时间',
        description: '行为开始时的初始冷却时间（秒）。',
        defaultValue: 1.0,
        minValue: 0,
        unit: 's',
        category: 'combat',
        categoryPath: ['属性', '战斗', '冷却'],
        tags: ['战斗', '冷却', '基础'],
    },
    [ActionCooldownAttributes.RESET_COOLDOWN]: {
        id: ActionCooldownAttributes.RESET_COOLDOWN,
        kind: 'total',
        name: '重置后行为冷却时间',
        description: '行为触发后重置的冷却时间（秒）。',
        defaultValue: 1.0,
        minValue: 0,
        unit: 's',
        category: 'combat',
        categoryPath: ['属性', '战斗', '冷却'],
        tags: ['战斗', '冷却', '重置'],
    },
    [ActionCooldownAttributes.MIN_RESET_COOLDOWN]: {
        id: ActionCooldownAttributes.MIN_RESET_COOLDOWN,
        kind: 'total',
        name: '最小重置后行为冷却时间',
        description: '行为触发后重置冷却时间的最低下限。',
        defaultValue: 0.1,
        minValue: 0,
        unit: 's',
        category: 'combat',
        categoryPath: ['属性', '战斗', '冷却'],
        tags: ['战斗', '冷却', '上限'],
    },
    [ActionCooldownAttributes.AUTO_COOLDOWN_ACCUMULATE]: {
        id: ActionCooldownAttributes.AUTO_COOLDOWN_ACCUMULATE,
        kind: 'raw',
        name: '自动充能',
        description: '冷却完毕后是否自动重置并计数充能。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        category: 'combat',
        categoryPath: ['属性', '战斗', '冷却'],
        tags: ['战斗', '冷却', '机制'],
    },
    [ActionCooldownAttributes.MAX_COOLDOWN_ACCUMULATE_CHARGES]: {
        id: ActionCooldownAttributes.MAX_COOLDOWN_ACCUMULATE_CHARGES,
        kind: 'total',
        name: '最大充能层数',
        description: '行为可以连续充能的最大次数上限。',
        defaultValue: 1n,
        minValue: 1n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '冷却'],
        tags: ['战斗', '冷却', '充能'],
    },
};
