import type { IObjectTemplate } from '../../../interface/IObjectTemplate';
import { AttributeTypeMap } from '../../AttributeMap';

/**
 * 敌人 ID 映射表 (基础 ID)
 */
export const EnemyTypeMap = {
    /** 史莱姆 */
    SLIME: 'slime',
    /** 野狼 */
    WILD_WOLF: 'wild_wolf',
    /** 骷髅兵 */
    SKELETON: 'skeleton',
    /** 哥布林 */
    GOBLIN: 'goblin',
} as const;

/**
 * 敌人 ID 类型
 */
export type EnemyID = typeof EnemyTypeMap[keyof typeof EnemyTypeMap];

/**
 * 敌人详细数据表
 * 使用 IObjectTemplate 接口
 */
export const EnemyDataMap: Record<EnemyID, IObjectTemplate> = {
    [EnemyTypeMap.SLIME]: {
        id: EnemyTypeMap.SLIME,
        name: '史莱姆',
        description: '一种粘糊糊的弱小生物',
        categoryPath: ['敌人', '野外生物', '史莱姆'],
        kind: 'enemy',
        stats: {
            [AttributeTypeMap.HP]: 20n,
            [AttributeTypeMap.HP_MAX]: 20n,
        },
    },
    [EnemyTypeMap.WILD_WOLF]: {
        id: EnemyTypeMap.WILD_WOLF,
        name: '野狼',
        description: '森林中的掠食者，具有较快的行动速度',
        categoryPath: ['敌人', '野外生物', '野狼'],
        kind: 'enemy',
        stats: {
            [AttributeTypeMap.HP]: 50n,
            [AttributeTypeMap.HP_MAX]: 50n,
        },
    },
    [EnemyTypeMap.SKELETON]: {
        id: EnemyTypeMap.SKELETON,
        name: '骷髅兵',
        description: '被诅咒而复活的亡灵，防御力不俗',
        categoryPath: ['敌人', '亡灵生物', '骷髅兵'],
        kind: 'enemy',
        stats: {
            [AttributeTypeMap.HP]: 80n,
            [AttributeTypeMap.HP_MAX]: 80n,
        },
    },
    [EnemyTypeMap.GOBLIN]: {
        id: EnemyTypeMap.GOBLIN,
        name: '哥布林',
        description: '贪婪而狡诈的小型生物',
        categoryPath: ['敌人', '亚人类', '哥布林'],
        kind: 'enemy',
        stats: {
            [AttributeTypeMap.HP]: 40n,
            [AttributeTypeMap.HP_MAX]: 40n,
        },
    },
};

/**
 * 敌人地图定义 (自我描述)
 */
export const EnemyMapDefinition = {
    kind: 'enemy',
    data: EnemyDataMap,
} as const;
