/**
 * 行为触发模式映射表
 */
export const ActionTriggerModeMap = {
    MANUAL_ONLY: 'manual_only',
    AUTO_ONLY: 'auto_only',
    AUTO_OR_MANUAL: 'auto_or_manual'
} as const;

/**
 * 行为触发模式类型
 */
export type ActionTriggerMode =
    typeof ActionTriggerModeMap[keyof typeof ActionTriggerModeMap];
