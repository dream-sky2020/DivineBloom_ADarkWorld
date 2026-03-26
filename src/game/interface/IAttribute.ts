import type { IData } from './IData';
/**
 * 属性适用范围
 */
export type AttributeScope = 'player' | 'enemy' | 'item' | 'map' | 'reincarnation' | 'all';

/**
 * 属性数值类型定义
 */
export type AttributeValueType = 'number' | 'bigint' | 'string' | 'id' | 'string_array' | 'id_array';

/**
 * 属性本质分类 (用于高解释度计算框架)
 * - raw: 基础/原始值 (不受加成影响的初始值)
 * - bonus: 修正/加成值 (存储各类 Buff、装备提供的额外数值)
 * - total: 最终/总计值 (经过计算公式合并 raw 和 bonus 后的生效值)
 * - current: 实时/当前值 (频繁变动的瞬时值，如当前血量、当前冷却)
 */
export type AttributeKind = 'raw' | 'bonus' | 'total' | 'current';

/**
 * 属性定义接口
 * 用于定义玩家或敌人的各类数值属性 (如：力量、敏捷、精神等)
 */
export interface IAttribute extends IData {
    /** 
     * 属性本质分类
     */
    kind: AttributeKind;
    /** 
     * 属性数值的类型 (可选)
     * 用于告知 UI 或逻辑如何处理该属性 (例如：'id' 表示该字符串是一个其他对象的 ID)
     * 如果未指定，逻辑通常根据 defaultValue 的运行时类型推断
     */
    valueType?: AttributeValueType;
    /** 属性默认值 (增量游戏中使用 bigint 以支持超大数值，或 string 支持非数值属性/ID) */
    defaultValue: bigint | number | string | string[];
    /** 属性最小值 (可选) */
    minValue?: bigint | number | string | string[];
    /** 属性最大值 (可选) */
    maxValue?: bigint | number | string | string[];
    /** 是否是百分比属性 (例如：暴击率) */
    isPercent?: boolean;
    /** 属性单位 (如：'点', '%', 'kg') */
    unit?: string;
    /** 属性所属分类 (如：'primary' 基础属性, 'combat' 战斗属性) */
    category?: string;
    /** 是否默认加载此属性 (默认为 false) */
    isDefaultLoaded?: boolean;
    /** 
     * 属性适用范围
     * 定义该属性可以出现在哪些预制体的 stats 中
     * 如果包含 'all'，则所有预制体均可使用
     */
    scope?: AttributeScope[];
}
