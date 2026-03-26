import { type AttributeID } from '../maps/AttributeMap/types';

/**
 * 属性适用范围
 */
export type AttributeScope = 'player' | 'enemy' | 'item' | 'map' | 'reincarnation' | 'all';

/**
 * 对象属性注册中心 (ObjectAttributeRegistry)
 * 专门管理属性 (Attribute) 与对象种类 (Object Scope) 之间的对应关系。
 * 
 * 提示：目前注册内容已清空，待后续手动安排每个对象对应的属性。
 */
export const ObjectAttributeRegistry: Record<AttributeScope, AttributeID[]> = {
    player: [] as AttributeID[],
    enemy: [] as AttributeID[],
    item: [] as AttributeID[],
    map: [] as AttributeID[],
    reincarnation: [] as AttributeID[],
    all: [] as AttributeID[],
};

/**
 * 反向映射：属性 ID 到对象种类的映射
 */
export const AttributeToScopeMap: Record<AttributeID, AttributeScope[]> = {} as any;

/**
 * 自动生成反向映射
 */
export function initializeReverseMap() {
    // 先清空旧的映射 (如果有)
    for (const key in AttributeToScopeMap) {
        delete (AttributeToScopeMap as any)[key];
    }
    
    for (const [scope, attrIds] of Object.entries(ObjectAttributeRegistry)) {
        const s = scope as AttributeScope;
        attrIds.forEach(id => {
            if (!AttributeToScopeMap[id]) {
                AttributeToScopeMap[id] = [];
            }
            if (!AttributeToScopeMap[id].includes(s)) {
                AttributeToScopeMap[id].push(s);
            }
        });
    }
}

// 初始执行一次
initializeReverseMap();

/**
 * 注册中心工具方法
 */
export const ObjectAttributeUtils = {
    /**
     * 获取指定范围内的所有属性 ID
     */
    getAttributesByScope(scope: AttributeScope): AttributeID[] {
        return ObjectAttributeRegistry[scope] || [];
    },

    /**
     * 检查属性是否属于指定范围
     * 注意：如果属性尚未注册，目前默认返回 false
     */
    isAttributeInScope(attrId: AttributeID, scope: AttributeScope): boolean {
        const scopes = AttributeToScopeMap[attrId];
        if (!scopes) return false;
        return scopes.includes(scope) || scopes.includes('all');
    },

    /**
     * 获取属性所属的所有范围
     */
    getAttributeScopes(attrId: AttributeID): AttributeScope[] {
        return AttributeToScopeMap[attrId] || [];
    }
};
