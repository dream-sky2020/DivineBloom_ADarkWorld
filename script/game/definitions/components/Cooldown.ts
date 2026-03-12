import { ECSWorld } from '../../core/ECSCore';

/**
 * Cooldown 组件 - 自带内存块
 * 采用 Float32Array 存储时间秒数，支持高性能的冷却倒计时计算。
 */
export const Cooldown = {
    // 1. 静态分配内存
    // 当前剩余冷却时间（秒）
    current: new Float32Array(ECSWorld.MAX_ENTITIES),
    
    // 最大冷却时间（秒）
    max: new Float32Array(ECSWorld.MAX_ENTITIES),

    /**
     * 初始化或启动一个冷却
     */
    start(eid: number, seconds: number) {
        this.current[eid] = seconds;
        this.max[eid] = seconds;
    },

    /**
     * 检查是否处于冷却中
     */
    isReady(eid: number): boolean {
        return this.current[eid] <= 0;
    },

    /**
     * 获取冷却百分比 (0 到 1)
     * 用于 UI 进度条渲染
     */
    getPercent(eid: number): number {
        if (this.max[eid] === 0) return 0;
        return this.current[eid] / this.max[eid];
    }
};
