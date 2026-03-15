import { world, DataSpace } from '../DataSpace';
import { ComponentBit } from '../definitions/ComponentBit';
import { PlayerEntity } from '../definitions/entities/Player';

/**
 * WorldEcsRuntime - ECS 运行环境
 */
export class WorldEcsRuntime {
    private lastTime = performance.now();
    private playerEid: number = -1;

    public init() {
        this.tick();
    }

    private tick() {
        const now = performance.now();
        const dt = (now - this.lastTime) / 1000;
        this.lastTime = now;

        // 运行系统
        this.moveSystem(dt);
        this.productionSystem(dt);

        requestAnimationFrame(() => this.tick());
    }

    private moveSystem(dt: number) {
        const ents = world.query(ComponentBit.Position);
        for (const eid of ents) {
            // 注意：BigInt 运算不支持小数。这里为了演示，每帧移动固定的 1n 单位。
            // 在实际逻辑中，您可以通过累加 dt 到一个变量，当超过阈值时再执行 BigInt 位移。
            if (dt > 0) {
                DataSpace.position.x[eid] += 1n;
            }
        }
    }

    private productionSystem(dt: number) {
        const ents = world.query(ComponentBit.Inventory);
        for (const eid of ents) {
            // 每秒产生大量木材
            if (dt > 0.01) {
                DataSpace.inventory.add(eid, ItemTypeMap.STICK_WOOD, 5000000n);
                DataSpace.uiDirty[eid] = 1; // 标记 UI 刷新
            }
        }
    }
}

export const ecsRuntime = new WorldEcsRuntime();
