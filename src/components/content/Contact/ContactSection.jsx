import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { SlNote } from 'react-icons/sl';
import ContactForm from '../../ui/ContactForm/ContactForm';
import Button from '../../ui/Button/Button';

//-----------------------------------------

export default function ContactSection() {
    const [isButtonClicked, setButtonClicked] = useState(false);

    const { t } = useTranslation('contact');

    const copyToClipboard = () => {
        const copyText = 'thomas.pineau.webdev@protonmail.com';
        navigator.clipboard.writeText(copyText);
        setButtonClicked(true);
        setTimeout(() => setButtonClicked(false), 2500);
    };

    return (
        <div className="contact-wrapper">
            <h2 className="contact-wrapper__title">{t('title')}</h2>
            <div className="contact-wrapper__clipboard">
                <h3>{t('mailBark')}</h3>
                <Button onClick={copyToClipboard}>
                    {'thomas.pineau.webdev@protonmail.com'}
                    <SlNote />
                </Button>
                {isButtonClicked ? <span>{t('clipboard')}</span> : null}
            </div>
            <h3>{t('formBark')}</h3>
            <ContactForm />
        </div>
    );
}
