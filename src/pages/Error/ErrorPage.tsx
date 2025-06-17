import { useState, useEffect } from "react";
import Button from "../../components/ui/Button/Button";
import { useTranslation } from "react-i18next";
import { Link, Navigate } from "react-router-dom";

function ErrorPage() {
	const { t } = useTranslation("errorPage");
	const [redirect, setRedirect] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setRedirect(true);
		}, 3000); // 3 seconds

		return () => clearTimeout(timer);
	}, []);

	if (redirect) {
		return <Navigate to="/" replace />;
	}

	return (
		<div className="error-page-container">
			<div className="page-title-container">
				<h1>{t("title")}</h1>
			</div>
			<div className="page-content">
				<h2>{t("warning")}</h2>
				<h3>{t("invitation")}</h3>
			</div>
			<Button href="/" variant="back-home">
				<Link to="/">{t("back")}</Link>
			</Button>
		</div>
	);
}

export default ErrorPage;
