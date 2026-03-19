import type { Item } from '../../interface';

/**
 * 红糖物品 ID 映射表
 */
export const BrownSugarItems = {
    SALTY_BITTER_BROWN_SUGAR: 'salty_bitter_brown_sugar', // 咸苦红糖
    VARIEGATED_BROWN_SUGAR: 'variegated_brown_sugar',     // 杂色红糖
    PURE_BROWN_SUGAR: 'pure_brown_sugar',               // 纯净红糖
    NEW_YEAR_BROWN_SUGAR: 'new_year_brown_sugar',       // 新年红糖
    WEDDING_BROWN_SUGAR: 'wedding_brown_sugar',         // 婚礼红糖
    MEDICAL_BROWN_SUGAR: 'medical_brown_sugar',         // 医疗红糖
    WEALTHY_BROWN_SUGAR: 'wealthy_brown_sugar',         // 富贵红糖
    ROYAL_BROWN_SUGAR: 'royal_brown_sugar',             // 皇家红糖
    RITUAL_BROWN_SUGAR: 'ritual_brown_sugar',           // 祭礼红糖
    DIVINE_BROWN_SUGAR: 'divine_brown_sugar',           // 神酿红糖
} as const;

/**
 * 红糖详细数据表
 */
export const BrownSugarItemData: Record<string, Item> = {
    [BrownSugarItems.SALTY_BITTER_BROWN_SUGAR]: {
        id: BrownSugarItems.SALTY_BITTER_BROWN_SUGAR,
        name: '咸苦红糖',
        description: '由劣质血液粗暴提炼出的红糖，带着令人不适的咸苦味。',
        volume: 0.1,
    },
    [BrownSugarItems.VARIEGATED_BROWN_SUGAR]: {
        id: BrownSugarItems.VARIEGATED_BROWN_SUGAR,
        name: '杂色红糖',
        description: '混合了多种生物血液制成的红糖，色泽不均，品质一般。',
        volume: 0.1,
    },
    [BrownSugarItems.PURE_BROWN_SUGAR]: {
        id: BrownSugarItems.PURE_BROWN_SUGAR,
        name: '纯净红糖',
        description: '经过多重过滤与结晶，从精选血液中提取的纯净糖分。',
        volume: 0.1,
    },
    [BrownSugarItems.NEW_YEAR_BROWN_SUGAR]: {
        id: BrownSugarItems.NEW_YEAR_BROWN_SUGAR,
        name: '新年红糖',
        description: '在岁末年初提炼，寄托了人们对新一年的美好愿望。',
        volume: 0.1,
    },
    [BrownSugarItems.WEDDING_BROWN_SUGAR]: {
        id: BrownSugarItems.WEDDING_BROWN_SUGAR,
        name: '婚礼红糖',
        description: '用于见证神圣婚约的血之糖，寓意着生命与爱的融合。',
        volume: 0.1,
    },
    [BrownSugarItems.MEDICAL_BROWN_SUGAR]: {
        id: BrownSugarItems.MEDICAL_BROWN_SUGAR,
        name: '医疗红糖',
        description: '加入了特殊成分的血液凝结物，在提供甜味的同时具有微弱的恢复效果。',
        volume: 0.1,
    },
    [BrownSugarItems.WEALTHY_BROWN_SUGAR]: {
        id: BrownSugarItems.WEALTHY_BROWN_SUGAR,
        name: '富贵红糖',
        description: '色泽晶莹，口感细腻，是富人阶层彰显身份的奢侈品。',
        volume: 0.1,
    },
    [BrownSugarItems.ROYAL_BROWN_SUGAR]: {
        id: BrownSugarItems.ROYAL_BROWN_SUGAR,
        name: '皇家红糖',
        description: '仅供皇室享用的顶级血糖，由最高贵的血脉提炼而成。',
        volume: 0.1,
    },
    [BrownSugarItems.RITUAL_BROWN_SUGAR]: {
        id: BrownSugarItems.RITUAL_BROWN_SUGAR,
        name: '祭礼红糖',
        description: '用于古老祭典的血红结晶，蕴含着莫名的神圣感。',
        volume: 0.1,
    },
    [BrownSugarItems.DIVINE_BROWN_SUGAR]: {
        id: BrownSugarItems.DIVINE_BROWN_SUGAR,
        name: '神酿红糖',
        description: '传闻中是创世神留下的血滴所化，服之可通神。',
        volume: 0.1,
    },
};
