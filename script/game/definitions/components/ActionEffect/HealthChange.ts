import { ECSWorld } from '../../../core/ECSCore';

/**
 * HealthChange 组件 - 统一处理血量变化
 * 负值表示伤害，正值表示治疗
 */
export const HealthChange = {
    // 变化数值 (支持大数)
    value: new BigInt64Array(ECSWorld.MAX_ENTITIES),

    set(eid: number, val: bigint) {
        this.value[eid] = val;
    }
};
