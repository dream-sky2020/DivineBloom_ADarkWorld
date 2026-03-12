import { ECSWorld } from '../../core/ECSCore';

/**
 * Heal 组件 - 存储治疗数据
 */
export const Heal = {
    // 治疗数值 (支持大数)
    value: new BigInt64Array(ECSWorld.MAX_ENTITIES),

    set(eid: number, val: bigint) {
        this.value[eid] = val;
    }
};
