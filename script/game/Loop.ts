import { CooldownSystem } from './definitions/systems/control/CooldownSystem';

/**
 * Loop - 游戏主循环 (ECS 系统驱动器)
 * 负责驱动所有 ECS 系统按顺序在每一帧进行更新。
 */
export const Loop = {
    lastTime: 0,
    running: false,

    /**
     * 注册的所有 ECS 系统列表
     */
    systems: [
        CooldownSystem
    ],

    /**
     * 启动循环
     */
    start() {
        if (this.running) return;
        this.running = true;
        this.lastTime = performance.now();
        requestAnimationFrame((time) => this.tick(time));
        console.log("[Loop] ECS Loop started.");
    },

    /**
     * 停止循环
     */
    stop() {
        this.running = false;
        console.log("[Loop] ECS Loop stopped.");
    },

    /**
     * 核心 Tick 逻辑
     * @param time 当前高精度时间
     */
    tick(time: number) {
        if (!this.running) return;

        // 计算 dt (单位：秒)
        // 限制最大 dt (如 0.1s)，防止切屏或卡顿导致 dt 过大造成逻辑跳跃
        const dt = Math.min((time - this.lastTime) / 1000, 0.1);
        this.lastTime = time;

        // 按顺序驱动各个系统
        for (const system of this.systems) {
            if (system.update) {
                system.update(dt);
            }
        }

        // 继续下一帧循环
        requestAnimationFrame((time) => this.tick(time));
    }
};

// 挂载到全局，方便调试
(window as any).$Loop = Loop;
