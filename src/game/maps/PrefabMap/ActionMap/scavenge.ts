import { ActionTriggerModes } from '../../IEnumMap';
import type { IAction } from '../../../interface';

/**
 * 翻找系列行为 ID 映射表
 */
export const ScavengeActions = {
    SCAVENGE_RUINS: 'scavenge_ruins', // 翻找废墟
    SCAVENGE_CORPSE_PILE: 'scavenge_corpse_pile', // 翻找尸堆
    SCAVENGE_FLESH_MOUNTAIN: 'scavenge_flesh_mountain', // 翻找肉山
    SCAVENGE_SHOP: 'scavenge_shop', // 翻找商店
    SCAVENGE_SAWMILL: 'scavenge_sawmill' // 翻找锯木厂
} as const;

/**
 * 翻找系列行为详细数据表
 */
export const ScavengeActionData: Record<string, IAction> = {
    [ScavengeActions.SCAVENGE_RUINS]: {
        id: ScavengeActions.SCAVENGE_RUINS,
        name: '翻找废墟',
        description: '在坍塌废墟中搜寻可用物资与零件。',
        triggerStrategy: {
            mode: ActionTriggerModes.AUTO_OR_MANUAL,
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
            stamina: 10n
        },
        categoryPath: ['行为', '生活', '搜刮'],
        tags: ['collect', 'scavenge', 'ruins']
    },
    [ScavengeActions.SCAVENGE_CORPSE_PILE]: {
        id: ScavengeActions.SCAVENGE_CORPSE_PILE,
        name: '翻找尸堆',
        description: '在尸堆中搜寻可回收材料，存在污染风险。',
        triggerStrategy: {
            mode: ActionTriggerModes.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 3.2,
        autoCooldownAccumulate: false,
        maxCooldownAccumulateCharges: 1,
        cost: {
            stamina: 12n
        },
        categoryPath: ['行为', '生活', '搜刮'],
        tags: ['collect', 'scavenge', 'corpse']
    },
    [ScavengeActions.SCAVENGE_FLESH_MOUNTAIN]: {
        id: ScavengeActions.SCAVENGE_FLESH_MOUNTAIN,
        name: '翻找肉山',
        description: '深入肉山缝隙中翻找稀有素材，过程极度危险。',
        triggerStrategy: {
            mode: ActionTriggerModes.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 4.5,
        autoCooldownAccumulate: false,
        maxCooldownAccumulateCharges: 1,
        cost: {
            stamina: 18n,
            hp: 2n
        },
        categoryPath: ['行为', '生活', '搜刮'],
        tags: ['collect', 'scavenge', 'flesh_mountain', 'high_risk']
    },
    [ScavengeActions.SCAVENGE_SHOP]: {
        id: ScavengeActions.SCAVENGE_SHOP,
        name: '翻找商店',
        description: '在废弃商店中翻箱倒柜，寻找残留商品与工具。',
        triggerStrategy: {
            mode: ActionTriggerModes.AUTO_OR_MANUAL,
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
            stamina: 9n
        },
        categoryPath: ['行为', '生活', '搜刮'],
        tags: ['collect', 'scavenge', 'shop']
    },
    [ScavengeActions.SCAVENGE_SAWMILL]: {
        id: ScavengeActions.SCAVENGE_SAWMILL,
        name: '翻找锯木厂',
        description: '在锯木厂遗址中回收木材、齿轮与加工残料。',
        triggerStrategy: {
            mode: ActionTriggerModes.AUTO_OR_MANUAL,
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
            stamina: 11n
        },
        categoryPath: ['行为', '生活', '搜刮'],
        tags: ['collect', 'scavenge', 'sawmill', 'materials']
    },
    
};
