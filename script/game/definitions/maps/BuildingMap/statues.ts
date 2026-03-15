import { BuildingCategoryMap, BuildingDefinition } from './types';

/**
 * 神像建筑 ID 映射表
 */
export const StatueBuildings = {
    HEFEI_STATUE: "hefei_statue",       // 赫绯神像
    YEBO_STATUE: "yebo_statue",         // 液泊神像
    JIEYAN_STATUE: "jieyan_statue",     // 结盐神像
    PIAODI_STATUE: "piaodi_statue",     // 飘狄神像
    FAZHENG_STATUE: "fazheng_statue",   // 法正神像
    KONGMING_STATUE: "kongming_statue", // 恐冥神像
    BAOLAN_STATUE: "baolan_statue",     // 暴岚神像
    SHUANGLUO_STATUE: "shuangluo_statue", // 霜洛神像
    ANSHI_STATUE: "anshi_statue",       // 暗蚀神像
    YIBI_STATUE: "yibi_statue",         // 疫碧神像
    YAZI_STATUE: "yazi_statue",         // 睚眦神像
    YANYOU_STATUE: "yanyou_statue",     // 焉有神像
    LINXIAO_STATUE: "linxiao_statue",   // 麟啸神像
    WANGDA_STATUE: "wangda_statue",     // 望龖神像
    XIREN_STATUE: "xiren_statue",       // 袭人神像
} as const;

/**
 * 神像建筑详细数据表
 */
export const StatueBuildingData: Record<string, BuildingDefinition> = {
    [StatueBuildings.HEFEI_STATUE]: {
        id: StatueBuildings.HEFEI_STATUE,
        name: "赫绯神像",
        description: "供奉赫绯的神像，常见赤色祭纹。",
        category: BuildingCategoryMap.STATUE,
        deity: "赫绯",
    },
    [StatueBuildings.YEBO_STATUE]: {
        id: StatueBuildings.YEBO_STATUE,
        name: "液泊神像",
        description: "供奉液泊的神像，祭台常有液体供器。",
        category: BuildingCategoryMap.STATUE,
        deity: "液泊",
    },
    [StatueBuildings.JIEYAN_STATUE]: {
        id: StatueBuildings.JIEYAN_STATUE,
        name: "结盐神像",
        description: "供奉结盐的神像，雕面如盐晶层叠。",
        category: BuildingCategoryMap.STATUE,
        deity: "结盐",
    },
    [StatueBuildings.PIAODI_STATUE]: {
        id: StatueBuildings.PIAODI_STATUE,
        name: "飘狄神像",
        description: "供奉飘狄的神像，造型轻逸。",
        category: BuildingCategoryMap.STATUE,
        deity: "飘狄",
    },
    [StatueBuildings.FAZHENG_STATUE]: {
        id: StatueBuildings.FAZHENG_STATUE,
        name: "法正神像",
        description: "供奉法正的神像，多立于聚落中心。",
        category: BuildingCategoryMap.STATUE,
        deity: "法正",
    },
    [StatueBuildings.KONGMING_STATUE]: {
        id: StatueBuildings.KONGMING_STATUE,
        name: "恐冥神像",
        description: "供奉恐冥的神像，神容庄冷。",
        category: BuildingCategoryMap.STATUE,
        deity: "恐冥",
    },
    [StatueBuildings.BAOLAN_STATUE]: {
        id: StatueBuildings.BAOLAN_STATUE,
        name: "暴岚神像",
        description: "供奉暴岚的神像，纹饰多见风雷。",
        category: BuildingCategoryMap.STATUE,
        deity: "暴岚",
    },
    [StatueBuildings.SHUANGLUO_STATUE]: {
        id: StatueBuildings.SHUANGLUO_STATUE,
        name: "霜洛神像",
        description: "供奉霜洛的神像，石面常带寒霜。",
        category: BuildingCategoryMap.STATUE,
        deity: "霜洛",
    },
    [StatueBuildings.ANSHI_STATUE]: {
        id: StatueBuildings.ANSHI_STATUE,
        name: "暗蚀神像",
        description: "供奉暗蚀的神像，表面有阴蚀暗纹。",
        category: BuildingCategoryMap.STATUE,
        deity: "暗蚀",
    },
    [StatueBuildings.YIBI_STATUE]: {
        id: StatueBuildings.YIBI_STATUE,
        name: "疫碧神像",
        description: "供奉疫碧的神像，多见于旧疫区边缘。",
        category: BuildingCategoryMap.STATUE,
        deity: "疫碧",
    },
    [StatueBuildings.YAZI_STATUE]: {
        id: StatueBuildings.YAZI_STATUE,
        name: "睚眦神像",
        description: "供奉睚眦的神像，形制刚猛。",
        category: BuildingCategoryMap.STATUE,
        deity: "睚眦",
    },
    [StatueBuildings.YANYOU_STATUE]: {
        id: StatueBuildings.YANYOU_STATUE,
        name: "焉有神像",
        description: "供奉焉有的神像，常伴晦涩铭文。",
        category: BuildingCategoryMap.STATUE,
        deity: "焉有",
    },
    [StatueBuildings.LINXIAO_STATUE]: {
        id: StatueBuildings.LINXIAO_STATUE,
        name: "麟啸神像",
        description: "供奉麟啸的神像，基座多刻鳞甲图腾。",
        category: BuildingCategoryMap.STATUE,
        deity: "麟啸",
    },
    [StatueBuildings.WANGDA_STATUE]: {
        id: StatueBuildings.WANGDA_STATUE,
        name: "望龖神像",
        description: "供奉望龖的神像，体量宏伟。",
        category: BuildingCategoryMap.STATUE,
        deity: "望龖",
    },
    [StatueBuildings.XIREN_STATUE]: {
        id: StatueBuildings.XIREN_STATUE,
        name: "袭人神像",
        description: "供奉袭人的神像，外柔内厉。",
        category: BuildingCategoryMap.STATUE,
        deity: "袭人",
    },
};
