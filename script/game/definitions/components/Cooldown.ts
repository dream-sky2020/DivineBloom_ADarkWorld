import { ECSWorld } from '../../core/ECSCore';

/**
 * Cooldown 组件 - 自带内存块
 * 采用 Float32Array 存储时间秒数，支持高性能的冷却倒计时计算。
 */
export const Cooldown = {
    // 1. 静态分配内存
    // 当前剩余冷却时间（秒）
    current: new Float32Array(ECSWorld.MAX_ENTITIES),
    
    // 最大单次冷却时间（秒）
    max: new Float32Array(ECSWorld.MAX_ENTITIES),

    // 已经冷却完毕的标记计数 (例如：充能层数)
    readyCount: new Uint32Array(ECSWorld.MAX_ENTITIES),

    // 最大标记计数 (例如：最大充能层数)
    maxReadyCount: new Uint32Array(ECSWorld.MAX_ENTITIES),

    // 是否自动重置并继续计数 (1 表示自动重置，0 表示停止在 0)
    autoReset: new Uint8Array(ECSWorld.MAX_ENTITIES),

    /**
     * 初始化或启动一个冷却
     * @param eid 实体 ID
     * @param seconds 冷却时间
     * @param autoReset 是否开启自动重置（充能模式）
     * @param maxReadyCount 最大充能层数（默认为 1）
     */
    start(eid: number, seconds: number, autoReset: boolean = false, maxReadyCount: number = 1) {
        this.current[eid] = seconds;
        this.max[eid] = seconds;
        this.readyCount[eid] = 0;
        this.maxReadyCount[eid] = maxReadyCount;
        this.autoReset[eid] = autoReset ? 1 : 0;
    },

    /**
     * 逻辑更新 (由 System 每帧调用)
     * @param eid 实体 ID
     * @param dt 增量时间 (秒)
     */
    update(eid: number, dt: number) {
        // 如果已经达到最大充能，则不再倒计时
        if (this.readyCount[eid] >= this.maxReadyCount[eid]) {
            this.current[eid] = 0;
            return;
        }

        // 开始或继续倒计时
        this.current[eid] -= dt;
        
        // 检查冷却完毕情况
        if (this.current[eid] <= 0) {
            // 冷却完毕，增加标记计数
            this.readyCount[eid]++;
            
            // 处理重置逻辑
            if (this.autoReset[eid] === 1 && this.readyCount[eid] < this.maxReadyCount[eid] && this.max[eid] > 0) {
                // 循环模式：将溢出的时间补偿到下一轮
                const overflow = Math.abs(this.current[eid]);
                this.current[eid] = Math.max(0, this.max[eid] - overflow);
                
                // 极端情况下，dt 可能远大于 max，导致一次 tick 产生多层充能
                while (this.current[eid] <= 0 && this.readyCount[eid] < this.maxReadyCount[eid]) {
                    this.readyCount[eid]++;
                    if (this.readyCount[eid] < this.maxReadyCount[eid]) {
                        this.current[eid] += this.max[eid];
                    } else {
                        this.current[eid] = 0;
                    }
                }
            } else {
                // 非循环模式或已达上限，或者 max 为 0，停留在 0
                this.current[eid] = 0;
            }
        }
    },

    /**
     * 消耗一层冷却标记
     * @returns 是否成功消耗
     */
    consume(eid: number): boolean {
        if (this.readyCount[eid] > 0) {
            this.readyCount[eid]--;
            // 如果原本是满的且停在0，现在消耗了，需要重新开始倒计时
            if (this.current[eid] <= 0 && this.readyCount[eid] < this.maxReadyCount[eid]) {
                this.current[eid] = this.max[eid];
            }
            return true;
        }
        return false;
    },

    /**
     * 检查是否处于冷却完毕状态（至少有一层可用）
     */
    isReady(eid: number): boolean {
        return this.readyCount[eid] > 0;
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
