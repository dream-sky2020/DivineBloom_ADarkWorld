import { ActionTriggerModeMap } from '../ActionTriggerModeMap';
import type { ActionDefinition } from './types';

/**
 * 收集系列行为 ID 映射表
 */
export const CollectActions = {
    SCAVENGE_RUINS: 'scavenge_ruins', // 翻找废墟
    SCAVENGE_CORPSE_PILE: 'scavenge_corpse_pile', // 翻找尸堆
    SCAVENGE_FLESH_MOUNTAIN: 'scavenge_flesh_mountain', // 翻找肉山
    SCAVENGE_SHOP: 'scavenge_shop', // 翻找商店
    SCAVENGE_SAWMILL: 'scavenge_sawmill', // 翻找锯木厂
    BLOOD_COLLECTION: 'blood_collection' // 血液采集
} as const;

/**
 * 收集系列行为详细数据表
 */
export const CollectActionData: Record<string, ActionDefinition> = {
    [CollectActions.SCAVENGE_RUINS]: {
        id: CollectActions.SCAVENGE_RUINS,
        name: '翻找废墟',
        description: '在坍塌废墟中搜寻可用物资与零件。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 2.5,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 10
        },
        tags: ['collect', 'scavenge', 'ruins']
    },
    [CollectActions.SCAVENGE_CORPSE_PILE]: {
        id: CollectActions.SCAVENGE_CORPSE_PILE,
        name: '翻找尸堆',
        description: '在尸堆中搜寻可回收材料，存在污染风险。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 3.2,
        autoCooldownAccumulate: false,
        maxCooldownAccumulateCharges: 1,
        cost: {
            stamina: 12
        },
        tags: ['collect', 'scavenge', 'corpse']
    },
    [CollectActions.SCAVENGE_FLESH_MOUNTAIN]: {
        id: CollectActions.SCAVENGE_FLESH_MOUNTAIN,
        name: '翻找肉山',
        description: '深入肉山缝隙中翻找稀有素材，过程极度危险。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 4.5,
        autoCooldownAccumulate: false,
        maxCooldownAccumulateCharges: 1,
        cost: {
            stamina: 18,
            hp: 2
        },
        tags: ['collect', 'scavenge', 'flesh_mountain', 'high_risk']
    },
    [CollectActions.SCAVENGE_SHOP]: {
        id: CollectActions.SCAVENGE_SHOP,
        name: '翻找商店',
        description: '在废弃商店中翻箱倒柜，寻找残留商品与工具。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 2.0,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 3,
        cost: {
            stamina: 9
        },
        tags: ['collect', 'scavenge', 'shop']
    },
    [CollectActions.SCAVENGE_SAWMILL]: {
        id: CollectActions.SCAVENGE_SAWMILL,
        name: '翻找锯木厂',
        description: '在锯木厂遗址中回收木材、齿轮与加工残料。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 2.8,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 11
        },
        tags: ['collect', 'scavenge', 'sawmill', 'materials']
    },
    [CollectActions.BLOOD_COLLECTION]: {
        id: CollectActions.BLOOD_COLLECTION,
        name: '血液采集',
        description: '采集可用血液样本，用于制造、献祭或炼成相关流程。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 1.8,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 7
        },
        tags: ['collect', 'blood', 'sample', 'crafting']
    }
};
