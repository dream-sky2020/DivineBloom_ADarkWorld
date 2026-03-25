import type { IFormula } from '../../interface/IFormula';
import { Calculator } from '../../tool/Calculation';

/**
 * 攻击公式 ID 映射表
 */
export const AttackFormulaIDs = {
    BASIC_MELEE: 'formula_attack_basic_melee',
    RANGED_CRIT: 'formula_attack_ranged_crit',
} as const;

/**
 * 攻击相关公式数据表
 */
export const AttackFormulaDataMap: Record<string, IFormula> = {
    [AttackFormulaIDs.BASIC_MELEE]: {
        id: AttackFormulaIDs.BASIC_MELEE,
        name: '基础近战伤害公式',
        description: '伤害 = (力量 * 2 + 武器攻击) - 敌方防御',
        categoryPath: ['公式', '战斗', '攻击'],
        nodes: Calculator.start('str', '力量')
            .mul(2, '力量系数')
            .add('atk_weapon', '武器攻击')
            .sub('def_enemy', '敌方防御')
            .max(1, '保底伤害')
            .exportNodes()
    },
    [AttackFormulaIDs.RANGED_CRIT]: {
        id: AttackFormulaIDs.RANGED_CRIT,
        name: '远程暴击伤害公式',
        description: '伤害 = (敏捷 * 1.5 + 弩机威力) * 暴击倍率',
        categoryPath: ['公式', '战斗', '攻击'],
        nodes: Calculator.start('agi', '敏捷')
            .mul(1.5, '敏捷系数')
            .add('atk_crossbow', '弩机威力')
            .if('是否暴击', true, (c) => {
                c.mul('crit_mult', '暴击倍率');
            })
            .exportNodes()
    }
};
