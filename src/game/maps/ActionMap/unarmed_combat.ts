import { ActionTriggerModeMap } from '../ActionTriggerModeMap';
import type { ActionDefinition } from './types';

/**
 * 肉搏系列行为 ID 映射表
 */
export const UnarmedCombatActions = {
    FLYING_KICK: 'flying_kick', // 飞踹
    WRESTLING: 'wrestling', // 摔跤
    BOXING: 'boxing', // 拳击
    ELBOW_STRIKE: 'elbow_strike', // 肘击
    BODY_IMPACT: 'body_impact', // 撞击
    HEART_GOUGING: 'heart_gouging', // 掏心
    SHRED: 'shred', // 撕碎
    THROW: 'throw' // 抛投
} as const;

/**
 * 肉搏系列行为详细数据表
 */
export const UnarmedCombatActionData: Record<string, ActionDefinition> = {
    [UnarmedCombatActions.FLYING_KICK]: {
        id: UnarmedCombatActions.FLYING_KICK,
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
    [UnarmedCombatActions.WRESTLING]: {
        id: UnarmedCombatActions.WRESTLING,
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
    [UnarmedCombatActions.BOXING]: {
        id: UnarmedCombatActions.BOXING,
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
    [UnarmedCombatActions.ELBOW_STRIKE]: {
        id: UnarmedCombatActions.ELBOW_STRIKE,
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
    [UnarmedCombatActions.BODY_IMPACT]: {
        id: UnarmedCombatActions.BODY_IMPACT,
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
    [UnarmedCombatActions.HEART_GOUGING]: {
        id: UnarmedCombatActions.HEART_GOUGING,
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
    [UnarmedCombatActions.SHRED]: {
        id: UnarmedCombatActions.SHRED,
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
    [UnarmedCombatActions.THROW]: {
        id: UnarmedCombatActions.THROW,
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
    }
};
