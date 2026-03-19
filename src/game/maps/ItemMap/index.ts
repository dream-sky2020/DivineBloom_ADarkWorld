import type { Item } from '../../interface';
import { MaterialItems, MaterialItemData } from './materials';
import { BrownSugarItems, BrownSugarItemData } from './brown_sugar';
import { ProtectionTalismanItems, ProtectionTalismanItemData } from './protection_talisman';
import { CurseNeedleItems, CurseNeedleItemData } from './curse_needles';
import { BreadItems, BreadItemData } from './breads';
import { SteakItems, SteakItemData } from './steaks';
import { SteelSwordItems, SteelSwordItemData } from './steel_swords';
import { LiquidContainerItems, LiquidContainerItemData } from './liquid_containers';
import { PrecipitationCatalystItems, PrecipitationCatalystItemData } from './precipitation_catalyst_bases';

export * from '../../interface';
export * from './materials';
export * from './brown_sugar';
export * from './protection_talisman';
export * from './curse_needles';
export * from './breads';
export * from './steaks';
export * from './steel_swords';
export * from './liquid_containers';
export * from './precipitation_catalyst_bases';

/**
 * 物品 ID 映射表 (基础 ID)
 */
export const ItemTypeMap = {
    ...MaterialItems,
    ...BrownSugarItems,
    ...ProtectionTalismanItems,
    ...CurseNeedleItems,
    ...BreadItems,
    ...SteakItems,
    ...SteelSwordItems,
    ...LiquidContainerItems,
    ...PrecipitationCatalystItems,
} as const;

/**
 * 物品 ID 类型
 */
export type ItemID = typeof ItemTypeMap[keyof typeof ItemTypeMap];

/**
 * 物品详细数据表
 */
export const ItemDataMap: Record<ItemID, Item> = {
    ...MaterialItemData,
    ...BrownSugarItemData,
    ...ProtectionTalismanItemData,
    ...CurseNeedleItemData,
    ...BreadItemData,
    ...SteakItemData,
    ...SteelSwordItemData,
    ...LiquidContainerItemData,
    ...PrecipitationCatalystItemData,
} as Record<ItemID, Item>;
