import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import type { TypeFlags } from "typescript";

const posts = defineCollection({
	loader: glob({ pattern: "*.md", base: "./content/blog" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		publishDate: z.date(),
		description: z.string(),
		tags: z.array(z.string()).optional(),
	}),
});

const recepten = defineCollection({
	loader: glob({ pattern: "*.{md,mdx}", base: "./content/recepten" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		publishDate: z.date(),
		description: z.string(),
		excerpt: z.string(),
		type: z.string(),
		author: z.string(),
		ingredienten: z.array(z.object({ ingredient: z.string(), qty: z.string().optional()})).optional(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { posts, recepten };