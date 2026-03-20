import type { AttributeID } from '../maps/AttributeMap';

/**
 * 属性修改类型枚举
 */
export enum AttributeModifierType {
    /** 
     * 固定值加法 (Flat Add)
     * 计算公式: current + value
     */
    ADD = 'add',

    /** 
     * 百分比加法 (Percent Add)
     * 通常用于多个同类加成相加后再作用于基础值
     * 计算公式: current * (1 + value)
     */
    PERCENT_ADD = 'percent_add',

    /** 
     * 最终乘法 (Final Multiplier)
     * 直接对最终结果进行乘法运算
     * 计算公式: current * value
     */
    MULTIPLY = 'multiply',

    /** 
     * 取最大值 (Max)
     * 计算公式: Math.max(current, value)
     */
    MAX = 'max',

    /** 
     * 取最小值 (Min)
     * 计算公式: Math.min(current, value)
     */
    MIN = 'min',

    /** 
     * 覆盖 (Override)
     * 直接强制设置为该值
     * 计算公式: value
     */
    OVERRIDE = 'override'
}

/**
 * 属性修改器数据结构
 * 用于定义对某个特定属性的单次修改行为
 */
export interface AttributeModifier {
    /**
     * 目标属性 ID
     */
    id: AttributeID;

    /**
     * 修改类型
     */
    type: AttributeModifierType;

    /**
     * 修改数值 (支持 bigint 或 number)
     */
    value: bigint | number;

    /**
     * 修改器来源 (可选，用于调试或特定逻辑移除)
     */
    source?: string;
}

/**
 * 批量属性修改器
 * 用于一次性定义多个属性的修改方案（例如一件装备的所有加成）
 */
export interface AttributeModifierSet {
    modifiers: AttributeModifier[];
}
