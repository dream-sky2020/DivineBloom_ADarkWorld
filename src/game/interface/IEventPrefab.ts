import type { IPrefab } from './IPrefab';

/**
 * 游戏事件预制体接口
 * 用于定义非战斗类的逻辑事件，作为“编译”成运行时逻辑实体的原始数据。
 */
export interface IEventPrefab extends IPrefab {
    /** 事件类型 */
    type: string;
    /** 触发该事件的前置条件 ID 列表 */
    preconditions?: string[];
}
