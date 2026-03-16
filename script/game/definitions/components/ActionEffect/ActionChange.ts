import { ECSWorld } from '../../../core/ECSCore';

/**
 * ActionChange 组件 - 用于行为实体，表示该行为会对目标添加或移除新的行为/技能
 */
export const ActionChange = {
    // 准备添加的行为位掩码
    addMask: new Uint32Array(ECSWorld.MAX_ENTITIES),
    // 准备移除的行为位掩码
    removeMask: new Uint32Array(ECSWorld.MAX_ENTITIES),

    set(eid: number, add: number, remove: number = 0) {
        this.addMask[eid] = add;
        this.removeMask[eid] = remove;
    }
};
