import type { IData } from './IData';

/**
 * 枚举定义接口
 * 用于所有的“规则类型”映射（如：修改符、判定符）。
 * 这里的枚举值不仅仅是一个字符串，还携带了它的数学逻辑含义。
 */
export interface IEnum extends IData {
    /** 备注信息 (可选) */
    remark?: string;
}
