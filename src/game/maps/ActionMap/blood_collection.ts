import { ActionTriggerModeMap } from '../ActionTriggerModeMap';
import type { Action } from '../../interface';

/**
 * 采集血液系列行为 ID 映射表
 */
export const BloodCollectionActions = {
    BLOOD_COLLECTION_ALL: 'blood_collection_all', // 采集血液:全部采集
    BLOOD_COLLECTION_WHITE_GATE: 'blood_collection_white_gate', // 采集血液:洁白之门
    BLOOD_COLLECTION_BLACK_STONE_GATE: 'blood_collection_black_stone_gate', // 采集血液:黑石之门
    BLOOD_COLLECTION_STEEL_GATE: 'blood_collection_steel_gate', // 采集血液:钢铁之门
    BLOOD_COLLECTION_RUST_GATE: 'blood_collection_rust_gate', // 采集血液:锈蚀之门
    BLOOD_COLLECTION_BLOODSTAIN_GATE: 'blood_collection_bloodstain_gate' // 采集血液:血染之门
} as const;

/**
 * 采集血液系列行为详细数据表
 */
export const BloodCollectionActionData: Record<string, Action> = {
    [BloodCollectionActions.BLOOD_COLLECTION_ALL]: {
        id: BloodCollectionActions.BLOOD_COLLECTION_ALL,
        name: '采集血液:全部采集',
        description: '一次性执行全域血液采集流程，按优先级整合所有采集点。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 2.4,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 9n
        },
        tags: ['collect', 'blood', 'all', 'gateway']
    },
    [BloodCollectionActions.BLOOD_COLLECTION_WHITE_GATE]: {
        id: BloodCollectionActions.BLOOD_COLLECTION_WHITE_GATE,
        name: '采集血液:洁白之门',
        description: '在洁白之门区域执行定向血液采集。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 1.6,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 6n
        },
        tags: ['collect', 'blood', 'white_gate']
    },
    [BloodCollectionActions.BLOOD_COLLECTION_BLACK_STONE_GATE]: {
        id: BloodCollectionActions.BLOOD_COLLECTION_BLACK_STONE_GATE,
        name: '采集血液:黑石之门',
        description: '在黑石之门区域执行定向血液采集。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 1.8,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 7n
        },
        tags: ['collect', 'blood', 'black_stone_gate']
    },
    [BloodCollectionActions.BLOOD_COLLECTION_STEEL_GATE]: {
        id: BloodCollectionActions.BLOOD_COLLECTION_STEEL_GATE,
        name: '采集血液:钢铁之门',
        description: '在钢铁之门区域执行定向血液采集。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 2.0,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 8n
        },
        tags: ['collect', 'blood', 'steel_gate']
    },
    [BloodCollectionActions.BLOOD_COLLECTION_RUST_GATE]: {
        id: BloodCollectionActions.BLOOD_COLLECTION_RUST_GATE,
        name: '采集血液:锈蚀之门',
        description: '在锈蚀之门区域执行定向血液采集。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 2.1,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 8n
        },
        tags: ['collect', 'blood', 'rust_gate']
    },
    [BloodCollectionActions.BLOOD_COLLECTION_BLOODSTAIN_GATE]: {
        id: BloodCollectionActions.BLOOD_COLLECTION_BLOODSTAIN_GATE,
        name: '采集血液:血染之门',
        description: '在血染之门区域执行定向血液采集。',
        triggerStrategy: {
            mode: ActionTriggerModeMap.AUTO_OR_MANUAL,
            allowManual: true,
            allowAuto: true,
            allowAutoToggle: true,
            manualThreshold: 1,
            autoCooldownAccumulateChargesThreshold: 1
        },
        cooldown: 2.2,
        autoCooldownAccumulate: true,
        maxCooldownAccumulateCharges: 2,
        cost: {
            stamina: 9n
        },
        tags: ['collect', 'blood', 'bloodstain_gate']
    }
};
