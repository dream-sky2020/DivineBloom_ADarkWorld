import type { IData } from './IData';

/**
 * 转生升级详细定义接口
 * 继承自 IData，包含 id, name, description 等基础信息
 */
export interface ReincarnationUpgrade extends IData {
    maxLevel: number;
    /**
     * 计算特定等级的消耗 (增量游戏中使用 bigint | number 支持超大数值)
     * @param level 目标等级
     * @returns 消耗的转生点数或其他资源
     */
    calculateCost: (level: number) => bigint | number;
    /**
     * 升级效果描述函数
     * @param level 当前等级
     * @returns 效果文本
     */
    getEffectDescription?: (level: number) => string;
}
