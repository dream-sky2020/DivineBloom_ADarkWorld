import type { IAttribute } from '../../interface';

/**
 * 资源储备属性 ID 映射表
 */
export const ResourceAttributes = {
    /** 血液储备量 */
    BLOOD_RESERVE: 'blood_reserve',
    /** 锈铁储备量 */
    RUSTY_IRON_RESERVE: 'rusty_iron_reserve',
    /** 骨片储备量 */
    BONE_FRAGMENT_RESERVE: 'bone_fragment_reserve',
    /** 毛发储备量 */
    HAIR_RESERVE: 'hair_reserve',
    /** 糖末储备量 */
    SUGAR_POWDER_RESERVE: 'sugar_powder_reserve',
    /** 肉糜储备量 */
    MINCED_MEAT_RESERVE: 'minced_meat_reserve',
    /** 黑晶储备量 */
    BLACK_CRYSTAL_RESERVE: 'black_crystal_reserve',
} as const;

/**
 * 资源储备属性详细数据表
 */
export const ResourceAttributeData: Record<string, IAttribute> = {
    [ResourceAttributes.BLOOD_RESERVE]: {
        id: ResourceAttributes.BLOOD_RESERVE,
        name: '血液储备量',
        description: '玩家当前拥有的血液总量，是许多黑暗仪式的核心物资。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        categoryPath: ['属性', '资源', '基础资源'],
        unit: 'ml',
        tags: ['资源', '基础', '生命'],
    },
    [ResourceAttributes.RUSTY_IRON_RESERVE]: {
        id: ResourceAttributes.RUSTY_IRON_RESERVE,
        name: '锈铁储备量',
        description: '从废墟中搜刮出的锈蚀金属，可用于基础锻造。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        categoryPath: ['属性', '资源', '基础资源'],
        unit: 'kg',
        tags: ['资源', '材料', '锻造'],
    },
    [ResourceAttributes.BONE_FRAGMENT_RESERVE]: {
        id: ResourceAttributes.BONE_FRAGMENT_RESERVE,
        name: '骨片储备量',
        description: '死者的残骸碎片，常用于强化骨质武装。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        categoryPath: ['属性', '资源', '基础资源'],
        unit: 'pcs',
        tags: ['资源', '材料', '强化'],
    },
    [ResourceAttributes.HAIR_RESERVE]: {
        id: ResourceAttributes.HAIR_RESERVE,
        name: '毛发储备量',
        description: '从怪物身上剥取的毛发或纤维，可用于编织或作为催化剂。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        categoryPath: ['属性', '资源', '基础资源'],
        unit: 'g',
        tags: ['资源', '材料', '催化'],
    },
    [ResourceAttributes.SUGAR_POWDER_RESERVE]: {
        id: ResourceAttributes.SUGAR_POWDER_RESERVE,
        name: '糖末储备量',
        description: '具有成瘾性的白色粉末，在某些领域是硬通货。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        categoryPath: ['属性', '资源', '基础资源'],
        unit: 'g',
        tags: ['资源', '交易', '成瘾'],
    },
    [ResourceAttributes.MINCED_MEAT_RESERVE]: {
        id: ResourceAttributes.MINCED_MEAT_RESERVE,
        name: '肉糜储备量',
        description: '经过处理的生物组织，是维持生命或培养生化造物的原料。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        categoryPath: ['属性', '资源', '基础资源'],
        unit: 'kg',
        tags: ['资源', '生存', '生物'],
    },
    [ResourceAttributes.BLACK_CRYSTAL_RESERVE]: {
        id: ResourceAttributes.BLACK_CRYSTAL_RESERVE,
        name: '黑晶储备量',
        description: '蕴含纯粹黑暗能量的晶体，极其罕见且危险。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        categoryPath: ['属性', '资源', '稀有资源'],
        unit: 'ct',
        tags: ['资源', '稀有', '黑暗'],
    },
};
