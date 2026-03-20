import type { Attribute } from '../../interface';

/**
 * 复活相关属性 ID 映射表
 */
export const ResurrectionAttributes = {
    /** 死亡后复活次数 (保底复活次数) */
    RESURRECTION_COUNT: 'resurrection_count',
    /** 死亡后无复活次数复活概率 (概率复活) */
    RESURRECTION_CHANCE_WITHOUT_REMAINING: 'resurrection_chance_without_remaining',
    /** 最大死亡后复活概率 (概率复活的上限) */
    MAX_RESURRECTION_CHANCE: 'max_resurrection_chance',
    /** 死亡后复活概率减少惩罚 (每次概率复活后降低的概率) */
    RESURRECTION_CHANCE_REDUCTION_PENALTY: 'resurrection_chance_reduction_penalty',
    /** 复活后血量回复百分比 */
    RESURRECTION_HP_RECOVERY_PERCENT: 'resurrection_hp_recovery_percent',
    /** 复活时是否清除异常状态 (0为否, 1为是) */
    RESURRECTION_CLEAR_STATUS_EFFECTS: 'resurrection_clear_status_effects',
    /** 溢出的复活概率转化保底复活次数的比例 */
    OVERFLOW_RESURRECTION_CHANCE_TO_COUNT_CONVERSION: 'overflow_resurrection_chance_to_count_conversion',
    /** 已经复活的次数 */
    TOTAL_RESURRECTED_COUNT: 'total_resurrected_count',
    /** 概率复活后累计的复活概率惩罚 */
    CURRENT_RESURRECTION_CHANCE_PENALTY: 'current_resurrection_chance_penalty',
    /** 溢出的复活概率转化的额外保底复活次数 */
    OVERFLOW_RESURRECTION_COUNT_BONUS: 'overflow_resurrection_count_bonus',
    /** 剩余保底复活次数 */
    REMAINING_RESURRECTION_COUNT: 'remaining_resurrection_count',
    /** 最终死亡后概率复活的概率 */
    FINAL_RESURRECTION_CHANCE: 'final_resurrection_chance',
} as const;

/**
 * 复活相关属性详细数据表
 */
export const ResurrectionAttributeData: Record<string, Attribute> = {
    [ResurrectionAttributes.RESURRECTION_COUNT]: {
        id: ResurrectionAttributes.RESURRECTION_COUNT,
        name: '死亡后复活次数',
        description: '死亡后可以无条件直接复活的次数（保底）。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
    [ResurrectionAttributes.RESURRECTION_CHANCE_WITHOUT_REMAINING]: {
        id: ResurrectionAttributes.RESURRECTION_CHANCE_WITHOUT_REMAINING,
        name: '死亡后无复活次数复活概率',
        description: '当保底复活次数耗尽后，死亡时尝试概率复活的几率。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [ResurrectionAttributes.MAX_RESURRECTION_CHANCE]: {
        id: ResurrectionAttributes.MAX_RESURRECTION_CHANCE,
        name: '最大死亡后复活概率',
        description: '概率复活的几率能够达到的最高上限。',
        defaultValue: 0.5,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [ResurrectionAttributes.RESURRECTION_CHANCE_REDUCTION_PENALTY]: {
        id: ResurrectionAttributes.RESURRECTION_CHANCE_REDUCTION_PENALTY,
        name: '死亡后复活概率减少惩罚',
        description: '每次通过概率复活成功后，下一次触发概率复活时会扣除的概率数值（衰减机制）。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [ResurrectionAttributes.RESURRECTION_HP_RECOVERY_PERCENT]: {
        id: ResurrectionAttributes.RESURRECTION_HP_RECOVERY_PERCENT,
        name: '复活后血量回复百分比',
        description: '成功复活后，瞬间恢复的生命值占最大生命值的比例。',
        defaultValue: 0.5,
        minValue: 0.01,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [ResurrectionAttributes.RESURRECTION_CLEAR_STATUS_EFFECTS]: {
        id: ResurrectionAttributes.RESURRECTION_CLEAR_STATUS_EFFECTS,
        name: '复活时是否清除异常状态',
        description: '成功复活后，是否移除身上所有的负面效果及异常状态（0表示不清除，1表示清除）。',
        defaultValue: 0n,
        minValue: 0n,
        maxValue: 1n,
        category: 'combat',
    },
    [ResurrectionAttributes.OVERFLOW_RESURRECTION_CHANCE_TO_COUNT_CONVERSION]: {
        id: ResurrectionAttributes.OVERFLOW_RESURRECTION_CHANCE_TO_COUNT_CONVERSION,
        name: '溢出的复活概率转化保底复活次数的比例',
        description: '当复活概率超过最大上限时，每 100% 溢出概率转化的额外保底复活次数。',
        defaultValue: 1n,
        minValue: 0n,
        category: 'combat',
    },
    [ResurrectionAttributes.TOTAL_RESURRECTED_COUNT]: {
        id: ResurrectionAttributes.TOTAL_RESURRECTED_COUNT,
        name: '已经复活的次数',
        description: '在当前探索或生命周期中，角色已经通过保底或概率成功复活的总次数。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
    [ResurrectionAttributes.CURRENT_RESURRECTION_CHANCE_PENALTY]: {
        id: ResurrectionAttributes.CURRENT_RESURRECTION_CHANCE_PENALTY,
        name: '概率复活后累计的复活概率惩罚',
        description: '当前已经累计扣除的复活概率总值（由于多次成功概率复活引起）。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [ResurrectionAttributes.OVERFLOW_RESURRECTION_COUNT_BONUS]: {
        id: ResurrectionAttributes.OVERFLOW_RESURRECTION_COUNT_BONUS,
        name: '溢出的复活概率转化的额外保底复活次数',
        description: '由溢出的复活概率转化而来的、额外的保底复活次数。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
    [ResurrectionAttributes.REMAINING_RESURRECTION_COUNT]: {
        id: ResurrectionAttributes.REMAINING_RESURRECTION_COUNT,
        name: '剩余保底复活次数',
        description: '当前剩余的、可以直接触发的保底复活次数。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
    [ResurrectionAttributes.FINAL_RESURRECTION_CHANCE]: {
        id: ResurrectionAttributes.FINAL_RESURRECTION_CHANCE,
        name: '最终死亡后概率复活的概率',
        description: '经过上限修正及惩罚扣除后，最终生效的死亡复活几率。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
};
