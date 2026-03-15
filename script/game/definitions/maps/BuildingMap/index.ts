import { BuildingDefinition } from './types';
import { StatueBuildings, StatueBuildingData } from './statues';
import { FireSourceBuildings, FireSourceBuildingData } from './fire_sources';
import { HousingBuildings, HousingBuildingData } from './housing';
import { OtherBuildings, OtherBuildingData } from './other';

export * from './types';
export * from './statues';
export * from './fire_sources';
export * from './housing';
export * from './other';

/**
 * 建筑 ID 映射表 (基础 ID)
 */
export const BuildingTypeMap = {
    ...StatueBuildings,
    ...FireSourceBuildings,
    ...HousingBuildings,
    ...OtherBuildings,
} as const;

/**
 * 建筑 ID 类型
 */
export type BuildingType = typeof BuildingTypeMap[keyof typeof BuildingTypeMap];

/**
 * 建筑详细数据表
 */
export const BuildingDataMap: Record<BuildingType, BuildingDefinition> = {
    ...StatueBuildingData,
    ...FireSourceBuildingData,
    ...HousingBuildingData,
    ...OtherBuildingData,
} as Record<BuildingType, BuildingDefinition>;
