import type { Attribute } from '../../interface';

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
export const ResourceAttributeData: Record<string, Attribute> = {
    [ResourceAttributes.BLOOD_RESERVE]: {
        id: ResourceAttributes.BLOOD_RESERVE,
        name: '血液储备量',
        description: '玩家当前拥有的血液总量，是许多黑暗仪式的核心物资。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        unit: 'ml',
    },
    [ResourceAttributes.RUSTY_IRON_RESERVE]: {
        id: ResourceAttributes.RUSTY_IRON_RESERVE,
        name: '锈铁储备量',
        description: '从废墟中搜刮出的锈蚀金属，可用于基础锻造。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        unit: 'kg',
    },
    [ResourceAttributes.BONE_FRAGMENT_RESERVE]: {
        id: ResourceAttributes.BONE_FRAGMENT_RESERVE,
        name: '骨片储备量',
        description: '死者的残骸碎片，常用于强化骨质武装。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        unit: 'pcs',
    },
    [ResourceAttributes.HAIR_RESERVE]: {
        id: ResourceAttributes.HAIR_RESERVE,
        name: '毛发储备量',
        description: '从怪物身上剥取的毛发或纤维，可用于编织或作为催化剂。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        unit: 'g',
    },
    [ResourceAttributes.SUGAR_POWDER_RESERVE]: {
        id: ResourceAttributes.SUGAR_POWDER_RESERVE,
        name: '糖末储备量',
        description: '具有成瘾性的白色粉末，在某些领域是硬通货。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        unit: 'g',
    },
    [ResourceAttributes.MINCED_MEAT_RESERVE]: {
        id: ResourceAttributes.MINCED_MEAT_RESERVE,
        name: '肉糜储备量',
        description: '经过处理的生物组织，是维持生命或培养生化造物的原料。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        unit: 'kg',
    },
    [ResourceAttributes.BLACK_CRYSTAL_RESERVE]: {
        id: ResourceAttributes.BLACK_CRYSTAL_RESERVE,
        name: '黑晶储备量',
        description: '蕴含纯粹黑暗能量的晶体，极其罕见且危险。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'resource',
        unit: 'ct',
    },
};
