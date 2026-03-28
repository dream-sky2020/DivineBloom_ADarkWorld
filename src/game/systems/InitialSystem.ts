import type { IWorld, ISystem } from '../interface';

/**
 * 初始化系统 (ECS System)
 * 职责：负责世界和对象的初始化逻辑，仅在系统启动时执行。
 * 该系统不参与每帧循环。
 */
export class InitialSystem implements ISystem {
    id = 'InitialSystem';
    priority = -200; // 最早初始化
    enabled = true;

    /**
     * 系统初始化逻辑
     * @param world 当前世界数据
     */
    init(world: IWorld): void {
        // TODO: 初始化逻辑 (例如创建初始对象、设置默认属性等)
        console.log(`[InitialSystem] 初始化世界...`);
    }

    /**
     * 逻辑更新 (不执行任何操作)
     */
    update(world: IWorld, deltaTime: number): void {
        // 该系统不负责循环逻辑
    }
}
