import type { IObjectTemplate } from '../../../interface/IObjectTemplate';

/**
 * 对话选择数据映射表
 * 使用 IObjectTemplate 接口
 */
export const ChoiceDataMap: Record<string, IObjectTemplate> = {
    'intro_choices': {
        id: 'intro_choices',
        name: '新手引导选择组',
        description: '引导玩家熟悉系统的最初选择。',
        categoryPath: ['对话', '选择', '新手'],
        kind: 'choice',
        stats: {}
    }
};

/**
 * 对话选择地图定义 (自我描述)
 */
export const ChoiceMapDefinition = {
    kind: 'choice',
    data: ChoiceDataMap,
} as const;
