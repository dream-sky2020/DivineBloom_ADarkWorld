import type { ActionDefinition } from './types';
import { ScavengeActions, ScavengeActionData } from './scavenge';
import { BloodCollectionActions, BloodCollectionActionData } from './blood_collection';
import { CurseNeedleShotActions, CurseNeedleShotActionData } from './curse_needle_shot';
import { SteelSwordAttackActions, SteelSwordAttackActionData } from './steel_sword_attack';
import { UnarmedCombatActions, UnarmedCombatActionData } from './unarmed_combat';

export * from './types';
export * from './scavenge';
export * from './blood_collection';
export * from './curse_needle_shot';
export * from './steel_sword_attack';
export * from './unarmed_combat';

/**
 * 行为 ID 映射表
 */
export const ActionTypeMap = {
    ...ScavengeActions,
    ...BloodCollectionActions,
    ...CurseNeedleShotActions,
    ...SteelSwordAttackActions,
    ...UnarmedCombatActions
} as const;

/**
 * 行为 ID 类型
 */
export type ActionID = typeof ActionTypeMap[keyof typeof ActionTypeMap];

/**
 * 行为详细数据表
 */
export const ActionDataMap: Record<ActionID, ActionDefinition> = {
    ...ScavengeActionData,
    ...BloodCollectionActionData,
    ...CurseNeedleShotActionData,
    ...SteelSwordAttackActionData,
    ...UnarmedCombatActionData
} as Record<ActionID, ActionDefinition>;
