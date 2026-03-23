import type { IItem } from '../../../interface';

/**
 * 诅咒射针 ID 映射表
 */
export const CurseNeedleItems = {
    VAGRANT_CURSE_NEEDLE: 'vagrant_curse_needle',             // 流浪民售卖的诅咒射针
    SCHOOLBOY_PRACTICE_NEEDLE: 'schoolboy_practice_needle',   // 学童练习用诅咒射针
    STUDENT_PRACTICE_NEEDLE: 'student_practice_needle',       // 学生练习用诅咒射针
    BACHELOR_PRACTICE_NEEDLE: 'bachelor_practice_needle',     // 学士练习用诅咒射针
    MASTER_PRACTICE_NEEDLE: 'master_practice_needle',         // 大学士练习用诅咒射针
    RURAL_TEACHER_PRACTICE_NEEDLE: 'rural_teacher_practice_needle', // 乡村教师练习用诅咒射针
    URBAN_TEACHER_PRACTICE_NEEDLE: 'urban_teacher_practice_needle', // 城市教师练习用诅咒射针
    ROYAL_TEACHER_PRACTICE_NEEDLE: 'royal_teacher_practice_needle', // 皇家教师练习用诅咒射针
    CHEAP_JOINT_DEFENSE_NEEDLE: 'cheap_joint_defense_needle',       // 贱卖品联合制造自卫诅咒射针
    STANDARD_JOINT_DEFENSE_NEEDLE: 'standard_joint_defense_needle', // 标准联合制造自卫诅咒射针
    ILLEGAL_MOD_DEFENSE_NEEDLE: 'illegal_mod_defense_needle',       // 违法改造自卫诅咒射针
    RECRUIT_CURSE_NEEDLE: 'recruit_curse_needle',             // 新士用诅咒射针
    VETERAN_CURSE_NEEDLE: 'veteran_curse_needle',             // 老兵用诅咒射针
    ELITE_CURSE_NEEDLE: 'elite_curse_needle',                 // 精锐用诅咒射针
    OFFICER_CURSE_NEEDLE: 'officer_curse_needle',             // 士官用诅咒射针
    GENERAL_CURSE_NEEDLE: 'general_curse_needle',             // 将军用诅咒射针
    CHANCELLOR_CURSE_NEEDLE: 'chancellor_curse_needle',       // 宰相用诅咒射针
    ROYAL_CURSE_NEEDLE: 'royal_curse_needle',                 // 王室御用诅咒射针
    EMPEROR_CURSE_NEEDLE: 'emperor_curse_needle',             // 帝王御用诅咒射针
    KING_SLAYER_HERO_NEEDLE: 'king_slayer_hero_needle',       // 弑王勇士曾用诅咒射针
    GOD_SLAYER_FOOL_NEEDLE: 'god_slayer_fool_needle',         // 弑神愚者曾用诅咒射针
} as const;

/**
 * 诅咒射针详细数据表
 */
