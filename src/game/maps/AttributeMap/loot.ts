import type { IAttribute } from '../../interface';

/**
 * 掉落物属性 ID 映射表 (对应 ResourceAttributes 中的资源)
 * 用于定义战斗胜利后的基础资源获取量
 */
export const LootAttributes = {
    /** 血液掉落量 */
    BLOOD_LOOT: 'blood_loot',
    /** 锈铁掉落量 */
    RUSTY_IRON_LOOT: 'rusty_iron_loot',
    /** 骨片掉落量 */
    BONE_FRAGMENT_LOOT: 'bone_fragment_loot',
    /** 毛发掉落量 */
    HAIR_LOOT: 'hair_loot',
    /** 糖末掉落量 */
    SUGAR__LOOT: 'sugar__loot',
    /** 肉块掉落量 */
    MEAT_LOOT: 'meat_loot',
    /** 黑晶掉落量 */
    BLACK_CRYSTAL_LOOT: 'black_crystal_loot',
    
    /** 掉落率加成 (百分比) */
    LOOT_CHANCE_MODIFIER: 'loot_chance_modifier',
    /** 掉落数量加成 (百分比) */
    LOOT_QUANTITY_MODIFIER: 'loot_quantity_modifier',
} as const;

/**
 * 掉落物属性详细数据表
 */
export const LootAttributeData: Record<string, IAttribute> = {
    [LootAttributes.BLOOD_LOOT]: {
        id: LootAttributes.BLOOD_LOOT,
        name: '血液掉落量',
        description: '战斗胜利后可获得的血液数量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'loot',
        categoryPath: ['属性', '战斗', '掉落'],
        unit: 'ml',
        tags: ['掉落', '资源', '血液'],
        scope: ['enemy'],
    },
    [LootAttributes.RUSTY_IRON_LOOT]: {
        id: LootAttributes.RUSTY_IRON_LOOT,
        name: '锈铁掉落量',
        description: '从击败的敌人残骸中可回收的锈铁数量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'loot',
        categoryPath: ['属性', '战斗', '掉落'],
        unit: 'kg',
        tags: ['掉落', '资源', '材料'],
        scope: ['enemy'],
    },
    [LootAttributes.BONE_FRAGMENT_LOOT]: {
        id: LootAttributes.BONE_FRAGMENT_LOOT,
        name: '骨片掉落量',
        description: '击碎敌人骨骼后可收集的碎片数量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'loot',
        categoryPath: ['属性', '战斗', '掉落'],
        unit: 'pcs',
        tags: ['掉落', '资源', '材料'],
        scope: ['enemy'],
    },
    [LootAttributes.HAIR_LOOT]: {
        id: LootAttributes.HAIR_LOOT,
        name: '毛发掉落量',
        description: '从敌人尸体上剥取的毛发数量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'loot',
        categoryPath: ['属性', '战斗', '掉落'],
        unit: 'g',
        tags: ['掉落', '资源', '材料'],
        scope: ['enemy'],
    },
    [LootAttributes.SUGAR__LOOT]: {
        id: LootAttributes.SUGAR__LOOT,
        name: '糖末掉落量',
        description: '敌人随身携带或体内蕴含的糖末数量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'loot',
        categoryPath: ['属性', '战斗', '掉落'],
        unit: 'g',
        tags: ['掉落', '资源', '交易'],
        scope: ['enemy'],
    },
    [LootAttributes.MEAT_LOOT]: {
        id: LootAttributes.MEAT_LOOT,
        name: '肉块掉落量',
        description: '战斗后可采集的生物组织数量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'loot',
        categoryPath: ['属性', '战斗', '掉落'],
        unit: 'kg',
        tags: ['掉落', '资源', '生存'],
        scope: ['enemy'],
    },
    [LootAttributes.BLACK_CRYSTAL_LOOT]: {
        id: LootAttributes.BLACK_CRYSTAL_LOOT,
        name: '黑晶掉落量',
        description: '极少数强大敌人可能掉落的黑暗能量晶体。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'loot',
        categoryPath: ['属性', '战斗', '掉落'],
        unit: 'ct',
        tags: ['掉落', '资源', '稀有'],
        scope: ['enemy'],
    },
    [LootAttributes.LOOT_CHANCE_MODIFIER]: {
        id: LootAttributes.LOOT_CHANCE_MODIFIER,
        name: '掉落率加成',
        description: '增加获得额外掉落物的概率。',
        defaultValue: 0,
        minValue: 0,
        isPercent: true,
        unit: '%',
        category: 'combat',
        categoryPath: ['属性', '战斗', '掉落'],
        tags: ['掉落', '概率', '加成'],
        scope: ['player'],
    },
    [LootAttributes.LOOT_QUANTITY_MODIFIER]: {
        id: LootAttributes.LOOT_QUANTITY_MODIFIER,
        name: '掉落数量加成',
        description: '增加掉落资源时的实际获得倍率。',
        defaultValue: 1.0,
        minValue: 0,
        isPercent: false,
        category: 'combat',
        categoryPath: ['属性', '战斗', '掉落'],
        tags: ['掉落', '数量', '加成'],
        scope: ['player'],
    },
};
