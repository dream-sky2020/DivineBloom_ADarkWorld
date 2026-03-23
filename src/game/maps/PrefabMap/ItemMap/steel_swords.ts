import type { IItem } from '../../../interface';

/**
 * 钢剑系列物品 ID 映射表
 */
export const SteelSwordItems = {
    SOFT_STEEL_SWORD: 'soft_steel_sword',             // 软钢剑
    RAW_STEEL_SWORD: 'raw_steel_sword',               // 生钢剑
    COOKED_STEEL_SWORD: 'cooked_steel_sword',         // 熟钢剑
    HARD_STEEL_SWORD: 'hard_steel_sword',             // 硬钢剑
    LIGHT_STEEL_SWORD: 'light_steel_sword',           // 轻钢剑
    HEAVY_STEEL_SWORD: 'heavy_steel_sword',           // 重钢剑
    REFINED_STEEL_SWORD: 'refined_steel_sword',       // 精钢剑
    GREY_STEEL_SWORD: 'grey_steel_sword',             // 灰钢剑
    YELLOW_STEEL_SWORD: 'yellow_steel_sword',         // 黄钢剑
    CYAN_STEEL_SWORD: 'cyan_steel_sword',             // 青钢剑
    RED_STEEL_SWORD: 'red_steel_sword',               // 红钢剑
    ROSE_STEEL_SWORD: 'rose_steel_sword',             // 玫瑰钢剑
    PURPLE_STEEL_SWORD: 'purple_steel_sword',         // 紫钢剑
    BLUE_STEEL_SWORD: 'blue_steel_sword',             // 蓝钢剑
    INK_STEEL_SWORD: 'ink_steel_sword',               // 墨钢剑
    WHITE_STEEL_SWORD: 'white_steel_sword',           // 白钢剑
    MIRROR_STEEL_SWORD: 'mirror_steel_sword',         // 镜钢剑
    MOONLIGHT_STEEL_SWORD: 'moonlight_steel_sword',   // 月光钢剑
    SUNLIGHT_STEEL_SWORD: 'sunlight_steel_sword',     // 日光钢剑
} as const;

/**
 * 钢剑系列详细数据表
 */
export const SteelSwordItemData: Record<string, IItem> = {
    [SteelSwordItems.SOFT_STEEL_SWORD]: {
        id: SteelSwordItems.SOFT_STEEL_SWORD,
        name: '软钢剑',
        description: '韧性有余、锋锐不足的训练型钢剑。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.RAW_STEEL_SWORD]: {
        id: SteelSwordItems.RAW_STEEL_SWORD,
        name: '生钢剑',
        description: '未经充分处理的钢剑，剑身略显粗糙。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.COOKED_STEEL_SWORD]: {
        id: SteelSwordItems.COOKED_STEEL_SWORD,
        name: '熟钢剑',
        description: '热处理完成后的标准钢剑，性能均衡。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.HARD_STEEL_SWORD]: {
        id: SteelSwordItems.HARD_STEEL_SWORD,
        name: '硬钢剑',
        description: '高硬度剑刃带来更强破甲能力。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.LIGHT_STEEL_SWORD]: {
        id: SteelSwordItems.LIGHT_STEEL_SWORD,
        name: '轻钢剑',
        description: '减重打造，便于快速连击与机动。',
        volume: 1.8,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.HEAVY_STEEL_SWORD]: {
        id: SteelSwordItems.HEAVY_STEEL_SWORD,
        name: '重钢剑',
        description: '份量十足，擅长以势压人。',
        volume: 2.4,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.REFINED_STEEL_SWORD]: {
        id: SteelSwordItems.REFINED_STEEL_SWORD,
        name: '精钢剑',
        description: '选材与锻造都更加考究的高品质钢剑。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.GREY_STEEL_SWORD]: {
        id: SteelSwordItems.GREY_STEEL_SWORD,
        name: '灰钢剑',
        description: '灰哑剑身低调朴素，适合长期佩用。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.YELLOW_STEEL_SWORD]: {
        id: SteelSwordItems.YELLOW_STEEL_SWORD,
        name: '黄钢剑',
        description: '剑体带有淡黄光泽，辨识度极高。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.CYAN_STEEL_SWORD]: {
        id: SteelSwordItems.CYAN_STEEL_SWORD,
        name: '青钢剑',
        description: '青色冷光流转于刃面，气质凌厉。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.RED_STEEL_SWORD]: {
        id: SteelSwordItems.RED_STEEL_SWORD,
        name: '红钢剑',
        description: '赤红纹理如血，威慑感强烈。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.ROSE_STEEL_SWORD]: {
        id: SteelSwordItems.ROSE_STEEL_SWORD,
        name: '玫瑰钢剑',
        description: '玫瑰色泽优雅华美，兼具观赏与实战价值。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.PURPLE_STEEL_SWORD]: {
        id: SteelSwordItems.PURPLE_STEEL_SWORD,
        name: '紫钢剑',
        description: '深紫剑刃神秘沉稳，常见于贵族武装。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.BLUE_STEEL_SWORD]: {
        id: SteelSwordItems.BLUE_STEEL_SWORD,
        name: '蓝钢剑',
        description: '蓝辉如水，剑势灵动流畅。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.INK_STEEL_SWORD]: {
        id: SteelSwordItems.INK_STEEL_SWORD,
        name: '墨钢剑',
        description: '乌黑剑身不反光，适合夜间作战。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.WHITE_STEEL_SWORD]: {
        id: SteelSwordItems.WHITE_STEEL_SWORD,
        name: '白钢剑',
        description: '银白如霜，锋芒外露。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.MIRROR_STEEL_SWORD]: {
        id: SteelSwordItems.MIRROR_STEEL_SWORD,
        name: '镜钢剑',
        description: '抛光如镜，能映出敌我身影的高亮钢剑。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.MOONLIGHT_STEEL_SWORD]: {
        id: SteelSwordItems.MOONLIGHT_STEEL_SWORD,
        name: '月光钢剑',
        description: '在夜色下会泛起柔和银辉的名剑。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
    [SteelSwordItems.SUNLIGHT_STEEL_SWORD]: {
        id: SteelSwordItems.SUNLIGHT_STEEL_SWORD,
        name: '日光钢剑',
        description: '剑身如烈日般耀眼，斩击气势磅礴。',
        volume: 2,
        categoryPath: ['物品', '装备/武器', '剑类'],
    },
};
