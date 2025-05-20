import { Outlet, useLocation, Navigate } from 'react-router';
import { useLang } from '../../hooks/useLang';

function LocalizedLayout() {
    const lang = useLang();
    const location = useLocation();

    const isRootPath = location.pathname === `/${lang}`;

    if (isRootPath) {
        return <Navigate to={`/${lang}/home`} replace />;
    }

    return (
        <>
            <Outlet />
        </>
    );
}

export default LocalizedLayout;
