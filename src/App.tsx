import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LocalizedLayout from "@/components/layout/LocalizedLayout";
import RedirectToPreferredLang from "@/components/routing/RedirectToPreferredLang";

import HomePage from "@/pages/Home/HomePage";
import AboutPage from "@/pages/About/AboutPage";
import ErrorPage from "@/pages/Error/ErrorPage";
// import ProjectPage from './pages/Project/ProjectPage';

export default function App() {
	return (
		<Router>
			<Routes>
				{/* 🔁 Handle root path */}
				<Route path="/" element={<RedirectToPreferredLang />} />
				{/* Localized routes */}
				<Route path="/:lang/*" element={<LocalizedLayout />}>
					<Route index element={<HomePage />} />
					<Route path="home" element={<HomePage />} />
					<Route path="about" element={<AboutPage />} />
					{/* <Route path="projects" element={<ProjectPage />} /> */}
					{/* <Route path="contact" element={<ContactPage />} /> */}
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</Router>
	);
}
