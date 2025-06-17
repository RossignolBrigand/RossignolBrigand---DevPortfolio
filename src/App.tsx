import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LocalizedLayout from "@/components/layout/LocalizedLayout";
import RedirectToPreferredLang from "@/components/routing/RedirectToPreferredLang";

import HomePage from "@/pages/Home/HomePage.tsx";
import AboutPage from "@/pages/About/AboutPage.tsx";
import ErrorPage from "@/pages/Error/ErrorPage.tsx";
import BlogListPage from "@/pages/Blog/BlogListPage.tsx";
import BlogPostPage from "@/pages/Blog/BlogPostPage.tsx";
import ProjectPage from "@/pages/Project/ProjectPage.tsx";
import ContactPage from "@/pages/Contact/ContactPage.tsx";

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
					<Route path="projects" element={<ProjectPage />} />
					<Route path="contact" element={<ContactPage />} />
					<Route path="blog" element={<BlogListPage />} />
					<Route path="blog/:slug" element={<BlogPostPage />} />
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</Router>
	);
}
