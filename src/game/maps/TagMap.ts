/**
 * 标签元数据接口
 */
export interface Tag {
  id: string;          // 原始 ID (字符串)
  name: string;        // 显示名称
  type: TagType;       // 种类 (用于排序和分组)
  description?: string; // 描述内容
  color?: string;      // 可选颜色
}

/**
 * 标签种类枚举 (排序权重从小到大)
 */
export enum TagType {
  SYSTEM = '系统',      // 基础核心系统 (战斗, 生存, 统计等)
  MECHANIC = '机制',    // 具体游戏机制 (暴击, 闪避, 反伤等)
  ATTRIBUTE = '属性',    // 细分属性类别 (概率, 上限, 基础等)
  ITEM = '物品',        // 物品相关 (消耗品, 武器, 稀有度等)
  ACTION = '行为',      // 行为动作 (攻击, 采集, 控制等)
  STATE = '状态',        // 增益/减益状态 (流血, 恐惧, 永久等)
  OTHER = '其他'
}

/**
 * 标签权重定义 (用于界面展示排序)
 */
export const TagTypeWeight: Record<TagType, number> = {
  [TagType.SYSTEM]: 10,
  [TagType.MECHANIC]: 20,
  [TagType.ATTRIBUTE]: 30,
  [TagType.ITEM]: 40,
  [TagType.ACTION]: 50,
  [TagType.STATE]: 60,
  [TagType.OTHER]: 100,
};

/**
 * 预定义标签元数据映射表
 */
export const TagDataMap: Record<string, Tag> = {
  // --- 系统 (SYSTEM) ---
  '战斗': { id: '战斗', name: '战斗', type: TagType.SYSTEM, description: '与战斗流程相关的核心逻辑' },
  '生存': { id: '生存', name: '生存', type: TagType.SYSTEM, description: '关乎角色生死存亡的基础属性' },
  '统计': { id: '统计', name: '统计', type: TagType.SYSTEM, description: '用于后台数据累计与成就追踪' },
  '资源': { id: '资源', name: '资源', type: TagType.SYSTEM, description: '游戏中可获取、消耗或交易的物资' },
  '转生': { id: '转生', name: '转生', type: TagType.SYSTEM, description: '跨越轮回的永久性加成与进度' },

  // --- 机制 (MECHANIC) ---
  '暴击': { id: '暴击', name: '暴击', type: TagType.MECHANIC, description: '造成爆发性伤害的几率与威力' },
  '闪避': { id: '闪避', name: '闪避', type: TagType.MECHANIC, description: '完全规避敌方攻击的防御技巧' },
  '反伤': { id: '反伤', name: '反伤', type: TagType.MECHANIC, description: '受到攻击时将伤害回敬给攻击者' },
  '流血': { id: '流血', name: '流血', type: TagType.MECHANIC, description: '随时间不断损失生命值的负面效果' },
  '治疗': { id: '治疗', name: '治疗', type: TagType.MECHANIC, description: '恢复受损生命值的手段' },
  '恐惧': { id: '恐惧', name: '恐惧', type: TagType.MECHANIC, description: '对意志的压迫，削弱角色的各项能力' },
  '复活': { id: '复活', name: '复活', type: TagType.MECHANIC, description: '在生命耗尽后重新站起来的神迹' },

  // --- 属性 (ATTRIBUTE) ---
  '概率': { id: '概率', name: '几率', type: TagType.ATTRIBUTE, description: '触发特定事件的可能性' },
  '上限': { id: '上限', name: '上限', type: TagType.ATTRIBUTE, description: '属性所能达到的最大理论数值' },
  '基础': { id: '基础', name: '基础', type: TagType.ATTRIBUTE, description: '属性的最底层初始值' },
  '加成': { id: '加成', name: '加成', type: TagType.ATTRIBUTE, description: '额外的百分比或固定值增强' },
  '减益': { id: '减益', name: '减益', type: TagType.ATTRIBUTE, description: '负面的状态或能力削弱' },

  // --- 物品 (ITEM) ---
  '消耗品': { id: '消耗品', name: '消耗品', type: TagType.ITEM, description: '使用后会消失并产生即时效果的物品' },
  '武器': { id: '武器', name: '武器', type: TagType.ITEM, description: '提升角色攻击手段的装备' },
  '稀有': { id: '稀有', name: '稀有', type: TagType.ITEM, description: '难以寻觅的高价值资源' },

  // --- 状态 (STATE) ---
  '永久': { id: '永久', name: '永久', type: TagType.STATE, description: '不会随时间或特定行为消失的效果' },
  '状态': { id: '状态', name: '状态', type: TagType.STATE, description: '作用于角色的临时或持续性效果' },

  // --- 行为 (ACTION) - 处理部分英文 ID ---
  'attack': { id: 'attack', name: '攻击', type: TagType.ACTION, description: '主动对目标造成的破坏行为' },
  'melee': { id: 'melee', name: '近战', type: TagType.ACTION, description: '贴身搏斗，力量与速度的对决' },
  'ranged': { id: 'ranged', name: '远程', type: TagType.ACTION, description: '远距离投射或射击，保持安全距离' },
  'collect': { id: 'collect', name: '采集', type: TagType.ACTION, description: '从环境中获取特定资源的互动行为' },
  'sword': { id: 'sword', name: '剑技', type: TagType.ACTION, description: '各种精妙的剑术动作' },
  'finisher': { id: 'finisher', name: '终结技', type: TagType.ACTION, description: '当敌人虚弱时发出的致命一击' },
  'control': { id: 'control', name: '控制', type: TagType.ACTION, description: '限制或干扰敌人的行动' },
  'bloody': { id: 'bloody', name: '血腥', type: TagType.ACTION, description: '场面极其惨烈，带有强烈的视觉冲击' },
};
