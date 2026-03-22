import type { IEnum } from '../../interface/IEnum';

/**
 * 属性判定操作符 ID 映射表
 * 用于定义各类比较逻辑
 */
export const AttributePredicateOperators = {
    /** 大于 (Greater Than) > */
    GT: 'gt',

    /** 大于等于 (Greater Than or Equal) >= */
    GTE: 'gte',

    /** 小于 (Less Than) < */
    LT: 'lt',

    /** 小于等于 (Less Than or Equal) <= */
    LTE: 'lte',

    /** 等于 (Equal) == */
    EQ: 'eq',

    /** 不等于 (Not Equal) != */
    NEQ: 'neq'
} as const;

/**
 * 属性判定操作符 ID 类型
 */
export type AttributePredicateOperatorID = typeof AttributePredicateOperators[keyof typeof AttributePredicateOperators];

/**
 * 属性判定操作符详细数据表
 * 继承自 IData，包含多语言描述等信息
 */
export const AttributePredicateDataMap: Record<AttributePredicateOperatorID, IEnum> = {
    [AttributePredicateOperators.GT]: {
        id: AttributePredicateOperators.GT,
        name: '大于',
        description: '判断当前属性值是否严格大于目标值。',
    },
    [AttributePredicateOperators.GTE]: {
        id: AttributePredicateOperators.GTE,
        name: '大于等于',
        description: '判断当前属性值是否大于或等于目标值。',
    },
    [AttributePredicateOperators.LT]: {
        id: AttributePredicateOperators.LT,
        name: '小于',
        description: '判断当前属性值是否严格小于目标值。',
    },
    [AttributePredicateOperators.LTE]: {
        id: AttributePredicateOperators.LTE,
        name: '小于等于',
        description: '判断当前属性值是否小于或等于目标值。',
    },
    [AttributePredicateOperators.EQ]: {
        id: AttributePredicateOperators.EQ,
        name: '等于',
        description: '判断当前属性值是否等于目标值。',
    },
    [AttributePredicateOperators.NEQ]: {
        id: AttributePredicateOperators.NEQ,
        name: '不等于',
        description: '判断当前属性值是否不等于目标值。',
    },
};
