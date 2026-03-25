import type { IFormula } from '../../interface/IFormula';
import { Calculator } from '../../tool/Calculation';

/**
 * 治疗公式 ID 映射表
 */
export const HealingFormulaIDs = {
    BASIC_HEAL: 'formula_heal_basic',
    PERCENT_HEAL: 'formula_heal_percent',
} as const;

/**
 * 治疗相关公式数据表
 */
export const HealingFormulaDataMap: Record<string, IFormula> = {
    [HealingFormulaIDs.BASIC_HEAL]: {
        id: HealingFormulaIDs.BASIC_HEAL,
        name: '基础治疗公式',
        description: '治疗量 = 智力 * 3 + 基础回复',
        categoryPath: ['公式', '战斗', '治疗'],
        nodes: Calculator.start('int', '智力')
            .mul(3, '智力系数')
            .add('heal_base', '基础回复量')
            .exportNodes()
    },
    [HealingFormulaIDs.PERCENT_HEAL]: {
        id: HealingFormulaIDs.PERCENT_HEAL,
        name: '百分比生命恢复',
        description: '恢复量 = 最大生命值 * 恢复百分比',
        categoryPath: ['公式', '战斗', '治疗'],
        nodes: Calculator.start('hp_max', '最大生命值')
            .mul('heal_percent', '恢复百分比')
            .exportNodes()
    }
};
