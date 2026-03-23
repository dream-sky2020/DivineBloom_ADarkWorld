/**
 * 基础数据定义接口
 * 所有具有唯一 ID、名称和描述的游戏对象都应继承此接口
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
    /**
     * 递归分类路径 (可选)
     * 例如: ['装备', '武器', '剑'] 或 ['机制', '触发模式']
     */
    categoryPath?: string[];
}
