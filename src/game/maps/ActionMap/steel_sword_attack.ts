import { ActionTriggerModeMap } from '../ActionTriggerModeMap';
import type { ActionDefinition } from './types';

/**
 * 钢剑挥砍系列行为 ID 映射表
 */
export const SteelSwordAttackActions = {
    STEEL_SWORD_THRUST: 'steel_sword_thrust', // 钢剑直刺
    STEEL_SWORD_SWEEP: 'steel_sword_sweep', // 钢剑横扫
    STEEL_SWORD_SLASH: 'steel_sword_slash' // 钢剑劈砍
} as const;

/**
 * 钢剑挥砍系列行为详细数据表
 */
export const SteelSwordAttackActionData: Record<string, ActionDefinition> = {
    [SteelSwordAttackActions.STEEL_SWORD_THRUST]: {
        id: SteelSwordAttackActions.STEEL_SWORD_THRUST,
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
    [SteelSwordAttackActions.STEEL_SWORD_SWEEP]: {
        id: SteelSwordAttackActions.STEEL_SWORD_SWEEP,
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
    [SteelSwordAttackActions.STEEL_SWORD_SLASH]: {
        id: SteelSwordAttackActions.STEEL_SWORD_SLASH,
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
    }
};
