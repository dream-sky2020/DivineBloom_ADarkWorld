export type SpawnContext = {
    x: number;
    y: number;
    params?: Record<string, any>;
    sourceEntity?: any;
};

export type SpawnFactory<TRuntime = any> = (context: SpawnContext) => TRuntime;

/**
 * 实体定义接口
 * 
 * @template TData 实体序列化数据类型
 * @template TRuntime 运行时实体类型 (默认是 any)
 */
export interface IEntityDefinition<TData = any, TRuntime = any> {
    /**
     * 实体定义唯一标识符 (建议使用稳定且全局唯一的值)
     */
    readonly id: string;

    /**
     * 实体类型标识符 (例如 'player', 'npc')
     * 对应序列化数据中的 type 字段
     */
    readonly type: string;

    /**
     * 实体显示名称 (例如 '玩家', 'NPC')
     * 用于编辑器显示
     */
    readonly name: string;

    /**
     * 菜单排序权重
     * 用于在编辑器菜单中排序，越小越靠前
     */
    readonly order: number;

    /**
     * 当前创建序号
     * 用于生成唯一默认名称，例如 "Player_1", "Player_2"
     * 每次创建新实例时递增
     */
    creationIndex: number;

    /**
     * 产卵函数 (可选)
     * 用于从统一的 SpawnContext 生成实体
     */
    readonly spawnFactory?: SpawnFactory<TRuntime>;

    /**
     * 创建/初始化实体实例
     * @param data 初始化数据
     */
    create(data: TData): TRuntime;

    /**
     * 序列化实体为纯数据对象
     * @param entity 运行时实体实例
     */
    serialize(entity: TRuntime): TData;

    /**
     * 从数据恢复实体实例
     * @param data 序列化后的数据
     */
    deserialize(data: any): TRuntime;

    /**
     * 编辑器 Inspector 配置 (可选)
     */
    readonly inspectorFields?: any[];
}

/**
 * 运行时实体实例接口 (ECS 容器)
 * 这是一个通用的实体类型，包含所有可能的组件
 */
export type EntityId = string;

export function getEntityId(entity: any): EntityId {
    const value = entity?.id;
    return value == null ? '' : String(value);
}

let entityIdSeq = 0;

export function createEntityId(): EntityId {
    entityIdSeq += 1;
    const timePart = Date.now().toString(36);
    const seqPart = entityIdSeq.toString(36);
    const randPart = Math.random().toString(36).slice(2, 8);
    return `e_${timePart}_${seqPart}_${randPart}`;
}

export function ensureEntityId(entity: any): EntityId {
    if (!entity || typeof entity !== 'object') return '';

    const current = getEntityId(entity);
    const normalizedId = current || createEntityId();
    entity.id = normalizedId;

    if ('uuid' in entity) {
        delete entity.uuid;
    }

    return normalizedId;
}

export type IEntity = any;
