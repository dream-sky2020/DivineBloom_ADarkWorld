import { world } from '../../Data';
import { ComponentBit } from '../ComponentBit';
import { Action } from '../components/Action';
import { Cooldown } from '../components/Cooldown';
import { Button } from '../components/Button';
import { Target, TargetMode, TargetPriority } from '../components/Target';

/**
 * Action 实体预制体
 * 定义了行为实体的基本构成：必须包含 Action 组件（记录从属）、Cooldown 组件（处理计时）和 Target 组件（目标选择）。
 * 根据具体行为，还可以动态添加 HealthChange, ActionChange, InventoryChange 或 Button 组件。
 */
export const ActionEntity = {
    /**
     * 创建一个行为实体
     * @param ownerEid 行为的拥有者 ID
     * @param cooldownSeconds 冷却时间（秒）
     * @param targetConfig 目标选择配置
     * @param buttonConfig 可选：按钮配置 { canManual, canAuto, autoEnabled }
     * @returns 返回行为实体的 ID
     */
    create(
        ownerEid: number, 
        cooldownSeconds: number, 
        targetConfig: { mode: TargetMode, filterMask?: number, priority?: TargetPriority, maxTargets?: number },
        buttonConfig?: { canManual: boolean, canAuto: boolean, autoEnabled?: boolean }
    ): number {
        const eid = world.createEntity();

        // 1. 组合基础行为组件包
        let bits = ComponentBit.Action | ComponentBit.Cooldown | ComponentBit.Target;
        if (buttonConfig) {
            bits |= ComponentBit.Button;
        }
        world.addComponent(eid, bits);

        // 2. 初始化 Action 组件（绑定从属关系）
        Action.set(eid, ownerEid);

        // 3. 初始化 Cooldown 组件
        Cooldown.start(eid, cooldownSeconds);

        // 4. 初始化 Target 组件
        Target.set(
            eid, 
            targetConfig.mode, 
            targetConfig.filterMask ?? 0,
            targetConfig.priority ?? TargetPriority.NONE, 
            targetConfig.maxTargets ?? 1
        );

        // 5. (可选) 初始化 Button 配置
        if (buttonConfig) {
            Button.set(eid, buttonConfig.canManual, buttonConfig.canAuto, buttonConfig.autoEnabled ?? false);
        }

        return eid;
    }
};
