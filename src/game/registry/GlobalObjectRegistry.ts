import { ActionMapDefinition } from '../maps/ObjectMap/ActionMap';
import { ChoiceMapDefinition } from '../maps/ObjectMap/ChoiceMap';
import { DialogueMapDefinition } from '../maps/ObjectMap/DialogueMap';
import { EnemyMapDefinition } from '../maps/ObjectMap/EnemyMap';
import { ItemMapDefinition } from '../maps/ObjectMap/ItemMap';
import { MapMapDefinition } from '../maps/ObjectMap/MapMap';

/**
 * 全局对象大聚合注册表 (GlobalObjectRegistry)
 * 聚合了所有业务种类的 DataMap 定义，作为系统中所有对象的“单一事实来源”。
 */
export const GlobalObjectRegistry = {
    /** 行为/动作数据 */
    action: ActionMapDefinition,
    /** 对话选择数据 */
    choice: ChoiceMapDefinition,
    /** 对话流程数据 */
    dialogue: DialogueMapDefinition,
    /** 敌人预制体数据 */
    enemy: EnemyMapDefinition,
    /** 物品预制体数据 */
    item: ItemMapDefinition,
    /** 地图区域数据 */
    map: MapMapDefinition,
} as const;

/**
 * 对象种类联合类型
 */
export type GlobalObjectKind = keyof typeof GlobalObjectRegistry;

/**
 * 注册表工具类
 */
export const ObjectRegistryUtils = {
    /**
     * 根据 ID 自动查找该对象所属的种类 (Kind)
     * 实现了从 ID 到 Kind 的反向推导
     */
    findKindById(id: string): GlobalObjectKind | undefined {
        for (const [kind, definition] of Object.entries(GlobalObjectRegistry)) {
            if (id in (definition.data as any)) {
                return kind as GlobalObjectKind;
            }
        }
        return undefined;
    },

    /**
     * 根据 ID 获取具体的数据对象内容
     */
    getObjectById(id: string): any {
        const kind = this.findKindById(id);
        if (kind) {
            return (GlobalObjectRegistry[kind].data as any)[id];
        }
        return undefined;
    },

    /**
     * 获取指定种类的所有数据映射
     */
    getDataMapByKind<K extends GlobalObjectKind>(kind: K) {
        return GlobalObjectRegistry[kind].data;
    }
};
