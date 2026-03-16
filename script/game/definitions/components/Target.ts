import { ECSWorld } from '../../core/ECSCore';

/**
 * 目标选择模式 (TargetMode)
 */
export enum TargetMode {
    SELF = 0,            // 目标是行为的发起者自己 (需通过 Action.ownerEid 计算)
    BY_COMPONENT = 1,    // 目标是具备特定组件的实体 (通过 filterMask 筛选，如 Enemy, Ally, Player)
}

/**
 * 优先级策略 (TargetPriority)
 * 在符合条件的多个目标中，决定选择哪个
 */
export enum TargetPriority {
    NONE = 0,            // 无优先级 (按筛选顺序)
    LOWEST_HEALTH = 1,   // 血量百分比最低优先
    HIGHEST_HEALTH = 2,  // 血量百分比最高优先
    RANDOM = 3,          // 随机选择
    NEAREST = 4,         // 距离最近优先
}

/**
 * Target 组件 - 行为目标选择组件
 * 定义一个行为应该作用于谁。支持简单的组件过滤，也支持基于策略的动态筛选。
 */
export const Target = {
    // 目标选择模式 (TargetMode)
    mode: new Uint8Array(ECSWorld.MAX_ENTITIES),
    
    // 组件过滤掩码 (仅在 mode 为 BY_COMPONENT 时有效)
    // 存储目标必须具备的 ComponentBit (如 ComponentBit.Enemy | ComponentBit.Health)
    filterMask: new Uint32Array(ECSWorld.MAX_ENTITIES),
    
    // 优先级策略 (TargetPriority)
    priority: new Uint8Array(ECSWorld.MAX_ENTITIES),
    
    // 最大目标数量 (0 表示不限制/全体，1 表示单体，>1 表示多体)
    maxTargets: new Uint32Array(ECSWorld.MAX_ENTITIES),

    // 运行时计算出的实际目标 ID 列表
    // 由 TargetingSystem 填充，其他效果系统读取使用
    resolvedTargets: Array.from({ length: ECSWorld.MAX_ENTITIES }, () => [] as number[]),

    /**
     * 设置目标选择配置
     * @param eid 实体 ID
     * @param mode 模式
     * @param filterMask 过滤位 (ComponentBit)
     * @param priority 优先级策略
     * @param maxTargets 最大目标数
     */
    set(eid: number, mode: TargetMode, filterMask: number = 0, priority: TargetPriority = TargetPriority.NONE, maxTargets: number = 1) {
        this.mode[eid] = mode;
        this.filterMask[eid] = filterMask;
        this.priority[eid] = priority;
        this.maxTargets[eid] = maxTargets;
        this.resolvedTargets[eid].length = 0; // 重置列表
    }
};
