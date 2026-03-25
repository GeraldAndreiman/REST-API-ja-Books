import { z } from "zod";

export const bookSchema = z.object({
  title: z.string().min(1),
  authorId: z.string(),
  publisherId: z.string(),
  genre: z.string(),
  language: z.string(),
  publishedYear: z.number().int().gte(1500),
});

export type BookInput = z.infer<typeof bookSchema>;