import type { IMapPrefab } from '../../interface/IMapPrefab';

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
 * 使用 IMapPrefab 接口
 */
export const MapAreaDataMap: Record<string, IMapPrefab> = {
    /* 
    [MapAreaItems.ABANDONED_VILLAGE]: {
        id: MapAreaItems.ABANDONED_VILLAGE,
        name: '荒废村庄',
        description: '曾经宁静的村落，现在只有游荡的亡灵和破碎的瓦砾。',
        dangerLevel: 5,
        possibleEnemies: [
            { enemyId: 'zombie' as any, weight: 70 },
            { enemyId: 'ghost' as any, weight: 30 }
        ],
        availableActions: ['scavenge_ruins', 'search_well'],
    },
    */
} as Record<string, IMapPrefab>;
