import type { IAttribute } from '../../interface';

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
export const HPAttributeData: Record<string, IAttribute> = {
    [HPAttributes.HP]: {
        id: HPAttributes.HP,
        name: '生命值',
        description: '角色的当前生命值',
        defaultValue: 100n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '生存', '生命值'],
        isDefaultLoaded: true,
        tags: ['生存', '基础', '消耗品'],
    },
    [HPAttributes.HP_MAX]: {
        id: HPAttributes.HP_MAX,
        name: '最大生命值',
        description: '角色的生命值上限',
        defaultValue: 100n,
        minValue: 1n,
        category: 'combat',
        categoryPath: ['属性', '生存', '生命值'],
        isDefaultLoaded: true,
        tags: ['生存', '基础', '上限'],
    },
    [HPAttributes.HP_REMOVED_MAX]: {
        id: HPAttributes.HP_REMOVED_MAX,
        name: '被削除的血量上限',
        description: '由于某些负面状态或效果导致暂时无法使用的血量上限部分。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'combat',
        categoryPath: ['属性', '生存', '生命值'],
        isDefaultLoaded: true,
        tags: ['生存', '减益', '上限'],
    },
};
