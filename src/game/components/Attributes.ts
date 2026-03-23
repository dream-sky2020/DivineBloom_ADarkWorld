import type { IComponentDefinition } from '../interface/IComponent';
import { AttributeDataMap } from '../maps/AttributeMap';
import type { AttributeID } from '../maps/AttributeMap';
import type { IAttribute } from '../interface/IAttribute';
import { AttributeModifierTypes } from '../maps/IEnumMap';
import type { IAttributeModifier, AttributeModifierSet } from '../interface/IAttributeModifier';

/**
 * 属性组件数据
 * 使用 Record 动态存储属性 ID 到数值的映射
 */
export interface AttributesComponentData {
    /**
     * 属性值映射表
     * 键为属性 ID，值为属性当前的数值 (bigint | number)
     */
    values: Partial<Record<AttributeID, bigint | number>>;
}

/**
 * 属性组件
 */
export type AttributesComponent = AttributesComponentData;

/**
 * 属性操作工具类
 * 提供安全访问和修改属性的方法，支持自动初始化
 */
export const AttributeUtils = {
    /**
     * 获取属性当前值。
     * 如果组件中不存在该属性，则自动按配置表中的默认值进行初始化。
     */
    get(component: AttributesComponent, id: AttributeID): bigint | number {
        if (component.values[id] === undefined) {
            const def = AttributeDataMap[id] as IAttribute;
            if (!def) {
                console.warn(`[AttributeUtils] Attribute ID "${id}" not found in AttributeDataMap.`);
                return 0; // 或者抛出错误，取决于项目风格
            }
            component.values[id] = def.defaultValue;
        }
        return component.values[id]!;
    },

    /**
     * 增加属性值。
     * 如果属性不存在，会先初始化为默认值再进行加法运算。
     * 自动处理 bigint 和 number 的类型匹配。
     */
    add(component: AttributesComponent, id: AttributeID, amount: bigint | number): void {
        const current = this.get(component, id);
        
        if (typeof current === 'bigint') {
            component.values[id] = current + BigInt(amount);
        } else {
            component.values[id] = (current as number) + Number(amount);
        }
    },

    /**
     * 减少属性值（支持自动初始化）。
     * 自动处理 bigint 和 number 的类型匹配。
     */
    subtract(component: AttributesComponent, id: AttributeID, amount: bigint | number): void {
        const current = this.get(component, id);
        
        if (typeof current === 'bigint') {
            component.values[id] = current - BigInt(amount);
        } else {
            component.values[id] = (current as number) - Number(amount);
        }
    },

    /**
     * 直接设置属性值。
     */
    set(component: AttributesComponent, id: AttributeID, value: bigint | number): void {
        component.values[id] = value;
    },

    /**
     * 自动化属性修改器执行逻辑
     * 根据修改器定义的类型和数值，对目标属性进行相应的运算。
     * 
     * 计算规则说明：
     * - ADD: 直接加法
     * - PERCENT_ADD: 在当前值基础上乘以 (1 + value)，若为 bigint 会进行取整计算
     * - MULTIPLY: 在当前值基础上乘以 value
     * - MAX/MIN: 取当前值与 value 的最大/最小值
     * - OVERRIDE: 强制覆盖为 value
     */
    applyModifier(component: AttributesComponent, modifier: IAttributeModifier): void {
        const { targetId, type, value } = modifier;
        const current = this.get(component, targetId);

        switch (type) {
            case AttributeModifierTypes.ADD:
                this.add(component, targetId, value);
                break;

            case AttributeModifierTypes.PERCENT_ADD:
                if (typeof current === 'bigint') {
                    // 对于 bigint 的百分比计算，我们将 value 视为一个小数 (如 0.1 表示 10%)
                    // 使用 1,000,000 作为精度基准
                    const ratio = BigInt(Math.floor(Number(value) * 1000000));
                    component.values[targetId] = current + (current * ratio / 1000000n);
                } else {
                    component.values[targetId] = (current as number) * (1 + Number(value));
                }
                break;

            case AttributeModifierTypes.MULTIPLY:
                if (typeof current === 'bigint') {
                    const ratio = BigInt(Math.floor(Number(value) * 1000000));
                    component.values[targetId] = current * ratio / 1000000n;
                } else {
                    component.values[targetId] = (current as number) * Number(value);
                }
                break;

            case AttributeModifierTypes.MAX:
                if (typeof current === 'bigint') {
                    const valBig = BigInt(value);
                    component.values[targetId] = current > valBig ? current : valBig;
                } else {
                    component.values[targetId] = Math.max(current as number, Number(value));
                }
                break;

            case AttributeModifierTypes.MIN:
                if (typeof current === 'bigint') {
                    const valBig = BigInt(value);
                    component.values[targetId] = current < valBig ? current : valBig;
                } else {
                    component.values[targetId] = Math.min(current as number, Number(value));
                }
                break;

            case AttributeModifierTypes.OVERRIDE:
                this.set(component, targetId, value);
                break;
        }
    },

    /**
     * 自动化执行批量属性修改器集合。
     * 例如一件装备的所有加成属性。
     */
    applyModifierSet(component: AttributesComponent, modifierSet: AttributeModifierSet): void {
        modifierSet.modifiers.forEach(modifier => this.applyModifier(component, modifier));
    }
};

/**
 * 创建默认的属性组件数据
 * 只加载标记为 isDefaultLoaded 的属性
 */
const defaultAttributesComponentData = (): AttributesComponentData => {
    const values: Partial<Record<AttributeID, bigint | number>> = {};
    
    // 遍历所有已定义的属性数据
    (Object.keys(AttributeDataMap) as AttributeID[]).forEach(id => {
        const attribute = AttributeDataMap[id] as IAttribute;
        // 只有标记为默认加载的属性才会进入初始 values 列表
        if (attribute.isDefaultLoaded) {
            values[id] = attribute.defaultValue;
        }
    });

    return { values };
};

/**
 * 属性组件定义
 */
export const AttributesComponentDefinition: IComponentDefinition<
    AttributesComponentData,
    AttributesComponent
> = {
    id: 'game.component.attributes',
    name: 'Attributes',

    create(initialData?: Partial<AttributesComponentData>): AttributesComponent {
        const base = defaultAttributesComponentData();
        return {
            ...base,
            values: {
                ...base.values,
                ...(initialData?.values ?? {})
            }
        };
    },

    serialize(component: AttributesComponent): AttributesComponentData {
        // 深拷贝 values 映射表
        return {
            values: { ...component.values }
        };
    },

    deserialize(data: unknown): AttributesComponent {
        if (!data || typeof data !== 'object') {
            return defaultAttributesComponentData();
        }
        
        const partialData = data as Partial<AttributesComponentData>;
        const base = defaultAttributesComponentData();
        
        return {
            ...base,
            values: {
                ...base.values,
                ...(partialData.values ?? {})
            }
        };
    }
};
