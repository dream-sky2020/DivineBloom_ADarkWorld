/**
 * 地图区域定义接口
 */
export interface MapAreaDefinition {
    id: string;
    name: string;
    description: string;
    /**
     * 区域标签 (例如: forest, cave, city, etc.)
     */
    tags?: string[];
    /**
     * 区域危险等级
     */
    dangerLevel: number;
    /**
     * 该区域可能出现的敌人 ID 及其权重
     */
    possibleEnemies?: Array<{
        enemyId: string;
        weight: number;
    }>;
    /**
     * 该区域可执行的行为 ID
     */
    availableActions?: string[];
    /**
     * 区域内的探索发现
     */
    discovery?: {
        items?: Array<{
            itemId: string;
            probability: number;
        }>;
    };
}
