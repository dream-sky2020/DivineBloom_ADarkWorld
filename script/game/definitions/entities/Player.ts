import { world } from '../../Data';
import { ComponentBit } from '../ComponentBit';
import { Inventory } from '../components/Inventory';
import { Health } from '../components/Health';
import { Position } from '../components/Position';
import { ItemTypeMap } from '../maps/ItemMap';

/**
 * Player 实体预制体
 * 定义了玩家实体的组件构成及其初始化逻辑。
 */
export const PlayerEntity = {
    /**
     * 创建一个玩家实体
     * @param x 初始 X 坐标 (bigint)
     * @param y 初始 Y 坐标 (bigint)
     * @param hp 初始生命值 (bigint)
     * @returns 返回创建的实体 ID
     */
    create(x: bigint, y: bigint, hp: bigint): number {
        const eid = world.createEntity();

        // 1. 定义组件包：将 Position, Inventory, Health 和 Player 标签绑定到此实体
        world.addComponent(eid, 
            ComponentBit.Position | 
            ComponentBit.Inventory | 
            ComponentBit.Health | 
            ComponentBit.Player
        );

        // 2. 初始化组件数据
        Position.set(eid, x, y);
        Health.init(eid, hp);
        
        return eid;
    }
};
