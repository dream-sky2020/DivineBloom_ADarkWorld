import type { IPrefab } from './IPrefab';
import type { EnemyID } from '../maps/PrefabMap/EnemyMap';

/**
 * 可能探索到的物品配置
 */
export interface MapDiscoveryItem {
    /** 物品 ID (需对应 ItemDataMap) */
    itemId: string;
    /** 基础发现概率 (0-1) */
    probability: number;
}

/**
 * 区域内的搜索/探索发现配置
 */
export interface MapDiscoveryConfig {
    /** 可能探索到的物品列表 */
    items?: MapDiscoveryItem[];
}

/**
 * 可能出现的敌人及权重配置
 */
export interface MapPossibleEnemy {
    enemyId: EnemyID;
    /** 生成概率权重 (由系统归一化处理) */
    weight: number;
}

/**
 * 地图/区域预制体接口
 * 定义地图区域的危险等级、敌人生成、可用行动及探索发现配置
 */
export interface IMapPrefab extends IPrefab {
    /** 危险等级 (影响敌人生成与事件触发) */
    dangerLevel: number;
    
    /** 
     * 该区域可能出现的敌人 ID 及其生成权重
     */
    possibleEnemies?: MapPossibleEnemy[];
    
    /** 
     * 该区域默认可执行的行为 ID 列表 (例如：翻找、采集)
     */
    availableActions?: string[];

    /**
     * 区域内的搜索/探索发现配置
     */
    discovery?: MapDiscoveryConfig;
}
