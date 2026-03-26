import type { IAttribute } from '../../interface';

/**
 * 统计数据相关属性 ID 映射表
 * 用于记录各阶段的累计数值（治疗、伤害等）
 */
export const StatisticsAttributes = {
    /** 本存档治疗总计 */
    HEALING_TOTAL_ARCHIVE: 'healing_total_archive',
    /** 本轮回治疗总计 */
    HEALING_TOTAL_CYCLE: 'healing_total_cycle',
    /** 本探索治疗总计 */
    HEALING_TOTAL_EXPLORATION: 'healing_total_exploration',
    /** 本层数治疗总计 */
    HEALING_TOTAL_FLOOR: 'healing_total_floor',
    /** 本战斗治疗总计 */
    HEALING_TOTAL_COMBAT: 'healing_total_combat',

    /** 本存档伤害总计 */
    DAMAGE_TOTAL_ARCHIVE: 'damage_total_archive',
    /** 本轮回伤害总计 */
    DAMAGE_TOTAL_CYCLE: 'damage_total_cycle',
    /** 本探索伤害总计 */
    DAMAGE_TOTAL_EXPLORATION: 'damage_total_exploration',
    /** 本层数伤害总计 */
    DAMAGE_TOTAL_FLOOR: 'damage_total_floor',
    /** 本战斗伤害总计 */
    DAMAGE_TOTAL_COMBAT: 'damage_total_combat',

    /** 本存档死亡次数总计 */
    DEATH_COUNT_ARCHIVE: 'death_count_archive',
    /** 本轮回死亡次数总计 */
    DEATH_COUNT_CYCLE: 'death_count_cycle',
    /** 本探索死亡次数总计 */
    DEATH_COUNT_EXPLORATION: 'death_count_exploration',
    /** 本层数死亡次数总计 */
    DEATH_COUNT_FLOOR: 'death_count_floor',

    /** 游玩总时长 (存档级) */
    PLAY_TIME_ARCHIVE: 'play_time_archive',
    /** 本轮回游玩时长 */
    PLAY_TIME_CYCLE: 'play_time_cycle',
    /** 本次探索游玩时长 */
    PLAY_TIME_EXPLORATION: 'play_time_exploration',

    /** 当前系统时间 (时间戳) */
    SYSTEM_TIME: 'system_time',
} as const;

/**
 * 统计数据相关属性详细数据表
 */
