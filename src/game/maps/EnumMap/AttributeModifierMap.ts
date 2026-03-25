import type { IEnum } from '../../interface/IEnum';

/**
 * 属性修改类型 ID 映射表
 */
export const AttributeModifierTypes = {
    /** 
     * 固定值加法 (Flat Add)
     * 计算公式: current + value
     */
    ADD: 'add',

    /** 
     * 百分比加法 (Percent Add)
     * 通常用于多个同类加成相加后再作用于基础值
     * 计算公式: current * (1 + value)
     */
    PERCENT_ADD: 'percent_add',

    /** 
     * 最终乘法 (Final Multiplier)
     * 直接对最终结果进行乘法运算
     * 计算公式: current * value
     */
    MULTIPLY: 'multiply',

    /** 
     * 取最大值 (Max)
     * 计算公式: Math.max(current, value)
     */
    MAX: 'max',

    /** 
     * 取最小值 (Min)
     * 计算公式: Math.min(current, value)
     */
    MIN: 'min',

    /** 
     * 覆盖 (Override)
     * 直接强制设置为该值
     * 计算公式: value
     */
    OVERRIDE: 'override'
} as const;

/**
 * 属性修改类型 ID
 */
export type AttributeModifierTypeID = typeof AttributeModifierTypes[keyof typeof AttributeModifierTypes];

/**
 * 属性修改类型详细数据表
 */
export const AttributeModifierDataMap: Record<AttributeModifierTypeID, IEnum> = {
    [AttributeModifierTypes.ADD]: {
        id: AttributeModifierTypes.ADD,
        name: '加法',
        description: '固定值加法 (Flat Add)，直接加在当前数值上。',
        categoryPath: ['枚举', '属性系统', '修正类型'],
    },
    [AttributeModifierTypes.PERCENT_ADD]: {
        id: AttributeModifierTypes.PERCENT_ADD,
        name: '百分比加法',
        description: '百分比加法 (Percent Add)，通常用于多个同类加成相加后再作用于基础值。',
        categoryPath: ['枚举', '属性系统', '修正类型'],
    },
    [AttributeModifierTypes.MULTIPLY]: {
        id: AttributeModifierTypes.MULTIPLY,
        name: '最终乘法',
        description: '直接对最终结果进行乘法运算。',
        categoryPath: ['枚举', '属性系统', '修正类型'],
    },
    [AttributeModifierTypes.MAX]: {
        id: AttributeModifierTypes.MAX,
        name: '最大值',
        description: '将当前数值与修改值比较，取两者中的最大值。',
        categoryPath: ['枚举', '属性系统', '修正类型'],
    },
    [AttributeModifierTypes.MIN]: {
        id: AttributeModifierTypes.MIN,
        name: '最小值',
        description: '将当前数值与修改值比较，取两者中的最小值。',
        categoryPath: ['枚举', '属性系统', '修正类型'],
    },
    [AttributeModifierTypes.OVERRIDE]: {
        id: AttributeModifierTypes.OVERRIDE,
        name: '覆盖',
        description: '直接将当前数值强制设置为该值。',
        categoryPath: ['枚举', '属性系统', '修正类型'],
    },
};
