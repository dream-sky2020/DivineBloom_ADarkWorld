/**
 * 组件位定义 (32位以内)
 */
export const ComponentBit = {
    Position:        1 << 0,
    Inventory:       1 << 1,
    Health:          1 << 2,
    Location:        1 << 3,
    Cooldown:        1 << 4,
    Action:          1 << 5,
    Target:          1 << 6,  // 目标选择组件

    // 效果组件 (已合并/统一)
    HealthChange:    1 << 7,  // 统一血量变化 (伤害/治疗)
    ActionChange:    1 << 8,  // 统一行为变化 (增/删行为)
    InventoryChange: 1 << 9,  // 统一资源变化 (增/删物品)
    
    Button:          1 << 10,

    // 标签组件
    Player:          1 << 11, // 玩家标签
    Enemy:           1 << 12, // 敌方标签
    Ally:            1 << 13  // 盟友标签
};
