import type { IAttribute } from '../../interface';

/**
 * 恐惧相关属性 ID 映射表
 */
export const BaseAttributes = {
    /** 恐惧威仪 */
    FEAR_MAJESTY: 'fear_majesty',
    /** 恐惧抵抗 */
    FEAR_RESISTANCE: 'fear_resistance',
    /** 恐惧状态造成的伤害百分比减少 */
    FEAR_DAMAGE_REDUCTION: 'fear_damage_reduction',
    /** 恐惧状态造成的无法行动概率 */
    FEAR_INCAPACITATE_CHANCE: 'fear_incapacitate_chance',
} as const;

/**
 * 恐惧相关属性详细数据表
 */
export const BaseAttributeData: Record<string, IAttribute> = {
    [BaseAttributes.FEAR_MAJESTY]: {
        id: BaseAttributes.FEAR_MAJESTY,
        name: '恐惧威仪',
        description: '衡量对敌方造成恐惧效果的能力。',
        defaultValue: 10n,
        minValue: 0n,
        category: 'primary',
        categoryPath: ['属性', '战斗', '精神/恐惧'],
        isDefaultLoaded: true,
        tags: ['恐惧', '攻击', '精神'],
    },
    [BaseAttributes.FEAR_RESISTANCE]: {
        id: BaseAttributes.FEAR_RESISTANCE,
        name: '恐惧抵抗',
        description: '降低受到的恐惧效果影响。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'primary',
        categoryPath: ['属性', '战斗', '精神/恐惧'],
        isDefaultLoaded: true,
        tags: ['恐惧', '防御', '精神'],
    },
    [BaseAttributes.FEAR_DAMAGE_REDUCTION]: {
        id: BaseAttributes.FEAR_DAMAGE_REDUCTION,
        name: '恐惧伤害减免',
        description: '处于恐惧状态时，造成的伤害百分比降低。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '精神/恐惧'],
        tags: ['恐惧', '减益', '伤害'],
    },
    [BaseAttributes.FEAR_INCAPACITATE_CHANCE]: {
        id: BaseAttributes.FEAR_INCAPACITATE_CHANCE,
        name: '恐惧无法行动概率',
        description: '处于恐惧状态时，回合开始时无法执行行动的概率。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '精神/恐惧'],
        tags: ['恐惧', '减益', '控制'],
    },
};
