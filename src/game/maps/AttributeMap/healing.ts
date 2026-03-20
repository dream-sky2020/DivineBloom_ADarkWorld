import type { Attribute } from '../../interface';

/**
 * 治疗相关属性 ID 映射表
 */
export const HealingAttributes = {
    /** 基础治疗量 */
    BASE_HEALING: 'base_healing',
    /** 百分比治疗加成 */
    PERCENT_HEALING: 'percent_healing',
    /** 受疗加成 (接受治疗时的额外倍率) */
    INCOMING_HEALING_BONUS: 'incoming_healing_bonus',
    /** 消耗品基础治疗量加成 */
    CONSUMABLE_BASE_HEALING_BONUS: 'consumable_base_healing_bonus',
    /** 消耗品百分比治疗量加成 */
    CONSUMABLE_PERCENT_HEALING_BONUS: 'consumable_percent_healing_bonus',
    /** 溢出的治疗量总计 */
    OVERFLOW_HEALING_TOTAL: 'overflow_healing_total',
    /** 每溢出多少治疗量转化为对全体敌人的伤害 */
    OVERFLOW_HEALING_TO_AOE_DAMAGE_RATIO: 'overflow_healing_to_aoe_damage_ratio',
    /** 距离下一次对全体敌人伤害需要的溢出的治疗量 */
    OVERFLOW_HEALING_DISTANCE_TO_NEXT_AOE: 'overflow_healing_distance_to_next_aoe',
    /** 每溢出多少治疗量转化为对全体敌人的基础伤害加成 */
    OVERFLOW_HEALING_TO_BASE_DAMAGE_BONUS: 'overflow_healing_to_base_damage_bonus',
    /** 每溢出多少治疗量转化为对全体敌人的百分比伤害加成 */
    OVERFLOW_HEALING_TO_PERCENT_DAMAGE_BONUS: 'overflow_healing_to_percent_damage_bonus',
} as const;

/**
 * 治疗相关属性详细数据表
 */
export const HealingAttributeData: Record<string, Attribute> = {
    [HealingAttributes.BASE_HEALING]: {
        id: HealingAttributes.BASE_HEALING,
        name: '基础治疗量',
        description: '角色发动治疗时的原始回复数值，是所有回复效果的基础。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
    [HealingAttributes.PERCENT_HEALING]: {
        id: HealingAttributes.PERCENT_HEALING,
        name: '百分比治疗加成',
        description: '提升自身发出的治疗效果的百分比比例。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [HealingAttributes.INCOMING_HEALING_BONUS]: {
        id: HealingAttributes.INCOMING_HEALING_BONUS,
        name: '受疗加成',
        description: '自身接受任何来源治疗时的额外百分比回复加成。',
        defaultValue: 0,
        minValue: -1, // 允许治疗削减/禁疗
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [HealingAttributes.CONSUMABLE_BASE_HEALING_BONUS]: {
        id: HealingAttributes.CONSUMABLE_BASE_HEALING_BONUS,
        name: '消耗品基础治疗量加成',
        description: '使用药品等消耗品时，额外增加的固定治疗数值。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
    [HealingAttributes.CONSUMABLE_PERCENT_HEALING_BONUS]: {
        id: HealingAttributes.CONSUMABLE_PERCENT_HEALING_BONUS,
        name: '消耗品百分比治疗量加成',
        description: '提升使用消耗品时的治疗效果百分比比例。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [HealingAttributes.OVERFLOW_HEALING_TOTAL]: {
        id: HealingAttributes.OVERFLOW_HEALING_TOTAL,
        name: '溢出的治疗量总计',
        description: '累计溢出的治疗总量（超过角色最大生命值的部分）。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
    },
    [HealingAttributes.OVERFLOW_HEALING_TO_AOE_DAMAGE_RATIO]: {
        id: HealingAttributes.OVERFLOW_HEALING_TO_AOE_DAMAGE_RATIO,
        name: '每单位溢出治疗转化的全体伤害',
        description: '每单位溢出治疗量触发时，转化为对全体敌人的伤害数值。',
        defaultValue: 1n,
        minValue: 0n,
        category: 'combat',
    },
    [HealingAttributes.OVERFLOW_HEALING_DISTANCE_TO_NEXT_AOE]: {
        id: HealingAttributes.OVERFLOW_HEALING_DISTANCE_TO_NEXT_AOE,
        name: '距离下一次对全体敌人伤害需要的溢出量',
        description: '触发下一次全体伤害动作前，还需累计积累的溢出治疗量。',
        defaultValue: 100n,
        minValue: 0n,
        category: 'combat',
    },
    [HealingAttributes.OVERFLOW_HEALING_TO_BASE_DAMAGE_BONUS]: {
        id: HealingAttributes.OVERFLOW_HEALING_TO_BASE_DAMAGE_BONUS,
        name: '每单位溢出治疗转化的基础伤害加成',
        description: '每积累一定量的溢出治疗，为全体伤害额外提供的固定数值加成。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
    [HealingAttributes.OVERFLOW_HEALING_TO_PERCENT_DAMAGE_BONUS]: {
        id: HealingAttributes.OVERFLOW_HEALING_TO_PERCENT_DAMAGE_BONUS,
        name: '每单位溢出治疗转化的百分比伤害加成',
        description: '每积累一定量的溢出治疗，为全体伤害额外提供的百分比伤害加成。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
};
