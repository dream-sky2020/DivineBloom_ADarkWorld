import type { IObject } from '../../../interface';

/**
 * 对话节点接口
 */
export interface IDialogueNode {
    id: string;
    speaker: string;
    content: string;
    next?: string;
    options?: {
        text: string;
        nextNode: string;
        action?: string;
    }[];
}

/**
 * 对话对象接口
 */
export interface IDialogue extends IObject {
    nodes: Record<string, IDialogueNode>;
}

/**
 * 对话数据映射表
 */
export const DialogueDataMap: Record<string, IDialogue> = {
    'intro_01': {
        id: 'intro_01',
        name: '新手入门',
        description: '初次进入世界的引导对话。',
        nodes: {
            'start': {
                id: 'start',
                speaker: '神秘人',
                content: '欢迎来到这个黑暗的世界。',
                next: 'next_01'
            },
            'next_01': {
                id: 'next_01',
                speaker: '神秘人',
                content: '在这里，时间是你唯一的资产。',
                next: 'choice'
            },
            'choice': {
                id: 'choice',
                speaker: '神秘人',
                content: '你准备好开始了吗？',
                options: [
                    { text: '准备好了', nextNode: 'ready' },
                    { text: '再等等', nextNode: 'wait' }
                ]
            },
            'ready': {
                id: 'ready',
                speaker: '神秘人',
                content: '很好，去吧。',
            },
            'wait': {
                id: 'wait',
                speaker: '神秘人',
                content: '时间不等人，别犹豫。',
                next: 'choice'
            }
        }
    }
};

/**
 * 对话地图定义 (自我描述)
 */
export const DialogueMapDefinition = {
    kind: 'dialogue',
    data: DialogueDataMap,
} as const;
