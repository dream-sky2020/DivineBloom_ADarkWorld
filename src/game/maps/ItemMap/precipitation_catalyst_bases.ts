import type { ItemDefinition } from './types';

/**
 * 沉淀催化基底系列物品 ID 映射表
 */
export const PrecipitationCatalystItems = {
    BONE_PRECIPITATION_CATALYST: 'bone_precipitation_catalyst', // 骨沉淀催化基底
    FUR_PRECIPITATION_CATALYST: 'fur_precipitation_catalyst', // 毛皮沉淀催化基底
    SUGAR_PRECIPITATION_CATALYST: 'sugar_precipitation_catalyst', // 糖沉淀催化基底
    GUNPOWDER_PRECIPITATION_CATALYST: 'gunpowder_precipitation_catalyst' // 火药沉淀催化基底
} as const;

/**
 * 沉淀催化基底系列详细数据表
 */
export const PrecipitationCatalystItemData: Record<string, ItemDefinition> = {
    [PrecipitationCatalystItems.BONE_PRECIPITATION_CATALYST]: {
        id: PrecipitationCatalystItems.BONE_PRECIPITATION_CATALYST,
        name: '骨沉淀催化基底',
        description: '以骨骼沉淀物为基础制成的催化基底，用于特定的转化流程。',
        volume: 1
    },
    [PrecipitationCatalystItems.FUR_PRECIPITATION_CATALYST]: {
        id: PrecipitationCatalystItems.FUR_PRECIPITATION_CATALYST,
        name: '毛皮沉淀催化基底',
        description: '以毛皮沉淀物为基础制成的催化基底，用于特定的转化流程。',
        volume: 1
    },
    [PrecipitationCatalystItems.SUGAR_PRECIPITATION_CATALYST]: {
        id: PrecipitationCatalystItems.SUGAR_PRECIPITATION_CATALYST,
        name: '糖沉淀催化基底',
        description: '以糖沉淀物为基础制成的催化基底，用于特定的转化流程。',
        volume: 1
    },
    [PrecipitationCatalystItems.GUNPOWDER_PRECIPITATION_CATALYST]: {
        id: PrecipitationCatalystItems.GUNPOWDER_PRECIPITATION_CATALYST,
        name: '火药沉淀催化基底',
        description: '以火药沉淀物为基础制成的催化基底，用于特定的转化流程。',
        volume: 1
    }
};
