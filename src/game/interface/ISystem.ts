import type { IWorld } from './IWorld';

/**
 * 游戏系统接口 (ECS 中的 Systems)
 * 系统的职责是处理世界中具有特定属性或标签的对象集合。
 * 系统仅负责逻辑更新 (Data In, Data Out)，不负责界面表现。
 */
export interface ISystem {
    /** 系统的唯一 ID */
    id: string;
    /** 优先级 (数值越小执行越早) */
    priority: number;
    /** 是否启用 */
    enabled: boolean;

    /**
     * 系统初始化逻辑 (在进入主循环前调用一次)
     * @param world 当前世界数据
     */
    init?(world: IWorld): void;

    /**
     * 逻辑更新 (每一帧逻辑计算时调用)
     * @param world 当前世界数据
     * @param deltaTime 距离上一帧的时间 (单位视实现而定，通常为毫秒)
     */
    update(world: IWorld, deltaTime: number): void;

    /**
     * 系统销毁时调用
     */
    destroy?(): void;
}
