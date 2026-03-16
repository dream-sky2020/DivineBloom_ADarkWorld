import { ItemID } from '../../maps/ItemMap';
import { ECSWorld } from '../../../core/ECSCore';

/**
 * InventoryChange 组件 - 统一处理物品/资源的变化
 * 负值表示消耗，正值表示获得
 */
export const InventoryChange = {
    // 使用 Record<string, bigint> 存储变化量，优化稀疏物品存储
    data: Array.from({ length: ECSWorld.MAX_ENTITIES }, () => ({} as Record<string, bigint>)),

    /**
     * 设置某个物品的变化量
     */
    set(eid: number, itemID: ItemID, amount: bigint) {
        this.data[eid][itemID] = amount;
    },

    /**
     * 为某个实体批量增加变化项
     */
    addMultiple(eid: number, changes: Record<string, bigint>) {
        Object.assign(this.data[eid], changes);
    },

    /**
     * 获取实体的所有物品变化量
     */
    getAll(eid: number): Record<string, bigint> {
        return this.data[eid];
    }
};
