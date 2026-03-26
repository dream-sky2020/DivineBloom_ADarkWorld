import type { IWorld, ISystem, ICommand } from '../interface';
import { TimeSystem, CommandSystem } from '../systems';

/**
 * 游戏逻辑主循环 (ECS 系统调度中心)
 * 职责：
 * 1. 内置所有必要的逻辑系统 (ECS Systems)。
 * 2. 负责调度系统按优先级更新集。
 * 3. 维护世界状态 (IWorld)。
 * 4. 提供 dispatch(cmd) 接口作为外部与引擎的原子化通讯通道。
 */
export class Loop {
    private world: IWorld;
    private systems: ISystem[] = [];
    private isRunning: boolean = false;
    private animationId: number | null = null;
    private lastTime: number = 0;
    private onUpdateCallback?: (world: IWorld) => void;

    /**
     * 初始化循环
     * @param world 初始世界状态
     */
    constructor(world: IWorld) {
        this.world = world;
        
        // 确保命令队列已初始化
        if (!this.world.commands) {
            this.world.commands = [];
        }

        // 在内部直接规定并初始化系统
        this.initInternalSystems();
    }

    /**
     * 向世界分发外部命令 (UI -> Engine 的扁平化入口)
     * @param cmd 符合 ICommand 契约的指令对象
     */
    public dispatch(cmd: Omit<ICommand, 'timestamp'>): void {
        this.world.commands.push({
            ...cmd,
            timestamp: performance.now()
        });
    }

    /**
     * 获取当前世界引用 (外部 UI 可以读取此数据进行渲染)
     */
    public getWorld(): IWorld {
        return this.world;
    }

    /**
     * 订阅逻辑更新事件
     */
    public onUpdate(callback: (world: IWorld) => void): void {
        this.onUpdateCallback = callback;
    }

    /**
     * 初始化内置的逻辑系统
     */
    private initInternalSystems(): void {
        this.systems = [
            // 处理命令系统的优先级设为最高 (-100)，确保它最先运行
            new CommandSystem(),
            // 计时系统的优先级设为 0，兢兢业业更新时长
            new TimeSystem(),
            // 未来可以在这里添加更多内置逻辑系统
        ];

        // 按优先级排序
        this.systems.sort((a, b) => a.priority - b.priority);
    }

    /**
     * 启动循环
     */
    public start(): void {
        if (this.isRunning) return;

        for (const system of this.systems) {
            system.init?.(this.world);
        }

        this.isRunning = true;
        this.lastTime = performance.now();
        this.gameLoop(this.lastTime);
    }

    /**
     * 停止循环
     */
    public stop(): void {
        this.isRunning = false;
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        for (const system of this.systems) {
            system.destroy?.();
        }
    }

    /**
     * 内部主循环调度
     */
    private gameLoop(timestamp: number): void {
        if (!this.isRunning) return;

        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        this.update(deltaTime);

        this.animationId = requestAnimationFrame((t) => this.gameLoop(t));
    }

    /**
     * 执行系统更新逻辑
     */
    private update(deltaTime: number): void {
        // 调度逻辑系统 (Logic Phase)
        // 注意：CommandSystem 已经在 systems 列表中，它会根据 priority=-100 自动被调度
        for (const system of this.systems) {
            if (system.enabled) {
                system.update(this.world, deltaTime);
            }
        }
        
        // 触发更新回调 (UI Notification Phase)
        this.onUpdateCallback?.(this.world);
    }
}
