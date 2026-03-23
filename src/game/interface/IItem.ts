import type { IData } from './IData';

/**
 * 转换触发条件位掩码
 */
export const ItemTransformTrigger = {
    NONE: 0,
    USAGE: 1 << 0,
    TIME: 1 << 1,
    PROCESS: 1 << 2,
} as const;

/**
 * 物品详细定义接口
 * 继承自 IData，包含 id, name, description 等基础信息
 */
export interface IItem extends IData {
    /**
     * 占用体积 (物品所占空间)
     */
    volume: bigint | number;
    /**
     * 营养成分 (食物类物品可选) (支持 bigint | number)
     */
    nutrition?: {
        /** 蛋白质含量 */
        protein: bigint | number;
        /** 脂肪含量 */
        fat: bigint | number;
        /** 碳水化合物含量 */
        carbs: bigint | number;
        /** 维生素含量 */
        vitamin: bigint | number;
        /** 水分含量 */
        water: bigint | number;
        /** 矿物质含量 */
        minerals: bigint | number;
    };
    /**
     * 放射性强度 (若物品具有辐射) (支持 bigint | number)
     */
    radioactivity?: bigint | number;
    /**
     * 包含的基本元素 (例如：用于分解或合成)
     */
    elements?: Record<string, bigint | number>;
    /**
     * 物品转化/演变逻辑 (例如：腐烂、加工后变样)
     */
    transform?: {
        /** 触发转化的掩码条件 (见 ItemTransformTrigger) */
        triggerMask: number;
        /** 转化后的目标物品 ID */
        to: string;
        /** 转化发生的概率 (0-1) */
        probability: number;
    };
    /**
     * 拆除/爆破力 (用于特定的场景交互) (支持 bigint | number)
     */
    demolitionPower?: bigint | number;
}
