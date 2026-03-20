import type { Attribute } from '../../interface';

/**
 * 暴击相关属性 ID 映射表
 */
export const CritAttributes = {
    /** 暴击率 */
    CRIT_RATE: 'crit_rate',
    /** 暴击伤害 */
    CRIT_DAMAGE: 'crit_damage',
    /** 最大暴击率 */
    CRIT_RATE_MAX: 'crit_rate_max',
    /** 溢出暴击率转化为暴击伤害的比例 */
    OVERFLOW_CRIT_RATE_TO_DAMAGE_CONVERSION: 'overflow_crit_rate_to_damage_conversion',
    /** 暴击伤害固定值加成 */
    CRIT_DAMAGE_FIXED: 'crit_damage_fixed',
} as const;

/**
 * 暴击相关属性详细数据表
 */
export const CritAttributeData: Record<string, Attribute> = {
    [CritAttributes.CRIT_RATE]: {
        id: CritAttributes.CRIT_RATE,
        name: '暴击率',
        description: '决定造成暴击的概率',
        defaultValue: 0.05,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
        isDefaultLoaded: true,
    },
    [CritAttributes.CRIT_DAMAGE]: {
        id: CritAttributes.CRIT_DAMAGE,
        name: '暴击伤害',
        description: '暴击时造成的伤害倍数',
        defaultValue: 1.5,
        minValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
        isDefaultLoaded: true,
    },
    [CritAttributes.CRIT_RATE_MAX]: {
        id: CritAttributes.CRIT_RATE_MAX,
        name: '最大暴击率',
        description: '暴击率的上限。',
        defaultValue: 1.0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
        isDefaultLoaded: true,
    },
    [CritAttributes.OVERFLOW_CRIT_RATE_TO_DAMAGE_CONVERSION]: {
        id: CritAttributes.OVERFLOW_CRIT_RATE_TO_DAMAGE_CONVERSION,
        name: '溢出暴击率转化暴击伤害比例',
        description: '当暴击率超过最大暴击率时，溢出部分按比例转化为额外的暴击伤害。',
        defaultValue: 1.0,
        minValue: 0,
        category: 'combat',
    },
    [CritAttributes.CRIT_DAMAGE_FIXED]: {
        id: CritAttributes.CRIT_DAMAGE_FIXED,
        name: '暴击伤害固定加成',
        description: '暴击时造成的固定额外伤害数值。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
};
