import { AttackFormulaIDs, AttackFormulaDataMap } from './attack';
import { HealingFormulaIDs, HealingFormulaDataMap } from './healing';

export * from './attack';
export * from './healing';

/**
 * 公式全量 ID 映射表
 */
export const FormulaIDs = {
    ...AttackFormulaIDs,
    ...HealingFormulaIDs
} as const;

/**
 * 公式全量数据表
 */
export const FormulaDataMap = {
    ...AttackFormulaDataMap,
    ...HealingFormulaDataMap
} as const;
