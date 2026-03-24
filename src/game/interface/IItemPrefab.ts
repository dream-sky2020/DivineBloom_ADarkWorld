import type { IPrefab } from './IPrefab';
import type { IAttributeModifier } from './IAttributeModifier';
import type { AttributePredicateSet } from './IAttributePredicate';
import type { ItemAttributeID } from '../maps/AttributeMap';

/**
 * 转换触发条件位掩码
 */
export const ItemTransformTrigger = {
    NONE: 0,
    USAGE: 1 << 0,
    TIME: 1 << 1,
    PROCESS: 1 << 2,
} as const;

/**
 * 物品营养成分 (支持 bigint | number)
 */
export interface ItemNutrition {
    /** 蛋白质含量 */
    protein: bigint | number;
    /** 脂肪含量 */
    fat: bigint | number;
    /** 碳水化合物含量 */
    carbs: bigint | number;
    /** 维生素含量 */
    vitamin: bigint | number;
    /** 水分含量 */
    water: bigint | number;
    /** 矿物质含量 */
    minerals: bigint | number;
}

/**
 * 物品转化/演变逻辑 (例如：腐烂、加工后变样)
 */
export interface ItemTransform {
    /** 触发转化的掩码条件 (见 ItemTransformTrigger) */
    triggerMask: number;
    /** 转化后的目标物品 ID */
    to: string;
    /** 转化发生的概率 (0-1) */
    probability: number;
}

/**
 * 物品预制体接口
 * 定义物品的基础属性、效果、转化逻辑等静态数据
 */
export interface IItemPrefab extends IPrefab<ItemAttributeID> {
    /** 物品类型 (如: 'weapon', 'armor', 'consumable', 'material', 'reincarnation_upgrade') */
    itemType?: string;

    /** 物品携带的属性修改器列表 (如装备加成, 或转生升级带来的永久提升) */
    modifiers?: IAttributeModifier[];
    
    /** 最大堆叠数量 (默认为 1) */
    maxStack?: number;
    
    /** 物品等级/品质 (可选) */
    quality?: number;

    /** 占用体积 (物品所占空间) (支持 bigint | number) */
    volume?: bigint | number;

    /** 营养成分 (食物类物品可选) */
    nutrition?: ItemNutrition;

    /** 放射性强度 (若物品具有辐射) (支持 bigint | number) */
    radioactivity?: bigint | number;

    /** 包含的基本元素 (例如：用于分解或合成) */
    elements?: Record<string, bigint | number>;

    /** 物品转化/演变逻辑 */
    transform?: ItemTransform;

    /** 拆除/爆破力 (用于特定的场景交互) (支持 bigint | number) */
    demolitionPower?: bigint | number;

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