export const CurseNeedleItemData: Record<string, IItem> = {
    [CurseNeedleItems.VAGRANT_CURSE_NEEDLE]: {
        id: CurseNeedleItems.VAGRANT_CURSE_NEEDLE,
        name: '流浪民售卖的诅咒射针',
        description: '来源不明的简陋射针，虽有瑕疵但足以防身。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.SCHOOLBOY_PRACTICE_NEEDLE]: {
        id: CurseNeedleItems.SCHOOLBOY_PRACTICE_NEEDLE,
        name: '学童练习用诅咒射针',
        description: '笔触稚嫩，威力极其有限，仅供入门练习。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.STUDENT_PRACTICE_NEEDLE]: {
        id: CurseNeedleItems.STUDENT_PRACTICE_NEEDLE,
        name: '学生练习用诅咒射针',
        description: '结构完整的练习射针，是正式学习诅咒术的起点。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.BACHELOR_PRACTICE_NEEDLE]: {
        id: CurseNeedleItems.BACHELOR_PRACTICE_NEEDLE,
        name: '学士练习用诅咒射针',
        description: '纹路严谨，具备了一定的杀伤力。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.MASTER_PRACTICE_NEEDLE]: {
        id: CurseNeedleItems.MASTER_PRACTICE_NEEDLE,
        name: '大学士练习用诅咒射针',
        description: '即使是练习品，也蕴含着令常人战栗的诅咒能量。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.RURAL_TEACHER_PRACTICE_NEEDLE]: {
        id: CurseNeedleItems.RURAL_TEACHER_PRACTICE_NEEDLE,
        name: '乡村教师练习用诅咒射针',
        description: '朴实无华，但结构异常稳固，经久耐用。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.URBAN_TEACHER_PRACTICE_NEEDLE]: {
        id: CurseNeedleItems.URBAN_TEACHER_PRACTICE_NEEDLE,
        name: '城市教师练习用诅咒射针',
        description: '制作精美，且对灵力的传导效率进行了优化。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.ROYAL_TEACHER_PRACTICE_NEEDLE]: {
        id: CurseNeedleItems.ROYAL_TEACHER_PRACTICE_NEEDLE,
        name: '皇家教师练习用诅咒射针',
        description: '选材考究，威力不逊于一般的正式实战射针。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.CHEAP_JOINT_DEFENSE_NEEDLE]: {
        id: CurseNeedleItems.CHEAP_JOINT_DEFENSE_NEEDLE,
        name: '贱卖品联合制造自卫诅咒射针',
        description: '流水线生产的廉价货，稳定性欠佳，胜在便宜。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.STANDARD_JOINT_DEFENSE_NEEDLE]: {
        id: CurseNeedleItems.STANDARD_JOINT_DEFENSE_NEEDLE,
        name: '标准联合制造自卫诅咒射针',
        description: '市面上最常见的自卫射针，各方面性能均符合行业标准。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.ILLEGAL_MOD_DEFENSE_NEEDLE]: {
        id: CurseNeedleItems.ILLEGAL_MOD_DEFENSE_NEEDLE,
        name: '违法改造自卫诅咒射针',
        description: '私自去除了安全限制，威力激增的同时也伴随着极大的反噬风险。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.RECRUIT_CURSE_NEEDLE]: {
        id: CurseNeedleItems.RECRUIT_CURSE_NEEDLE,
        name: '新士用诅咒射针',
        description: '军用规格的基础型号，操作简单，爆发力强。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.VETERAN_CURSE_NEEDLE]: {
        id: CurseNeedleItems.VETERAN_CURSE_NEEDLE,
        name: '老兵用诅咒射针',
        description: '带有特殊的战场磨损感，诅咒效果更加阴险毒辣。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.ELITE_CURSE_NEEDLE]: {
        id: CurseNeedleItems.ELITE_CURSE_NEEDLE,
        name: '精锐用诅咒射针',
        description: '高纯度灵力灌注，能在瞬间重创目标。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.OFFICER_CURSE_NEEDLE]: {
        id: CurseNeedleItems.OFFICER_CURSE_NEEDLE,
        name: '士官用诅咒射针',
        description: '指挥官级别的标准配发品，威慑力十足。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.GENERAL_CURSE_NEEDLE]: {
        id: CurseNeedleItems.GENERAL_CURSE_NEEDLE,
        name: '将军用诅咒射针',
        description: '由名家锻造，铭刻了将军的杀伐之气。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.CHANCELLOR_CURSE_NEEDLE]: {
        id: CurseNeedleItems.CHANCELLOR_CURSE_NEEDLE,
        name: '宰相用诅咒射针',
        description: '华丽外表下隐藏着致命的权谋诅咒。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.ROYAL_CURSE_NEEDLE]: {
        id: CurseNeedleItems.ROYAL_CURSE_NEEDLE,
        name: '王室御用诅咒射针',
        description: '象征着王权的尊严与不可触碰的禁忌。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.EMPEROR_CURSE_NEEDLE]: {
        id: CurseNeedleItems.EMPEROR_CURSE_NEEDLE,
        name: '帝王御用诅咒射针',
        description: '仅仅是握在手中，就能感受到俯瞰众生的压迫感。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.KING_SLAYER_HERO_NEEDLE]: {
        id: CurseNeedleItems.KING_SLAYER_HERO_NEEDLE,
        name: '弑王勇士曾用诅咒射针',
        description: '沾染了古老王者陨落时的诅咒，威力深不可测。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
    [CurseNeedleItems.GOD_SLAYER_FOOL_NEEDLE]: {
        id: CurseNeedleItems.GOD_SLAYER_FOOL_NEEDLE,
        name: '弑神愚者曾用诅咒射针',
        description: '挑战神权之人的遗物，其上残留的力量足以令鬼神惊哭。',
        categoryPath: ['物品', '武器', '诅咒射针'],
        volume: 0.01,
    },
};
