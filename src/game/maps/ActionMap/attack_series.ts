import { ActionTriggerModeMap } from '../ActionTriggerModeMap';
import type { ActionDefinition } from './types';

/**
 * 攻击系列行为 ID 映射表
 */
export const AttackActions = {
    CURSE_NEEDLE_SHOT: 'curse_needle_shot', // 咒杀击发
    STEEL_SWORD_THRUST: 'steel_sword_thrust', // 钢剑直刺
    STEEL_SWORD_SWEEP: 'steel_sword_sweep', // 钢剑横扫
    STEEL_SWORD_SLASH: 'steel_sword_slash', // 钢剑劈砍
    CLOSE_RANGE_FLYING_KICK: 'close_range_flying_kick' // 近身飞踹
} as const;

/**
 * 攻击系列行为详细数据表
 */
export const AttackActionData: Record<string, ActionDefinition> = {
    [AttackActions.CURSE_NEEDLE_SHOT]: {
        id: AttackActions.CURSE_NEEDLE_SHOT,
        name: '咒杀击发',
        description: '使用咒杀射针攻击敌人。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 1.2,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 6
        },
        tags: ['attack', 'ranged', 'needle', 'curse']
    },
    [AttackActions.STEEL_SWORD_THRUST]: {
        id: AttackActions.STEEL_SWORD_THRUST,
        name: '钢剑直刺',
        description: '以钢剑进行快速直线刺击，擅长单体点杀。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 0.7,
        cost: {
            stamina: 8
        },
        tags: ['attack', 'melee', 'sword', 'thrust']
    },
    [AttackActions.STEEL_SWORD_SWEEP]: {
        id: AttackActions.STEEL_SWORD_SWEEP,
        name: '钢剑横扫',
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
            stamina: 14
        },
        tags: ['attack', 'melee', 'sword', 'sweep', 'aoe']
    },
    [AttackActions.STEEL_SWORD_SLASH]: {
        id: AttackActions.STEEL_SWORD_SLASH,
        name: '钢剑劈砍',
        description: '自上而下重劈，伤害高但前摇略长。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 1.1,
        cost: {
            stamina: 12
        },
        tags: ['attack', 'melee', 'sword', 'slash']
    },
    [AttackActions.CLOSE_RANGE_FLYING_KICK]: {
        id: AttackActions.CLOSE_RANGE_FLYING_KICK,
        name: '近身飞踹',
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
    }
};
