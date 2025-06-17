// src/utils/loadBlogPosts.ts
const files = import.meta.glob("/src/content/blog/*.mdx", { eager: true });

export const blogPosts = Object.values(files)
	.map((mod: any) => {
		if (!mod.frontmatter) {
			console.warn("⚠️ Missing frontmatter in MDX:", mod);
			return null;
		}

		return {
			metadata: mod.frontmatter,
			Component: mod.default,
		};
	})
	.filter(Boolean);
