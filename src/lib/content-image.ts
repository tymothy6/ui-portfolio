import { z } from "zod";

// An image referenced from MDX content. Width and height are stored with the
// URL so next/image can reserve space without fetching the file.
export const contentImageSchema = z.object({
  src: z.string().url(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  alt: z.string().default(""),
});

export type ContentImage = z.infer<typeof contentImageSchema>;
