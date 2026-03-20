import type { Attribute } from '../../interface';

/**
 * 流血相关属性 ID 映射表
 */
export const BleedingAttributes = {
    /** 攻击施加流血概率 */
    BLEED_CHANCE: 'bleed_chance',
    /** 流血伤害触发间隔 (秒) */
    BLEED_INTERVAL: 'bleed_interval',
    /** 流血基础伤害 */
    BLEED_BASE_DAMAGE: 'bleed_base_damage',
    /** 流血百分比伤害加成 */
    BLEED_PERCENT_DAMAGE: 'bleed_percent_damage',
    /** 流血伤害触发次数 */
    BLEED_TRIGGER_COUNT: 'bleed_trigger_count',
    /** 流血引爆概率 */
    BLEED_DETONATION_CHANCE: 'bleed_detonation_chance',
    /** 流血引爆次数 */
    BLEED_DETONATION_COUNT: 'bleed_detonation_count',
    /** 溢出流血引爆概率转化为引爆次数的比例 */
    OVERFLOW_BLEED_DETONATION_CHANCE_TO_COUNT_CONVERSION: 'overflow_bleed_detonation_chance_to_count_conversion',
    /** 最大流血状态数量 */
    BLEED_MAX_STACKS: 'bleed_max_stacks',
} as const;

/**
 * 流血相关属性详细数据表
 */
export const BleedingAttributeData: Record<string, Attribute> = {
    [BleedingAttributes.BLEED_CHANCE]: {
        id: BleedingAttributes.BLEED_CHANCE,
        name: '流血施加概率',
        description: '攻击命中后使目标进入流血状态的几率。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [BleedingAttributes.BLEED_INTERVAL]: {
        id: BleedingAttributes.BLEED_INTERVAL,
        name: '流血伤害间隔',
        description: '流血状态下，每次造成伤害的时间间隔（秒）。',
        defaultValue: 1.0,
        minValue: 0.1,
        category: 'combat',
    },
    [BleedingAttributes.BLEED_BASE_DAMAGE]: {
        id: BleedingAttributes.BLEED_BASE_DAMAGE,
        name: '流血基础伤害',
        description: '流血状态每次触发时造成的固定数值伤害。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
    },
    [BleedingAttributes.BLEED_PERCENT_DAMAGE]: {
        id: BleedingAttributes.BLEED_PERCENT_DAMAGE,
        name: '流血百分比伤害加成',
        description: '基于某种基础属性计算出的额外流血伤害比例。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [BleedingAttributes.BLEED_TRIGGER_COUNT]: {
        id: BleedingAttributes.BLEED_TRIGGER_COUNT,
        name: '流血伤害触发次数',
        description: '施加流血状态后，该状态在消失前总计会触发多少次伤害。',
        defaultValue: 3n,
        minValue: 1n,
        category: 'combat',
    },
    [BleedingAttributes.BLEED_DETONATION_CHANCE]: {
        id: BleedingAttributes.BLEED_DETONATION_CHANCE,
        name: '流血引爆概率',
        description: '每次攻击后，有概率立即结算目标身上所有流血状态的剩余总伤害（引爆）。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [BleedingAttributes.BLEED_DETONATION_COUNT]: {
        id: BleedingAttributes.BLEED_DETONATION_COUNT,
        name: '流血引爆次数',
        description: '触发流血引爆时，实际执行引爆结算的次数。',
        defaultValue: 1n,
        minValue: 1n,
        category: 'combat',
    },
    [BleedingAttributes.OVERFLOW_BLEED_DETONATION_CHANCE_TO_COUNT_CONVERSION]: {
        id: BleedingAttributes.OVERFLOW_BLEED_DETONATION_CHANCE_TO_COUNT_CONVERSION,
        name: '溢出流血引爆概率转化引爆次数比例',
        description: '当流血引爆概率超过 100% 时，每 100% 溢出概率转化的额外引爆次数。',
        defaultValue: 1n,
        minValue: 0n,
        category: 'combat',
    },
    [BleedingAttributes.BLEED_MAX_STACKS]: {
        id: BleedingAttributes.BLEED_MAX_STACKS,
        name: '最大流血状态数量',
        description: '目标身上可同时存在的最大流血层数。如果超过该范围，队列最前面的状态将被引爆（造成：流血触发次数 * 流血伤害）。',
        defaultValue: 5n,
        minValue: 1n,
        category: 'combat',
    },
};
