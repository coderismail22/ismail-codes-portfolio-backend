import { z } from "zod";

// Create project validation
const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, "Title is required"),
    technologies: z
      .array(z.string())
      .min(1, "At least one technology is required"),
    coverImage: z.string().url("Cover image must be a valid URL"),
    detailedImages: z
      .array(z.string().url("Detailed image must be a valid URL"))
      .min(1, "At least one detailed image is required"),
    description: z.string().min(1, "Description is required"),
    duration: z.string().min(1, "Duration is required"),
    liveLink: z.string().url("Live link must be a valid URL"),
    githubLink: z.string().url("GitHub link must be a valid URL"),
    priorityMarkId: z.string().trim().min(1, "Priority mark ID is required"),
    tags: z.array(z.string()).optional(),
    comments: z.array(z.string()).optional(),
    isDeleted: z.boolean().default(false).optional(),
  }),
});

// Update project validation
const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string().trim().min(1, "Title is required").optional(),
    technologies: z
      .array(z.string())
      .min(1, "At least one technology is required")
      .optional(),
    coverImage: z.string().url("Cover image must be a valid URL").optional(),
    detailedImages: z
      .array(z.string().url("Detailed image must be a valid URL"))
      .min(1, "At least one detailed image is required")
      .optional(),
    description: z.string().min(1, "Description is required").optional(),
    duration: z.string().min(1, "Duration is required").optional(),
    liveLink: z.string().url("Live link must be a valid URL").optional(),
    githubLink: z.string().url("GitHub link must be a valid URL").optional(),
    priorityMarkId: z
      .string()
      .trim()
      .min(1, "Priority mark ID is required")
      .optional(),
    tags: z.array(z.string()).optional(), // Optional array of strings
    comments: z.array(z.string()).optional(), // Optional array of comments
    isDeleted: z.boolean().default(false).optional(),
  }),
});

export const ProjectValidations = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
