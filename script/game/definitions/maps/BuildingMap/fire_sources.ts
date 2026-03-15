import { BuildingCategoryMap, BuildingDefinition } from './types';

/**
 * 火堆/火源建筑 ID 映射表
 */
export const FireSourceBuildings = {
    CAMPFIRE: "campfire",         // 篝火
    FIRE_ALTAR: "fire_altar",     // 火坛
    FIREPLACE: "fireplace",       // 壁炉
    STEEL_FURNACE: "steel_furnace", // 铸钢炉
} as const;

/**
 * 火堆/火源建筑详细数据表
 */
export const FireSourceBuildingData: Record<string, BuildingDefinition> = {
    [FireSourceBuildings.CAMPFIRE]: {
        id: FireSourceBuildings.CAMPFIRE,
        name: "篝火",
        description: "最基础的野外火源，用于照明、取暖与简易烹饪。",
        category: BuildingCategoryMap.FIRE_SOURCE,
    },
    [FireSourceBuildings.FIRE_ALTAR]: {
        id: FireSourceBuildings.FIRE_ALTAR,
        name: "火坛",
        description: "经围护加固的火源建筑，火势更稳定。",
        category: BuildingCategoryMap.FIRE_SOURCE,
    },
    [FireSourceBuildings.FIREPLACE]: {
        id: FireSourceBuildings.FIREPLACE,
        name: "壁炉",
        description: "室内固定火源，适合长期供暖。",
        category: BuildingCategoryMap.FIRE_SOURCE,
    },
    [FireSourceBuildings.STEEL_FURNACE]: {
        id: FireSourceBuildings.STEEL_FURNACE,
        name: "铸钢炉",
        description: "高温冶炼设施，用于熔炼与铸造钢材。",
        category: BuildingCategoryMap.FIRE_SOURCE,
    },
};
