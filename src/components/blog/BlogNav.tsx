import { blogRoutes } from "../../routes/blogRoutes";

export default function BlogNav({ lang }: { lang: string }) {
	const links = blogRoutes.filter((route) => route.lang === lang);

	return (
		<nav>
			<ul>
				{links.map((route) => (
					<li key={route.slug}>
						<a href={route.path}>{route.title}</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
