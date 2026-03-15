import { BuildingCategoryMap, BuildingDefinition } from './types';

/**
 * 居住建筑 ID 映射表
 */
export const HousingBuildings = {
    WOODEN_HUT: "wooden_hut",               // 木屋
    BRICK_STONE_HOUSE: "brick_stone_house", // 砖石住宅
} as const;

/**
 * 居住建筑详细数据表
 */
export const HousingBuildingData: Record<string, BuildingDefinition> = {
    [HousingBuildings.WOODEN_HUT]: {
        id: HousingBuildings.WOODEN_HUT,
        name: "木屋",
        description: "由木材搭建的基础居所，建造成本低。",
        category: BuildingCategoryMap.HOUSING,
    },
    [HousingBuildings.BRICK_STONE_HOUSE]: {
        id: HousingBuildings.BRICK_STONE_HOUSE,
        name: "砖石住宅",
        description: "砖石结构住宅，耐久与防护能力更高。",
        category: BuildingCategoryMap.HOUSING,
    },
};
