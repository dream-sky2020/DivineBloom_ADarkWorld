import type { IAttribute } from '../../interface';

/**
 * 行动速度与额外攻击相关属性 ID 映射表
 */
export const ActionAttributes = {
    /** 全体行动速度倍率 (最终速度的乘法系数) */
    ACTION_SPEED_MULTIPLIER: 'action_speed_multiplier',
    /** 最大行动速度倍率 */
    MAX_ACTION_SPEED_MULTIPLIER: 'max_action_speed_multiplier',
    /** 额外攻击概率 */
    EXTRA_ATTACK_CHANCE: 'extra_attack_chance',
    /** 额外攻击次数 */
    EXTRA_ATTACK_COUNT: 'extra_attack_count',
    /** 最大额外攻击次数 (上限) */
    EXTRA_ATTACK_COUNT_LIMIT: 'extra_attack_count_limit',
    /** 溢出额外攻击概率转化为额外攻击次数的比例 */
    OVERFLOW_EXTRA_ATTACK_CHANCE_TO_COUNT_CONVERSION: 'overflow_extra_attack_chance_to_count_conversion',
    /** 溢出额外攻击次数转化为伤害的比例 */
    OVERFLOW_EXTRA_ATTACK_COUNT_TO_DAMAGE_CONVERSION: 'overflow_extra_attack_count_to_damage_conversion',
    /** 溢出的速度倍率转化额外基础伤害比例 */
    OVERFLOW_SPEED_TO_BASE_DAMAGE_CONVERSION: 'overflow_speed_to_base_damage_conversion',
    /** 溢出的速度倍率转化额外百分比伤害比例 */
    OVERFLOW_SPEED_TO_PERCENT_DAMAGE_CONVERSION: 'overflow_speed_to_percent_damage_conversion',
} as const;

/**
 * 行动速度与额外攻击相关属性详细数据表
 */
export const ActionAttributeData: Record<string, IAttribute> = {
    [ActionAttributes.ACTION_SPEED_MULTIPLIER]: {
        id: ActionAttributes.ACTION_SPEED_MULTIPLIER,
        name: '全体行动速度倍率',
        description: '对最终行动速度进行的全局倍数加成。',
        defaultValue: 1.0,
        minValue: 0,
        isPercent: false, // 这是一个倍率
        category: 'combat',
        categoryPath: ['属性', '战斗', '效率/速度'],
        isDefaultLoaded: true,
        tags: ['战斗', '速度', '基础'],
    },
    [ActionAttributes.MAX_ACTION_SPEED_MULTIPLIER]: {
        id: ActionAttributes.MAX_ACTION_SPEED_MULTIPLIER,
        name: '最大行动速度倍率',
        description: '全体行动速度倍率能够达到的最大上限。',
        defaultValue: 10.0,
        minValue: 1.0,
        isPercent: false,
        category: 'combat',
        categoryPath: ['属性', '战斗', '效率/速度'],
        tags: ['战斗', '速度', '上限'],
    },
    [ActionAttributes.EXTRA_ATTACK_CHANCE]: {
        id: ActionAttributes.EXTRA_ATTACK_CHANCE,
        name: '额外攻击概率',
        description: '每次攻击时触发额外连击的概率。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '连击'],
        tags: ['战斗', '连击', '概率'],
    },
    [ActionAttributes.EXTRA_ATTACK_COUNT]: {
        id: ActionAttributes.EXTRA_ATTACK_COUNT,
        name: '额外攻击次数',
        description: '触发额外攻击时，实际进行的打击次数。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '连击'],
        tags: ['战斗', '连击', '次数'],
    },
    [ActionAttributes.EXTRA_ATTACK_COUNT_LIMIT]: {
        id: ActionAttributes.EXTRA_ATTACK_COUNT_LIMIT,
        name: '最大额外攻击次数',
        description: '单次连击中额外攻击次数的最高上限。',
        defaultValue: 1n,
        minValue: 1n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '连击'],
        tags: ['战斗', '连击', '上限'],
    },
    [ActionAttributes.OVERFLOW_EXTRA_ATTACK_CHANCE_TO_COUNT_CONVERSION]: {
        id: ActionAttributes.OVERFLOW_EXTRA_ATTACK_CHANCE_TO_COUNT_CONVERSION,
        name: '溢出额外攻击概率转化为额外攻击次数的比例',
        description: '当额外攻击概率超过 100% 时，每 100% 溢出概率转化的额外攻击次数。',
        defaultValue: 1n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '连击'],
        tags: ['战斗', '连击', '转化'],
    },
    [ActionAttributes.OVERFLOW_EXTRA_ATTACK_COUNT_TO_DAMAGE_CONVERSION]: {
        id: ActionAttributes.OVERFLOW_EXTRA_ATTACK_COUNT_TO_DAMAGE_CONVERSION,
        name: '溢出额外攻击次数转化为伤害的比例',
        description: '当额外攻击次数超过上限时，每 1 次溢出攻击次数转化的最终伤害加成比例。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '连击'],
        tags: ['战斗', '连击', '转化', '伤害'],
    },
    [ActionAttributes.OVERFLOW_SPEED_TO_BASE_DAMAGE_CONVERSION]: {
        id: ActionAttributes.OVERFLOW_SPEED_TO_BASE_DAMAGE_CONVERSION,
        name: '溢出的速度倍率转化额外基础伤害比例',
        description: '当行动速度倍率超过上限时，每 1.0 溢出倍率转化的额外基础伤害数值。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '效率/速度'],
        tags: ['战斗', '速度', '转化', '基础伤害'],
    },
    [ActionAttributes.OVERFLOW_SPEED_TO_PERCENT_DAMAGE_CONVERSION]: {
        id: ActionAttributes.OVERFLOW_SPEED_TO_PERCENT_DAMAGE_CONVERSION,
        name: '溢出的速度倍率转化额外百分比伤害比例',
        description: '当行动速度倍率超过上限时，每 1.0 溢出倍率转化的额外百分比伤害加成。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '效率/速度'],
        tags: ['战斗', '速度', '转化', '百分比伤害'],
    },
};
