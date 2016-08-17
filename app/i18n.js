/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';

import enLocaleData from 'react-intl/locale-data/en';
import zhLocaleData from 'react-intl/locale-data/zh';

export const appLocales = [
  'en',
  'zh',

];

import enTranslationMessages from './translations/en.json';
import zhTranslationMessages from './translations/zh.json';

addLocaleData(enLocaleData);
addLocaleData(zhLocaleData);
addLocaleData(zhLocaleData);
addLocaleData(zhLocaleData);

const formatTranslationMessages = (messages) => {
  const formattedMessages = {};
  for (const message of messages) {
    formattedMessages[message.id] = message.message || message.defaultMessage;
  }

  return formattedMessages;
};

export const translationMessages = {
  en: formatTranslationMessages(enTranslationMessages),
  zh: formatTranslationMessages(zhTranslationMessages),
};
