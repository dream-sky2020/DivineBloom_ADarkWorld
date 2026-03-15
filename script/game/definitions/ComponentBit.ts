/**
 * 组件位定义 (32位以内)
 */
export const ComponentBit = {
    Position: 1 << 0,
    Inventory: 1 << 1,
    Health: 1 << 2,
    AI: 1 << 3,
    Player: 1 << 4, // 玩家标签组件位
    Location: 1 << 5, // 地点组件位
    Cooldown: 1 << 6, // 冷却组件位
    Action: 1 << 7,   // 行为标签组件位
    Damage: 1 << 8,   // 伤害效果组件
    Heal: 1 << 9,     // 治疗效果组件
    AddActionEffect: 1 << 10, // 新增：添加行为效果组件
    Button: 1 << 11   // 按钮交互组件（手动/自动触发配置）
};
