import { ECSWorld } from '../../core/ECSCore';
import { LocationType } from '../enums/LocationType';

/**
 * Location 组件 - 自带内存块
 */
export const Location = {
    // 1. 静态分配内存
    // 使用 Uint8Array 存储类型索引，节省空间
    type: new Uint8Array(ECSWorld.MAX_ENTITIES),
    
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
