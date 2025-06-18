// src/pages/Blog/BlogListPage.tsx
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../../utils/loadBlogPosts";
import BlogNav from "../../components/blog/BlogNav";

export default function BlogListPage() {
	const { lang } = useParams();
	if (!lang) return null;
	const filtered = blogPosts.filter((p) => p?.metadata?.lang === lang);
	return (
		<div className="prose" style={{ border: "1 solid black" }}>
			<h1>Blog</h1>
			<div>
				<h2>Blog Nav</h2>
				<BlogNav lang={lang} />
			</div>
			<div>
				<h2>Blog list page List</h2>
				{filtered.map(({ metadata }) => (
					<article key={metadata.slug}>
						<h2>
							<Link to={`/${lang}/blog/${metadata.slug}`}>{metadata.title}</Link>
						</h2>
						<p>{metadata.summary}</p>
					</article>
				))}
			</div>
		</div>
	);
}
