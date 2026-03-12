import { ECSWorld } from '../../core/ECSCore';

/**
 * Position 组件 - 自带内存块 (BigInt64Array)
 * 用于存储大数坐标，支持极远距离的探索
 */
export const Position = {
    // 1. 静态分配 BigInt 内存
    x: new BigInt64Array(ECSWorld.MAX_ENTITIES),
    y: new BigInt64Array(ECSWorld.MAX_ENTITIES),

    /**
     * 设置位置
     * @param eid 实体 ID
     * @param x 必须为 bigint (带 n 后缀)
     * @param y 必须为 bigint (带 n 后缀)
     */
    set(eid: number, x: bigint, y: bigint) {
        this.x[eid] = x;
        this.y[eid] = y;
    },

    /**
     * 平移位置
     */
    translate(eid: number, dx: bigint, dy: bigint) {
        this.x[eid] += dx;
        this.y[eid] += dy;
    }
};
