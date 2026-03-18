/**
 * 转生升级详细定义接口
 */
export interface ReincarnationUpgradeDefinition {
    id: string;
    name: string;
    description: string;
    maxLevel: number;
    /**
     * 计算特定等级的消耗
     * @param level 目标等级
     * @returns 消耗的转生点数或其他资源
     */
    calculateCost: (level: number) => number;
    /**
     * 升级效果描述函数
     * @param level 当前等级
     * @returns 效果文本
     */
    getEffectDescription?: (level: number) => string;
}
