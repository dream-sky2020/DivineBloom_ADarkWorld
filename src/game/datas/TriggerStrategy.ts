import type { ActionTriggerMode } from '../maps/ActionTriggerModeMap';

/**
 * 触发策略配置
 */
export interface TriggerStrategy {
    /**
     * 触发模式（仅手动 / 仅自动 / 自动与手动可切换）
     */
    mode: ActionTriggerMode;

    // ================= 手动触发配置 =================
    /**
     * 是否允许手动触发
     */
    allowManual: boolean;
    /** * 手动触发的阈值计数（默认 1）
     * 只有当前计数达到这个层数，玩家点击才有效
     */
    manualThreshold?: number;

    // ================= 自动触发配置 =================
    /**
     * 是否允许系统自动触发
     */
    allowAuto: boolean;
    /** * 自动触发的阈值计数（默认 1）
     * 只有当前计数达到这个层数，自动逻辑才会执行
     */
    autoCooldownAccumulateChargesThreshold?: number;
    /**
     * 是否允许玩家在 UI 上手动控制“自动开关”
     * 如果为 true，则玩家可以决定 allowAuto 是否生效
     */
    allowAutoToggle?: boolean;
}
