import type { IPrefab } from './IPrefab';
import type { IAttributeModifier } from './IAttributeModifier';

import type { AttributePredicateSet } from './IAttributePredicate';

/**
 * 物品预制体接口
 * 定义物品的基础属性、效果等数据
 */
export interface IItemPrefab extends IPrefab {
    /** 物品携带的属性修改器列表 (如装备加成, 或转生升级带来的永久提升) */
    modifiers?: IAttributeModifier[];
    
    /** 物品类型 (如: 'weapon', 'armor', 'consumable', 'material', 'reincarnation_upgrade') */
    itemType: string;
    
    /** 最大堆叠数量 (默认为 1) */
    maxStack?: number;
    
    /** 物品等级/品质 (可选) */
    quality?: number;

    /** 购买/开启该项所需的条件 (主要用于转生升级项) */
    requirements?: AttributePredicateSet;
    
    /** 基础价格 (主要用于转生升级项) */
    cost?: bigint | number;

    /** 最大等级 (针对可升级项，如转生升级) */
    maxLevel?: number;

    /** 计算特定等级的消耗 (针对可升级项) */
    calculateCost?: (level: number) => bigint | number;

    /** 获取特定等级的效果描述 (针对可升级项) */
    getEffectDescription?: (level: number) => string;
}
