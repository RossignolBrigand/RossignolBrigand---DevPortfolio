import { useParams, useNavigate, useLocation } from 'react-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { languages } from '../utils/i18nConfig';

export const useLang = () => {
    const { lang } = useParams();
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const supportedLangs = languages.map((lang) => lang.code);
        const storedLang = localStorage.getItem('preferredLanguage');
        const browserLang = navigator.language.split('-')[0];

        if (!lang || !supportedLangs.includes(lang)) {
            const fallbackLang =
                storedLang ||
                (supportedLangs.includes(browserLang) ? browserLang : 'fr');
            const newPath = `/${fallbackLang}${location.pathname}`;
            navigate(newPath, { replace: true });
            return;
        }
        if (i18n.language !== lang) {
            i18n.changeLanguage(lang);
            localStorage.setItem('prefferedLanguage', lang);
        }
    }, [lang, location.pathname, navigate, i18n]);

    return lang;
};
