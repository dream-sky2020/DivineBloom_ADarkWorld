import type { IItem } from '../../../interface';

/**
 * 面包物品 ID 映射表
 */
export const BreadItems = {
    FOAMY_BROWN_BREAD: 'foamy_brown_bread',           // 泡沫黑面包
    SAWDUST_BROWN_BREAD: 'sawdust_brown_bread',       // 木屑黑面包
    DRY_POWDER_BROWN_BREAD: 'dry_powder_brown_bread', // 干粉黑面包
    STONE_BROWN_BREAD: 'stone_brown_bread',           // 石黑面包
    HARD_BROWN_BREAD: 'hard_brown_bread',             // 硬黑面包
    TOUGH_BROWN_BREAD: 'tough_brown_bread',           // 韧黑面包
    SOFT_BROWN_BREAD: 'soft_brown_bread',             // 松软黑面包
    GREYISH_WHITE_BREAD: 'greyish_white_bread',       // 灰白面包
    MIXED_WHITE_BREAD: 'mixed_white_bread',           // 杂白面包
    PURE_WHITE_BREAD: 'pure_white_bread',             // 纯白面包
    YELLOW_SPOTTED_BREAD: 'yellow_spotted_bread',     // 黄斑面包
    TURMERIC_BREAD: 'turmeric_bread',                 // 姜黄面包
    GOLDEN_BREAD: 'golden_bread',                     // 金黄面包
    HOLY_BREAD: 'holy_bread',                         // 圣洁面包
} as const;

/**
 * 面包详细数据表
 */
export const BreadItemData: Record<string, IItem> = {
    [BreadItems.FOAMY_BROWN_BREAD]: {
        id: BreadItems.FOAMY_BROWN_BREAD,
        name: '泡沫黑面包',
        description: '口感轻飘如泡沫，几乎感觉不到实感的劣质黑面包。',
        volume: 0.5,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.SAWDUST_BROWN_BREAD]: {
        id: BreadItems.SAWDUST_BROWN_BREAD,
        name: '木屑黑面包',
        description: '混入了大量木屑，极其难以下咽的黑面包。',
        volume: 0.5,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.DRY_POWDER_BROWN_BREAD]: {
        id: BreadItems.DRY_POWDER_BROWN_BREAD,
        name: '干粉黑面包',
        description: '干瘪且充满粉尘感的黑面包，吃完会感到异常口渴。',
        volume: 0.5,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.STONE_BROWN_BREAD]: {
        id: BreadItems.STONE_BROWN_BREAD,
        name: '石黑面包',
        description: '坚硬如石，常被戏称为防御用面包。',
        volume: 0.5,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.HARD_BROWN_BREAD]: {
        id: BreadItems.HARD_BROWN_BREAD,
        name: '硬黑面包',
        description: '质地紧硬的黑面包，需要良好的牙口。',
        volume: 0.5,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.TOUGH_BROWN_BREAD]: {
        id: BreadItems.TOUGH_BROWN_BREAD,
        name: '韧黑面包',
        description: '富有嚼劲（或者说难以扯断）的黑面包。',
        volume: 0.5,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.SOFT_BROWN_BREAD]: {
        id: BreadItems.SOFT_BROWN_BREAD,
        name: '松软黑面包',
        description: '难得一见的松软黑面包，品质尚佳。',
        volume: 0.5,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.GREYISH_WHITE_BREAD]: {
        id: BreadItems.GREYISH_WHITE_BREAD,
        name: '灰白面包',
        description: '由于面粉不够纯净而呈现灰白色的普通面包。',
        volume: 0.4,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.MIXED_WHITE_BREAD]: {
        id: BreadItems.MIXED_WHITE_BREAD,
        name: '杂白面包',
        description: '混有杂质的白面包，口感一般。',
        volume: 0.4,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.PURE_WHITE_BREAD]: {
        id: BreadItems.PURE_WHITE_BREAD,
        name: '纯白面包',
        description: '洁白无瑕的精制白面包，是身份的象征。',
        volume: 0.4,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.YELLOW_SPOTTED_BREAD]: {
        id: BreadItems.YELLOW_SPOTTED_BREAD,
        name: '黄斑面包',
        description: '表面带有不均匀黄色斑点的特色面包。',
        volume: 0.4,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.TURMERIC_BREAD]: {
        id: BreadItems.TURMERIC_BREAD,
        name: '姜黄面包',
        description: '加入了姜黄调制，色泽金黄且带有独特辛香。',
        volume: 0.4,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.GOLDEN_BREAD]: {
        id: BreadItems.GOLDEN_BREAD,
        name: '金黄面包',
        description: '色泽诱人，香气扑鼻的顶级面包。',
        volume: 0.4,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
    [BreadItems.HOLY_BREAD]: {
        id: BreadItems.HOLY_BREAD,
        name: '圣洁面包',
        description: '仿佛散发着微光，被赋予了祝福的神圣面包。',
        volume: 0.4,
        categoryPath: ['物品', '消耗品', '面包系列'],
    },
};
