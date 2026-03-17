import type { ActionDefinition } from './types';
import { AttackActions, AttackActionData } from './attack_series';
import { CollectActions, CollectActionData } from './collect_series';

export * from './types';
export * from './attack_series';
export * from './collect_series';

/**
 * 行为 ID 映射表
 */
export const ActionTypeMap = {
    ...AttackActions,
    ...CollectActions
} as const;

/**
 * 行为 ID 类型
 */
export type ActionID = typeof ActionTypeMap[keyof typeof ActionTypeMap];

/**
 * 行为详细数据表
 */
export const ActionDataMap: Record<ActionID, ActionDefinition> = {
    ...AttackActionData,
    ...CollectActionData
} as Record<ActionID, ActionDefinition>;
