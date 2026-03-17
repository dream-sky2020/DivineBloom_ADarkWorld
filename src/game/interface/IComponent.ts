
/**
 * 组件定义接口
 * 
 * @template TData 组件序列化数据类型
 * @template TRuntime 运行时组件类型 (默认等于序列化数据类型)
 */
export interface IComponentDefinition<TData = any, TRuntime = TData> {
    /**
     * 组件定义唯一标识符 (建议使用稳定且全局唯一的值)
     */
    readonly id: string;

    /**
     * 组件唯一名称 (用于注册和调试)
     */
    readonly name: string;

    /**
     * 创建/初始化组件实例
     * @param args 初始化参数 (可以是对象、参数列表等，由具体实现决定)
     */
    create(...args: any[]): TRuntime;

    /**
     * 序列化组件为纯数据对象
     * @param component 运行时组件实例
     */
    serialize(component: TRuntime): TData;

    /**
     * 从数据恢复组件实例
     * @param data 序列化后的数据
     */
    deserialize(data: any): TRuntime;

    /**
     * 编辑器 Inspector 配置 (可选)
     */
    readonly inspectorFields?: any[];
}
