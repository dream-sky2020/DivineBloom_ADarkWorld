import type { AttributeID } from '../AttributeMap/types';

/**
 * 对象基础分类，对应不同的默认属性集
 */
export type TemplateKind = 'player' | 'enemy' | 'item' | 'map' | 'action' | 'choice' | 'dialogue' | 'global';

/**
 * 各类型对象的初始属性默认值映射
 * 
 * 这里的 key 是 TemplateKind，value 是该类型对象默认拥有的属性及其初始值。
 * 系统在加载具体对象时，会先应用这里的默认值，然后再用对象自身的 stats 进行覆盖。
 */
export const InitialDefaults: Record<TemplateKind, Partial<Record<AttributeID, number | bigint | string | string[]>>> = {
    global: {
        // 全局默认属性
    },
    player: {
        // 玩家默认属性
    },
    enemy: {
        // 敌人默认属性
    },
    item: {
        // 物品默认属性
    },
    map: {
        // 地图/区域默认属性
    },
    action: {
        // 行为默认属性
    },
    choice: {
        // 对话选择默认属性
    },
    dialogue: {
        // 对话流程默认属性
    }
};

/**
 * 助手工具：根据 Kind 获取合并后的属性
 */
export function getMergedStats(kind: TemplateKind, specificStats: Partial<Record<AttributeID, any>>) {
    return {
        ...(InitialDefaults[kind] || {}),
        ...specificStats
    };
}
