import type { IAttribute } from '../../interface';

/**
 * 流血相关属性 ID 映射表
 * 
 * 重构说明：为了简化逻辑，流血不再作为独立的状态队列叠加，
 * 而是直接通过角色身上的这些属性来代表当前的流血状态。
 */
export const BleedingAttributes = {
    /** 攻击施加流血概率 */
    BLEED_CHANCE: 'bleed_chance',
    /** 攻击施加流血时的基础伤害 */
    BLEED_APPLY_BASE_DAMAGE: 'bleed_apply_base_damage',
    /** 攻击施加流血时的百分比伤害加成 */
    BLEED_APPLY_PERCENT_DAMAGE: 'bleed_apply_percent_damage',
    /** 攻击施加流血时的伤害触发次数 */
    BLEED_APPLY_TRIGGER_COUNT: 'bleed_apply_trigger_count',
    /** 攻击施加流血时的伤害间隔 (秒) */
    BLEED_APPLY_INTERVAL: 'bleed_apply_interval',

    /** 角色当前受到的流血基础伤害 (每跳) */
    BLEED_BASE_DAMAGE: 'bleed_base_damage',
    /** 角色当前受到的流血百分比伤害加成 */
    BLEED_PERCENT_DAMAGE: 'bleed_percent_damage',
    /** 角色当前受到的流血剩余触发次数 */
    BLEED_TRIGGER_COUNT_REMAINING: 'bleed_trigger_count_remaining',
    /** 角色当前受到的流血伤害触发间隔 (秒) */
    BLEED_INTERVAL: 'bleed_interval',

    /** 流血引爆概率 (立即结算剩余所有伤害) */
    BLEED_DETONATION_CHANCE: 'bleed_detonation_chance',
    /** 流血引爆次数 */
    BLEED_DETONATION_COUNT: 'bleed_detonation_count',
    /** 溢出流血引爆概率转化为引爆次数的比例 */
    OVERFLOW_BLEED_DETONATION_CHANCE_TO_COUNT_CONVERSION: 'overflow_bleed_detonation_chance_to_count_conversion',
} as const;

/**
 * 流血相关属性详细数据表
 */
export const BleedingAttributeData: Record<string, IAttribute> = {
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
        categoryPath: ['属性', '战斗', '流血'],
        isDefaultLoaded: true,
        tags: ['战斗', '攻击', '流血', '概率'],
    },
    [BleedingAttributes.BLEED_APPLY_BASE_DAMAGE]: {
        id: BleedingAttributes.BLEED_APPLY_BASE_DAMAGE,
        name: '施加流血基础伤害',
        description: '攻击成功施加流血时，赋予目标的流血基础伤害。重复施加时通常取最高值。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        isDefaultLoaded: true,
        tags: ['战斗', '攻击', '流血', '基础伤害'],
    },
    [BleedingAttributes.BLEED_APPLY_PERCENT_DAMAGE]: {
        id: BleedingAttributes.BLEED_APPLY_PERCENT_DAMAGE,
        name: '施加流血百分比伤害',
        description: '攻击成功施加流血时，赋予目标的流血百分比伤害加成。重复施加时通常取最高值。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        isDefaultLoaded: true,
        tags: ['战斗', '攻击', '流血', '百分比伤害'],
    },
    [BleedingAttributes.BLEED_APPLY_TRIGGER_COUNT]: {
        id: BleedingAttributes.BLEED_APPLY_TRIGGER_COUNT,
        name: '施加流血触发次数',
        description: '攻击成功施加流血时，赋予目标的流血总触发次数。',
        defaultValue: 3n,
        minValue: 1n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        isDefaultLoaded: true,
        tags: ['战斗', '攻击', '流血', '次数'],
    },
    [BleedingAttributes.BLEED_APPLY_INTERVAL]: {
        id: BleedingAttributes.BLEED_APPLY_INTERVAL,
        name: '施加流血伤害间隔',
        description: '攻击成功施加流血时，赋予目标的流血触发间隔（秒）。重复施加时通常取最小值。',
        defaultValue: 1.0,
        minValue: 0.1,
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        isDefaultLoaded: true,
        tags: ['战斗', '攻击', '流血', '间隔'],
    },
    [BleedingAttributes.BLEED_BASE_DAMAGE]: {
        id: BleedingAttributes.BLEED_BASE_DAMAGE,
        name: '流血基础伤害',
        description: '当前流血状态下，每次触发时造成的固定数值伤害。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        tags: ['战斗', '状态', '流血', '基础伤害'],
    },
    [BleedingAttributes.BLEED_PERCENT_DAMAGE]: {
        id: BleedingAttributes.BLEED_PERCENT_DAMAGE,
        name: '流血百分比伤害加成',
        description: '当前流血状态下的额外伤害比例。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        tags: ['战斗', '状态', '流血', '百分比伤害'],
    },
    [BleedingAttributes.BLEED_TRIGGER_COUNT_REMAINING]: {
        id: BleedingAttributes.BLEED_TRIGGER_COUNT_REMAINING,
        name: '流血剩余触发次数',
        description: '当前流血状态在消失前，还会触发多少次伤害。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        tags: ['战斗', '状态', '流血', '次数'],
    },
    [BleedingAttributes.BLEED_INTERVAL]: {
        id: BleedingAttributes.BLEED_INTERVAL,
        name: '流血伤害间隔',
        description: '流血状态下，每次造成伤害的时间间隔（秒）。',
        defaultValue: 1.0,
        minValue: 0.1,
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        tags: ['战斗', '状态', '流血', '间隔'],
    },
    [BleedingAttributes.BLEED_DETONATION_CHANCE]: {
        id: BleedingAttributes.BLEED_DETONATION_CHANCE,
        name: '流血引爆概率',
        description: '每次攻击后，有概率立即结算目标当前受到的流血状态的所有剩余伤害。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        isDefaultLoaded: true,
        tags: ['战斗', '流血', '引爆', '概率'],
    },
    [BleedingAttributes.BLEED_DETONATION_COUNT]: {
        id: BleedingAttributes.BLEED_DETONATION_COUNT,
        name: '流血引爆次数',
        description: '触发流血引爆时，实际执行引爆结算的次数。',
        defaultValue: 1n,
        minValue: 1n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        isDefaultLoaded: true,
        tags: ['战斗', '流血', '引爆', '次数'],
    },
    [BleedingAttributes.OVERFLOW_BLEED_DETONATION_CHANCE_TO_COUNT_CONVERSION]: {
        id: BleedingAttributes.OVERFLOW_BLEED_DETONATION_CHANCE_TO_COUNT_CONVERSION,
        name: '溢出流血引爆概率转化引爆次数比例',
        description: '当流血引爆概率超过 100% 时，每 100% 溢出概率转化的额外引爆次数。',
        defaultValue: 1n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '流血'],
        isDefaultLoaded: true,
        tags: ['战斗', '流血', '引爆', '转化'],
    },
};
