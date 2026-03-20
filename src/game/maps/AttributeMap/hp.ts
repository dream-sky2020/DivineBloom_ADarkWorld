import type { Attribute } from '../../interface';

/**
 * 血量相关属性 ID 映射表
 */
export const HPAttributes = {
    /** 当前生命值 */
    HP: 'hp',
    /** 最大生命值 */
    HP_MAX: 'hp_max',
    /** 被削除的血量上限 */
    HP_REMOVED_MAX: 'hp_removed_max',
} as const;

/**
 * 血量相关属性详细数据表
 */
export const HPAttributeData: Record<string, Attribute> = {
    [HPAttributes.HP]: {
        id: HPAttributes.HP,
        name: '生命值',
        description: '角色的当前生命值',
        defaultValue: 100n,
        minValue: 0n,
        category: 'combat',
        isDefaultLoaded: true,
    },
    [HPAttributes.HP_MAX]: {
        id: HPAttributes.HP_MAX,
        name: '最大生命值',
        description: '角色的生命值上限',
        defaultValue: 100n,
        minValue: 1n,
        category: 'combat',
        isDefaultLoaded: true,
    },
    [HPAttributes.HP_REMOVED_MAX]: {
        id: HPAttributes.HP_REMOVED_MAX,
        name: '被削除的血量上限',
        description: '由于某些负面状态或效果导致暂时无法使用的血量上限部分。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
        isDefaultLoaded: true,
    },
};
