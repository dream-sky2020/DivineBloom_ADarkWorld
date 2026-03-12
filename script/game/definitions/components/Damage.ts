import { ECSWorld } from '../../core/ECSCore';

/**
 * Damage 组件 - 存储造成伤害的数据
 */
export const Damage = {
    // 伤害数值 (支持大数)
    value: new BigInt64Array(ECSWorld.MAX_ENTITIES),

    set(eid: number, val: bigint) {
        this.value[eid] = val;
    }
};
