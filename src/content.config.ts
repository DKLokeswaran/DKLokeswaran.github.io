import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One Markdown file per project in `src/content/projects/`.
 * Filenames that start with `_` are ignored (see `_example.md`).
 */
const projects = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.md',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    url: z.string().url(),
    featured: z.boolean().default(false),
    order: z.number().int(),
    stack: z.array(z.string().min(1)).min(1),
    status: z.string().min(1).optional(),
  }),
});

export const collections = { projects };
