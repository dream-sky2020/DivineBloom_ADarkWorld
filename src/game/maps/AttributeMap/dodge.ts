import type { IAttribute } from '../../interface';

/**
 * 闪避与闪避反击相关属性 ID 映射表
 */
export const DodgeAttributes = {
    /** 闪避率 */
    DODGE_RATE: 'dodge_rate',
    /** 闪避率上限 */
    DODGE_RATE_LIMIT: 'dodge_rate_limit',
    /** 闪避反击概率 */
    DODGE_COUNTER_CHANCE: 'dodge_counter_chance',
    /** 闪避反击基础伤害 */
    DODGE_COUNTER_BASE_DAMAGE: 'dodge_counter_base_damage',
    /** 闪避反击百分比伤害 */
    DODGE_COUNTER_PERCENT_DAMAGE: 'dodge_counter_percent_damage',
    /** 溢出闪避率转化反击基础伤害比例 */
    OVERFLOW_DODGE_TO_BASE_CONVERSION: 'overflow_dodge_to_base_conversion',
    /** 溢出闪避率转化反击百分比伤害比例 */
    OVERFLOW_DODGE_TO_PERCENT_CONVERSION: 'overflow_dodge_to_percent_conversion',
} as const;

/**
 * 闪避与闪避反击相关属性详细数据表
 */
export const DodgeAttributeData: Record<string, IAttribute> = {
    [DodgeAttributes.DODGE_RATE]: {
        id: DodgeAttributes.DODGE_RATE,
        name: '闪避率',
        description: '完全避开敌方攻击并免疫伤害的几率。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '闪避/反击'],
        tags: ['战斗', '防御', '闪避', '概率'],
    },
    [DodgeAttributes.DODGE_RATE_LIMIT]: {
        id: DodgeAttributes.DODGE_RATE_LIMIT,
        name: '闪避率上限',
        description: '闪避率能够达到的最大理论值。',
        defaultValue: 0.9,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '闪避/反击'],
        tags: ['战斗', '防御', '闪避', '上限'],
    },
    [DodgeAttributes.DODGE_COUNTER_CHANCE]: {
        id: DodgeAttributes.DODGE_COUNTER_CHANCE,
        name: '闪避反击概率',
        description: '成功闪避后，触发反击动作的几率。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '闪避/反击'],
        tags: ['战斗', '闪避', '反击', '概率'],
    },
    [DodgeAttributes.DODGE_COUNTER_BASE_DAMAGE]: {
        id: DodgeAttributes.DODGE_COUNTER_BASE_DAMAGE,
        name: '闪避反击基础伤害',
        description: '触发闪避反击时造成的固定数值伤害。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '闪避/反击'],
        tags: ['战斗', '闪避', '反击', '基础伤害'],
    },
    [DodgeAttributes.DODGE_COUNTER_PERCENT_DAMAGE]: {
        id: DodgeAttributes.DODGE_COUNTER_PERCENT_DAMAGE,
        name: '闪避反击百分比伤害',
        description: '基于自身某种属性（或敌方生命）计算出的额外反击伤害比例。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '闪避/反击'],
        tags: ['战斗', '闪避', '反击', '百分比伤害'],
    },
    [DodgeAttributes.OVERFLOW_DODGE_TO_BASE_CONVERSION]: {
        id: DodgeAttributes.OVERFLOW_DODGE_TO_BASE_CONVERSION,
        name: '溢出闪避率转化反击基础伤害比例',
        description: '当闪避率超过上限时，每 1% 溢出闪避率转化的额外反击基础伤害数值。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '闪避/反击'],
        tags: ['战斗', '闪避', '转化', '基础伤害'],
    },
    [DodgeAttributes.OVERFLOW_DODGE_TO_PERCENT_CONVERSION]: {
        id: DodgeAttributes.OVERFLOW_DODGE_TO_PERCENT_CONVERSION,
        name: '溢出闪避率转化反击百分比伤害比例',
        description: '当闪避率超过上限时，每 1% 溢出闪避率转化的额外反击百分比伤害加成。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '闪避/反击'],
        tags: ['战斗', '闪避', '转化', '百分比伤害'],
    },
};
