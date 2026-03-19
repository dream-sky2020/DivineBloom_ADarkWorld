import type { Item } from '../../interface';

/**
 * 护符物品 ID 映射表
 */
export const ProtectionTalismanItems = {
    // 防护护符
    VAGRANT_PROTECTION_TALISMAN: 'vagrant_protection_talisman',             // 流浪民售卖的防护护符
    SCHOOLBOY_PRACTICE_PROTECTION_TALISMAN: 'schoolboy_practice_protection_talisman',   // 学童练习用防护护符
    STUDENT_PRACTICE_PROTECTION_TALISMAN: 'student_practice_protection_talisman',       // 学生练习用防护护符
    BACHELOR_PRACTICE_PROTECTION_TALISMAN: 'bachelor_practice_protection_talisman',     // 学士练习用防护护符
    MASTER_PRACTICE_PROTECTION_TALISMAN: 'master_practice_protection_talisman',         // 大学士练习用防护护符
    RURAL_TEACHER_PRACTICE_PROTECTION_TALISMAN: 'rural_teacher_practice_protection_talisman', // 乡村教师练习用防护护符
    URBAN_TEACHER_PRACTICE_PROTECTION_TALISMAN: 'urban_teacher_practice_protection_talisman', // 城市教师练习用防护护符
    ROYAL_TEACHER_PRACTICE_PROTECTION_TALISMAN: 'royal_teacher_practice_protection_talisman', // 皇家教师练习用防护护符
    CHEAP_JOINT_DEFENSE_PROTECTION_TALISMAN: 'cheap_joint_defense_protection_talisman',       // 贱卖品联合制造自卫防护护符
    STANDARD_JOINT_DEFENSE_PROTECTION_TALISMAN: 'standard_joint_defense_protection_talisman', // 标准联合制造自卫防护护符
    ILLEGAL_MOD_DEFENSE_PROTECTION_TALISMAN: 'illegal_mod_defense_protection_talisman',       // 违法改造自卫防护护符
    RECRUIT_PROTECTION_TALISMAN: 'recruit_protection_talisman',             // 新士用防护护符
    VETERAN_PROTECTION_TALISMAN: 'veteran_protection_talisman',             // 老兵用防护护符
    ELITE_PROTECTION_TALISMAN: 'elite_protection_talisman',                 // 精锐用防护护符
    OFFICER_PROTECTION_TALISMAN: 'officer_protection_talisman',             // 士官用防护护符
    GENERAL_PROTECTION_TALISMAN: 'general_protection_talisman',             // 将军用防护护符
    CHANCELLOR_PROTECTION_TALISMAN: 'chancellor_protection_talisman',       // 宰相用防护护符
    ROYAL_PROTECTION_TALISMAN: 'royal_protection_talisman',                 // 王室御用防护护符
    EMPEROR_PROTECTION_TALISMAN: 'emperor_protection_talisman',             // 帝王御用防护护符
    COUNTRY_PROTECTOR_HERO_TALISMAN: 'country_protector_hero_talisman',     // 护国勇士曾用防护护符
    SAVIOR_HERO_TALISMAN: 'savior_hero_talisman',                           // 救世英雄曾用防护护符
} as const;

/**
 * 护符详细数据表
 */
