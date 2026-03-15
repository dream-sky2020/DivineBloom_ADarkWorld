import { ECSWorld } from '../../core/ECSCore';
import { formatLargeNumberWithUnits } from '../../tool/LargeNumberUnitFormatter';
import { ItemID } from '../maps/ItemMap';

/**
 * Inventory 组件 - 对象映射型存储
 * 使用 Record<ItemID, bigint> 存储，优化稀疏物品存储性能
 */
export const Inventory = {
    data: Array.from({ length: ECSWorld.MAX_ENTITIES }, () => ({} as Record<string, bigint>)),

    /**
     * 获取格式化的物品数量字符串
     */
    getFormatted(eid: number, resource: ItemID): string {
        const val = this.data[eid][resource] || 0n;
        return formatLargeNumberWithUnits(val);
    },

    /**
     * 增加或减少物品数量
     */
    add(eid: number, resource: ItemID, amount: bigint) {
        const current = this.data[eid][resource] || 0n;
        this.data[eid][resource] = current + amount;
    },

    /**
     * 直接获取物品数量
     */
    get(eid: number, resource: ItemID): bigint {
        return this.data[eid][resource] || 0n;
    },

    /**
     * 设置物品数量
     */
    set(eid: number, resource: ItemID, amount: bigint) {
        this.data[eid][resource] = amount;
    },

    /**
     * 获取实体拥有的所有物品
     */
    getAll(eid: number): Record<string, bigint> {
        return this.data[eid];
    }
};
