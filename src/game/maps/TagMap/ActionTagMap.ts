import type { ITag } from '../../interface/ITag';
import { TagType } from '../../interface/ITag';

/**
 * 行为标签 ID 映射表
 */
export const ActionTags = {
    ATTACK: '攻击',
    MELEE: '近战',
    RANGED: '远程',
    COLLECT: '采集',
    SWORD: '剑技',
    FINISHER: '终结技',
    CONTROL: '控制',
    BLOODY: '血腥',
    THRUST: '刺击',
    SWEEP: '横扫',
    SLASH: '劈砍',
    HEAVY: '重型',
    IMPACT: '冲击',
    EXTREME: '极限',
    ALL: '全域',
    GATEWAY: '门户',
    WHITE_GATE: '洁白之门',
    BLACK_STONE_GATE: '黑石之门',
    STEEL_GATE: '钢铁之门',
    RUST_GATE: '锈蚀之门',
    BLOODSTAIN_GATE: '血染之门',
    KICK: '踢击',
    MOBILITY: '位移',
    INTERRUPT: '打断',
    WRESTLING: '摔跤',
    BOXING: '拳击',
    FAST: '快速',
    ELBOW: '肘击',
    THROW: '抛投',
    SCAVENGE: '搜刮',
    RUINS: '废墟',
    CORPSE: '尸骸',
    FLESH_MOUNTAIN: '肉山',
    HIGH_RISK: '高风险',
    SHOP: '商店',
    SAWMILL: '锯木厂',
    MATERIALS: '材料',
    NEEDLE: '射针',
    CURSE: '咒杀',
    MANUAL: '手动',
    WOODEN_CROSSBOW: '木弩',
    FLAP_CROSSBOW: '皮瓣弩',
    STEEL_CROSSBOW: '钢弩',
    RECURVE_COMPOSITE_CROSSBOW: '复合弩',
    SEMI_AUTO: '半自动',
    AUTO: '全自动'
} as const;

/**
 * 行为标签 ID
 */
export type ActionTagID = typeof ActionTags[keyof typeof ActionTags];

/**
 * 行为标签详细数据表
 */
