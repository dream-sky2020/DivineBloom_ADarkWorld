export const ActionTypeMap = {
    ATTACK: "attack",
    HEAL: "heal",
    BUFF: "buff",
    STUN: "stun",
} as const;

export type ActionType = typeof ActionTypeMap[keyof typeof ActionTypeMap];
