import type { IAttribute } from '../../interface';

/**
 * 对话系统相关属性 ID 映射表
 */
export const DialogueAttributes = {
    /** 当前对话 ID */
    CURRENT_DIALOGUE_ID: 'current_dialogue_id',
    /** 当前对话节点 ID */
    CURRENT_NODE_ID: 'current_node_id',
    /** 对话说话者名称 */
    SPEAKER_NAME: 'speaker_name',
    /** 对话文本内容 (当前显示的文本) */
    DIALOGUE_CONTENT: 'dialogue_content',
    /** 对话状态 (如: 'idle', 'talking', 'finished') */
    DIALOGUE_STATE: 'dialogue_state',
    /** 当前活跃的对话 ID 列表 (用于动态加载) */
    ACTIVE_DIALOGUE_LIST: 'active_dialogue_list',
    /** 已完成的对话 ID 历史记录 */
    DIALOGUE_HISTORY: 'dialogue_history',
} as const;

/**
 * 对话系统相关属性详细数据表
 */
export const DialogueAttributeData: Record<string, IAttribute> = {
    [DialogueAttributes.CURRENT_DIALOGUE_ID]: {
        id: DialogueAttributes.CURRENT_DIALOGUE_ID,
        kind: 'current',
        name: '当前对话 ID',
        description: '正在进行的对话唯一标识符。',
        defaultValue: '',
        valueType: 'id',
        category: 'dialogue',
        categoryPath: ['属性', '对话', '状态'],
    },
    [DialogueAttributes.CURRENT_NODE_ID]: {
        id: DialogueAttributes.CURRENT_NODE_ID,
        kind: 'current',
        name: '当前对话节点 ID',
        description: '当前对话进行到的具体节点。',
        defaultValue: '',
        valueType: 'id',
        category: 'dialogue',
        categoryPath: ['属性', '对话', '状态'],
    },
    [DialogueAttributes.SPEAKER_NAME]: {
        id: DialogueAttributes.SPEAKER_NAME,
        kind: 'current',
        name: '说话者名称',
        description: '当前正在说话的角色名称。',
        defaultValue: '???',
        valueType: 'string',
        category: 'dialogue',
        categoryPath: ['属性', '对话', '显示'],
    },
    [DialogueAttributes.DIALOGUE_CONTENT]: {
        id: DialogueAttributes.DIALOGUE_CONTENT,
        kind: 'current',
        name: '对话内容',
        description: '当前显示的对话文本。',
        defaultValue: '',
        valueType: 'string',
        category: 'dialogue',
        categoryPath: ['属性', '对话', '显示'],
    },
    [DialogueAttributes.DIALOGUE_STATE]: {
        id: DialogueAttributes.DIALOGUE_STATE,
        kind: 'current',
        name: '对话状态',
        description: '对话系统的运行状态。',
        defaultValue: 'idle',
        valueType: 'string',
        category: 'dialogue',
        categoryPath: ['属性', '对话', '状态'],
    },
    [DialogueAttributes.ACTIVE_DIALOGUE_LIST]: {
        id: DialogueAttributes.ACTIVE_DIALOGUE_LIST,
        kind: 'current',
        name: '当前活跃对话列表',
        description: '当前正在挂载或等待触发的对话 ID 列表。',
        defaultValue: [],
        valueType: 'id_array',
        category: 'dialogue',
        categoryPath: ['属性', '对话', '管理'],
    },
    [DialogueAttributes.DIALOGUE_HISTORY]: {
        id: DialogueAttributes.DIALOGUE_HISTORY,
        kind: 'current',
        name: '对话历史记录',
        description: '已经播放完成的对话 ID 记录。',
        defaultValue: [],
        valueType: 'id_array',
        category: 'dialogue',
        categoryPath: ['属性', '对话', '管理'],
    },
};
