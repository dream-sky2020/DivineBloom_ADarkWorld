import type { ITag } from '../../interface/ITag';
import { TagType } from '../../interface/ITag';

/**
 * 系统标签 ID 映射表
 */
export const SystemTags = {
    BATTLE: '战斗',
    SURVIVAL: '生存',
    STATISTICS: '统计',
    RESOURCES: '资源',
    REINCARNATION: '转生',
    BLOOD: '血液',
    UI: '界面',
    COORDINATE: '坐标',
    TRIGGER: '触发'
} as const;

/**
 * 系统标签 ID
 */
export type SystemTagID = typeof SystemTags[keyof typeof SystemTags];

/**
 * 系统标签详细数据表
 */
export const SystemTagDataMap: Record<SystemTagID, ITag> = {
    [SystemTags.BATTLE]: { 
        id: SystemTags.BATTLE, 
        name: '战斗', 
        type: TagType.SYSTEM, 
        description: '与战斗流程相关的核心逻辑',
        categoryPath: ['标签', '核心系统']
    },
    [SystemTags.SURVIVAL]: { 
        id: SystemTags.SURVIVAL, 
        name: '生存', 
        type: TagType.SYSTEM, 
        description: '关乎角色生死存亡的基础属性',
        categoryPath: ['标签', '核心系统']
    },
    [SystemTags.STATISTICS]: { 
        id: SystemTags.STATISTICS, 
        name: '统计', 
        type: TagType.SYSTEM, 
        description: '用于后台数据累计与成就追踪',
        categoryPath: ['标签', '核心系统']
    },
    [SystemTags.RESOURCES]: { 
        id: SystemTags.RESOURCES, 
        name: '资源', 
        type: TagType.SYSTEM, 
        description: '游戏中可获取、消耗或交易的物资',
        categoryPath: ['标签', '核心系统']
    },
    [SystemTags.REINCARNATION]: { 
        id: SystemTags.REINCARNATION, 
        name: '转生', 
        type: TagType.SYSTEM, 
        description: '跨越轮回的永久性加成与进度',
        categoryPath: ['标签', '核心系统']
    },
    [SystemTags.BLOOD]: { 
        id: SystemTags.BLOOD, 
        name: '血液', 
        type: TagType.SYSTEM, 
        description: '生命力流出的源泉，也是极其重要的炼金与生存资源',
        categoryPath: ['标签', '核心系统']
    },
    [SystemTags.UI]: { 
        id: SystemTags.UI, 
        name: '界面', 
        type: TagType.SYSTEM, 
        description: '与用户交互界面、显示逻辑相关的标签',
        categoryPath: ['标签', '核心系统']
    },
    [SystemTags.COORDINATE]: { 
        id: SystemTags.COORDINATE, 
        name: '坐标', 
        type: TagType.SYSTEM, 
        description: '涉及位置、空间坐标定位的逻辑',
        categoryPath: ['标签', '核心系统']
    },
    [SystemTags.TRIGGER]: { 
        id: SystemTags.TRIGGER, 
        name: '触发', 
        type: TagType.SYSTEM, 
        description: '定义事件发生的条件或时机',
        categoryPath: ['标签', '核心系统']
    },
};
