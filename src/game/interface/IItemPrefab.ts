import type { IPrefab } from './IPrefab';
import type { AttributeModifier } from '../datas/AttributeModifier';

/**
 * 物品预制体接口
 * 定义物品的基础属性、效果等数据
 */
export interface IItemPrefab extends IPrefab {
    /** 物品携带的属性修改器列表 (如装备加成) */
    modifiers?: AttributeModifier[];
    
    /** 物品类型 (如: 'weapon', 'armor', 'consumable', 'material') */
    itemType: string;
    
    /** 最大堆叠数量 (默认为 1) */
    maxStack?: number;
    
    /** 物品等级/品质 (可选) */
    quality?: number;
}
