import type { IAttribute } from '../../interface';

/**
 * 行为触发控制相关属性 ID 映射表
 */
export const ActionTriggerAttributes = {
    /** 是否允许手动触发 (0: 否, 1: 是) */
    ALLOW_MANUAL_TRIGGER: 'allow_manual_trigger',
    /** 手动触发的阈值计数 (只有当前计数达到这个层数，玩家点击才有效) */
    MANUAL_TRIGGER_THRESHOLD: 'manual_trigger_threshold',
    /** 是否允许玩家在 UI 上控制“手动阈值计数” (0: 否, 1: 是) */
    ALLOW_UI_CONTROL_MANUAL_THRESHOLD: 'allow_ui_control_manual_threshold',
    /** 是否允许玩家在 UI 上控制“手动阈值计数开关” (0: 否, 1: 是) */
    ALLOW_UI_CONTROL_MANUAL_THRESHOLD_TOGGLE: 'allow_ui_control_manual_threshold_toggle',
    
    /** 是否允许系统自动触发 (0: 否, 1: 是) */
    ALLOW_AUTO_TRIGGER: 'allow_auto_trigger',
    /** 自动触发的阈值计数 (只有当前计数达到这个层数，自动逻辑才会执行) */
    AUTO_TRIGGER_THRESHOLD: 'auto_trigger_threshold',
    /** 是否允许玩家在 UI 上控制“自动阈值计数” (0: 否, 1: 是) */
    ALLOW_UI_CONTROL_AUTO_THRESHOLD: 'allow_ui_control_auto_threshold',
    /** 是否允许玩家在 UI 上控制“自动阈值计数开关” (0: 否, 1: 是) */
    ALLOW_UI_CONTROL_AUTO_THRESHOLD_TOGGLE: 'allow_ui_control_auto_threshold_toggle',
} as const;

/**
 * 行为触发控制相关属性详细数据表
 */
export const ActionTriggerAttributeData: Record<string, IAttribute> = {
    [ActionTriggerAttributes.ALLOW_MANUAL_TRIGGER]: {
        id: ActionTriggerAttributes.ALLOW_MANUAL_TRIGGER,
        name: '允许手动触发',
        description: '是否允许玩家通过点击来触发此行为。',
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        category: 'combat',
        categoryPath: ['属性', '战斗', '触发'],
        tags: ['战斗', '触发', '手动'],
    },
    [ActionTriggerAttributes.MANUAL_TRIGGER_THRESHOLD]: {
        id: ActionTriggerAttributes.MANUAL_TRIGGER_THRESHOLD,
        name: '手动触发阈值',
        description: '手动触发需要的最小充能层数。只有当前计数达到这个层数，玩家点击才有效。',
        defaultValue: 1n,
        minValue: 1n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '触发'],
        tags: ['战斗', '触发', '手动', '阈值'],
    },
    [ActionTriggerAttributes.ALLOW_UI_CONTROL_MANUAL_THRESHOLD]: {
        id: ActionTriggerAttributes.ALLOW_UI_CONTROL_MANUAL_THRESHOLD,
        name: 'UI 控制手动阈值',
        description: '是否允许玩家在 UI 上手动调整“手动触发阈值”。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        category: 'combat',
        categoryPath: ['属性', '战斗', '触发'],
        tags: ['战斗', '触发', 'UI'],
    },
    [ActionTriggerAttributes.ALLOW_UI_CONTROL_MANUAL_THRESHOLD_TOGGLE]: {
        id: ActionTriggerAttributes.ALLOW_UI_CONTROL_MANUAL_THRESHOLD_TOGGLE,
        name: 'UI 控制手动阈值开关',
        description: '是否允许玩家在 UI 上开启或关闭“手动触发阈值”限制。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        category: 'combat',
        categoryPath: ['属性', '战斗', '触发'],
        tags: ['战斗', '触发', 'UI'],
    },
    [ActionTriggerAttributes.ALLOW_AUTO_TRIGGER]: {
        id: ActionTriggerAttributes.ALLOW_AUTO_TRIGGER,
        name: '允许自动触发',
        description: '是否允许系统自动执行此行为。',
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        category: 'combat',
        categoryPath: ['属性', '战斗', '触发'],
        tags: ['战斗', '触发', '自动'],
    },
    [ActionTriggerAttributes.AUTO_TRIGGER_THRESHOLD]: {
        id: ActionTriggerAttributes.AUTO_TRIGGER_THRESHOLD,
        name: '自动触发阈值',
        description: '自动触发需要的最小充能层数。只有当前计数达到这个层数，自动逻辑才会执行。',
        defaultValue: 1n,
        minValue: 1n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '触发'],
        tags: ['战斗', '触发', '自动', '阈值'],
    },
    [ActionTriggerAttributes.ALLOW_UI_CONTROL_AUTO_THRESHOLD]: {
        id: ActionTriggerAttributes.ALLOW_UI_CONTROL_AUTO_THRESHOLD,
        name: 'UI 控制自动阈值',
        description: '是否允许玩家在 UI 上手动调整“自动触发阈值”。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        category: 'combat',
        categoryPath: ['属性', '战斗', '触发'],
        tags: ['战斗', '触发', 'UI'],
    },
    [ActionTriggerAttributes.ALLOW_UI_CONTROL_AUTO_THRESHOLD_TOGGLE]: {
        id: ActionTriggerAttributes.ALLOW_UI_CONTROL_AUTO_THRESHOLD_TOGGLE,
        name: 'UI 控制自动阈值开关',
        description: '是否允许玩家在 UI 上开启或关闭“自动触发阈值”限制。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        category: 'combat',
        categoryPath: ['属性', '战斗', '触发'],
        tags: ['战斗', '触发', 'UI'],
    },
};
