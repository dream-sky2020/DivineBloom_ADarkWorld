import type { Attribute } from '../../interface';

/**
 * 伤害反射相关属性 ID 映射表
 */
export const ReflectionAttributes = {
    /** 伤害反射比例 */
    REFLECTION_RATIO: 'reflection_ratio',
    /** 伤害反射概率 */
    REFLECTION_CHANCE: 'reflection_chance',
    /** 伤害反射概率上限 */
    REFLECTION_CHANCE_LIMIT: 'reflection_chance_limit',
    /** 伤害反射基础伤害加成 */
    REFLECTION_BASE_BONUS: 'reflection_base_bonus',
    /** 溢出伤害反射概率转化伤害反射基础伤害加成比例 */
    OVERFLOW_REFLECTION_CHANCE_TO_BASE_BONUS_CONVERSION: 'overflow_reflection_chance_to_base_bonus_conversion',
} as const;

/**
 * 伤害反射相关属性详细数据表
 */
export const ReflectionAttributeData: Record<string, Attribute> = {
    [ReflectionAttributes.REFLECTION_RATIO]: {
        id: ReflectionAttributes.REFLECTION_RATIO,
        name: '伤害反射比例',
        description: '受到伤害时，反射给攻击者的伤害比例。',
        defaultValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [ReflectionAttributes.REFLECTION_CHANCE]: {
        id: ReflectionAttributes.REFLECTION_CHANCE,
        name: '伤害反射概率',
        description: '受到攻击时触发伤害反射的几率。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [ReflectionAttributes.REFLECTION_CHANCE_LIMIT]: {
        id: ReflectionAttributes.REFLECTION_CHANCE_LIMIT,
        name: '伤害反射概率上限',
        description: '伤害反射概率能够达到的最大理论值。',
        defaultValue: 1,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [ReflectionAttributes.REFLECTION_BASE_BONUS]: {
        id: ReflectionAttributes.REFLECTION_BASE_BONUS,
        name: '伤害反射基础伤害加成',
        description: '在基于受击伤害计算出的反射伤害基础上，额外增加的固定数值。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
    [ReflectionAttributes.OVERFLOW_REFLECTION_CHANCE_TO_BASE_BONUS_CONVERSION]: {
        id: ReflectionAttributes.OVERFLOW_REFLECTION_CHANCE_TO_BASE_BONUS_CONVERSION,
        name: '溢出伤害反射概率转化伤害反射基础伤害加成比例',
        description: '当伤害反射概率超过上限时，每 1% 溢出反射概率转化的额外反射基础伤害数值。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
};
