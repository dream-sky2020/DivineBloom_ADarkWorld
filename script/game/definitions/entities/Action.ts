import { world } from '../../DataSpace';
import { ComponentBit } from '../ComponentBit';
import { Action } from '../components/Action';
import { Cooldown } from '../components/Cooldown';
import { Button } from '../components/Button';

/**
 * Action 实体预制体
 * 定义了行为实体的基本构成：必须包含 Action 组件（记录从属）和 Cooldown 组件（处理计时）。
 * 根据具体行为，还可以动态添加 Damage, Heal, AddActionEffect 或 Button 组件。
 */
export const ActionEntity = {
    /**
     * 创建一个基础行为实体
     * @param ownerEid 行为的拥有者 ID
     * @param cooldownSeconds 冷却时间（秒）
     * @param buttonConfig 可选：按钮配置 { canManual, canAuto, autoEnabled }
     * @returns 返回行为实体的 ID
     */
    create(ownerEid: number, cooldownSeconds: number, buttonConfig?: { canManual: boolean, canAuto: boolean, autoEnabled?: boolean }): number {
        const eid = world.createEntity();

        // 1. 组合基础行为组件包
        let bits = ComponentBit.Action | ComponentBit.Cooldown;
        if (buttonConfig) {
            bits |= ComponentBit.Button;
        }
        world.addComponent(eid, bits);

        // 2. 初始化 Action 组件（绑定从属关系）
        Action.set(eid, ownerEid);

        // 3. 初始化 Cooldown 组件
        Cooldown.start(eid, cooldownSeconds);

        // 4. (可选) 初始化 Button 配置
        if (buttonConfig) {
            Button.set(eid, buttonConfig.canManual, buttonConfig.canAuto, buttonConfig.autoEnabled ?? false);
        }

        return eid;
    }
};
