import type { ItemDefinition } from './types';

/**
 * 肉排物品 ID 映射表
 */
export const SteakItems = {
    BEGGAR_STEAK: 'beggar_steak',               // 乞丐肉排
    POOR_RELIEF_RATION_STEAK: 'poor_relief_ration_steak', // 济贫配给肉排
    STUDENT_MEAL_STEAK: 'student_meal_steak',   // 学生餐肉排
    POOR_MAN_STEAK: 'poor_man_steak',           // 穷人肉排
    STALL_STEAK: 'stall_steak',                 // 小摊肉排
    COMPANY_RATION_STEAK: 'company_ration_steak', // 公司配给肉排
    MOTHER_TASTE_STEAK: 'mother_taste_steak',   // 妈妈味肉排
    TEACHER_MEAL_STEAK: 'teacher_meal_steak',   // 教师餐肉排
    GRANDMOTHER_TASTE_STEAK: 'grandmother_taste_steak', // 奶奶味肉排
    OFFICIAL_RATION_STEAK: 'official_ration_steak', // 吏使配给肉排
    NEW_YEAR_STEAK: 'new_year_steak',           // 新年肉排
    WEALTHY_STEAK: 'wealthy_steak',             // 富贵肉排
    ROYAL_STEAK: 'royal_steak',                 // 皇家肉排
    RITUAL_STEAK: 'ritual_steak',               // 祭礼肉排
} as const;

/**
 * 肉排详细数据表
 */
export const SteakItemData: Record<string, ItemDefinition> = {
    [SteakItems.BEGGAR_STEAK]: {
        id: SteakItems.BEGGAR_STEAK,
        name: '乞丐肉排',
        description: '来源极其可疑的肉块，仅仅是为了活下去而不得不吃的东西。',
        volume: 0.2,
    },
    [SteakItems.POOR_RELIEF_RATION_STEAK]: {
        id: SteakItems.POOR_RELIEF_RATION_STEAK,
        name: '济贫配给肉排',
        description: '由救济机构统一发放，味道平平但勉强管饱。',
        volume: 0.2,
    },
    [SteakItems.STUDENT_MEAL_STEAK]: {
        id: SteakItems.STUDENT_MEAL_STEAK,
        name: '学生餐肉排',
        description: '学校食堂的常客，口感有些柴，胜在价格低廉。',
        volume: 0.2,
    },
    [SteakItems.POOR_MAN_STEAK]: {
        id: SteakItems.POOR_MAN_STEAK,
        name: '穷人肉排',
        description: '虽然名为肉排，但实际上混入了大量的淀粉。',
        volume: 0.2,
    },
    [SteakItems.STALL_STEAK]: {
        id: SteakItems.STALL_STEAK,
        name: '小摊肉排',
        description: '街头巷尾随处可见，浓郁的调料味掩盖了肉质本身的不足。',
        volume: 0.2,
    },
    [SteakItems.COMPANY_RATION_STEAK]: {
        id: SteakItems.COMPANY_RATION_STEAK,
        name: '公司配给肉排',
        description: '大型组织为底层员工提供的标准配给，工业化气息浓重。',
        volume: 0.2,
    },
    [SteakItems.MOTHER_TASTE_STEAK]: {
        id: SteakItems.MOTHER_TASTE_STEAK,
        name: '妈妈味肉排',
        description: '充满家常气息的肉排，虽然普通却有一种令人心安的力量。',
        volume: 0.2,
    },
    [SteakItems.TEACHER_MEAL_STEAK]: {
        id: SteakItems.TEACHER_MEAL_STEAK,
        name: '教师餐肉排',
        description: '相比学生餐略有改善，品质更加稳定。',
        volume: 0.2,
    },
    [SteakItems.GRANDMOTHER_TASTE_STEAK]: {
        id: SteakItems.GRANDMOTHER_TASTE_STEAK,
        name: '奶奶味肉排',
        description: '慢火细熬，口感极其酥软，带着时光积淀的味道。',
        volume: 0.2,
    },
    [SteakItems.OFFICIAL_RATION_STEAK]: {
        id: SteakItems.OFFICIAL_RATION_STEAK,
        name: '吏使配给肉排',
        description: '中层职员的福利，肉质紧实，选料上乘。',
        volume: 0.2,
    },
    [SteakItems.NEW_YEAR_STEAK]: {
        id: SteakItems.NEW_YEAR_STEAK,
        name: '新年肉排',
        description: '佳节限定，色彩红润，预示着新一年的好彩头。',
        volume: 0.2,
    },
    [SteakItems.WEALTHY_STEAK]: {
        id: SteakItems.WEALTHY_STEAK,
        name: '富贵肉排',
        description: '富人阶层的日常餐点，由上等肉质经名厨烹饪而成。',
        volume: 0.2,
    },
    [SteakItems.ROYAL_STEAK]: {
        id: SteakItems.ROYAL_STEAK,
        name: '皇家肉排',
        description: '仅供皇室享用，纹理如艺术品般精美，香气四溢。',
        volume: 0.2,
    },
    [SteakItems.RITUAL_STEAK]: {
        id: SteakItems.RITUAL_STEAK,
        name: '祭礼肉排',
        description: '用于神圣祭奠的特制肉排，不加盐调味，保持原始的生命感。',
        volume: 0.2,
    },
};
