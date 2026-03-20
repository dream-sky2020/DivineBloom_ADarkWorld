import type { Attribute } from '../../interface';

/**
 * 恐惧相关属性 ID 映射表
 */
export const BaseAttributes = {
    /** 恐惧威仪 */
    FEAR_MAJESTY: 'fear_majesty',
    /** 恐惧抵抗 */
    FEAR_RESISTANCE: 'fear_resistance',
} as const;

/**
 * 恐惧相关属性详细数据表
 */
export const BaseAttributeData: Record<string, Attribute> = {
    [BaseAttributes.FEAR_MAJESTY]: {
        id: BaseAttributes.FEAR_MAJESTY,
        name: '恐惧威仪',
        description: '衡量对敌方造成恐惧效果的能力。',
        defaultValue: 10n,
        minValue: 0n,
        category: 'primary',
    },
    [BaseAttributes.FEAR_RESISTANCE]: {
        id: BaseAttributes.FEAR_RESISTANCE,
        name: '恐惧抵抗',
        description: '降低受到的恐惧效果影响。',
        defaultValue: 0n,
        minValue: 0n,
        category: 'primary',
    },
};
