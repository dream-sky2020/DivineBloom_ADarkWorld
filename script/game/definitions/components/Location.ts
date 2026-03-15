import { ECSWorld } from '../../core/ECSCore';
import { LocationType, LocationTypeMap } from '../maps/LocationMap';

/**
 * Location 组件 - 自带内存块
 */
export const Location = {
    // 1. 静态分配内存
    // 存储地点类型（映射表模式）
    type: new Array<LocationType>(ECSWorld.MAX_ENTITIES).fill(LocationTypeMap.NONE),
    
    // 是否已发现/访问过
    isVisited: new Uint8Array(ECSWorld.MAX_ENTITIES),

    // 2. 辅助方法
    set(eid: number, type: LocationType) {
        this.type[eid] = type;
        this.isVisited[eid] = 0;
    },

    markVisited(eid: number) {
        this.isVisited[eid] = 1;
    }
};
