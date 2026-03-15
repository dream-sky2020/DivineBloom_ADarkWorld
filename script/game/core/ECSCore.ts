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
