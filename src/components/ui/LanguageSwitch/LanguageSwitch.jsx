import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, useParams } from 'react-router';
import { languages } from '../../../utils/i18nConfig';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const { lang: currentLang } = useParams();

    const changeLanguage = (newLang) => {
        if (newLang === currentLang) return;

        const newPath = location.pathname.replace(
            `/${currentLang}`,
            `/${newLang}`,
        );
        navigate(newPath);
        i18n.changeLanguage(newLang);
        localStorage.setItem('preferredLanguage', newLang);
    };

    const { t } = useTranslation('header');

    return (
        <div className="custom-language-select">
            <span>{t('language')}</span>
            <label htmlFor="language-selector" className="visually-hidden">
                {t('language')} {/* For screen readers */}
            </label>
            <select
                id="language-selector"
                className="translation-button"
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                aria-label="Language selector"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSwitcher;
