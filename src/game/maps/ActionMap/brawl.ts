import { ActionTriggerModeMap } from '../ActionTriggerModeMap';
import type { ActionDefinition } from './types';

/**
 * 肉搏系列行为 ID 映射表
 */
export const BrawlActions = {
    FLYING_KICK: 'flying_kick', // 飞踹
    WRESTLING: 'wrestling', // 摔跤
    BOXING: 'boxing', // 拳击
    ELBOW_STRIKE: 'elbow_strike', // 肘击
    BODY_IMPACT: 'body_impact', // 撞击
    HEART_GOUGING: 'heart_gouging', // 掏心
    SHRED: 'shred', // 撕碎
    THROW: 'throw', // 抛投
    RIP_HEAD_OFF: 'rip_head_off', // 拔掉头颅
    RIP_ARM_OFF: 'rip_arm_off', // 拔掉胳膊
    CRUSH_STOMP: 'crush_stomp' // 踩爆
} as const;

/**
 * 肉搏系列行为详细数据表
 */
export const BrawlActionData: Record<string, ActionDefinition> = {
    [BrawlActions.FLYING_KICK]: {
        id: BrawlActions.FLYING_KICK,
        name: '飞踹',
        description: '快速突进并飞踹目标，可用于打断敌方动作。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 2.2,
        autoCooldownAccumulate: false,
        maxCooldownAccumulateCharges: 1,
        cost: {
            stamina: 18
        },
        tags: ['attack', 'melee', 'kick', 'mobility', 'interrupt']
    },
    [BrawlActions.WRESTLING]: {
        id: BrawlActions.WRESTLING,
        name: '摔跤',
        description: '通过摔技控制敌人，造成倒地或短暂硬直。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 3.0,
        cost: {
            stamina: 15
        },
        tags: ['attack', 'melee', 'wrestling', 'control']
    },
    [BrawlActions.BOXING]: {
        id: BrawlActions.BOXING,
        name: '拳击',
        description: '快速的出拳打击，消耗较低，适合持续压制。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 0.6,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 3,
        cost: {
            stamina: 5
        },
        tags: ['attack', 'melee', 'boxing', 'fast']
    },
    [BrawlActions.ELBOW_STRIKE]: {
        id: BrawlActions.ELBOW_STRIKE,
        name: '肘击',
        description: '以肘部重击目标，具有极高的破盾或打断效果。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 1.2,
        cost: {
            stamina: 10
        },
        tags: ['attack', 'melee', 'elbow', 'impact', 'interrupt']
    },
    [BrawlActions.BODY_IMPACT]: {
        id: BrawlActions.BODY_IMPACT,
        name: '撞击',
        description: '利用全身重量撞向敌人，造成大幅度硬直或击退。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 4.5,
        cost: {
            stamina: 25
        },
        tags: ['attack', 'melee', 'impact', 'heavy', 'stun']
    },
    [BrawlActions.HEART_GOUGING]: {
        id: BrawlActions.HEART_GOUGING,
        name: '掏心',
        description: '以绝对的力量压制对手并执行终结一击。仅在双方力量差距极其悬殊时可执行。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 30.0,
        cost: {
            stamina: 50,
            hp: 5
        },
        requirements: {
            strengthRatio: 3.0 // 假设玩家力量至少是敌人的 3 倍
        },
        tags: ['attack', 'melee', 'finisher', 'heavy', 'bloody']
    },
    [BrawlActions.SHRED]: {
        id: BrawlActions.SHRED,
        name: '撕碎',
        description: '以不可思议的怪力将敌人徒手撕成两半。仅在双方实力存在绝对鸿沟时可执行。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 60.0,
        cost: {
            stamina: 80,
            hp: 10
        },
        requirements: {
            strengthRatio: 5.0 // 假设玩家力量至少是敌人的 5 倍
        },
        tags: ['attack', 'melee', 'finisher', 'extreme', 'bloody']
    },
    [BrawlActions.THROW]: {
        id: BrawlActions.THROW,
        name: '抛投',
        description: '抓住敌人并将其猛力掷出，造成撞击伤害和较长的硬直。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 5.0,
        cost: {
            stamina: 20
        },
        tags: ['attack', 'melee', 'throw', 'control']
    },
    [BrawlActions.RIP_HEAD_OFF]: {
        id: BrawlActions.RIP_HEAD_OFF,
        name: '拔掉头颅',
        description: '以纯粹的蛮力将敌人的首级连同脊椎一同拔出。仅在实力存在绝对鸿沟时可执行。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 90.0,
        cost: {
            stamina: 100,
            hp: 15
        },
        requirements: {
            strengthRatio: 6.0
        },
        tags: ['attack', 'melee', 'finisher', 'extreme', 'bloody']
    },
    [BrawlActions.RIP_ARM_OFF]: {
        id: BrawlActions.RIP_ARM_OFF,
        name: '拔掉胳膊',
        description: '残酷地将敌人的手臂从躯干上生生扯下。仅在实力差距明显时可执行。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 40.0,
        cost: {
            stamina: 45,
            hp: 2
        },
        requirements: {
            strengthRatio: 4.0
        },
        tags: ['attack', 'melee', 'finisher', 'bloody']
    },
    [BrawlActions.CRUSH_STOMP]: {
        id: BrawlActions.CRUSH_STOMP,
        name: '踩爆',
        description: '对准敌人的要害猛力一跃而下并将其踩碎。仅在实力差距极大时可执行。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 50.0,
        cost: {
            stamina: 70
        },
        requirements: {
            strengthRatio: 4.5
        },
        tags: ['attack', 'melee', 'finisher', 'heavy', 'impact']
    }
};
