import type { IData } from './IData';
import type { AttributeID } from '../maps/AttributeMap/types';

/**
 * 对象模板接口 (Object Template)
 * 专门用于定义对象(实体)的初始加载属性。
 * 
 * 在 ECS 架构下，此接口定义了一个实体在初始加载时应具备的组件及其初始值。
 * 所有的对象定义都应该是并列的，通过 ID 或属性进行关联，而非嵌套。
 * 
 * @template TAttrUnion 属性 ID 的联合类型，默认为 AttributeID
 */
export interface IObjectTemplate<TAttrUnion extends string = AttributeID> extends IData {
    /** 
     * 初始属性集 (Initial Attributes)
     * Key 为属性 ID (AttributeID)，Value 为该属性的初始加载数值或状态。
     * 
     * 如果使用了未定义的属性名，编译器将会报错。
     */
    stats: Partial<Record<TAttrUnion, number | bigint | string | string[]>>;

    /** 
     * 对象种类 (可选)
     * 用于区分加载时的基础行为分类，如 'enemy', 'item', 'player' 等
     */
    kind?: string;

    /** 
     * 预制体/数据版本
     */
    version?: string;

    /** 
     * 元数据 (附加描述性信息，不直接参与业务逻辑)
     */
    metadata?: Record<string, any>;
}

/**
 * 通用的对象定义辅助类型
 */
export type ObjectTemplateData<TAttrUnion extends string = AttributeID> = Partial<Record<TAttrUnion, number | bigint | string | string[]>>;
