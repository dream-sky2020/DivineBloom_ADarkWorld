import type { IComponentDefinition } from '../interface/IComponent';

export interface ButtonComponentData {
    /**
     * 是否允许手动触发
     */
    allowManualTrigger: boolean;
    /**
     * 是否支持配置为自动触发
     */
    supportsAutoTrigger: boolean;
    /**
     * 当前是否开启自动触发模式
     */
    autoTriggerEnabled: boolean;
    /**
     * 这一帧被点击的次数
     */
    clicksThisFrame: number;
    /**
     * 按钮被持续按下的总时长（秒/毫秒，取决于你的逻辑帧更新单位）
     */
    pressedDuration: number;
    /**
     * 鼠标是否正悬浮在按钮上
     */
    isHovered: boolean;
    /**
     * 按钮是否正处于按下状态
     */
    isPressed: boolean;
    /**
     * 按钮是否处于被选中/焦点状态
     */
    isFocused: boolean;
}

export type ButtonComponent = ButtonComponentData;

const defaultButtonComponentData = (): ButtonComponentData => ({
    allowManualTrigger: true,
    supportsAutoTrigger: true,
    autoTriggerEnabled: false,
    clicksThisFrame: 0,
    pressedDuration: 0,
    isHovered: false,
    isPressed: false,
    isFocused: false
});

export const ButtonComponentDefinition: IComponentDefinition<
    ButtonComponentData,
    ButtonComponent
> = {
    id: 'game.component.button',
    name: 'Button',

    create(initialData?: Partial<ButtonComponentData>): ButtonComponent {
        return {
            ...defaultButtonComponentData(),
            ...(initialData ?? {})
        };
    },

    serialize(component: ButtonComponent): ButtonComponentData {
        return { ...component };
    },

    deserialize(data: unknown): ButtonComponent {
        if (!data || typeof data !== 'object') {
            return defaultButtonComponentData();
        }
        return {
            ...defaultButtonComponentData(),
            ...(data as Partial<ButtonComponentData>)
        };
    }
};