export const StatisticsAttributeData: Record<string, IAttribute> = {
    // --- 治疗统计 ---
    [StatisticsAttributes.HEALING_TOTAL_ARCHIVE]: {
        id: StatisticsAttributes.HEALING_TOTAL_ARCHIVE,
        kind: 'current',
        name: '本存档治疗总计',
        description: '自存档创建以来累计的总治疗量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '生存累计'],
        tags: ['统计', '生存', '治疗', '累计'],
    },
    [StatisticsAttributes.HEALING_TOTAL_CYCLE]: {
        id: StatisticsAttributes.HEALING_TOTAL_CYCLE,
        kind: 'current',
        name: '本轮回治疗总计',
        description: '本次轮回（转生）中累计的总治疗量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '生存累计'],
        tags: ['统计', '生存', '治疗', '累计'],
    },
    [StatisticsAttributes.HEALING_TOTAL_EXPLORATION]: {
        id: StatisticsAttributes.HEALING_TOTAL_EXPLORATION,
        kind: 'current',
        name: '本探索治疗总计',
        description: '本次探索任务中累计的总治疗量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '生存累计'],
        tags: ['统计', '生存', '治疗', '累计'],
    },
    [StatisticsAttributes.HEALING_TOTAL_FLOOR]: {
        id: StatisticsAttributes.HEALING_TOTAL_FLOOR,
        kind: 'current',
        name: '本层数治疗总计',
        description: '当前层数中累计的总治疗量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '生存累计'],
        tags: ['统计', '生存', '治疗', '累计'],
    },
    [StatisticsAttributes.HEALING_TOTAL_COMBAT]: {
        id: StatisticsAttributes.HEALING_TOTAL_COMBAT,
        kind: 'current',
        name: '本战斗治疗总计',
        description: '本次战斗中累计的总治疗量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '生存累计'],
        tags: ['统计', '生存', '治疗', '累计'],
    },

    // --- 伤害统计 ---
    [StatisticsAttributes.DAMAGE_TOTAL_ARCHIVE]: {
        id: StatisticsAttributes.DAMAGE_TOTAL_ARCHIVE,
        kind: 'current',
        name: '本存档伤害总计',
        description: '自存档创建以来累计的总伤害量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '战斗累计'],
        tags: ['统计', '战斗', '伤害', '累计'],
    },
    [StatisticsAttributes.DAMAGE_TOTAL_CYCLE]: {
        id: StatisticsAttributes.DAMAGE_TOTAL_CYCLE,
        kind: 'current',
        name: '本轮回伤害总计',
        description: '本次轮回（转生）中累计的总伤害量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '战斗累计'],
        tags: ['统计', '战斗', '伤害', '累计'],
    },
    [StatisticsAttributes.DAMAGE_TOTAL_EXPLORATION]: {
        id: StatisticsAttributes.DAMAGE_TOTAL_EXPLORATION,
        kind: 'current',
        name: '本探索伤害总计',
        description: '本次探索任务中累计的总伤害量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '战斗累计'],
        tags: ['统计', '战斗', '伤害', '累计'],
    },
    [StatisticsAttributes.DAMAGE_TOTAL_FLOOR]: {
        id: StatisticsAttributes.DAMAGE_TOTAL_FLOOR,
        kind: 'current',
        name: '本层数伤害总计',
        description: '当前层数中累计的总伤害量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '战斗累计'],
        tags: ['统计', '战斗', '伤害', '累计'],
    },
    [StatisticsAttributes.DAMAGE_TOTAL_COMBAT]: {
        id: StatisticsAttributes.DAMAGE_TOTAL_COMBAT,
        kind: 'current',
        name: '本战斗伤害总计',
        description: '本次战斗中累计的总伤害量。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '战斗累计'],
        tags: ['统计', '战斗', '伤害', '累计'],
    },

    // --- 死亡统计 ---
    [StatisticsAttributes.DEATH_COUNT_ARCHIVE]: {
        id: StatisticsAttributes.DEATH_COUNT_ARCHIVE,
        kind: 'current',
        name: '本存档死亡次数总计',
        description: '自存档创建以来累计的总死亡次数。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '生存累计'],
        tags: ['统计', '生存', '死亡', '累计'],
    },
    [StatisticsAttributes.DEATH_COUNT_CYCLE]: {
        id: StatisticsAttributes.DEATH_COUNT_CYCLE,
        kind: 'current',
        name: '本轮回死亡次数总计',
        description: '本次轮回（转生）中累计的总死亡次数。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '生存累计'],
        tags: ['统计', '生存', '死亡', '累计'],
    },
    [StatisticsAttributes.DEATH_COUNT_EXPLORATION]: {
        id: StatisticsAttributes.DEATH_COUNT_EXPLORATION,
        kind: 'current',
        name: '本探索死亡次数总计',
        description: '本次探索任务中累计的总死亡次数。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '生存累计'],
        tags: ['统计', '生存', '死亡', '累计'],
    },
    [StatisticsAttributes.DEATH_COUNT_FLOOR]: {
        id: StatisticsAttributes.DEATH_COUNT_FLOOR,
        kind: 'current',
        name: '本层数死亡次数总计',
        description: '当前层数中累计的总死亡次数。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '生存累计'],
        tags: ['统计', '生存', '死亡', '累计'],
    },

    // --- 时间统计 ---
    [StatisticsAttributes.PLAY_TIME_ARCHIVE]: {
        id: StatisticsAttributes.PLAY_TIME_ARCHIVE,
        kind: 'current',
        name: '累计游玩时间',
        description: '该存档自创建以来的总游玩时间。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '时间'],
        unit: 'ms',
        tags: ['统计', '时间', '累计'],
    },
    [StatisticsAttributes.PLAY_TIME_CYCLE]: {
        id: StatisticsAttributes.PLAY_TIME_CYCLE,
        kind: 'current',
        name: '本轮回游玩时间',
        description: '本次轮回（转生）中经过的时间。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '时间'],
        unit: 'ms',
        tags: ['统计', '时间', '轮回'],
    },
    [StatisticsAttributes.PLAY_TIME_EXPLORATION]: {
        id: StatisticsAttributes.PLAY_TIME_EXPLORATION,
        kind: 'current',
        name: '本次探索时间',
        description: '本次进入地图探索后经过的时间。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'statistics',
        categoryPath: ['属性', '统计', '时间'],
        unit: 'ms',
        tags: ['统计', '时间', '探索'],
    },
    [StatisticsAttributes.SYSTEM_TIME]: {
        id: StatisticsAttributes.SYSTEM_TIME,
        kind: 'current',
        name: '系统当前时间',
        description: '用于记录系统同步的实时时间戳。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'system',
        categoryPath: ['属性', '系统', '时间'],
        unit: 'timestamp',
        tags: ['系统', '时间'],
    },
};
