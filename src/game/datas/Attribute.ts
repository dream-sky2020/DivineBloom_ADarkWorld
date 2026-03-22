import type { IAttribute } from '../interface/IAttribute';
/**
 * 属性定义接口
 * 用于定义玩家或敌人的各类数值属性 (如：力量、敏捷、精神等)
 */
export interface Attribute extends IAttribute {
    /** 属性默认值 (增量游戏中使用 bigint 以支持超大数值) */
    defaultValue: bigint | number;
    /** 属性最小值 (可选) */
    minValue?: bigint | number;
    /** 属性最大值 (可选) */
    maxValue?: bigint | number;
    /** 是否是百分比属性 (例如：暴击率) */
    isPercent?: boolean;
    /** 属性单位 (如：'点', '%', 'kg') */
    unit?: string;
    /** 属性所属分类 (如：'primary' 基础属性, 'combat' 战斗属性) */
    category?: string;
    /** 是否默认加载此属性 (默认为 false) */
    isDefaultLoaded?: boolean;
}
