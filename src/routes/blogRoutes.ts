import { blogPosts } from "../utils/loadBlogPosts";

export type BlogRoute = {
	path: string;
	title: string;
	lang: string;
	slug: string;
};

export const blogRoutes: BlogRoute[] = blogPosts
	.filter(
		(
			post
		): post is {
			metadata: NonNullable<(typeof post)["metadata"]>;
			Component: (typeof post)["Component"];
		} => !!post.metadata
	)
	.map((post) => ({
		path: `/${post.metadata.lang}/blog/${post.metadata.slug}`,
		title: post.metadata.title,
		lang: post.metadata.lang,
		slug: post.metadata.slug,
	}));
