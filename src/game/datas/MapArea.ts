import type { IData } from '../interface/IData';

/**
 * 地图区域定义接口
 */
export interface MapArea extends IData {
    /**
     * 区域危险等级 (影响敌人生成与事件触发)
     */
    dangerLevel: number;
    /**
     * 该区域可能出现的敌人 ID 及其生成权重
     */
    possibleEnemies?: Array<{
        /** 敌人 ID (需对应 EnemyDataMap) */
        enemyId: string;
        /** 生成概率权重 (由系统归一化处理) */
        weight: number;
    }>;
    /**
     * 该区域默认可执行的行为 ID 列表 (例如：翻找、采集)
     */
    availableActions?: string[];
    /**
     * 区域内的搜索/探索发现配置
     */
    discovery?: {
        /** 可能探索到的物品列表 */
        items?: Array<{
            /** 物品 ID (需对应 ItemDataMap) */
            itemId: string;
            /** 基础发现概率 (0-1) */
            probability: number;
        }>;
    };
}
