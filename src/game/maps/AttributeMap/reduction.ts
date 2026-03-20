import type { Attribute } from '../../interface';

/**
 * 伤害减免相关属性 ID 映射表
 */
export const ReductionAttributes = {
    /** 每次伤害固定值减免 */
    REDUCTION_FIXED: 'reduction_fixed',
    /** 伤害百分比减免 */
    REDUCTION_PERCENT: 'reduction_percent',
    /** 最大百分比减免 */
    REDUCTION_PERCENT_MAX: 'reduction_percent_max',
    /** 伤害除于值 */
    REDUCTION_DIVISOR: 'reduction_divisor',
    /** 溢出百分比减免转化为伤害除于值的比例 */
    OVERFLOW_REDUCTION_PERCENT_TO_DIVISOR_CONVERSION: 'overflow_reduction_percent_to_divisor_conversion',
} as const;

/**
 * 伤害减免相关属性详细数据表
 */
export const ReductionAttributeData: Record<string, Attribute> = {
    [ReductionAttributes.REDUCTION_FIXED]: {
        id: ReductionAttributes.REDUCTION_FIXED,
        name: '伤害固定值减免',
        description: '每次受到伤害时减去的固定数值。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
    [ReductionAttributes.REDUCTION_PERCENT]: {
        id: ReductionAttributes.REDUCTION_PERCENT,
        name: '伤害百分比减免',
        description: '按比例降低受到的伤害。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [ReductionAttributes.REDUCTION_PERCENT_MAX]: {
        id: ReductionAttributes.REDUCTION_PERCENT_MAX,
        name: '最大百分比减免',
        description: '百分比伤害减免的上限。',
        defaultValue: 0.9,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [ReductionAttributes.REDUCTION_DIVISOR]: {
        id: ReductionAttributes.REDUCTION_DIVISOR,
        name: '伤害除于值',
        description: '最终伤害会除以此数值。',
        defaultValue: 1.0,
        minValue: 1.0,
        category: 'combat',
    },
    [ReductionAttributes.OVERFLOW_REDUCTION_PERCENT_TO_DIVISOR_CONVERSION]: {
        id: ReductionAttributes.OVERFLOW_REDUCTION_PERCENT_TO_DIVISOR_CONVERSION,
        name: '溢出百分比减免转化为伤害除于值比例',
        description: '当百分比减免超过最大百分比减免时，溢出部分按比例转化为伤害除于值。',
        defaultValue: 1.0,
        minValue: 0,
        category: 'combat',
    },
};
