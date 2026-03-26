import type { ITag } from '../../interface/ITag';
import { TagType } from '../../interface/ITag';

/**
 * 属性标签 ID 映射表
 */
export const AttributeTags = {
    PROBABILITY: '概率',
    LIMIT: '上限',
    BASE: '基础',
    BONUS: '加成',
    DEBUFF: '减益'
} as const;

/**
 * 属性标签 ID
 */
export type AttributeTagID = typeof AttributeTags[keyof typeof AttributeTags];

/**
 * 属性标签详细数据表
 */
export const AttributeTagDataMap: Record<AttributeTagID, ITag> = {
    [AttributeTags.PROBABILITY]: { 
        id: AttributeTags.PROBABILITY, 
        name: '几率', 
        type: TagType.ATTRIBUTE, 
        description: '触发特定事件的可能性',
        categoryPath: ['标签', '属性相关']
    },
    [AttributeTags.LIMIT]: { 
        id: AttributeTags.LIMIT, 
        name: '上限', 
        type: TagType.ATTRIBUTE, 
        description: '属性所能达到的最大理论数值',
        categoryPath: ['标签', '属性相关']
    },
    [AttributeTags.BASE]: { 
        id: AttributeTags.BASE, 
        name: '基础', 
        type: TagType.ATTRIBUTE, 
        description: '属性的最底层初始值',
        categoryPath: ['标签', '属性相关']
    },
    [AttributeTags.BONUS]: { 
        id: AttributeTags.BONUS, 
        name: '加成', 
        type: TagType.ATTRIBUTE, 
        description: '额外的百分比或固定值增强',
        categoryPath: ['标签', '属性相关']
    },
    [AttributeTags.DEBUFF]: { 
        id: AttributeTags.DEBUFF, 
        name: '减益', 
        type: TagType.ATTRIBUTE, 
        description: '负面的状态或能力削弱',
        categoryPath: ['标签', '属性相关']
    },
};
