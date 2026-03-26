import type { IAttribute } from '../../interface';

/**
 * 转生升级相关属性 ID 映射表
 */
export const ReincarnationAttributes = {
    /** 是否可以在转生中购买 (0: 否, 1: 是) */
    IS_REINCARNATION_PURCHASABLE: 'is_reincarnation_purchasable',
    /** 转生图标中的 X 坐标位置 */
    REINCARNATION_UI_POSITION_X: 'reincarnation_ui_position_x',
    /** 转生图标中的 Y 坐标位置 */
    REINCARNATION_UI_POSITION_Y: 'reincarnation_ui_position_y',
    /** 转生升级最大次数 */
    MAX_REINCARNATION_UPGRADE_COUNT: 'max_reincarnation_upgrade_count',
    /** 转生升级目前次数 */
    CURRENT_REINCARNATION_UPGRADE_COUNT: 'current_reincarnation_upgrade_count',
    /** 转生前置条件 ID (通常对应另一个属性或成就的 ID 映射) */
    REINCARNATION_PREREQUISITE_ID: 'reincarnation_prerequisite_id',
    /** 转生前置条件等级要求 */
    REINCARNATION_PREREQUISITE_LEVEL: 'reincarnation_prerequisite_level',
} as const;

/**
 * 转生升级相关属性详细数据表
 */
export const ReincarnationAttributeData: Record<string, IAttribute> = {
    [ReincarnationAttributes.IS_REINCARNATION_PURCHASABLE]: {
        id: ReincarnationAttributes.IS_REINCARNATION_PURCHASABLE,
        kind: 'raw',
        name: '可转生购买',
        description: '该项是否可以在转生界面中通过消耗资源进行购买。',
        defaultValue: 0,
        minValue: 0,
        maxValue: 1,
        category: 'reincarnation',
        categoryPath: ['属性', '系统', '转生'],
        tags: ['转生', '系统', '购买'],
    },
    [ReincarnationAttributes.REINCARNATION_UI_POSITION_X]: {
        id: ReincarnationAttributes.REINCARNATION_UI_POSITION_X,
        kind: 'raw',
        name: '转生 UI 坐标 X',
        description: '该升级项在转生技能树或列表中的横向位置。',
        defaultValue: 0,
        category: 'reincarnation',
        categoryPath: ['属性', '系统', '转生'],
        tags: ['转生', '界面', '坐标'],
    },
    [ReincarnationAttributes.REINCARNATION_UI_POSITION_Y]: {
        id: ReincarnationAttributes.REINCARNATION_UI_POSITION_Y,
        kind: 'raw',
        name: '转生 UI 坐标 Y',
        description: '该升级项在转生技能树或列表中的纵向位置。',
        defaultValue: 0,
        category: 'reincarnation',
        categoryPath: ['属性', '系统', '转生'],
        tags: ['转生', '界面', '坐标'],
    },
    [ReincarnationAttributes.MAX_REINCARNATION_UPGRADE_COUNT]: {
        id: ReincarnationAttributes.MAX_REINCARNATION_UPGRADE_COUNT,
        kind: 'total',
        name: '最大转生升级次数',
        description: '该项可以被升级的最高等级上限。',
        defaultValue: 1n,
        minValue: 0n,
        category: 'reincarnation',
        categoryPath: ['属性', '系统', '转生'],
        tags: ['转生', '系统', '上限'],
    },
    [ReincarnationAttributes.CURRENT_REINCARNATION_UPGRADE_COUNT]: {
        id: ReincarnationAttributes.CURRENT_REINCARNATION_UPGRADE_COUNT,
        kind: 'current',
        name: '当前转生升级次数',
        description: '该项目前已经升级的次数。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'reincarnation',
        categoryPath: ['属性', '系统', '转生'],
        tags: ['转生', '系统', '进度'],
    },
    [ReincarnationAttributes.REINCARNATION_PREREQUISITE_ID]: {
        id: ReincarnationAttributes.REINCARNATION_PREREQUISITE_ID,
        kind: 'raw',
        name: '转生前置 ID',
        description: '解锁此项升级所需的某个前置升级项的 ID 索引。',
        defaultValue: 0,
        category: 'reincarnation',
        categoryPath: ['属性', '系统', '转生'],
        tags: ['转生', '系统', '前置'],
    },
    [ReincarnationAttributes.REINCARNATION_PREREQUISITE_LEVEL]: {
        id: ReincarnationAttributes.REINCARNATION_PREREQUISITE_LEVEL,
        kind: 'raw',
        name: '转生前置等级',
        description: '解锁此项升级所需的某个前置升级项的最小等级要求。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'reincarnation',
        categoryPath: ['属性', '系统', '转生'],
        tags: ['转生', '系统', '前置'],
    },
};
