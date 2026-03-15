import { ECSWorld } from '../../core/ECSCore';

/**
 * Button 组件 - 用于配置 Action 的触发方式
 * 
 * 作用于行为实体，用于标记哪些行为可以通过 UI 按钮手动点击，
 * 以及哪些行为可以配置为“达成目标（如冷却结束）后自动触发”。
 */
export const Button = {
    // 是否允许手动触发 (0: 不允许, 1: 允许)
    canManual: new Uint8Array(ECSWorld.MAX_ENTITIES),
    
    // 是否支持配置为自动触发 (0: 不支持, 1: 支持)
    canAuto: new Uint8Array(ECSWorld.MAX_ENTITIES),

    // 当前是否开启了自动触发模式 (0: 手动模式, 1: 自动模式)
    autoEnabled: new Uint8Array(ECSWorld.MAX_ENTITIES),

    // --- 实时交互状态 ---
    
    // 这一帧被点击的次数 (用于处理极快的手速或模拟点击)
    clickCount: new Uint32Array(ECSWorld.MAX_ENTITIES),

    // 鼠标是否正悬浮在按钮上 (0: 否, 1: 是)
    isHovered: new Uint8Array(ECSWorld.MAX_ENTITIES),

    // 按钮是否正处于按下状态 (0: 否, 1: 是)
    isPressed: new Uint8Array(ECSWorld.MAX_ENTITIES),

    // 按钮是否处于被选中/焦点状态 (如通过 Tab 或方向键选择) (0: 否, 1: 是)
    isSelected: new Uint8Array(ECSWorld.MAX_ENTITIES),

    /**
     * 设置按钮基础配置
     */
    set(eid: number, canManual: boolean, canAuto: boolean, autoEnabled: boolean = false) {
        this.canManual[eid] = canManual ? 1 : 0;
        this.canAuto[eid] = canAuto ? 1 : 0;
        this.autoEnabled[eid] = autoEnabled ? 1 : 0;
        
        // 重置交互状态
        this.clickCount[eid] = 0;
        this.isHovered[eid] = 0;
        this.isPressed[eid] = 0;
        this.isSelected[eid] = 0;
    },

    /**
     * 每帧重置瞬时状态 (如点击次数)
     * 应在 InputSystem 处理完后或新的一帧开始时调用
     */
    resetFrameState(eid: number) {
        this.clickCount[eid] = 0;
    }
};
