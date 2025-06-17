import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import mdx from "@mdx-js/rollup";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({ svgrOptions: {} }),
		mdx({
			remarkPlugins: [
				remarkFrontmatter, // Parse frontmatter blocks
				[remarkMdxFrontmatter, { name: "frontmatter" }], // Export frontmatter
			],
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
