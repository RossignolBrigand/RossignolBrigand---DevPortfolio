declare module "*.mdx" {
	import { ComponentType } from "react";

	export const frontmatter: {
		title: string;
		date: string;
		slug: string;
		lang: string;
		summary?: string;
		tags?: string[];
	};

	const MDXComponent: ComponentType<any>;
	export default MDXComponent;
}
