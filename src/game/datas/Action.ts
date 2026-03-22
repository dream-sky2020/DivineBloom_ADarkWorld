import type { IAttribute } from '../interface/IAttribute';
import type { TriggerStrategy } from './TriggerStrategy';

/**
 * 行为详细定义接口
 * 继承自 IAttribute，包含 id, name, description 等基础信息
 */
export interface Action extends IAttribute {
    triggerStrategy: TriggerStrategy;

    /**
     * 行为冷却时间（秒）
     */
    cooldown?: number;
    /**
     * 冷却完毕后是否自动重置并计数 +1
     * 开启后，冷却进度条跑满会自动消耗冷却时间并增加可用次数（充能逻辑）
     */
    autoCooldownAccumulate?: boolean;

    /**
     * 最大标记计数 / 最大充能层数
     * 默认为 1。如果大于 1，则行为可以连续充能多次
     */
    maxCooldownAccumulateCharges?: number;
    /**
     * 行为消耗（可按项目继续扩展） (支持 bigint | number)
     */
    cost?: {
        stamina?: bigint | number;
        mana?: bigint | number;
        hp?: bigint | number;
    };
    /**
     * 行为触发要求（例如：力量差距、特定状态）
     */
    requirements?: {
        /**
         * 力量差距要求 (例如：玩家力量 / 敌人力量 >= N)
         */
        strengthRatio?: number;
        /**
         * 最小力量值要求 (支持 bigint | number)
         */
        minStrength?: bigint | number;
    };
}
