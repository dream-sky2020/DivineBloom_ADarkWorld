import type { Attribute } from '../../interface';

/**
 * 基础属性 ID 映射表 (战斗属性与三围)
 */
export const BaseAttributes = {
    /** 生命值 */
    HP: 'hp',
    /** 最大生命值 */
    HP_MAX: 'hp_max',
    /** 攻击力 */
    ATTACK: 'attack',
    /** 防御力 */
    DEFENSE: 'defense',
    /** 速度 */
    SPEED: 'speed',
    /** 力量 */
    STRENGTH: 'strength',
    /** 敏捷 */
    AGILITY: 'agility',
    /** 精神 */
    SPIRIT: 'spirit',
    /** 暴击率 */
    CRIT_RATE: 'crit_rate',
    /** 暴击伤害 */
    CRIT_DAMAGE: 'crit_damage',
} as const;

/**
 * 基础属性详细数据表
 */
export const BaseAttributeData: Record<string, Attribute> = {
    [BaseAttributes.HP]: {
        id: BaseAttributes.HP,
        name: '生命值',
        description: '角色的当前生命值',
        defaultValue: 100n,
        minValue: 0n,
        category: 'combat',
    },
    [BaseAttributes.HP_MAX]: {
        id: BaseAttributes.HP_MAX,
        name: '最大生命值',
        description: '角色的生命值上限',
        defaultValue: 100n,
        minValue: 1n,
        category: 'combat',
    },
    [BaseAttributes.ATTACK]: {
        id: BaseAttributes.ATTACK,
        name: '攻击力',
        description: '决定角色造成的伤害',
        defaultValue: 10n,
        minValue: 0n,
        category: 'combat',
    },
    [BaseAttributes.DEFENSE]: {
        id: BaseAttributes.DEFENSE,
        name: '防御力',
        description: '决定角色受到的伤害减免',
        defaultValue: 5n,
        minValue: 0n,
        category: 'combat',
    },
    [BaseAttributes.SPEED]: {
        id: BaseAttributes.SPEED,
        name: '速度',
        description: '决定角色的行动顺序',
        defaultValue: 10n,
        minValue: 1n,
        category: 'combat',
    },
    [BaseAttributes.STRENGTH]: {
        id: BaseAttributes.STRENGTH,
        name: '力量',
        description: '基础属性，影响生命上限 and 攻击力',
        defaultValue: 10n,
        minValue: 0n,
        category: 'primary',
    },
    [BaseAttributes.AGILITY]: {
        id: BaseAttributes.AGILITY,
        name: '敏捷',
        description: '基础属性，影响速度 and 暴击率',
        defaultValue: 10n,
        minValue: 0n,
        category: 'primary',
    },
    [BaseAttributes.SPIRIT]: {
        id: BaseAttributes.SPIRIT,
        name: '精神',
        description: '基础属性，影响技能效果 and 抗性',
        defaultValue: 10n,
        minValue: 0n,
        category: 'primary',
    },
    [BaseAttributes.CRIT_RATE]: {
        id: BaseAttributes.CRIT_RATE,
        name: '暴击率',
        description: '决定造成暴击的概率',
        defaultValue: 0.05,
        minValue: 0,
        maxValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
    [BaseAttributes.CRIT_DAMAGE]: {
        id: BaseAttributes.CRIT_DAMAGE,
        name: '暴击伤害',
        description: '暴击时造成的伤害倍数',
        defaultValue: 1.5,
        minValue: 1,
        isPercent: true,
        unit: '%',
        category: 'combat',
    },
};
