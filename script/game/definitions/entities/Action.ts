import { world } from '../../DataSpace';
import { ComponentBit } from '../../core/ECSCore';
import { Action } from '../components/Action';
import { Cooldown } from '../components/Cooldown';

/**
 * Action 实体预制体
 * 定义了行为实体的基本构成：必须包含 Action 组件（记录从属）和 Cooldown 组件（处理计时）。
 * 根据具体行为，还可以动态添加 Damage, Heal 或 AddActionEffect 组件。
 */
export const ActionEntity = {
    /**
     * 创建一个基础行为实体
     * @param ownerEid 行为的拥有者 ID
     * @param cooldownSeconds 冷却时间（秒）
     * @returns 返回行为实体的 ID
     */
    create(ownerEid: number, cooldownSeconds: number): number {
        const eid = world.createEntity();

        // 1. 组合基础行为组件包
        world.addComponent(eid, ComponentBit.Action | ComponentBit.Cooldown);

        // 2. 初始化 Action 组件（绑定从属关系）
        Action.set(eid, ownerEid);

        // 3. 初始化 Cooldown 组件
        Cooldown.start(eid, cooldownSeconds);

        return eid;
    }
};
