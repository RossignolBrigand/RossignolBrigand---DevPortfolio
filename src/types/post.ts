// src/types/post.ts
export type BlogPost = {
	metadata: {
		title: string;
		date: string;
		slug: string;
		lang: string;
		summary?: string;
		tags?: string[];
	};
	Component: React.FC;
};
