import type { IAttribute } from '../../interface/IAttribute';
import { BaseAttributes, BaseAttributeData } from './fear';
import { ResourceAttributes, ResourceAttributeData } from './resources';
import { ReflectionAttributes, ReflectionAttributeData } from './reflection';
import { DodgeAttributes, DodgeAttributeData } from './dodge';
import { DamageAttributes, DamageAttributeData } from './damage';
import { ActionAttributes, ActionAttributeData } from './action';
import { HealingAttributes, HealingAttributeData } from './healing';
import { StatisticsAttributes, StatisticsAttributeData } from './statistics';
import { ResurrectionAttributes, ResurrectionAttributeData } from './resurrection';
import { BleedingAttributes, BleedingAttributeData } from './bleeding';
import { ReductionAttributes, ReductionAttributeData } from './reduction';
import { HPAttributes, HPAttributeData } from './hp';
import { CritAttributes, CritAttributeData } from './crit';

export * from './fear';
export * from './resources';
export * from './reflection';
export * from './dodge';
export * from './damage';
export * from './action';
export * from './healing';
export * from './statistics';
export * from './resurrection';
export * from './bleeding';
export * from './reduction';
export * from './hp';
export * from './crit';

/**
 * 属性 ID 映射表 (全量 ID)
 */
export const AttributeTypeMap = {
    ...BaseAttributes,
    ...ResourceAttributes,
    ...ReflectionAttributes,
    ...DodgeAttributes,
    ...DamageAttributes,
    ...ActionAttributes,
    ...HealingAttributes,
    ...StatisticsAttributes,
    ...ResurrectionAttributes,
    ...BleedingAttributes,
    ...ReductionAttributes,
    ...HPAttributes,
    ...CritAttributes,
} as const;

/**
 * 属性 ID 类型
 */
export type AttributeID = typeof AttributeTypeMap[keyof typeof AttributeTypeMap];

/**
 * 属性详细数据表 (全量数据)
 */
export const AttributeDataMap: Record<AttributeID, IAttribute> = {
    ...BaseAttributeData,
    ...ResourceAttributeData,
    ...ReflectionAttributeData,
    ...DodgeAttributeData,
    ...DamageAttributeData,
    ...ActionAttributeData,
    ...HealingAttributeData,
    ...StatisticsAttributeData,
    ...ResurrectionAttributeData,
    ...BleedingAttributeData,
    ...ReductionAttributeData,
    ...HPAttributeData,
    ...CritAttributeData,
} as Record<AttributeID, IAttribute>;
