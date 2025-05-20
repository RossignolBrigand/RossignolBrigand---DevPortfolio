import { Navigate } from 'react-router-dom';
import { languages } from '../../utils/i18nConfig';

const RedirectToPreferredLang = () => {
    const supportedLangs = languages.map((l) => l.code);
    const storedLang = localStorage.getItem('preferredLanguage');
    const browserLang = navigator.language.split('-')[0];

    const fallbackLang =
        storedLang && supportedLangs.includes(storedLang)
            ? storedLang
            : supportedLangs.includes(browserLang)
              ? browserLang
              : 'en';

    return <Navigate to={`/${fallbackLang}`} replace />;
};

export default RedirectToPreferredLang;
