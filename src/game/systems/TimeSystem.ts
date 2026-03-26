import type { IWorld, ISystem } from '../interface';
import { WorldUtils } from '../tool/WorldUtils';
import { AttributeTypeMap } from '../maps/AttributeMap';

/**
 * 计时系统 (ECS System)
 * 职责：每一帧兢兢业业地更新世界中的各种游玩时长属性及系统实时时间。
 */
export class TimeSystem implements ISystem {
    id = 'TimeSystem';
    priority = 0; // 计时系统通常最先执行，优先级设为最高
    enabled = true;

    update(world: IWorld, deltaTime: number): void {
        // 1. 更新系统实时时间戳 (毫秒级)
        WorldUtils.setStat(world, AttributeTypeMap.SYSTEM_TIME, BigInt(Date.now()));

        // 2. 累加游玩时长 (deltaTime 为两帧之间的时间差，单位毫秒)
        // 使用 Math.floor 确保转为 bigint 时的精度，虽然 deltaTime 通常是小数
        const dt = BigInt(Math.floor(deltaTime));

        // 存档总时长
        WorldUtils.modifyStat(world, AttributeTypeMap.PLAY_TIME_ARCHIVE, dt);
        // 本轮回时长
        WorldUtils.modifyStat(world, AttributeTypeMap.PLAY_TIME_CYCLE, dt);
        // 本次探索时长
        WorldUtils.modifyStat(world, AttributeTypeMap.PLAY_TIME_EXPLORATION, dt);
    }
}
