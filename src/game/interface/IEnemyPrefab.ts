import type { IPrefab } from './IPrefab';
import type { AttributeTypeMap } from '../maps/AttributeMap';

/**
 * 敌人预制体接口
 * 定义敌人的基础属性、掉落等数据
 */
export interface IEnemyPrefab extends IPrefab {
    /** 初始属性集 (Key 为属性 ID) */
    stats: Partial<Record<typeof AttributeTypeMap[keyof typeof AttributeTypeMap], number | bigint>>;
    
    /** 关卡难度系数 (可选) */
    level?: number;
    
    /** 掉落表 ID (可选) */
    lootTableId?: string;
}