export const ProtectionTalismanItemData: Record<string, Item> = {
    // 防护护符数据
    [ProtectionTalismanItems.VAGRANT_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.VAGRANT_PROTECTION_TALISMAN,
        name: '流浪民售卖的防护护符',
        description: '来源不明的简陋护符，能提供基本的灵力护盾。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.SCHOOLBOY_PRACTICE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.SCHOOLBOY_PRACTICE_PROTECTION_TALISMAN,
        name: '学童练习用防护护符',
        description: '笔触稚嫩，生成的护盾极薄，仅供入门练习。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.STUDENT_PRACTICE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.STUDENT_PRACTICE_PROTECTION_TALISMAN,
        name: '学生练习用防护护符',
        description: '结构完整的练习护符，能较好地抵御微弱冲击。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.BACHELOR_PRACTICE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.BACHELOR_PRACTICE_PROTECTION_TALISMAN,
        name: '学士练习用防护护符',
        description: '纹路严谨，具备了一定的防护广度。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.MASTER_PRACTICE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.MASTER_PRACTICE_PROTECTION_TALISMAN,
        name: '大学士练习用防护护符',
        description: '即使是练习品，也蕴含着相当坚韧的防护能量。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.RURAL_TEACHER_PRACTICE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.RURAL_TEACHER_PRACTICE_PROTECTION_TALISMAN,
        name: '乡村教师练习用防护护符',
        description: '朴实无华，胜在防护结构的稳定性极高。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.URBAN_TEACHER_PRACTICE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.URBAN_TEACHER_PRACTICE_PROTECTION_TALISMAN,
        name: '城市教师练习用防护护符',
        description: '制作精美，大幅降低了维持护盾所需的灵力。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.ROYAL_TEACHER_PRACTICE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.ROYAL_TEACHER_PRACTICE_PROTECTION_TALISMAN,
        name: '皇家教师练习用防护护符',
        description: '选材考究，其防护力足以抵挡一般的实战法术。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.CHEAP_JOINT_DEFENSE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.CHEAP_JOINT_DEFENSE_PROTECTION_TALISMAN,
        name: '贱卖品联合制造自卫防护护符',
        description: '流水线生产的廉价货，偶尔会出现灵力回路断裂。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.STANDARD_JOINT_DEFENSE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.STANDARD_JOINT_DEFENSE_PROTECTION_TALISMAN,
        name: '标准联合制造自卫防护护符',
        description: '各方面性能均符合行业标准的防御性护符。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.ILLEGAL_MOD_DEFENSE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.ILLEGAL_MOD_DEFENSE_PROTECTION_TALISMAN,
        name: '违法改造自卫防护护符',
        description: '过度强化了护盾硬度，极易在使用后发生灵力过载爆炸。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.RECRUIT_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.RECRUIT_PROTECTION_TALISMAN,
        name: '新士用防护护符',
        description: '军用规格的基础防御护符，坚固耐用。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.VETERAN_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.VETERAN_PROTECTION_TALISMAN,
        name: '老兵用防护护符',
        description: '带有特殊的战场磨损，能更有效地偏转远程投射物。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.ELITE_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.ELITE_PROTECTION_TALISMAN,
        name: '精锐用防护护符',
        description: '能够阻隔绝大多数常规形式的物理与法术伤害。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.OFFICER_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.OFFICER_PROTECTION_TALISMAN,
        name: '士官用防护护符',
        description: '中层指挥官的护身法宝，能抵挡致命一击。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.GENERAL_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.GENERAL_PROTECTION_TALISMAN,
        name: '将军用防护护符',
        description: '名家呕心沥血之作，固若金汤。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.CHANCELLOR_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.CHANCELLOR_PROTECTION_TALISMAN,
        name: '宰相用防护护符',
        description: '由极品材料打造，护盾表面流转着华丽的金光。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.ROYAL_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.ROYAL_PROTECTION_TALISMAN,
        name: '王室御用防护护符',
        description: '皇家秘法加持，守护王室血脉的圣物。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.EMPEROR_PROTECTION_TALISMAN]: {
        id: ProtectionTalismanItems.EMPEROR_PROTECTION_TALISMAN,
        name: '帝王御用防护护符',
        description: '举世罕见的护盾阵列，象征着不可侵犯的皇权。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.COUNTRY_PROTECTOR_HERO_TALISMAN]: {
        id: ProtectionTalismanItems.COUNTRY_PROTECTOR_HERO_TALISMAN,
        name: '护国勇士曾用防护护符',
        description: '曾在守护国家的血战中大放异彩，其上残留着英魂的庇佑。',
        volume: 0.1,
    },
    [ProtectionTalismanItems.SAVIOR_HERO_TALISMAN]: {
        id: ProtectionTalismanItems.SAVIOR_HERO_TALISMAN,
        name: '救世英雄曾用防护护符',
        description: '曾随救世主一同面对终焉，它的存在本身就是一个奇迹。',
        volume: 0.1,
    },
};
