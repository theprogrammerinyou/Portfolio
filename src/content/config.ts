import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.object({ alt: z.string().optional(), src: z.string().optional() }),
    timestamp: z.date(),
    description: z.string(),
    codeLink: z.string().optional(),
    demoLink: z.string().optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  project: projectCollection,
};
