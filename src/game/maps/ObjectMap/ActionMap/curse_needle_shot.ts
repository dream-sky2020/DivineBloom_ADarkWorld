import type { IObjectTemplate } from '../../../interface';

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
export const CurseNeedleShotActionData: Record<string, IObjectTemplate> = {
    [CurseNeedleShotActions.MANUAL_PRESS]: {
        id: CurseNeedleShotActions.MANUAL_PRESS,
        name: '咒杀击发:手动按压',
        description: '通过手动按压装置发射咒杀射针，威力较小且射程有限。',
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['攻击', '远程', '射针', '咒杀', '手动'],
        kind: 'action',
        stats: {
            'initial_cooldown': 1.5,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [CurseNeedleShotActions.WOODEN_CROSSBOW]: {
        id: CurseNeedleShotActions.WOODEN_CROSSBOW,
        name: '咒杀击发:木弩射击',
        description: '利用简易木弩发射咒杀射针，提升了射程。',
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['攻击', '远程', '射针', '咒杀', '木弩'],
        kind: 'action',
        stats: {
            'initial_cooldown': 1.2,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [CurseNeedleShotActions.FLAP_CROSSBOW]: {
        id: CurseNeedleShotActions.FLAP_CROSSBOW,
        name: '咒杀击发:皮瓣弩射击',
        description: '使用带有皮瓣加固的弩机发射，射击更加平稳。',
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['攻击', '远程', '射针', '咒杀', '皮瓣弩'],
        kind: 'action',
        stats: {
            'initial_cooldown': 1.0,
            'auto_cooldown_accumulate': 1,
            'max_cooldown_accumulate_charges': 2n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 1,
            'manual_trigger_threshold': 1n,
        }
    },
    [CurseNeedleShotActions.STEEL_CROSSBOW]: {
        id: CurseNeedleShotActions.STEEL_CROSSBOW,
        name: '咒杀击发:绞盘钢弩射击',
        description: '通过绞盘上弦的钢弩发射，威力巨大。',
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['攻击', '远程', '射针', '咒杀', '钢弩'],
        kind: 'action',
        stats: {
            'initial_cooldown': 2.5,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [CurseNeedleShotActions.RECURVE_COMPOSITE_CROSSBOW]: {
        id: CurseNeedleShotActions.RECURVE_COMPOSITE_CROSSBOW,
        name: '咒杀击发:反曲复合弩射击',
        description: '采用反曲复合结构，兼顾威力与射击频率。',
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['攻击', '远程', '射针', '咒杀', '复合弩'],
        kind: 'action',
        stats: {
            'initial_cooldown': 1.5,
            'auto_cooldown_accumulate': 1,
            'max_cooldown_accumulate_charges': 3n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 1,
            'manual_trigger_threshold': 1n,
        }
    },
    [CurseNeedleShotActions.SEMI_AUTO_REPEATING_CROSSBOW]: {
        id: CurseNeedleShotActions.SEMI_AUTO_REPEATING_CROSSBOW,
        name: '咒杀击发:半自动连弩射击',
        description: '具备半自动连发能力的弩机，可快速连续打击。',
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['攻击', '远程', '射针', '咒杀', '半自动'],
        kind: 'action',
        stats: {
            'initial_cooldown': 0.5,
            'auto_cooldown_accumulate': 1,
            'max_cooldown_accumulate_charges': 5n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 1,
            'manual_trigger_threshold': 1n,
        }
    },
    [CurseNeedleShotActions.AUTO_REPEATING_CROSSBOW]: {
        id: CurseNeedleShotActions.AUTO_REPEATING_CROSSBOW,
        name: '咒杀击发:全自动连弩射击',
        description: '完全自动化的连弩装置，倾泻如雨般的咒杀射针。',
        categoryPath: ['行为', '战斗', '射击'],
        tags: ['攻击', '远程', '射针', '咒杀', '全自动'],
        kind: 'action',
        stats: {
            'initial_cooldown': 0.2,
            'auto_cooldown_accumulate': 1,
            'max_cooldown_accumulate_charges': 10n,
            'allow_manual_trigger': 0,
            'allow_auto_trigger': 1,
            'manual_trigger_threshold': 1n,
        }
    }
};
