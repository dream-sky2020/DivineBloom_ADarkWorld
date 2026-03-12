/**
 * 极简高性能 ECS 核心
 */
export class ECSWorld {
    public static MAX_ENTITIES = 10000;
    
    private entityMasks = new Uint32Array(ECSWorld.MAX_ENTITIES);
    private freeEntities: number[] = [];
    private nextEntityId = 0;

    public createEntity(): number {
        const id = this.freeEntities.length > 0 ? this.freeEntities.pop()! : this.nextEntityId++;
        this.entityMasks[id] = 0;
        return id;
    }

    public removeEntity(eid: number) {
        this.entityMasks[eid] = 0;
        this.freeEntities.push(eid);
    }

    public addComponent(eid: number, componentBit: number) {
        this.entityMasks[eid] |= componentBit;
    }

    public removeComponent(eid: number, componentBit: number) {
        this.entityMasks[eid] &= ~componentBit;
    }

    public query(requiredMask: number): number[] {
        const result = [];
        for (let i = 0; i < this.nextEntityId; i++) {
            if ((this.entityMasks[i] & requiredMask) === requiredMask) {
                result.push(i);
            }
        }
        return result;
    }
}

/**
 * 组件位定义 (32位以内)
 */
export const ComponentBit = {
    Position: 1 << 0,
    Inventory: 1 << 1,
    Health: 1 << 2,
    AI: 1 << 3,
    Player: 1 << 4, // 玩家标签组件位
    Location: 1 << 5, // 地点组件位
    Cooldown: 1 << 6, // 冷却组件位
    Action: 1 << 7,   // 行为标签组件位
    Damage: 1 << 8,   // 伤害效果组件
    Heal: 1 << 9,     // 治疗效果组件
    AddActionEffect: 1 << 10 // 新增：添加行为效果组件
};
