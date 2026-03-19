import type { ReincarnationUpgrade } from '../../interface';
import { PhysicalToughnessUpgrades, PhysicalToughnessData } from './physical_toughness';
import { PhysicalStrengthUpgrades, PhysicalStrengthData } from './physical_strength';

export * from '../../interface';
export * from './physical_toughness';
export * from './physical_strength';

/**
 * 转生升级项目 ID 映射表 (基础 ID)
 */
export const ReincarnationUpgradeItems = {
    ...PhysicalToughnessUpgrades,
    ...PhysicalStrengthUpgrades,
} as const;

/**
 * 转生升级项目 ID 类型
 */
export type ReincarnationUpgradeID = typeof ReincarnationUpgradeItems[keyof typeof ReincarnationUpgradeItems];

/**
 * 转生升级详细数据表
 */
export const ReincarnationUpgradeData: Record<string, ReincarnationUpgrade> = {
    ...PhysicalToughnessData,
    ...PhysicalStrengthData,
} as Record<string, ReincarnationUpgrade>;
