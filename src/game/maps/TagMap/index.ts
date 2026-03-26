import type { ITag } from '../../interface/ITag';
import { ActionTagDataMap } from './ActionTagMap';
import { AttributeTagDataMap } from './AttributeTagMap';
import { ItemTagDataMap } from './ItemTagMap';
import { MechanicTagDataMap } from './MechanicTagMap';
import { StateTagDataMap } from './StateTagMap';
import { SystemTagDataMap } from './SystemTagMap';

export * from './ActionTagMap';
export * from './AttributeTagMap';
export * from './ItemTagMap';
export * from './MechanicTagMap';
export * from './StateTagMap';
export * from './SystemTagMap';

/**
 * 汇总所有标签数据映射表
 */
export const TagDataMap: Record<string, ITag> = {
    ...SystemTagDataMap,
    ...MechanicTagDataMap,
    ...AttributeTagDataMap,
    ...ItemTagDataMap,
    ...StateTagDataMap,
    ...ActionTagDataMap,
};