export const ActionTagDataMap: Record<ActionTagID, ITag> = {
    [ActionTags.ATTACK]: { 
        id: ActionTags.ATTACK, 
        name: '攻击', 
        type: TagType.ACTION, 
        description: '主动对目标造成的破坏行为',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.MELEE]: { 
        id: ActionTags.MELEE, 
        name: '近战', 
        type: TagType.ACTION, 
        description: '贴身搏斗，力量与速度的对决',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.RANGED]: { 
        id: ActionTags.RANGED, 
        name: '远程', 
        type: TagType.ACTION, 
        description: '远距离投射或射击，保持安全距离',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.COLLECT]: { 
        id: ActionTags.COLLECT, 
        name: '采集', 
        type: TagType.ACTION, 
        description: '从环境中获取特定资源的互动行为',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.SWORD]: { 
        id: ActionTags.SWORD, 
        name: '剑技', 
        type: TagType.ACTION, 
        description: '各种精妙的剑术动作',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.FINISHER]: { 
        id: ActionTags.FINISHER, 
        name: '终结技', 
        type: TagType.ACTION, 
        description: '当敌人虚弱时发出的致命一击',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.CONTROL]: { 
        id: ActionTags.CONTROL, 
        name: '控制', 
        type: TagType.ACTION, 
        description: '限制或干扰敌人的行动',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.BLOODY]: { 
        id: ActionTags.BLOODY, 
        name: '血腥', 
        type: TagType.ACTION, 
        description: '场面极其惨烈，带有强烈的视觉冲击',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.THRUST]: { 
        id: ActionTags.THRUST, 
        name: '刺击', 
        type: TagType.ACTION, 
        description: '直线发力的穿刺动作',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.SWEEP]: { 
        id: ActionTags.SWEEP, 
        name: '横扫', 
        type: TagType.ACTION, 
        description: '扇形范围的挥砍动作',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.SLASH]: { 
        id: ActionTags.SLASH, 
        name: '劈砍', 
        type: TagType.ACTION, 
        description: '由上而下的重力劈扣动作',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.HEAVY]: { 
        id: ActionTags.HEAVY, 
        name: '重型', 
        type: TagType.ACTION, 
        description: '势大力沉的攻击，通常带有较高的冲击力',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.IMPACT]: { 
        id: ActionTags.IMPACT, 
        name: '冲击', 
        type: TagType.ACTION, 
        description: '造成物理碰撞和震慑的效果',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.EXTREME]: { 
        id: ActionTags.EXTREME, 
        name: '极限', 
        type: TagType.ACTION, 
        description: '超越常规限度的表现或要求',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.ALL]: { 
        id: ActionTags.ALL, 
        name: '全域', 
        type: TagType.ACTION, 
        description: '覆盖全方位的整体执行逻辑',
        categoryPath: ['标签', '范围限定']
    },
    [ActionTags.GATEWAY]: { 
        id: ActionTags.GATEWAY, 
        name: '门户', 
        type: TagType.ACTION, 
        description: '与特定的门户、节点或出入口相关的逻辑',
        categoryPath: ['标签', '地理位置']
    },
    [ActionTags.WHITE_GATE]: { 
        id: ActionTags.WHITE_GATE, 
        name: '洁白之门', 
        type: TagType.ACTION, 
        description: '特定位置：洁白之门区域',
        categoryPath: ['标签', '地理位置']
    },
    [ActionTags.BLACK_STONE_GATE]: { 
        id: ActionTags.BLACK_STONE_GATE, 
        name: '黑石之门', 
        type: TagType.ACTION, 
        description: '特定位置：黑石之门区域',
        categoryPath: ['标签', '地理位置']
    },
    [ActionTags.STEEL_GATE]: { 
        id: ActionTags.STEEL_GATE, 
        name: '钢铁之门', 
        type: TagType.ACTION, 
        description: '特定位置：钢铁之门区域',
        categoryPath: ['标签', '地理位置']
    },
    [ActionTags.RUST_GATE]: { 
        id: ActionTags.RUST_GATE, 
        name: '锈蚀之门', 
        type: TagType.ACTION, 
        description: '特定位置：锈蚀之门区域',
        categoryPath: ['标签', '地理位置']
    },
    [ActionTags.BLOODSTAIN_GATE]: { 
        id: ActionTags.BLOODSTAIN_GATE, 
        name: '血染之门', 
        type: TagType.ACTION, 
        description: '特定位置：血染之门区域',
        categoryPath: ['标签', '地理位置']
    },
    [ActionTags.KICK]: { 
        id: ActionTags.KICK, 
        name: '踢击', 
        type: TagType.ACTION, 
        description: '使用腿部的攻击动作',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.MOBILITY]: { 
        id: ActionTags.MOBILITY, 
        name: '位移', 
        type: TagType.ACTION, 
        description: '产生 position 变化的动作',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.INTERRUPT]: { 
        id: ActionTags.INTERRUPT, 
        name: '打断', 
        type: TagType.ACTION, 
        description: '强行中止目标正在进行的动作',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.WRESTLING]: { 
        id: ActionTags.WRESTLING, 
        name: '摔跤', 
        type: TagType.ACTION, 
        description: '通过肢体缠绕或发力改变目标平衡的技巧',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.BOXING]: { 
        id: ActionTags.BOXING, 
        name: '拳击', 
        type: TagType.ACTION, 
        description: '使用拳头的攻击动作',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.FAST]: { 
        id: ActionTags.FAST, 
        name: '快速', 
        type: TagType.ACTION, 
        description: '极高的执行频率或动作速度',
        categoryPath: ['标签', '性能表现']
    },
    [ActionTags.ELBOW]: { 
        id: ActionTags.ELBOW, 
        name: '肘击', 
        type: TagType.ACTION, 
        description: '使用肘部的短程发力攻击动作',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.THROW]: { 
        id: ActionTags.THROW, 
        name: '抛投', 
        type: TagType.ACTION, 
        description: '将目标投掷出去的动作',
        categoryPath: ['标签', '行为动作']
    },
    [ActionTags.SCAVENGE]: { 
        id: ActionTags.SCAVENGE, 
        name: '搜刮', 
        type: TagType.ACTION, 
        description: '对特定地点或物体进行深入细致的搜索',
        categoryPath: ['标签', '搜刮行为']
    },
    [ActionTags.RUINS]: { 
        id: ActionTags.RUINS, 
        name: '废墟', 
        type: TagType.ACTION, 
        description: '环境：残垣断壁、破损不堪的建筑遗迹',
        categoryPath: ['标签', '地理位置']
    },
    [ActionTags.CORPSE]: { 
        id: ActionTags.CORPSE, 
        name: '尸骸', 
        type: TagType.ACTION, 
        description: '生物死亡后的遗留物',
        categoryPath: ['标签', '目标类型']
    },
    [ActionTags.FLESH_MOUNTAIN]: { 
        id: ActionTags.FLESH_MOUNTAIN, 
        name: '肉山', 
        type: TagType.ACTION, 
        description: '扭曲的血肉堆积而成的山丘',
        categoryPath: ['标签', '地理位置']
    },
    [ActionTags.HIGH_RISK]: { 
        id: ActionTags.HIGH_RISK, 
        name: '高风险', 
        type: TagType.ACTION, 
        description: '极易产生负面后果或面临巨大威胁的动作',
        categoryPath: ['标签', '难度评级']
    },
    [ActionTags.SHOP]: { 
        id: ActionTags.SHOP, 
        name: '商店', 
        type: TagType.ACTION, 
        description: '环境：原本用于交易的场所',
        categoryPath: ['标签', '地理位置']
    },
    [ActionTags.SAWMILL]: { 
        id: ActionTags.SAWMILL, 
        name: '锯木厂', 
        type: TagType.ACTION, 
        description: '环境：进行木材加工的工坊遗址',
        categoryPath: ['标签', '地理位置']
    },
    [ActionTags.MATERIALS]: { 
        id: ActionTags.MATERIALS, 
        name: '材料', 
        type: TagType.ACTION, 
        description: '用于制作、建设或研发的基础资源',
        categoryPath: ['标签', '资源类型']
    },
    [ActionTags.NEEDLE]: { 
        id: ActionTags.NEEDLE, 
        name: '射针', 
        type: TagType.ACTION, 
        description: '细长、尖锐的抛射物',
        categoryPath: ['标签', '武器特性']
    },
    [ActionTags.CURSE]: { 
        id: ActionTags.CURSE, 
        name: '咒杀', 
        type: TagType.ACTION, 
        description: '带有诡异超自然力量的破坏效果',
        categoryPath: ['标签', '力量属性']
    },
    [ActionTags.MANUAL]: { 
        id: ActionTags.MANUAL, 
        name: '手动', 
        type: TagType.ACTION, 
        description: '需要依靠人力触发或执行的逻辑',
        categoryPath: ['标签', '触发性质']
    },
    [ActionTags.WOODEN_CROSSBOW]: { 
        id: ActionTags.WOODEN_CROSSBOW, 
        name: '木弩', 
        type: TagType.ACTION, 
        description: '使用木材构建的发射机构',
        categoryPath: ['标签', '武器特性']
    },
    [ActionTags.FLAP_CROSSBOW]: { 
        id: ActionTags.FLAP_CROSSBOW, 
        name: '皮瓣弩', 
        type: TagType.ACTION, 
        description: '带有皮瓣稳定结构的弩箭',
        categoryPath: ['标签', '武器特性']
    },
    [ActionTags.STEEL_CROSSBOW]: { 
        id: ActionTags.STEEL_CROSSBOW, 
        name: '钢弩', 
        type: TagType.ACTION, 
        description: '使用金属钢片作为弹性构件的强力发射装置',
        categoryPath: ['标签', '武器特性']
    },
    [ActionTags.RECURVE_COMPOSITE_CROSSBOW]: { 
        id: ActionTags.RECURVE_COMPOSITE_CROSSBOW, 
        name: '复合弩', 
        type: TagType.ACTION, 
        description: '采用复合材料和反曲设计的精密远程武器',
        categoryPath: ['标签', '武器特性']
    },
    [ActionTags.SEMI_AUTO]: { 
        id: ActionTags.SEMI_AUTO, 
        name: '半自动', 
        type: TagType.ACTION, 
        description: '每次操作触发单次自动流程的机构',
        categoryPath: ['标签', '机构性能']
    },
    [ActionTags.AUTO]: { 
        id: ActionTags.AUTO, 
        name: '全自动', 
        type: TagType.ACTION, 
        description: '持续执行流程无需重复操作的机构',
        categoryPath: ['标签', '机构性能']
    },
};
