import type { IWorld } from '../interface';

/**
 * 序列化与持久化工具类 (Persistence Utils)
 * 职责：
 * 1. 处理 BigInt 序列化/反序列化 (JSON 默认不支持 BigInt)。
 * 2. 执行数据瘦身 (Data Thinning)，排除如命令队列等不需要存档的运行时状态。
 * 3. 存档版本管理占位，为未来的数据迁移留出空间。
 */
export class PersistenceUtils {
    /** 
     * 当前存档协议版本 
     * 用于在未来发生不兼容的数据结构变更时进行版本迁移。
     */
    static readonly CURRENT_VERSION = '1.0.0';

    /**
     * 将 IWorld 世界状态序列化为 JSON 字符串
     * @param world 待存档的世界状态
     * @returns 处理后的 JSON 字符串
     */
    static serialize(world: IWorld): string {
        return JSON.stringify(world, (key, value) => {
            // 1. 数据瘦身 (Data Thinning)
            // 排除不需要持久化的运行时字段
            if (key === 'commands') return undefined; // 命令队列是瞬时的
            if (key === 'onUpdateCallback') return undefined; // 回调函数不可序列化

            // 2. BigInt 处理
            // JSON.stringify 不支持 BigInt，将其转为特定格式的对象
            if (typeof value === 'bigint') {
                return { __type: 'bigint', value: value.toString() };
            }

            return value;
        }, 2); // 缩进 2 空格方便调试，正式环境可去除
    }

    /**
     * 从 JSON 字符串还原 IWorld 世界状态
     * @param json 存档字符串
     * @returns 还原后的 IWorld 对象
     */
    static deserialize(json: string): IWorld {
        const parsed = JSON.parse(json, (key, value) => {
            // 1. BigInt 还原
            if (value && typeof value === 'object' && value.__type === 'bigint') {
                return BigInt(value.value);
            }
            return value;
        });

        // 2. 补全必要的运行时字段
        if (!parsed.commands) {
            parsed.commands = [];
        }

        // 3. 版本迁移校验 (如果版本号不匹配，在此处执行迁移逻辑)
        if (parsed.version && parsed.version !== this.CURRENT_VERSION) {
            console.warn(`[PersistenceUtils] 存档版本不匹配: ${parsed.version} -> ${this.CURRENT_VERSION}`);
            // TODO: 调用迁移函数 migrations[version](parsed)
        }

        return parsed as IWorld;
    }

    /**
     * 手动瘦身：返回一个克隆的、剔除了非持久化数据的 World 对象
     * 如果不需要 JSON 字符串而是需要一个纯净的 Object，可以使用此方法。
     */
    static thin(world: IWorld): any {
        const json = this.serialize(world);
        return this.deserialize(json);
    }
}
