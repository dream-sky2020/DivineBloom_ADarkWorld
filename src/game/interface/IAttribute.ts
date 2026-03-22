/**
 * 基础属性定义接口
 * 所有具有唯一 ID、名称和描述的游戏对象（如属性项、预制体、判定规则）都应继承此接口
 */
export interface IAttribute {
    /** 唯一标识符 */
    id: string;
    /** 显示名称 */
    name: string;
    /** 详细描述 */
    description: string;
    /** 标签列表 (可选) */
    tags?: string[];
}
