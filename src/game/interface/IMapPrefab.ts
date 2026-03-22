import type { IPrefab } from './IPrefab';
import type { EnemyID } from '../maps/EnemyMap';

/**
 * 地图/区域预制体接口
 */
export interface IMapPrefab extends IPrefab {
    /** 危险等级 (影响掉落和敌人强度) */
    dangerLevel: number;
    
    /** 可能出现的敌人列表及权重 */
    possibleEnemies?: Array<{
        enemyId: EnemyID;
        weight: number;
    }>;
    
    /** 可在该区域执行的特殊行动 ID 列表 (对应 ActionMap) */
    availableActions?: string[];
}
