import type { IItemPrefab } from '../../interface/IItemPrefab';
import { MaterialItems, MaterialItemData } from './materials';
import { BrownSugarItems, BrownSugarItemData } from './brown_sugar';
import { ProtectionTalismanItems, ProtectionTalismanItemData } from './protection_talisman';
import { CurseNeedleItems, CurseNeedleItemData } from './curse_needles';
import { BreadItems, BreadItemData } from './breads';
import { SteakItems, SteakItemData } from './steaks';
import { SteelSwordItems, SteelSwordItemData } from './steel_swords';
import { LiquidContainerItems, LiquidContainerItemData } from './liquid_containers';
import { PrecipitationCatalystItems, PrecipitationCatalystItemData } from './precipitation_catalyst_bases';

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
 * 使用 IItemPrefab 接口
 */
export const ItemDataMap: Record<ItemID, IItemPrefab> = {
    ...MaterialItemData,
    ...BrownSugarItemData,
    ...ProtectionTalismanItemData,
    ...CurseNeedleItemData,
    ...BreadItemData,
    ...SteakItemData,
    ...SteelSwordItemData,
    ...LiquidContainerItemData,
    ...PrecipitationCatalystItemData,
} as unknown as Record<ItemID, IItemPrefab>;
