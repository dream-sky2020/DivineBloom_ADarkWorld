import type { IWorld, ISystem, ICommand } from '../interface';
import { WorldUtils, ObjectUtils } from '../tool';
import { type AttributeID } from '../maps/AttributeMap';

/**
 * 命令处理系统 (ECS System)
 * 职责：作为世界指令的集散地，负责在每一帧开始前清空并执行 ICommand 队列。
 * 它实现了对世界全局属性或对象属性的原子化修改。
 */
export class CommandSystem implements ISystem {
    id = 'CommandSystem';
    priority = -100; // 最早执行，确保本帧逻辑基于最新的命令修改结果
    enabled = true;

    update(world: IWorld, deltaTime: number): void {
        if (!world.commands || world.commands.length === 0) return;

        // 批量拉取当前所有待处理命令，并清空队列
        const currentBatch = [...world.commands];
        world.commands = [];

        for (const cmd of currentBatch) {
            this.executeCommand(world, cmd);
        }
    }

    /**
     * 执行单个扁平化命令
     */
    private executeCommand(world: IWorld, cmd: ICommand): void {
        const { target, targetId, statId, op, value } = cmd;
        const stat = statId as AttributeID;

        if (target === 'world') {
            this.handleWorldStat(world, stat, op, value);
        } else if (target === 'object' && targetId) {
            this.handleObjectStat(world, targetId, stat, op, value);
        }
    }

    /**
     * 处理世界全局属性
     */
    private handleWorldStat(world: IWorld, id: AttributeID, op: string, value: number | bigint | string | string[]): void {
        switch (op) {
            case 'set':
                WorldUtils.setStat(world, id, value);
                break;
            case 'add':
                if (typeof value === 'number' || typeof value === 'bigint') {
                    WorldUtils.modifyStat(world, id, value);
                }
                break;
            case 'sub':
                // 内部处理 bigint 兼容性
                if (typeof value === 'number' || typeof value === 'bigint') {
                    WorldUtils.modifyStat(world, id, typeof value === 'bigint' ? -value : -Number(value));
                }
                break;
        }
    }

    /**
     * 处理具体实体属性
     */
    private handleObjectStat(world: IWorld, objId: string, id: AttributeID, op: string, value: number | bigint | string | string[]): void {
        const obj = WorldUtils.getObject(world, objId);
        if (!obj) {
            console.warn(`[CommandSystem] 找不到目标对象 ID: ${objId}`);
            return;
        }

        switch (op) {
            case 'set':
                ObjectUtils.setStat(obj, id, value);
                break;
            case 'add':
                if (typeof value === 'number' || typeof value === 'bigint') {
                    ObjectUtils.modifyStat(obj, id, value);
                }
                break;
            case 'sub':
                if (typeof value === 'number' || typeof value === 'bigint') {
                    ObjectUtils.modifyStat(obj, id, typeof value === 'bigint' ? -value : -Number(value));
                }
                break;
        }
    }
}
