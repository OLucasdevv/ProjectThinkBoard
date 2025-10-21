import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import translationPT from './locales/pt/translation.json';
import translationEN from './locales/en/translation.json';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'pt', // idioma padrão
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      pt: {
        translation: translationPT
      },
      en: {
        translation: translationEN
      }
    }
  });

export default i18n;