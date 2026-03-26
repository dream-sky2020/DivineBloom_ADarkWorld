import type { IData } from './IData';

/**
 * 标签种类枚举 (排序权重从小到大)
 */
export const TagType = {
  SYSTEM: '系统',      // 基础核心系统 (战斗, 生存, 统计等)
  MECHANIC: '机制',    // 具体游戏机制 (暴击, 闪避, 反伤等)
  ATTRIBUTE: '属性',    // 细分属性类别 (概率, 上限, 基础等)
  ITEM: '物品',        // 物品相关 (消耗品, 武器, 稀有度等)
  ACTION: '行为',      // 行为动作 (攻击, 采集, 控制等)
  STATE: '状态',        // 增益/减益状态 (流血, 恐惧, 永久等)
  OTHER: '其他'
} as const;

export type TagType = typeof TagType[keyof typeof TagType];

/**
 * 标签元数据接口
 */
export interface ITag extends IData {
  type: TagType;       // 种类 (用于排序和分组)
  color?: string;      // 可选颜色
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
