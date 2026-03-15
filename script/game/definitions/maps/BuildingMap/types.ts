/**
 * 建筑分类映射表
 */
export const BuildingCategoryMap = {
    STATUE: "statue",           // 神像
    FIRE_SOURCE: "fire_source", // 火堆/火源
    HOUSING: "housing",         // 居住建筑
    OTHER: "other",             // 其他建筑
} as const;

/**
 * 建筑分类类型
 */
export type BuildingCategory = typeof BuildingCategoryMap[keyof typeof BuildingCategoryMap];

/**
 * 建筑详细定义接口
 */
export interface BuildingDefinition {
    id: string;
    name: string;
    description: string;
    category: BuildingCategory;
    deity?: string;
}
