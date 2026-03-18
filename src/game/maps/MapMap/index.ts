import type { MapAreaDefinition } from './types';

export * from './types';

/**
 * 地图区域 ID 映射表 (基础 ID)
 */
export const MapAreaItems = {
    // 示例:
    // ABANDONED_VILLAGE: 'abandoned_village',
} as const;

/**
 * 地图区域 ID 类型
 */
export type MapAreaID = typeof MapAreaItems[keyof typeof MapAreaItems];

/**
 * 地图区域详细数据表
 */
export const MapAreaDataMap: Record<string, MapAreaDefinition> = {
    // 示例:
    /*
    [MapAreaItems.ABANDONED_VILLAGE]: {
        id: MapAreaItems.ABANDONED_VILLAGE,
        name: '荒废村庄',
        description: '曾经宁静的村落，现在只有游荡的亡灵和破碎的瓦砾。',
        dangerLevel: 5,
        tags: ['village', 'ruins'],
        possibleEnemies: [
            { enemyId: 'zombie', weight: 70 },
            { enemyId: 'ghost', weight: 30 }
        ],
        availableActions: ['scavenge_ruins', 'search_well'],
        discovery: {
            items: [
                { itemId: 'rusty_nail', probability: 0.4 },
                { itemId: 'old_coin', probability: 0.1 }
            ]
        }
    },
    */
} as Record<string, MapAreaDefinition>;
