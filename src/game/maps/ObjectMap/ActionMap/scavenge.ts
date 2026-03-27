import type { IObjectTemplate } from '../../../interface';

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
export const ScavengeActionData: Record<string, IObjectTemplate> = {
    [ScavengeActions.SCAVENGE_RUINS]: {
        id: ScavengeActions.SCAVENGE_RUINS,
        name: '翻找废墟',
        description: '在坍塌废墟中搜寻可用物资与零件。',
        categoryPath: ['行为', '生活', '搜刮'],
        tags: ['采集', '搜刮', '废墟'],
        kind: 'action',
        stats: {
            'initial_cooldown': 2.5,
            'auto_cooldown_accumulate': 1,
            'max_cooldown_accumulate_charges': 2n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 1,
            'manual_trigger_threshold': 1n,
        }
    },
    [ScavengeActions.SCAVENGE_CORPSE_PILE]: {
        id: ScavengeActions.SCAVENGE_CORPSE_PILE,
        name: '翻找尸堆',
        description: '在尸堆中搜寻可回收材料，存在污染风险。',
        categoryPath: ['行为', '生活', '搜刮'],
        tags: ['采集', '搜刮', '尸骸'],
        kind: 'action',
        stats: {
            'initial_cooldown': 3.2,
            'auto_cooldown_accumulate': 0,
            'max_cooldown_accumulate_charges': 1n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [ScavengeActions.SCAVENGE_FLESH_MOUNTAIN]: {
        id: ScavengeActions.SCAVENGE_FLESH_MOUNTAIN,
        name: '翻找肉山',
        description: '深入肉山缝隙中翻找稀有素材，过程极度危险。',
        categoryPath: ['行为', '生活', '搜刮'],
        tags: ['采集', '搜刮', '肉山', '高风险'],
        kind: 'action',
        stats: {
            'initial_cooldown': 4.5,
            'auto_cooldown_accumulate': 0,
            'max_cooldown_accumulate_charges': 1n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [ScavengeActions.SCAVENGE_SHOP]: {
        id: ScavengeActions.SCAVENGE_SHOP,
        name: '翻找商店',
        description: '在废弃商店中翻箱倒柜，寻找残留商品与工具。',
        categoryPath: ['行为', '生活', '搜刮'],
        tags: ['采集', '搜刮', '商店'],
        kind: 'action',
        stats: {
            'initial_cooldown': 2.0,
            'auto_cooldown_accumulate': 1,
            'max_cooldown_accumulate_charges': 3n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 1,
            'manual_trigger_threshold': 1n,
        }
    },
    [ScavengeActions.SCAVENGE_SAWMILL]: {
        id: ScavengeActions.SCAVENGE_SAWMILL,
        name: '翻找锯木厂',
        description: '在锯木厂遗址中回收木材、齿轮与加工残料。',
        categoryPath: ['行为', '生活', '搜刮'],
        tags: ['采集', '搜刮', '锯木厂', '材料'],
        kind: 'action',
        stats: {
            'initial_cooldown': 2.8,
            'auto_cooldown_accumulate': 1,
            'max_cooldown_accumulate_charges': 2n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 1,
            'manual_trigger_threshold': 1n,
        }
    },
};
