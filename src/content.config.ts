import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "*.md", base: "./content/blog" }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		publishDate: z.date(),
		description: z.string(),
	}),
});

export const collections = { posts };