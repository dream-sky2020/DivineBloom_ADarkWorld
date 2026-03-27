import type { IObjectTemplate } from '../../../interface';

import { ScavengeActions, ScavengeActionData } from './scavenge';
import { BloodCollectionActions, BloodCollectionActionData } from './blood_collection';
import { CurseNeedleShotActions, CurseNeedleShotActionData } from './curse_needle_shot';
import { BladeActions, BladeActionData } from './blade';
import { BrawlActions, BrawlActionData } from './brawl';

export * from '../../../interface';
export * from './scavenge';
export * from './blood_collection';
export * from './curse_needle_shot';
export * from './blade';
export * from './brawl';

/**
 * 行为 ID 映射表
 */
export const ActionTypeMap = {
    ...ScavengeActions,
    ...BloodCollectionActions,
    ...CurseNeedleShotActions,
    ...BladeActions,
    ...BrawlActions
} as const;

/**
 * 行为 ID 类型
 */
export type ActionID = typeof ActionTypeMap[keyof typeof ActionTypeMap];

/**
 * 行为详细数据表
 */
export const ActionDataMap: Record<ActionID, IObjectTemplate> = {
    ...ScavengeActionData,
    ...BloodCollectionActionData,
    ...CurseNeedleShotActionData,
    ...BladeActionData,
    ...BrawlActionData
} as Record<ActionID, IObjectTemplate>;

/**
 * 行为地图定义 (自我描述)
 */
export const ActionMapDefinition = {
    kind: 'action',
    data: ActionDataMap,
} as const;
