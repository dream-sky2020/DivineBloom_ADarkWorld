import type { IData } from './IData';
import type { IObject } from './IObject';

/**
 * 世界数据接口
 * 用于存储大量的游戏对象数据，作为一个完整游戏世界的顶层容器。
 */
export interface IWorld extends IData {
    /** 世界包含的所有对象映射表 (ID -> IObject) */
    objects: Record<string, IObject>;

    /** 世界的版本信息 (可选) */
    version?: string;

    /** 允许任意其他扩展属性 */
    [key: string]: any;
}
