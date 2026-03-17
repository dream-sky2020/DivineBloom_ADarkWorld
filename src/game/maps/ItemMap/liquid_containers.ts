import type { ItemDefinition } from './types';

/**
 * 液体容器系列物品 ID 映射表
 */
export const LiquidContainerItems = {
    WHITE_CAN: 'white_can', // 白罐
    QING_BOTTLE: 'qing_bottle', // 青瓶
    RED_BOX: 'red_box' // 红箱
} as const;

/**
 * 液体容器系列详细数据表
 */
export const LiquidContainerItemData: Record<string, ItemDefinition> = {
    [LiquidContainerItems.WHITE_CAN]: {
        id: LiquidContainerItems.WHITE_CAN,
        name: '白罐',
        description: '帝王颁布的标准化液体容器之一，通用耐用，适合基础储液。',
        volume: 1
    },
    [LiquidContainerItems.QING_BOTTLE]: {
        id: LiquidContainerItems.QING_BOTTLE,
        name: '青瓶',
        description: '帝王颁布的标准化液体容器之一，便于携行与精细分装。',
        volume: 1.5
    },
    [LiquidContainerItems.RED_BOX]: {
        id: LiquidContainerItems.RED_BOX,
        name: '红箱',
        description: '帝王颁布的标准化液体容器之一，容量更大，适合集中储运。',
        volume: 5
    }
};
