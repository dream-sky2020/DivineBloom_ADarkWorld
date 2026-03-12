import { ECSWorld } from '../../core/ECSCore';

/**
 * Health 组件 - 支持大数血量
 */
export const Health = {
    current: new BigInt64Array(ECSWorld.MAX_ENTITIES),
    max: new BigInt64Array(ECSWorld.MAX_ENTITIES),

    init(eid: number, hp: bigint) {
        this.current[eid] = hp;
        this.max[eid] = hp;
    },

    isDead(eid: number): boolean {
        return this.current[eid] <= 0n;
    }
};
