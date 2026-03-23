import type { IItemPrefab } from '../../../interface/IItemPrefab';
import { BrownSugarItems, BrownSugarItemData } from './brown_sugar';
import { ProtectionTalismanItems, ProtectionTalismanItemData } from './protection_talisman';
import { CurseNeedleItems, CurseNeedleItemData } from './curse_needles';
import { BreadItems, BreadItemData } from './breads';
import { SteakItems, SteakItemData } from './steaks';
import { SteelSwordItems, SteelSwordItemData } from './steel_swords';
import { LiquidContainerItems, LiquidContainerItemData } from './liquid_containers';
import { PrecipitationCatalystItems, PrecipitationCatalystItemData } from './precipitation_catalyst_bases';
import { PhysicalStrengthUpgrades, PhysicalStrengthData } from './reincarnation_physical_strength';
import { PhysicalToughnessUpgrades, PhysicalToughnessData } from './reincarnation_physical_toughness';

/**
 * 物品 ID 映射表 (基础 ID)
 */
export const ItemTypeMap = {
    ...BrownSugarItems,
    ...ProtectionTalismanItems,
    ...CurseNeedleItems,
    ...BreadItems,
    ...SteakItems,
    ...SteelSwordItems,
    ...LiquidContainerItems,
    ...PrecipitationCatalystItems,
    ...PhysicalStrengthUpgrades,
    ...PhysicalToughnessUpgrades,
} as const;

/**
 * 物品 ID 类型
 */
export type ItemID = typeof ItemTypeMap[keyof typeof ItemTypeMap];

/**
 * 物品详细数据表
 * 使用 IItemPrefab 接口
 */
export const ItemDataMap: Record<ItemID, IItemPrefab> = {
    ...BrownSugarItemData,
    ...ProtectionTalismanItemData,
    ...CurseNeedleItemData,
    ...BreadItemData,
    ...SteakItemData,
    ...SteelSwordItemData,
    ...LiquidContainerItemData,
    ...PrecipitationCatalystItemData,
    ...PhysicalStrengthData,
    ...PhysicalToughnessData,
} as unknown as Record<ItemID, IItemPrefab>;
