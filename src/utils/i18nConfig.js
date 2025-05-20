import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations

// French (Default)
import fr from '../locales/fr/_index';

// English
import en from '../locales/en/_index';

// Log all available languages as a const
export const languages = [
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' },
];

i18n.use(LanguageDetector) // Detects user's language
    .use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        resources: {
            en,
            fr,
        },
        fallbackLng: 'fr', // Default language
        ns: Object.keys(en), // Define namespaces
        interpolation: { escapeValue: true }, //// React already escapes
    });
