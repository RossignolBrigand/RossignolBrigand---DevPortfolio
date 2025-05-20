import { useState, useEffect, useRef } from 'react';
import LanguageSwitcher from '../../ui/LanguageSwitch/LanguageSwitch';
import NavigationBar from '../../ui/NavigationBar/NavigationBar';
import useWindowSize from '../../../hooks/useWindowSize';

export default function Header() {
    // Check the header height and pass it as a prop to the NavigationBar component
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState('');

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, []);

    const windowSize = useWindowSize();
    return (
        <header className={`header`} ref={headerRef}>
            <div className="header-title">
                <a href="/">
                    <h1>Thomas PINEAU</h1>
                </a>
            </div>
            <div className="header-content">
                <NavigationBar
                    headerHeight={headerHeight}
                    windowSize={windowSize}
                />
                <LanguageSwitcher />
            </div>
        </header>
    );
}
