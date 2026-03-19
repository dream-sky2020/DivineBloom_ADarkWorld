import { ActionTriggerModeMap } from '../ActionTriggerModeMap';
import type { Action } from '../../interface';

/**
 * 挥砍系列行为 ID 映射表
 */
export const BladeActions = {
    THRUST: 'thrust', // 直刺
    SWEEP: 'sweep', // 横扫
    SLASH: 'slash', // 劈砍
    HEART_PIERCE: 'heart_pierce', // 穿心
    BEHEADING: 'beheading', // 枭首
    BISECT: 'bisect', // 一刀两断
    DISMEMBER: 'dismember', // 断肢
    CRUSH: 'crush' // 拍碎
} as const;

/**
 * 挥砍系列行为详细数据表
 */
export const BladeActionData: Record<string, Action> = {
    [BladeActions.THRUST]: {
        id: BladeActions.THRUST,
        name: '直刺',
        description: '进行快速直线刺击，擅长单体点杀。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 0.7,
        cost: {
            stamina: 8n
        },
        tags: ['attack', 'melee', 'sword', 'thrust']
    },
    [BladeActions.SWEEP]: {
        id: BladeActions.SWEEP,
        name: '横扫',
        description: '以扇形轨迹横向挥斩，适合压制近身群体敌人。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 1.4,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 1,
        cost: {
            stamina: 14n
        },
        tags: ['attack', 'melee', 'sword', 'sweep', 'aoe']
    },
    [BladeActions.SLASH]: {
        id: BladeActions.SLASH,
        name: '劈砍',
        description: '自上而下重劈，伤害高但前摇略长。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 1.1,
        cost: {
            stamina: 12n
        },
        tags: ['attack', 'melee', 'sword', 'slash']
    },
    [BladeActions.HEART_PIERCE]: {
        id: BladeActions.HEART_PIERCE,
        name: '穿心',
        description: '精准地将长剑刺入敌人心脏，执行处决。仅在实力差距悬殊时可执行。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 25.0,
        cost: {
            stamina: 40n
        },
        requirements: {
            strengthRatio: 3.5
        },
        tags: ['attack', 'melee', 'sword', 'finisher', 'bloody']
    },
    [BladeActions.BEHEADING]: {
        id: BladeActions.BEHEADING,
        name: '枭首',
        description: '以无可阻挡的挥砍斩下敌人首级。仅在实力差距极大时可执行。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 45.0,
        cost: {
            stamina: 60n
        },
        requirements: {
            strengthRatio: 4.5
        },
        tags: ['attack', 'melee', 'sword', 'finisher', 'extreme', 'bloody']
    },
    [BladeActions.BISECT]: {
        id: BladeActions.BISECT,
        name: '一刀两断',
        description: '以惊人的爆发力横向一闪，将敌人的躯干平整地斩为两截。仅在实力存在绝对差距时可执行。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 55.0,
        cost: {
            stamina: 75n
        },
        requirements: {
            strengthRatio: 5.5
        },
        tags: ['attack', 'melee', 'sword', 'finisher', 'extreme', 'bloody']
    },
    [BladeActions.DISMEMBER]: {
        id: BladeActions.DISMEMBER,
        name: '断肢',
        description: '以精准而残暴的挥砍卸下敌人的肢体。仅在实力差距明显时可执行。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 35.0,
        cost: {
            stamina: 35n
        },
        requirements: {
            strengthRatio: 4.0
        },
        tags: ['attack', 'melee', 'sword', 'finisher', 'bloody']
    },
    [BladeActions.CRUSH]: {
        id: BladeActions.CRUSH,
        name: '拍碎',
        description: '以极大的力量横向拍击，将敌人连同骨骼一同拍碎。仅在实力差距极大时可执行。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 50.0,
        cost: {
            stamina: 65n
        },
        requirements: {
            strengthRatio: 5.0
        },
        tags: ['attack', 'melee', 'sword', 'finisher', 'heavy', 'impact']
    }
};
