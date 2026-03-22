import type { IPrefab } from './IPrefab';
import type { AttributeModifier } from '../datas/AttributeModifier';
import type { AttributePredicateSet } from '../datas/AttributePredicate';

/**
 * 转生升级预制体接口
 * 定义转生后可购买的永久性增强
 */
export interface IReincarnationUpgradePrefab extends IPrefab {
    /** 升级提供的永久属性修改器 */
    modifiers: AttributeModifier[];
    
    /** 开启该升级项所需的条件 (如: 灵魂点数、前置升级) */
    requirements?: AttributePredicateSet;
    
    /** 升级价格 (通常为灵魂点数或其他特殊货币) */
    cost: bigint | number;
    
    /** 升级分类 (如: 'physical', 'mental', 'magical') */
    category: string;
}
