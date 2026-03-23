import type { IEnum } from '../../interface/IEnum';

/**
 * 行为触发模式 ID 映射表
 */
export const ActionTriggerModes = {
    /** 仅手动触发 */
    MANUAL_ONLY: 'manual_only',
    /** 仅自动触发 */
    AUTO_ONLY: 'auto_only',
    /** 自动或手动触发均可 */
    AUTO_OR_MANUAL: 'auto_or_manual'
} as const;

/**
 * 行为触发模式 ID 类型
 */
export type ActionTriggerModeID = typeof ActionTriggerModes[keyof typeof ActionTriggerModes];

/**
 * 行为触发模式详细数据表
 */
export const ActionTriggerModeDataMap: Record<ActionTriggerModeID, IEnum> = {
    [ActionTriggerModes.MANUAL_ONLY]: {
        id: ActionTriggerModes.MANUAL_ONLY,
        name: '仅手动',
        description: '该行为只能由玩家点击手动触发。',
        categoryPath: ['枚举', '行为系统', '触发模式'],
    },
    [ActionTriggerModes.AUTO_ONLY]: {
        id: ActionTriggerModes.AUTO_ONLY,
        name: '仅自动',
        description: '该行为只能由系统或 AI 自动触发。',
        categoryPath: ['枚举', '行为系统', '触发模式'],
    },
    [ActionTriggerModes.AUTO_OR_MANUAL]: {
        id: ActionTriggerModes.AUTO_OR_MANUAL,
        name: '自动或手动',
        description: '该行为既可以手动点击，也可以配置为自动执行。',
        categoryPath: ['枚举', '行为系统', '触发模式'],
    },
};

/**
 * 保持向下兼容 (可选)
 */
export const ActionTriggerModeMap = ActionTriggerModes;
export type ActionTriggerMode = ActionTriggerModeID;
