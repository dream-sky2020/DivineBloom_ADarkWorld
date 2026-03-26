import type { ITag } from '../../interface/ITag';
import { TagType } from '../../interface/ITag';

/**
 * 物品标签 ID 映射表
 */
export const ItemTags = {
    CONSUMABLE: '消耗品',
    WEAPON: '武器',
    RARE: '稀有'
} as const;

/**
 * 物品标签 ID
 */
export type ItemTagID = typeof ItemTags[keyof typeof ItemTags];

/**
 * 物品标签详细数据表
 */
export const ItemTagDataMap: Record<ItemTagID, ITag> = {
    [ItemTags.CONSUMABLE]: { 
        id: ItemTags.CONSUMABLE, 
        name: '消耗品', 
        type: TagType.ITEM, 
        description: '使用后会消失并产生即时效果的物品',
        categoryPath: ['标签', '物品系统']
    },
    [ItemTags.WEAPON]: { 
        id: ItemTags.WEAPON, 
        name: '武器', 
        type: TagType.ITEM, 
        description: '提升角色攻击手段的装备',
        categoryPath: ['标签', '物品系统']
    },
    [ItemTags.RARE]: { 
        id: ItemTags.RARE, 
        name: '稀有', 
        type: TagType.ITEM, 
        description: '难以寻觅的高价值资源',
        categoryPath: ['标签', '物品系统']
    },
};
