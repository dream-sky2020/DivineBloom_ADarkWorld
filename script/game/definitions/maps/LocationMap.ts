/**
 * 地点类型映射表 (基础 ID)
 */
export const LocationTypeMap = {
    NONE: "none",
    VILLAGE: "village",
    IRON_MINE: "iron_mine",
    COAL_MINE: "coal_mine",
    SULPHUR_MINE: "sulphur_mine",
    FOREST: "forest",
    FIELD: "field",
    BARRENS: "barrens",
    TOWN: "town",
    CITY: "city",
    OUTPOST: "outpost",
    SHIP: "ship",
} as const;

/**
 * 地点 ID 类型
 */
export type LocationType = typeof LocationTypeMap[keyof typeof LocationTypeMap];

/**
 * 地点详细定义接口
 */
export interface LocationDefinition {
    id: LocationType;
    name: string;
    description: string;
    
    /**
     * 完全探明需要的探索值
     */
    requiredDiscovery: number;

    /**
     * 最大探索值 (该地点可以达到的探索上限)
     */
    maxExploration: number;

    /**
     * 分阶段的安全保护区域配置：探索值阈值 -> 对应的体积
     * 例如: { 0: 10, 30: 50, 100: 200 }
     */
    safeZonePhases: Record<number, number>;

    /**
     * 生成权重 (用于地图随机生成)
     */
    spawnWeight: number;
}

/**
 * 根据当前探索值获取地点的当前安全体积
 * @param definition 地点定义
 * @param currentExploration 当前探索值 (0-100+)
 */
export function getSafeZoneVolume(definition: LocationDefinition, currentExploration: number): number {
    const phases = definition.safeZonePhases;
    // 获取所有阈值并从大到小排序
    const thresholds = Object.keys(phases).map(Number).sort((a, b) => b - a);
    // 找到第一个小于等于当前探索值的阈值
    const activeThreshold = thresholds.find(t => currentExploration >= t);
    return activeThreshold !== undefined ? phases[activeThreshold] : 0;
}

/**
 * 地点详细数据表
 */
export const LocationDataMap: Record<LocationType, LocationDefinition> = {
    [LocationTypeMap.NONE]: {
        id: "none",
        name: "空地",
        description: "荒芜的虚无之地。",
        requiredDiscovery: 10,
        maxExploration: 10,
        safeZonePhases: { 0: 0 },
        spawnWeight: 0
    },
    [LocationTypeMap.VILLAGE]: {
        id: "village",
        name: "村庄",
        description: "一个宁静的小村庄，可能有些幸存者。",
        requiredDiscovery: 200,
        maxExploration: 200,
        safeZonePhases: { 0: 10, 30: 30, 100: 50 },
        spawnWeight: 10
    },
    [LocationTypeMap.IRON_MINE]: {
        id: "iron_mine",
        name: "铁矿场",
        description: "富含铁矿石的地下深矿。",
        requiredDiscovery: 300,
        maxExploration: 300,
        safeZonePhases: { 0: 2, 30: 5, 100: 10 },
        spawnWeight: 5
    },
    [LocationTypeMap.COAL_MINE]: {
        id: "coal_mine",
        name: "煤矿场",
        description: "黑烟滚滚，这里盛产燃料。",
        requiredDiscovery: 300,
        maxExploration: 300,
        safeZonePhases: { 0: 2, 30: 5, 100: 10 },
        spawnWeight: 5
    },
    [LocationTypeMap.SULPHUR_MINE]: {
        id: "sulphur_mine",
        name: "硫磺矿",
        description: "空气中弥漫着刺鼻的硫磺味。",
        requiredDiscovery: 400,
        maxExploration: 400,
        safeZonePhases: { 0: 1, 30: 3, 100: 5 },
        spawnWeight: 3
    },
    [LocationTypeMap.FOREST]: {
        id: "forest",
        name: "森林",
        description: "茂密的树林，是获取木材的好去处。",
        requiredDiscovery: 150,
        maxExploration: 150,
        safeZonePhases: { 0: 5, 30: 12, 100: 20 },
        spawnWeight: 20
    },
    [LocationTypeMap.FIELD]: {
        id: "field",
        name: "原野",
        description: "开阔的草地，适合观察四周。",
        requiredDiscovery: 100,
        maxExploration: 100,
        safeZonePhases: { 0: 20, 30: 50, 100: 100 },
        spawnWeight: 15
    },
    [LocationTypeMap.BARRENS]: {
        id: "barrens",
        name: "荒原",
        description: "贫瘠的土地，几乎没有任何资源。",
        requiredDiscovery: 100,
        maxExploration: 100,
        safeZonePhases: { 0: 30, 30: 80, 100: 150 },
        spawnWeight: 15
    },
    [LocationTypeMap.TOWN]: {
        id: "town",
        name: "小镇",
        description: "曾经繁华的定居点。",
        requiredDiscovery: 500,
        maxExploration: 500,
        safeZonePhases: { 0: 40, 30: 100, 100: 200 },
        spawnWeight: 8
    },
    [LocationTypeMap.CITY]: {
        id: "city",
        name: "废弃都市",
        description: "巨大的建筑废墟，隐藏着未知的危险和机遇。",
        requiredDiscovery: 1000,
        maxExploration: 1000,
        safeZonePhases: { 0: 50, 30: 150, 100: 500 },
        spawnWeight: 2
    },
    [LocationTypeMap.OUTPOST]: {
        id: "outpost",
        name: "前哨站",
        description: "简陋但坚固的防御工事。",
        requiredDiscovery: 250,
        maxExploration: 250,
        safeZonePhases: { 0: 5, 30: 15, 100: 30 },
        spawnWeight: 5
    },
    [LocationTypeMap.SHIP]: {
        id: "ship",
        name: "搁浅船只",
        description: "锈迹斑斑的大船，也许还能找到一些补给。",
        requiredDiscovery: 350,
        maxExploration: 350,
        safeZonePhases: { 0: 8, 30: 20, 100: 40 },
        spawnWeight: 3
    }
};
