/**
 * 命令操作的目标类型
 */
export type CommandTarget = 'world' | 'object';

/**
 * 命令操作的数学类型
 */
export type CommandOp = 'set' | 'add' | 'sub';

/**
 * 极致扁平化的命令接口
 * 职责：仅描述对“世界”或“对象”属性的修改意图。
 * 它是 UI 到 Engine 的唯一数值修改契约。
 */
export interface ICommand {
    /** 目标类型: 'world' 全局世界, 'object' 具体实体对象 */
    target: CommandTarget;
    /** 目标 ID: 仅当 target 为 'object' 时需要提供 IObject 的 ID */
    targetId?: string;
    /** 属性 ID: 对应 AttributeID */
    statId: string;
    /** 操作类型: 'set' 直接设置, 'add' 增加, 'sub' 减少 */
    op: CommandOp;
    /** 变更数值 */
    value: number | bigint | string | string[];
    /** 命令生成的时间戳 */
    timestamp?: number;
}
