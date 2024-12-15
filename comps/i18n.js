import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../pages/locale/en.json';
import arTranslation from '../pages/locale/ar.json';

// const storedLanguage = localStorage.getItem('language') || 'en';

let storedLanguage = 'en';

if (typeof window !== 'undefined') {
  storedLanguage = localStorage.getItem('language') || 'en';
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: storedLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;