import type { IAttribute } from '../../interface';

/**
 * 对话选择相关属性 ID 映射表
 */
export const ChoiceAttributes = {
    /** 当前可用的选择 ID 列表 */
    AVAILABLE_CHOICES: 'available_choices',
    /** 当前选中的选择索引 (用于键盘/手柄交互) */
    SELECTED_CHOICE_INDEX: 'selected_choice_index',
    /** 选择系统的可视状态 (如: 'visible', 'hidden') */
    CHOICE_VISIBILITY: 'choice_visibility',
    /** 最近一次做出的选择 ID */
    LAST_CHOSEN_ID: 'last_chosen_id',
} as const;

/**
 * 对话选择相关属性详细数据表
 */
export const ChoiceAttributeData: Record<string, IAttribute> = {
    [ChoiceAttributes.AVAILABLE_CHOICES]: {
        id: ChoiceAttributes.AVAILABLE_CHOICES,
        kind: 'current',
        name: '可用选择列表',
        description: '当前对话节点下所有可供玩家点击的选择项 ID。',
        defaultValue: [],
        valueType: 'id_array',
        category: 'choice',
        categoryPath: ['属性', '对话', '选择'],
    },
    [ChoiceAttributes.SELECTED_CHOICE_INDEX]: {
        id: ChoiceAttributes.SELECTED_CHOICE_INDEX,
        kind: 'current',
        name: '当前选中项索引',
        description: '玩家当前悬停或选中的选项索引值。',
        defaultValue: -1,
        valueType: 'number',
        category: 'choice',
        categoryPath: ['属性', '对话', '选择'],
    },
    [ChoiceAttributes.CHOICE_VISIBILITY]: {
        id: ChoiceAttributes.CHOICE_VISIBILITY,
        kind: 'current',
        name: '选择框可见性',
        description: '对话选择界面是否显示。',
        defaultValue: 'hidden',
        valueType: 'string',
        category: 'choice',
        categoryPath: ['属性', '对话', '显示'],
    },
    [ChoiceAttributes.LAST_CHOSEN_ID]: {
        id: ChoiceAttributes.LAST_CHOSEN_ID,
        kind: 'current',
        name: '最后选择 ID',
        description: '玩家最近一次点击确认的选择项 ID。',
        defaultValue: '',
        valueType: 'id',
        category: 'choice',
        categoryPath: ['属性', '对话', '记录'],
    },
};
