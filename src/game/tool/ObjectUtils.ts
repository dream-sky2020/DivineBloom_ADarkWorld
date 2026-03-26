import type { IObject, IAttribute } from '../interface';
import { AttributeDataMap, type AttributeID } from '../maps/AttributeMap';

/**
 * 对象工具类
 * 提供对 IObject 及其属性 (stats) 的统一查询与修改接口。
 * 它可以自动处理默认值、数值类型转换 (number/bigint) 以及元数据查询。
 */
export class ObjectUtils {
    /**
     * 获取属性的原始定义 (IAttribute)
     * @param id 属性 ID
     * @returns 属性定义，如果不存在则返回 undefined
     */
    static getAttributeDef(id: AttributeID): IAttribute | undefined {
        return AttributeDataMap[id];
    }

    /**
     * 获取对象的属性值
     * 逻辑优先级：对象显式定义的 stats > 属性定义中的 defaultValue > 0
     * @param obj 目标对象
     * @param id 属性 ID
     * @returns 属性当前的数值 (number, bigint, string 或 string[])
     */
    static getStat(obj: IObject, id: AttributeID): number | bigint | string | string[] {
        // 1. 检查对象实例是否定义了该属性
        const value = obj.stats?.[id as any];
        if (value !== undefined) {
            return value;
        }

        // 2. 如果实例未定义，返回该属性配置的默认值
        const def = this.getAttributeDef(id);
        if (def && def.defaultValue !== undefined) {
            return def.defaultValue;
        }

        return 0;
    }

    /**
     * 设置对象的属性值
     * 如果对象尚未初始化 stats 容器，会自动创建。
     * @param obj 目标对象
     * @param id 属性 ID
     * @param value 要设置的新值
     */
    static setStat(obj: IObject, id: AttributeID, value: number | bigint | string | string[]): void {
        if (!obj.stats) {
            obj.stats = {};
        }
        // 强制类型转换为 any 以避开 Record 类型的严格 Key 检查（因为 id 是字符串联合类型）
        (obj.stats as any)[id] = value;
    }

    /**
     * 增量修改对象的属性值
     * 自动处理 number 和 bigint 的混合加法。如果是字符串或数组则直接覆盖。
     * @param obj 目标对象
     * @param id 属性 ID
     * @param delta 变化量 (正数为加，负数为减)
     */
    static modifyStat(obj: IObject, id: AttributeID, delta: number | bigint): void {
        const current = this.getStat(obj, id);
        
        if (typeof current === 'string' || Array.isArray(current)) {
            // 字符串或数组属性不支持增量修改，直接覆盖
            this.setStat(obj, id, delta);
            return;
        }

        // 如果其中一个是 bigint，则按 bigint 处理
        if (typeof current === 'bigint' || typeof delta === 'bigint') {
            this.setStat(obj, id, BigInt(current) + BigInt(delta));
        } else {
            this.setStat(obj, id, (current as number) + (delta as number));
        }
    }

    /**
     * 检查对象是否显式持有了某个属性 (不包括默认值)
     * @param obj 目标对象
     * @param id 属性 ID
     */
    static hasStat(obj: IObject, id: AttributeID): boolean {
        return !!obj.stats && (id as any) in obj.stats;
    }

    /**
     * 清除对象显式定义的某个属性，使其回退到默认值
     * @param obj 目标对象
     * @param id 属性 ID
     */
    static removeStat(obj: IObject, id: AttributeID): void {
        if (obj.stats) {
            delete (obj.stats as any)[id];
        }
    }

    /**
     * 获取属性的显示名称 (IText)
     * @param id 属性 ID
     * @returns 属性名称，如果属性未定义则返回 ID 字符串
     */
    static getStatName(id: AttributeID): string {
        const def = this.getAttributeDef(id);
        if (!def) return id;
        // 如果 IText 是字符串则直接返回，如果是复杂对象则返回其显示名称
        return typeof def.name === 'string' ? def.name : (def.name as any).text || id;
    }
}
