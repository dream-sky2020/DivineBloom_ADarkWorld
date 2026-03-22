import type { IAttribute } from '../interface/IAttribute';
import type { AttributeID } from '../maps/AttributeMap';
import type { AttributePredicateOperatorID } from '../maps/AttributePredicateMap';

/**
 * 属性判定数据结构
 * 用于定义对某个特定属性的单次校验逻辑
 * 继承自 IAttribute，包含 id, name, description 等基础信息
 */
export interface AttributePredicate extends IAttribute {
    /**
     * 目标属性 ID
     */
    targetId: AttributeID;

    /**
     * 判定操作符 ID (对应 AttributePredicateMap 中的定义)
     */
    operator: AttributePredicateOperatorID;

    /**
     * 判定参考数值 (支持 bigint 或 number)
     */
    value: bigint | number;

    /**
     * 自定义失败提示消息 (可选)
     * 当判定失败时，可以用于 UI 提示
     */
    failMessage?: string;
}

/**
 * 批量属性判定集
 * 用于一次性定义多个属性的触发前提
 */
export interface AttributePredicateSet {
    /**
     * 判定模式
     * 'and': 必须满足所有判定 (默认)
     * 'or': 满足其中之一即可
     */
    mode?: 'and' | 'or';

    /**
     * 判定规则列表
     */
    predicates: AttributePredicate[];
}
