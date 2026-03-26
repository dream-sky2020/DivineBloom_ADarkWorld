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
import { ActionCooldownAttributes, ActionCooldownAttributeData } from './action_cooldown';
import { ActionTriggerAttributes, ActionTriggerAttributeData } from './action_trigger';
import { LootAttributes, LootAttributeData } from './loot';
import { ReincarnationAttributes, ReincarnationAttributeData } from './reincarnation';
import { DialogueAttributes, DialogueAttributeData } from './dialogue';
import { ChoiceAttributes, ChoiceAttributeData } from './choice';

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
export * from './action_cooldown';
export * from './action_trigger';
export * from './loot';
export * from './reincarnation';
export * from './dialogue';
export * from './choice';

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
    ...ActionCooldownAttributes,
    ...ActionTriggerAttributes,
    ...LootAttributes,
    ...ReincarnationAttributes,
    ...DialogueAttributes,
    ...ChoiceAttributes,
} as const;

/**
 * 属性 ID 类型
 */
export type AttributeID = typeof AttributeTypeMap[keyof typeof AttributeTypeMap];

/**
 * 敌人预制体可用的属性 ID 联合类型
 * 包含生命值、伤害、暴击、免伤等战斗属性
 */
export type EnemyAttributeID = 
    | typeof HPAttributes[keyof typeof HPAttributes]
    | typeof DamageAttributes[keyof typeof DamageAttributes]
    | typeof CritAttributes[keyof typeof CritAttributes]
    | typeof ReductionAttributes[keyof typeof ReductionAttributes]
    | typeof DodgeAttributes[keyof typeof DodgeAttributes]
    | typeof ReflectionAttributes[keyof typeof ReflectionAttributes]
    | typeof BleedingAttributes[keyof typeof BleedingAttributes]
    | typeof BaseAttributes[keyof typeof BaseAttributes];

/**
 * 物品预制体可用的属性 ID 联合类型
 * 目前主要用于定义物品自身的数值（如体积、重量等，如果这些被定义为属性的话）
 * 注意：物品的 modifiers 依然可以使用全量 AttributeID
 */
export type ItemAttributeID = 
    | typeof ResourceAttributes[keyof typeof ResourceAttributes]; // 示例

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
    ...ActionCooldownAttributeData,
    ...ActionTriggerAttributeData,
    ...LootAttributeData,
    ...ReincarnationAttributeData,
    ...DialogueAttributeData,
    ...ChoiceAttributeData,
} as Record<AttributeID, IAttribute>;
