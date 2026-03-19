import type { Attribute } from '../../interface';
import { BaseAttributes, BaseAttributeData } from './base';
import { ResourceAttributes, ResourceAttributeData } from './resources';
import { ReflectionAttributes, ReflectionAttributeData } from './reflection';
import { DodgeAttributes, DodgeAttributeData } from './dodge';

export * from './base';
export * from './resources';
export * from './reflection';
export * from './dodge';

/**
 * 属性 ID 映射表 (全量 ID)
 */
export const AttributeTypeMap = {
    ...BaseAttributes,
    ...ResourceAttributes,
    ...ReflectionAttributes,
    ...DodgeAttributes,
} as const;

/**
 * 属性 ID 类型
 */
export type AttributeID = typeof AttributeTypeMap[keyof typeof AttributeTypeMap];

/**
 * 属性详细数据表 (全量数据)
 */
export const AttributeDataMap: Record<AttributeID, Attribute> = {
    ...BaseAttributeData,
    ...ResourceAttributeData,
    ...ReflectionAttributeData,
    ...DodgeAttributeData,
} as Record<AttributeID, Attribute>;
