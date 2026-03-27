import type { IObjectTemplate } from '../../../interface';

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
    CRUSH_STOMP: 'crush_stomp', // 踩爆
    CRUSH_SKULL: 'crush_skull' // 握碎头颅
} as const;

/**
 * 肉搏系列行为详细数据表
 */
export const BrawlActionData: Record<string, IObjectTemplate> = {
    [BrawlActions.FLYING_KICK]: {
        id: BrawlActions.FLYING_KICK,
        name: '飞踹',
        description: '快速突进并飞踹目标，可用于打断敌方动作。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '踢击', '位移', '打断'],
        kind: 'action',
        stats: {
            'initial_cooldown': 2.2,
            'auto_cooldown_accumulate': 0,
            'max_cooldown_accumulate_charges': 1n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 1,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.WRESTLING]: {
        id: BrawlActions.WRESTLING,
        name: '摔跤',
        description: '通过摔技控制敌人，造成倒地或短暂硬直。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '摔跤', '控制'],
        kind: 'action',
        stats: {
            'initial_cooldown': 3.0,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.BOXING]: {
        id: BrawlActions.BOXING,
        name: '拳击',
        description: '快速的出拳打击，消耗较低，适合持续压制。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '拳击', '快速'],
        kind: 'action',
        stats: {
            'initial_cooldown': 0.6,
            'auto_cooldown_accumulate': 1,
            'max_cooldown_accumulate_charges': 3n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 1,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.ELBOW_STRIKE]: {
        id: BrawlActions.ELBOW_STRIKE,
        name: '肘击',
        description: '以肘部重击目标，具有极高的破盾或打断效果。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '肘击', '冲击', '打断'],
        kind: 'action',
        stats: {
            'initial_cooldown': 1.2,
            'auto_cooldown_accumulate': 1,
            'max_cooldown_accumulate_charges': 1n,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 1,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.BODY_IMPACT]: {
        id: BrawlActions.BODY_IMPACT,
        name: '撞击',
        description: '利用全身重量撞向敌人，造成大幅度硬直或击退。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '冲击', '重型', '眩晕'],
        kind: 'action',
        stats: {
            'initial_cooldown': 4.5,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.HEART_GOUGING]: {
        id: BrawlActions.HEART_GOUGING,
        name: '掏心',
        description: '以绝对的力量压制对手并执行终结一击。仅在双方力量差距极其悬殊时可执行。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '终结技', '重型', '血腥'],
        kind: 'action',
        stats: {
            'initial_cooldown': 30.0,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.SHRED]: {
        id: BrawlActions.SHRED,
        name: '撕碎',
        description: '以不可思议的怪力将敌人徒手撕成两半。仅在双方实力存在绝对鸿沟时可执行。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '终结技', '极限', '血腥'],
        kind: 'action',
        stats: {
            'initial_cooldown': 60.0,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.THROW]: {
        id: BrawlActions.THROW,
        name: '抛投',
        description: '抓住敌人并将其猛力掷出，造成撞击伤害和较长的硬直。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '抛投', '控制'],
        kind: 'action',
        stats: {
            'initial_cooldown': 5.0,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.RIP_HEAD_OFF]: {
        id: BrawlActions.RIP_HEAD_OFF,
        name: '拔掉头颅',
        description: '以纯粹的蛮力将敌人的首级连同脊椎一同拔出。仅在实力存在绝对鸿沟时可执行。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '终结技', '极限', '血腥'],
        kind: 'action',
        stats: {
            'initial_cooldown': 90.0,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.RIP_ARM_OFF]: {
        id: BrawlActions.RIP_ARM_OFF,
        name: '拔掉胳膊',
        description: '残酷地将敌人的手臂从躯干上生生扯下。仅在实力差距明显时可执行。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '终结技', '血腥'],
        kind: 'action',
        stats: {
            'initial_cooldown': 40.0,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.CRUSH_STOMP]: {
        id: BrawlActions.CRUSH_STOMP,
        name: '踩爆',
        description: '对准敌人的要害猛力一跃而下并将其踩碎。仅在实力差距极大时可执行。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '终结技', '重型', '冲击'],
        kind: 'action',
        stats: {
            'initial_cooldown': 50.0,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    },
    [BrawlActions.CRUSH_SKULL]: {
        id: BrawlActions.CRUSH_SKULL,
        name: '握碎头颅',
        description: '单手扣住敌人的面门并以恐怖的握力将其颅骨捏碎。仅在实力存在绝对鸿沟时可执行。',
        categoryPath: ['行为', '战斗', '搏击'],
        tags: ['攻击', '近战', '终结技', '极限', '血腥'],
        kind: 'action',
        stats: {
            'initial_cooldown': 75.0,
            'allow_manual_trigger': 1,
            'allow_auto_trigger': 0,
            'manual_trigger_threshold': 1n,
        }
    }
};
