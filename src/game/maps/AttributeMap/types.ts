import { BaseAttributes } from './fear';
import { ResourceAttributes } from './resources';
import { ReflectionAttributes } from './reflection';
import { DodgeAttributes } from './dodge';
import { DamageAttributes } from './damage';
import { ActionAttributes } from './action';
import { HealingAttributes } from './healing';
import { StatisticsAttributes } from './statistics';
import { ResurrectionAttributes } from './resurrection';
import { BleedingAttributes } from './bleeding';
import { ReductionAttributes } from './reduction';
import { HPAttributes } from './hp';
import { CritAttributes } from './crit';
import { ActionCooldownAttributes } from './action_cooldown';
import { ActionTriggerAttributes } from './action_trigger';
import { LootAttributes } from './loot';
import { ReincarnationAttributes } from './reincarnation';
import { DialogueAttributes } from './dialogue';
import { ChoiceAttributes } from './choice';

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
