import type { ItemDefinition } from './types';

/**
 * 材料物品 ID 映射表
 */
export const MaterialItems = {
    IRON: 'iron',         // 铁
    COPPER: 'copper',     // 铜
    SILVER: 'silver',     // 银
    GOLD: 'gold',         // 金
    STONE: 'stone',       // 石
    WOOD: 'wood',         // 木
    MEAT: 'meat',         // 肉
    BONE: 'bone',         // 骨
    FUR: 'fur',           // 毛皮
    TOOTH: 'tooth',       // 牙齿
    SCALE: 'scale',       // 麟
    SALT: 'salt',         // 盐
    WAX: 'wax',           // 蜡
    BLOOD: 'blood',       // 血
    CRYSTAL: 'crystal',   // 水晶
    TEA: 'tea',           // 茶
    OIL: 'oil',           // 油
    SUGAR: 'sugar',       // 糖
    CARBON: 'carbon',     // 碳
    TITANIUM: 'titanium', // 钛
    WINE: 'wine',         // 酒
    GUNPOWDER: 'gunpowder', // 火药
    WHEAT: 'wheat',         // 麦
} as const;

/**
 * 材料详细数据表
 */
export const MaterialItemData: Record<string, ItemDefinition> = {
    [MaterialItems.IRON]: {
        id: MaterialItems.IRON,
        name: '铁',
        description: '血的沉淀物,是一切制造工具的基石',
        volume: 1,
    },
    [MaterialItems.COPPER]: {
        id: MaterialItems.COPPER,
        name: '铜',
        description: '具有良好延展性的金属。',
        volume: 1,
    },
    [MaterialItems.SILVER]: {
        id: MaterialItems.SILVER,
        name: '银',
        description: '明亮且具有特殊抗性的贵金属。',
        volume: 1,
    },
    [MaterialItems.GOLD]: {
        id: MaterialItems.GOLD,
        name: '金',
        description: '极具价值且性质稳定的贵金属。',
        volume: 1,
    },
    [MaterialItems.STONE]: {
        id: MaterialItems.STONE,
        name: '石',
        description: '随处可见的基础材料。',
        volume: 1,
    },
    [MaterialItems.WOOD]: {
        id: MaterialItems.WOOD,
        name: '木',
        description: '从树木中获取的基础建筑与燃料。',
        volume: 1,
    },
    [MaterialItems.MEAT]: {
        id: MaterialItems.MEAT,
        name: '肉',
        description: '从生物身上获取的可食用材料。',
        volume: 1,
    },
    [MaterialItems.BONE]: {
        id: MaterialItems.BONE,
        name: '骨',
        description: '坚硬的生物骨骼，可用于制作工具。',
        volume: 1,
    },
    [MaterialItems.FUR]: {
        id: MaterialItems.FUR,
        name: '毛皮',
        description: '柔软且保暖的生物皮毛。',
        volume: 1,
    },
    [MaterialItems.TOOTH]: {
        id: MaterialItems.TOOTH,
        name: '牙齿',
        description: '锐利的生物牙齿。',
        volume: 1,
    },
    [MaterialItems.SCALE]: {
        id: MaterialItems.SCALE,
        name: '麟',
        description: '坚硬且带有光泽的生物鳞片。',
        volume: 1,
    },
    [MaterialItems.SALT]: {
        id: MaterialItems.SALT,
        name: '盐',
        description: '生活必需的调味品，亦可用于某些仪式。',
        volume: 1,
    },
    [MaterialItems.WAX]: {
        id: MaterialItems.WAX,
        name: '蜡',
        description: '易熔化的固体，用于照明或密封。',
        volume: 1,
    },
    [MaterialItems.TEA]: {
        id: MaterialItems.TEA,
        name: '茶',
        description: '清香袭人，可涤荡心神。',
        volume: 1,
    },
    [MaterialItems.CRYSTAL]: {
        id: MaterialItems.CRYSTAL,
        name: '水晶',
        description: '晶莹剔透的矿物，常蕴含奇异的能量。',
        volume: 1,
    },
    [MaterialItems.OIL]: {
        id: MaterialItems.OIL,
        name: '油',
        description: '黏稠的可燃液体。',
        volume: 1,
    },
    [MaterialItems.SUGAR]: {
        id: MaterialItems.SUGAR,
        name: '糖',
        description: '甜美的结晶，能提供能量。',
        volume: 1,
    },
    [MaterialItems.BLOOD]: {
        id: MaterialItems.BLOOD,
        name: '血',
        description: '世间万物的基础构成，创世神在创造万物后留给人间的最后万能材料。',
        volume: 1,
    },
    [MaterialItems.CARBON]: {
        id: MaterialItems.CARBON,
        name: '碳',
        description: '黑色的非金属元素，是许多合成材料的基础。',
        volume: 1,
    },
    [MaterialItems.TITANIUM]: {
        id: MaterialItems.TITANIUM,
        name: '钛',
        description: '质轻且强度极高的银白色金属，具有卓越的耐腐蚀性。',
        volume: 1,
    },
    [MaterialItems.WINE]: {
        id: MaterialItems.WINE,
        name: '酒',
        description: '辛辣而芬芳的液体，能麻痹神经，亦能激发豪情。',
        volume: 1,
    },
    [MaterialItems.GUNPOWDER]: {
        id: MaterialItems.GUNPOWDER,
        name: '火药',
        description: '极易燃烧且具有爆炸性的粉末，战争与工程的利器。',
        volume: 1,
    },
    [MaterialItems.WHEAT]: {
        id: MaterialItems.WHEAT,
        name: '麦',
        description: '金黄的麦粒，是制作面粉与面包的基础。',
        volume: 1,
    },
};
