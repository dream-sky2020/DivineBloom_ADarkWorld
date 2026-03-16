import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import zhCn from './locales/zh-cn.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';

const i18n = createI18n({
  legacy: false, // Use Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    'zh-cn': zhCn,
    ja,
    ko
  }
});

export default i18n;
