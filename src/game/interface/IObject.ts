import type { IObjectTemplate } from './IObjectTemplate';
import type { AttributeID } from '../maps/AttributeMap/types';

/**
 * 运行时对象/实体接口 (Runtime Object/Entity)
 * 用于代表在游戏运行过程中，基于 IObjectTemplate 加载出来的具体实体。
 * 
 * 在 ECS 架构下，这个接口可以作为实体属性集的容器。
 * 
 * @template TAttrUnion 该对象允许使用的属性 ID 的联合类型，默认为 AttributeID
 */
export interface IObject<TAttrUnion extends string = AttributeID> extends IObjectTemplate<TAttrUnion> {
    /** 
     * 实例特有的唯一标识符 (例如 UUID)
     * 区别于预制体的静态 ID (Data ID)
     */
    instanceId?: string;

    /** 运行时允许动态增加或修改任意属性 */
    [key: string]: any;
}
