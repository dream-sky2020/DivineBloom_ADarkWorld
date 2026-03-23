import { ActionTriggerModes } from '../../IEnumMap';
import type { IAction } from '../../../interface';

/**
 * 咒杀击发系列行为 ID 映射表
 */
export const CurseNeedleShotActions = {
    MANUAL_PRESS: 'curse_needle_shot_manual_press', // 咒杀击发:手动按压
    WOODEN_CROSSBOW: 'curse_needle_shot_wooden_crossbow', // 咒杀击发:木弩射击
    FLAP_CROSSBOW: 'curse_needle_shot_flap_crossbow', // 咒杀击发:皮瓣弩射击
    STEEL_CROSSBOW: 'curse_needle_shot_steel_crossbow', // 咒杀击发:绞盘钢弩射击
    RECURVE_COMPOSITE_CROSSBOW: 'curse_needle_shot_recurve_composite_crossbow', // 咒杀击发:反曲复合弩射击
    SEMI_AUTO_REPEATING_CROSSBOW: 'curse_needle_shot_semi_auto_repeating_crossbow', // 咒杀击发:半自动连弩射击
    AUTO_REPEATING_CROSSBOW: 'curse_needle_shot_auto_repeating_crossbow' // 咒杀击发:全自动连弩射击
} as const;

/**
 * 咒杀击发系列行为详细数据表
 */
export const CurseNeedleShotActionData: Record<string, IAction> = {
    [CurseNeedleShotActions.MANUAL_PRESS]: {
        id: CurseNeedleShotActions.MANUAL_PRESS,
        name: '咒杀击发:手动按压',
        description: '通过手动按压装置发射咒杀射针，威力较小且射程有限。',
        triggerStrategy: {
            mode: ActionTriggerModes.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 1.5,
        cost: {
            stamina: 5
        },
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['attack', 'ranged', 'needle', 'curse', 'manual']
    },
    [CurseNeedleShotActions.WOODEN_CROSSBOW]: {
        id: CurseNeedleShotActions.WOODEN_CROSSBOW,
        name: '咒杀击发:木弩射击',
        description: '利用简易木弩发射咒杀射针，提升了射程。',
        triggerStrategy: {
            mode: ActionTriggerModes.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 1.2,
        cost: {
            stamina: 7
        },
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['attack', 'ranged', 'needle', 'curse', 'wooden_crossbow']
    },
    [CurseNeedleShotActions.FLAP_CROSSBOW]: {
        id: CurseNeedleShotActions.FLAP_CROSSBOW,
        name: '咒杀击发:皮瓣弩射击',
        description: '使用带有皮瓣加固的弩机发射，射击更加平稳。',
        triggerStrategy: {
            mode: ActionTriggerModes.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 1.0,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 8
        },
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['attack', 'ranged', 'needle', 'curse', 'flap_crossbow']
    },
    [CurseNeedleShotActions.STEEL_CROSSBOW]: {
        id: CurseNeedleShotActions.STEEL_CROSSBOW,
        name: '咒杀击发:绞盘钢弩射击',
        description: '通过绞盘上弦的钢弩发射，威力巨大。',
        triggerStrategy: {
            mode: ActionTriggerModes.MANUAL_ONLY,
            allowManual: true,
            allowAuto: false,
            manualThreshold: 1
        },
        cooldown: 2.5,
        cost: {
            stamina: 15
        },
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['attack', 'ranged', 'needle', 'curse', 'steel_crossbow']
    },
    [CurseNeedleShotActions.RECURVE_COMPOSITE_CROSSBOW]: {
        id: CurseNeedleShotActions.RECURVE_COMPOSITE_CROSSBOW,
        name: '咒杀击发:反曲复合弩射击',
        description: '采用反曲复合结构，兼顾威力与射击频率。',
        triggerStrategy: {
            mode: ActionTriggerModes.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 1.5,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 3,
        cost: {
            stamina: 12
        },
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['attack', 'ranged', 'needle', 'curse', 'recurve_composite_crossbow']
    },
    [CurseNeedleShotActions.SEMI_AUTO_REPEATING_CROSSBOW]: {
        id: CurseNeedleShotActions.SEMI_AUTO_REPEATING_CROSSBOW,
        name: '咒杀击发:半自动连弩射击',
        description: '具备半自动连发能力的弩机，可快速连续打击。',
        triggerStrategy: {
            mode: ActionTriggerModes.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 0.5,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 5,
        cost: {
            stamina: 10
        },
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['attack', 'ranged', 'needle', 'curse', 'semi_auto']
    },
    [CurseNeedleShotActions.AUTO_REPEATING_CROSSBOW]: {
        id: CurseNeedleShotActions.AUTO_REPEATING_CROSSBOW,
        name: '咒杀击发:全自动连弩射击',
        description: '完全自动化的连弩装置，倾泻如雨般的咒杀射针。',
        triggerStrategy: {
            mode: ActionTriggerModes.AUTO_ONLY,
            allowManual: false,
            allowAuto: true,
            allowAutoToggle: true,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 0.2,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 10,
        cost: {
            stamina: 5
        },
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['attack', 'ranged', 'needle', 'curse', 'auto']
    }
};
