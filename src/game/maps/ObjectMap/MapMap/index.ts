import type { IObjectTemplate } from '../../../interface/IObjectTemplate';

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
 * 使用 IObjectTemplate 接口
 */
export const MapAreaDataMap: Record<string, IObjectTemplate> = {
    /* 
    [MapAreaItems.ABANDONED_VILLAGE]: {
        id: MapAreaItems.ABANDONED_VILLAGE,
        name: '荒废村庄',
        description: '曾经宁静的村落，现在只有游荡的亡灵和破碎的瓦砾。',
        categoryPath: ['地图', '区域', '废墟'],
        kind: 'map',
        stats: {
            'danger_level': 5,
            'possible_enemies': ['zombie', 'ghost'],
            'available_actions': ['scavenge_ruins', 'search_well'],
        }
    },
    */
} as Record<string, IObjectTemplate>;

/**
 * 地图地图定义 (自我描述)
 */
export const MapMapDefinition = {
    kind: 'map',
    data: MapAreaDataMap,
} as const;
