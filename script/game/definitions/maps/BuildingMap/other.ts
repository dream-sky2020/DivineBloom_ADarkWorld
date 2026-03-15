import { BuildingCategoryMap, BuildingDefinition } from './types';

/**
 * 其他建筑 ID 映射表
 */
export const OtherBuildings = {
    WINDMILL: "windmill", // 风车
} as const;

/**
 * 其他建筑详细数据表
 */
export const OtherBuildingData: Record<string, BuildingDefinition> = {
    [OtherBuildings.WINDMILL]: {
        id: OtherBuildings.WINDMILL,
        name: "风车",
        description: "借助风力驱动的功能建筑，可用于磨制与传动。",
        category: BuildingCategoryMap.OTHER,
    },
};
