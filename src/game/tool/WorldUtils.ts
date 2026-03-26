import type { IWorld, IObject, IAttribute } from '../interface';
import { AttributeDataMap, type AttributeID } from '../maps/AttributeMap';

/**
 * 世界工具类
 * 提供对 IWorld 顶层容器及其包含的所有 IObject 的统一管理方法。
 * 它可以执行增删改查、基于标签或分类的过滤操作，以及全局属性 (stats) 的读写。
 */
export class WorldUtils {
    // === 对象管理 (Entities) ===

    /**
     * 获取世界中指定 ID 的对象
     * @param world 世界实例
     * @param id 对象 ID
     * @returns 对象实例，如果不存在则返回 undefined
     */
    static getObject(world: IWorld, id: string): IObject | undefined {
        return world.objects?.[id];
    }

    /**
     * 将一个对象添加到世界中
     * 如果已存在同 ID 的对象，则会覆盖它。
     * @param world 世界实例
     * @param obj 对象实例
     */
    static addObject(world: IWorld, obj: IObject): void {
        if (!world.objects) {
            world.objects = {};
        }
        world.objects[obj.id] = obj;
    }

    /**
     * 从世界中移除指定 ID 的对象
     * @param world 世界实例
     * @param id 对象 ID
     * @returns 是否成功移除 (如果对象原本就不存在则返回 false)
     */
    static removeObject(world: IWorld, id: string): boolean {
        if (world.objects && id in world.objects) {
            delete world.objects[id];
            return true;
        }
        return false;
    }

    /**
     * 检查世界中是否存在指定 ID 的对象
     * @param world 世界实例
     * @param id 对象 ID
     */
    static hasObject(world: IWorld, id: string): boolean {
        return !!world.objects && id in world.objects;
    }

    /**
     * 获取世界中所有对象的数组
     * @param world 世界实例
     */
    static getAllObjects(world: IWorld): IObject[] {
        return world.objects ? Object.values(world.objects) : [];
    }

    /**
     * 根据标签筛选世界中的对象
     * @param world 世界实例
     * @param tag 标签名称
     * @returns 符合标签要求的对象数组
     */
    static getObjectsByTag(world: IWorld, tag: string): IObject[] {
        return this.getAllObjects(world).filter(obj => 
            obj.tags && obj.tags.includes(tag)
        );
    }

    /**
     * 根据分类路径筛选世界中的对象
     * @param world 世界实例
     * @param categoryPath 分类路径数组 (如 ['装备', '武器'])
     * @param exactMatch 是否要求路径完全匹配 (默认为 false，即包含该路径子集也符合)
     * @returns 符合分类要求的对象数组
     */
    static getObjectsByCategory(
        world: IWorld, 
        categoryPath: string[], 
        exactMatch: boolean = false
    ): IObject[] {
        return this.getAllObjects(world).filter(obj => {
            if (!obj.categoryPath) return false;
            
            if (exactMatch) {
                return obj.categoryPath.length === categoryPath.length &&
                       obj.categoryPath.every((p, i) => p === categoryPath[i]);
            } else {
                // 部分匹配：只要 obj.categoryPath 以传入路径开头即符合
                return categoryPath.every((p, i) => obj.categoryPath![i] === p);
            }
        });
    }

    /**
     * 根据自定义谓词筛选对象
     * @param world 世界实例
     * @param predicate 筛选函数
     */
    static findObjects(world: IWorld, predicate: (obj: IObject) => boolean): IObject[] {
        return this.getAllObjects(world).filter(predicate);
    }

    /**
     * 获取世界包含的对象数量
     * @param world 世界实例
     */
    static getObjectCount(world: IWorld): number {
        return world.objects ? Object.keys(world.objects).length : 0;
    }

    /**
     * 清空世界中的所有对象
     * @param world 世界实例
     */
    static clearObjects(world: IWorld): void {
        world.objects = {};
    }

    // === 全局属性管理 (Global Stats) ===

    /**
     * 获取属性的原始定义 (IAttribute)
     */
    private static getAttributeDef(id: AttributeID): IAttribute | undefined {
        return AttributeDataMap[id];
    }

    /**
     * 获取世界的全局属性值
     * 逻辑优先级：世界显式定义的 stats > 属性定义中的 defaultValue > 0
     * @param world 世界实例
     * @param id 属性 ID
     * @returns 属性当前的数值 (number, bigint, string 或 string[])
     */
    static getStat(world: IWorld, id: AttributeID): number | bigint | string | string[] {
        const value = world.stats?.[id as any];
        if (value !== undefined) return value;

        const def = this.getAttributeDef(id);
        if (def && def.defaultValue !== undefined) {
            return def.defaultValue;
        }
        return 0;
    }

    /**
     * 设置世界的全局属性值
     * @param world 世界实例
     * @param id 属性 ID
     * @param value 新值
     */
    static setStat(world: IWorld, id: AttributeID, value: number | bigint | string | string[]): void {
        if (!world.stats) {
            world.stats = {};
        }
        (world.stats as any)[id] = value;
    }

    /**
     * 增量修改世界的全局属性值
     * 自动处理 number 和 bigint 的混合加法。如果是字符串或数组则直接覆盖。
     * @param world 世界实例
     * @param id 属性 ID
     * @param delta 变化量
     */
    static modifyStat(world: IWorld, id: AttributeID, delta: number | bigint): void {
        const current = this.getStat(world, id);
        
        if (typeof current === 'string' || Array.isArray(current)) {
            this.setStat(world, id, delta);
            return;
        }

        if (typeof current === 'bigint' || typeof delta === 'bigint') {
            this.setStat(world, id, BigInt(current) + BigInt(delta));
        } else {
            this.setStat(world, id, (current as number) + (delta as number));
        }
    }

    /**
     * 检查世界是否显式持有了某个全局属性
     */
    static hasStat(world: IWorld, id: AttributeID): boolean {
        return !!world.stats && (id as any) in world.stats;
    }

    /**
     * 移除世界显式定义的全局属性
     */
    static removeStat(world: IWorld, id: AttributeID): void {
        if (world.stats) {
            delete (world.stats as any)[id];
        }
    }
}
