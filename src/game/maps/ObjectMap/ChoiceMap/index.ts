import type { IObject } from '../../../interface';

/**
 * 具体的对话选项接口
 */
export interface IChoiceOption {
    /** 选项的唯一 ID */
    id: string;
    /** 选项显示的文本内容 */
    text: string;
    /** 选后转到的下一个对话节点 ID (如果有) */
    nextNode?: string;
    /** 选后触发的命令或事件 ID (如果有) */
    action?: string;
    /** 选后触发的自定义逻辑回调 (可选) */
    callback?: () => void;
    /** 该选项显示的条件判断函数 (可选) */
    condition?: (world: any) => boolean;
}

/**
 * 对话选择组 (Choice Set) 接口
 */
export interface IChoiceGroup extends IObject {
    /** 选项的字典集，键为选项 ID */
    options: Record<string, IChoiceOption>;
}

/**
 * 对话选择数据映射表
 */
export const ChoiceDataMap: Record<string, IChoiceGroup> = {
    'intro_choices': {
        id: 'intro_choices',
        name: '新手引导选择组',
        description: '引导玩家熟悉系统的最初选择。',
        options: {
            'ready': {
                id: 'ready',
                text: '我准备好了',
                nextNode: 'ready',
                action: 'LOG_MESSAGE:玩家已经做好了准备。'
            },
            'wait': {
                id: 'wait',
                text: '我还需要点时间',
                nextNode: 'wait',
                action: 'LOG_MESSAGE:玩家还在犹豫。'
            }
        }
    }
};

/**
 * 对话选择地图定义 (自我描述)
 */
export const ChoiceMapDefinition = {
    kind: 'choice',
    data: ChoiceDataMap,
} as const;
