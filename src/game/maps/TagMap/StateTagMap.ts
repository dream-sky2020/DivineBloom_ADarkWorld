import type { ITag } from '../../interface/ITag';
import { TagType } from '../../interface/ITag';

/**
 * 状态标签 ID 映射表
 */
export const StateTags = {
    PERMANENT: '永久',
    STATE: '状态'
} as const;

/**
 * 状态标签 ID
 */
export type StateTagID = typeof StateTags[keyof typeof StateTags];

/**
 * 状态标签详细数据表
 */
export const StateTagDataMap: Record<StateTagID, ITag> = {
    [StateTags.PERMANENT]: { 
        id: StateTags.PERMANENT, 
        name: '永久', 
        type: TagType.STATE, 
        description: '不会随时间或特定行为消失的效果',
        categoryPath: ['标签', '效果状态']
    },
    [StateTags.STATE]: { 
        id: StateTags.STATE, 
        name: '状态', 
        type: TagType.STATE, 
        description: '作用于角色的临时或持续性效果',
        categoryPath: ['标签', '效果状态']
    },
};
