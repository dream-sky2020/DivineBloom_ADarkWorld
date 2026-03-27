import type { IObjectTemplate } from '../../../interface/IObjectTemplate';

/**
 * 对话数据映射表
 * 使用 IObjectTemplate 接口
 */
export const DialogueDataMap: Record<string, IObjectTemplate> = {
    'intro_01': {
        id: 'intro_01',
        name: '新手入门',
        description: '初次进入世界的引导对话。',
        categoryPath: ['对话', '剧情', '新手'],
        kind: 'dialogue',
        stats: {}
    }
};

/**
 * 对话地图定义 (自我描述)
 */
export const DialogueMapDefinition = {
    kind: 'dialogue',
    data: DialogueDataMap,
} as const;
