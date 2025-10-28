import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from '../pages/locale/en.json';
import arTranslation from '../pages/locale/ar.json';
import { getCookie } from 'cookies-next';

// const storedLanguage = localStorage.getItem('language') || 'en';

// let storedLanguage = 'ar';

// if (typeof window !== 'undefined') {
//   const cookieLang = getCookie('language');
//   storedLanguage = cookieLang || 'ar';
// }

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
    lng: 'ar',
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;