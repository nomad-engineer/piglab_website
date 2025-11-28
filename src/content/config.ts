import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      link: z.string().url(),
      preview: z.string().url(),
      status: z.string(),
      description: z.string(),
    }),
});

const servicesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().optional(),
      image: image().optional(),
      order: z.number().default(0),
    }),
});

const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    home_display: z.enum(["full", "summary", "hidden"]).default("hidden"),
  }),
});

const pagesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      intro_title: z.string().optional(),
      intro_subtitle: z.string().optional(),
      intro_text: z.string().optional(),
      intro_image: image().optional(),
      about_text: z.string().optional(), // Using a simple string field for now, or could use the body
    }),
});

export const collections = {
  projects: projectsCollection,
  services: servicesCollection,
  articles: articlesCollection,
  pages: pagesCollection,
};
