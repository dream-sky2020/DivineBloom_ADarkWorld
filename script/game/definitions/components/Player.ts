import { ECSWorld } from '../../core/ECSCore';

/**
 * Player 标签组件
 * 作为一个纯标签组件，它不占用额外的数据空间（底层由 ECSWorld 的 bitmask 管理）。
 * 创建此文件是为了保持项目结构的统一性。
 */
export const Player = {
    // 标记位在 ECSCore.ts 中定义为 ComponentBit.Player
};
