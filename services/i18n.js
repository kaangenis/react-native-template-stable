import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from '../locales/tr.json';
import eng from '../locales/eng.json';


i18next
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        lng: 'en',
        fallbackLng: 'tr',
        resources: {
            en: eng,
            tr: tr,
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18next;