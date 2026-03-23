import type { IData } from './IData';
import type { AttributeID } from '../maps/AttributeMap';
import type { AttributeModifierTypeID } from '../maps/IEnumMap';

/**
 * 属性修改器数据结构
 * 用于定义对某个特定属性的单次修改行为
 * 继承自 IData，包含 id, name, description 等基础信息
 */
export interface IAttributeModifier extends IData {
    /**
     * 目标属性 ID
     */
    targetId: AttributeID;

    /**
     * 修改类型 ID (对应 IEnumMap 中的定义)
     */
    type: AttributeModifierTypeID;

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
    modifiers: IAttributeModifier[];
}
