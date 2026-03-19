/**
 * 基础数据接口
 * 规定了所有核心定义对象必须具备的基础属性
 */
export interface IData {
    /** 唯一标识符 */
    id: string;
    /** 显示名称 */
    name: string;
    /** 详细描述 */
    description: string;
    /** 标签列表 (可选) */
    tags?: string[];
}
