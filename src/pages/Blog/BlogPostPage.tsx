import { useParams } from "react-router-dom";
import { blogPosts } from "../../utils/loadBlogPosts.ts";

export default function BlogPostPage() {
	const { slug, lang } = useParams();
	const post = blogPosts.find(
		(p) => p.metadata.slug === slug && p.metadata.lang === lang
	);

	if (!post) return <p>Not found</p>;

	const { metadata, Component } = post;

	return (
		<article className="prose">
			<h1>{metadata.title}</h1>
			<small>{new Date(metadata.date).toLocaleDateString()}</small>
			<Component />
		</article>
	);
}
