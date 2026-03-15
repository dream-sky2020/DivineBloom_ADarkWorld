import { ECSWorld } from '../../core/ECSCore';

/**
 * AddActionEffect 组件 - 用于行为实体，表示该行为会为目标添加新的行为/技能
 */
export const AddActionEffect = {
    // 准备添加的行为位掩码，其值应对应 ComponentBit 中的位
    actionMask: new Uint32Array(ECSWorld.MAX_ENTITIES),

    set(eid: number, mask: number) {
        this.actionMask[eid] = mask;
    }
};
