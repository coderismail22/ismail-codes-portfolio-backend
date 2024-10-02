import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProjectControllers } from "./project.controller";
import { ProjectValidations } from "./project.validation";
const router = express.Router();

// Create a blog post
router.post(
  "/",
  validateRequest(ProjectValidations.createProjectValidationSchema),
  ProjectControllers.createProject,
);
router.get("/", ProjectControllers.getAllProjects);
router.get("/:id", ProjectControllers.getProject);
router.patch(
  "/:id",
  validateRequest(ProjectValidations.updateProjectValidationSchema),
  ProjectControllers.updateProject,
);
router.delete("/:id", ProjectControllers.deleteProject);

export const ProjectRoutes = router;
