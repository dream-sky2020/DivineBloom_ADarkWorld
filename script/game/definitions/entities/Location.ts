import { world } from '../../Data';
import { ComponentBit } from '../ComponentBit';
import { Position } from '../components/Position';
import { Location } from '../components/Location';
import { Inventory } from '../components/Inventory';
import { LocationType } from '../maps/LocationMap';

/**
 * Location 实体预制体
 * 定义了世界地图上地标（Mines, Towns, Outposts等）的组件构成。
 */
export const LocationEntity = {
    /**
     * 创建一个地点实体
     * @param x 坐标 X (bigint)
     * @param y 坐标 Y (bigint)
     * @param type 地点类型
     * @returns 实体 ID
     */
    create(x: bigint, y: bigint, type: LocationType): number {
        const eid = world.createEntity();

        // 1. 组合组件：位置 + 地点属性 + 背包（用于存储产出或掉落物）
        world.addComponent(eid, ComponentBit.Position | ComponentBit.Location | ComponentBit.Inventory);

        // 2. 初始化数据
        Position.set(eid, x, y);
        Location.set(eid, type);
        
        return eid;
    }
};
