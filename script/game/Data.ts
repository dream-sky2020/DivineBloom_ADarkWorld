import { ECSWorld } from './core/ECSCore';
import { Inventory } from './definitions/components/Inventory';
import { Position } from './definitions/components/Position';
import { Health } from './definitions/components/Health';
import { Location } from './definitions/components/Location';
import { Cooldown } from './definitions/components/Cooldown';
import { Action } from './definitions/components/Action';
import { Target } from './definitions/components/Target';
import { HealthChange } from './definitions/components/ActionEffect/HealthChange';
import { ActionChange } from './definitions/components/ActionEffect/ActionChange';
import { InventoryChange } from './definitions/components/ActionEffect/InventoryChange';

/**
 * 全局世界实例
 */
export const world = new ECSWorld();

/**
 * Data - 聚合索引 (Facade)
 * 现在 $Data 不再存储数据，而是作为访问各个组件内存所在的入口。
 */
export const Data = {
    // 组件内存引用
    inventory: Inventory,
    position: Position,
    health: Health,
    location: Location,
    cooldown: Cooldown,
    action: Action,
    target: Target,
    healthChange: HealthChange,
    actionChange: ActionChange,
    inventoryChange: InventoryChange,

    // 全局标志位 (依然使用 TypedArray 保证性能)
    uiDirty: new Uint8Array(ECSWorld.MAX_ENTITIES)
};

// 全局挂载，方便调试和老旧 JS 访问
(window as any).$Data = Data;
