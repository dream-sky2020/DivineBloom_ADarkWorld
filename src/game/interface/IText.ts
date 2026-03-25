/**
 * 支持的语言代码联合类型
 */
export type LanguageCode = 'zh-CN' | 'en-US' | 'ja-JP';

/**
 * 本地化文本对象接口
 */
export interface ITextData {
    /** 默认语言文本 (当指定语言缺失时的兜底) */
    default: string;
    /** 各语言代码对应的文本映射 */
    locales?: Partial<Record<LanguageCode, string>>;
}

/**
 * 文本类型
 * 在数据定义阶段，允许直接写 string (简写) 或完整的 ITextData 对象
 */
export type IText = string | ITextData;

/**
 * 类型守卫：判断一个值是否是本地化文本对象
 */
export function isTextData(value: any): value is ITextData {
    return value && typeof value === 'object' && typeof value.default === 'string';
}
