import { ECSWorld } from '../../core/ECSCore';

/**
 * Action 组件 - 行为核心关联组件
 * 作为一个实体拥有此组件，即代表它是一个“行为”实体。
 * 它仅存储行为最基础的元数据：谁发起了这个行为。
 * 具体的行动结果（伤害、治疗等）由独立的组件（Damage, Heal等）定义。
 */
export const Action = {
    // 1. 行为从属数据
    // 该行为实体属于哪个主体实体 (如玩家 ID 或 怪物 ID)
    ownerEid: new Int32Array(ECSWorld.MAX_ENTITIES),

    /**
     * 设置行为所属者
     */
    set(eid: number, ownerEid: number) {
        this.ownerEid[eid] = ownerEid;
    }
};
