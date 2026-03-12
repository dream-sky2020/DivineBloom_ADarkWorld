import { ECSWorld } from './core/ECSCore';
import { Inventory } from './definitions/components/Inventory';
import { Position } from './definitions/components/Position';
import { Health } from './definitions/components/Health';
import { Location } from './definitions/components/Location';
import { Cooldown } from './definitions/components/Cooldown';
import { Action } from './definitions/components/Action';
import { Damage } from './definitions/components/Damage';
import { Heal } from './definitions/components/Heal';
import { AddActionEffect } from './definitions/components/AddActionEffect';

/**
 * 全局世界实例
 */
export const world = new ECSWorld();

/**
 * DataSpace - 聚合索引 (Facade)
 * 现在 $DS 不再存储数据，而是作为访问各个组件内存的入口。
 */
export const DataSpace = {
    // 组件内存引用
    inventory: Inventory,
    position: Position,
    health: Health,
    location: Location,
    cooldown: Cooldown,
    action: Action,
    damage: Damage,
    heal: Heal,
    addActionEffect: AddActionEffect,

    // 全局标志位 (依然使用 TypedArray 保证性能)
    uiDirty: new Uint8Array(ECSWorld.MAX_ENTITIES)
};

// 全局挂载，方便调试和老旧 JS 访问
(window as any).$DS = DataSpace;
