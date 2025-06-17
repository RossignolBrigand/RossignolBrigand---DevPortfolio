// src/pages/Blog/BlogListPage.tsx
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../utils/loadBlogPosts";

export default function BlogListPage() {
	const { lang } = useParams();
	console.log("Loaded blogPosts:", blogPosts);
	console.log("Params lang:", lang);
	const filtered = blogPosts.filter((p) => p?.metadata?.lang === lang);

	return (
		<div className="prose" style={{ border: "1 solid black" }}>
			<h1>Blog</h1>
			{filtered.map(({ metadata }) => (
				<article key={metadata.slug}>
					<h2>
						<Link to={`/${lang}/blog/${metadata.slug}`}>{metadata.title}</Link>
					</h2>
					<p>{metadata.summary}</p>
				</article>
			))}
		</div>
	);
}
