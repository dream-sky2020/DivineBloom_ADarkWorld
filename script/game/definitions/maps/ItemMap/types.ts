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
 */
export interface ItemDefinition {
    id: string;
    name: string;
    description: string;
    volume: number;
    nutrition?: {
        protein: number;
        fat: number;
        carbs: number;
        vitamin: number;
        water: number;
        minerals: number;
    };
    radioactivity?: number;
    elements?: Record<string, number>;
    transform?: {
        triggerMask: number;
        to: string;
        probability: number;
    };
    demolitionPower?: number;
}
