import type { IAttribute } from '../../interface';

/**
 * 伤害相关属性 ID 映射表
 */
export const DamageAttributes = {
    /** 基础伤害 */
    BASE_DAMAGE: 'base_damage',
    /** 百分比伤害加成 */
    PERCENT_DAMAGE: 'percent_damage',
    /** 伤害下限 (保底伤害) */
    DAMAGE_MIN_LIMIT: 'damage_min_limit',
} as const;

/**
 * 伤害相关属性详细数据表
 */
export const DamageAttributeData: Record<string, IAttribute> = {
    [DamageAttributes.BASE_DAMAGE]: {
        id: DamageAttributes.BASE_DAMAGE,
        name: '基础伤害',
        description: '角色造成的原始伤害值，是所有伤害计算的基石。',
        defaultValue: 10n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '伤害'],
        isDefaultLoaded: true,
        tags: ['战斗', '攻击', '基础'],
    },
    [DamageAttributes.PERCENT_DAMAGE]: {
        id: DamageAttributes.PERCENT_DAMAGE,
        name: '百分比伤害加成',
        description: '在基础伤害之上额外增加的百分比伤害。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '伤害'],
        isDefaultLoaded: true,
        tags: ['战斗', '攻击', '加成'],
    },
    [DamageAttributes.DAMAGE_MIN_LIMIT]: {
        id: DamageAttributes.DAMAGE_MIN_LIMIT,
        name: '伤害下限',
        description: '无论敌方防御多高，角色最少能造成的保底伤害。',
        defaultValue: 1n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '战斗', '伤害'],
        isDefaultLoaded: true,
        tags: ['战斗', '攻击', '保底'],
    },
};
