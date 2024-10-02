import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { BlogPostControllers } from "./note.controller";
import { BlogPostValidations } from "./note.validation";
const router = express.Router();

// Create a blog post
router.post(
  "/",
  validateRequest(BlogPostValidations.createBlogPostValidationSchema),
  BlogPostControllers.createBlogPost,
);
router.get("/", BlogPostControllers.getAllBlogPosts);
router.get("/", BlogPostControllers.getBlogPost);
router.patch(
  "/",
  validateRequest(BlogPostValidations.updateBlogPostValidationSchema),
  BlogPostControllers.updateBlogPost,
);
router.delete("/", BlogPostControllers.deleteBlogPost);

export const BlogPostRoutes = router;
