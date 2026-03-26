import type { ITag } from '../../interface/ITag';
import { TagType } from '../../interface/ITag';

/**
 * 机制标签 ID 映射表
 */
export const MechanicTags = {
    CRIT: '暴击',
    DODGE: '闪避',
    REFLECTION: '反伤',
    BLEEDING: '流血',
    HEALING: '治疗',
    FEAR: '恐惧',
    RESURRECTION: '复活',
    AOE: '范围伤害',
    STUN: '眩晕'
} as const;

/**
 * 机制标签 ID
 */
export type MechanicTagID = typeof MechanicTags[keyof typeof MechanicTags];

/**
 * 机制标签详细数据表
 */
export const MechanicTagDataMap: Record<MechanicTagID, ITag> = {
    [MechanicTags.CRIT]: { 
        id: MechanicTags.CRIT, 
        name: '暴击', 
        type: TagType.MECHANIC, 
        description: '造成爆发性伤害的几率与威力',
        categoryPath: ['标签', '游戏机制']
    },
    [MechanicTags.DODGE]: { 
        id: MechanicTags.DODGE, 
        name: '闪避', 
        type: TagType.MECHANIC, 
        description: '完全规避敌方攻击的防御技巧',
        categoryPath: ['标签', '游戏机制']
    },
    [MechanicTags.REFLECTION]: { 
        id: MechanicTags.REFLECTION, 
        name: '反伤', 
        type: TagType.MECHANIC, 
        description: '受到攻击时将伤害回敬给攻击者',
        categoryPath: ['标签', '游戏机制']
    },
    [MechanicTags.BLEEDING]: { 
        id: MechanicTags.BLEEDING, 
        name: '流血', 
        type: TagType.MECHANIC, 
        description: '随时间不断损失生命值的负面效果',
        categoryPath: ['标签', '游戏机制']
    },
    [MechanicTags.HEALING]: { 
        id: MechanicTags.HEALING, 
        name: '治疗', 
        type: TagType.MECHANIC, 
        description: '恢复受损生命值的手段',
        categoryPath: ['标签', '游戏机制']
    },
    [MechanicTags.FEAR]: { 
        id: MechanicTags.FEAR, 
        name: '恐惧', 
        type: TagType.MECHANIC, 
        description: '对意志的压迫，削弱角色的各项能力',
        categoryPath: ['标签', '游戏机制']
    },
    [MechanicTags.RESURRECTION]: { 
        id: MechanicTags.RESURRECTION, 
        name: '复活', 
        type: TagType.MECHANIC, 
        description: '在生命耗尽后重新站起来的神迹',
        categoryPath: ['标签', '游戏机制']
    },
    [MechanicTags.AOE]: { 
        id: MechanicTags.AOE, 
        name: '范围伤害', 
        type: TagType.MECHANIC, 
        description: '同时对多个目标生效的打击效果',
        categoryPath: ['标签', '游戏机制']
    },
    [MechanicTags.STUN]: { 
        id: MechanicTags.STUN, 
        name: '眩晕', 
        type: TagType.MECHANIC, 
        description: '使目标失去行动能力的强效控制效果',
        categoryPath: ['标签', '游戏机制']
    },
};
