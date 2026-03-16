import { world, Data } from '../../../Data';
import { ComponentBit } from '../../ComponentBit';
/**
 * CooldownSystem - 处理所有实体的冷却倒计时系统
 * 该系统属于 Control 层，负责驱动状态随时间的变化。
 */
export const CooldownSystem = {
    /**
     * 更新系统
     * @param dt 增量时间 (秒)
     */
    update(dt: number) {
        // 查询所有拥有 Cooldown 组件的实体
        const ents = world.query(ComponentBit.Cooldown);
        
        for (const eid of ents) {
            // 调用组件的更新逻辑
            Data.cooldown.update(eid, dt);
        }
    }
};
