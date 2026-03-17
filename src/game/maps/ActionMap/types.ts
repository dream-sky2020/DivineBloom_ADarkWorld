import type { ActionTriggerMode } from '../ActionTriggerModeMap';

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

/**
 * 行为详细定义接口
 */
export interface ActionDefinition {
    id: string;
    name: string;
    description: string;

    triggerStrategy: TriggerStrategy;

    /**
     * 行为冷却时间（秒）
     */
    cooldown?: number;
    /**
     * 冷却完毕后是否自动重置并计数 +1
     * 开启后，冷却进度条跑满会自动消耗冷却时间并增加可用次数（充能逻辑）
     */
    autoCooldownAccumulate?: boolean;

    /**
     * 最大标记计数 / 最大充能层数
     * 默认为 1。如果大于 1，则行为可以连续充能多次
     */
    maxCooldownAccumulateCharges?: number;
    /**
     * 行为消耗（可按项目继续扩展）
     */
    cost?: {
        stamina?: number;
        mana?: number;
        hp?: number;
    };
    /**
     * 行为标签
     */
    tags?: string[];
}
