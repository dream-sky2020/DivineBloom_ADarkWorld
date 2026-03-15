/**
 * 状态效果类型映射表
 */
export const StatusTypeMap = {
    NONE: "none",
    VENOMOUS: "venomous", // 中毒
    STUNNED: "stunned",   // 晕眩
    ENRAGED: "enraged",   // 狂暴
    SHIELDED: "shielded", // 护盾
    STIMMED: "stimmed"    // 兴奋
} as const;

export type StatusType = typeof StatusTypeMap[keyof typeof StatusTypeMap];
