import { ECSWorld } from '../../core/ECSCore';
import { formatLargeNumberWithUnits } from '../../tool/LargeNumberUnitFormatter';

/**
 * Inventory 组件 - 自带内存块 (BigInt64Array)
 */
export const Inventory = {
    // 1. 静态分配内存
    wood: new BigInt64Array(ECSWorld.MAX_ENTITIES),
    fur: new BigInt64Array(ECSWorld.MAX_ENTITIES),
    meat: new BigInt64Array(ECSWorld.MAX_ENTITIES),
    curedMeat: new BigInt64Array(ECSWorld.MAX_ENTITIES),
    alienAlloy: new BigInt64Array(ECSWorld.MAX_ENTITIES),
    energyCell: new BigInt64Array(ECSWorld.MAX_ENTITIES),

    // 2. 辅助方法
    getFormatted(eid: number, resource: 'wood' | 'fur' | 'meat' | 'curedMeat' | 'alienAlloy' | 'energyCell'): string {
        const val = this[resource][eid];
        return formatLargeNumberWithUnits(val);
    },

    add(eid: number, resource: 'wood' | 'fur' | 'meat' | 'curedMeat' | 'alienAlloy' | 'energyCell', amount: bigint) {
        this[resource][eid] += amount;
    }
};
