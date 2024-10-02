import express from "express";
import { BlogPostRoutes } from "../modules/blog-post/blog-post.route";
import { NoteRoutes } from "../modules/note/note.route";
import { ProjectRoutes } from "../modules/project/project.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/blog",
    route: BlogPostRoutes,
  },
  {
    path: "/note",
    route: NoteRoutes,
  },
  {
    path: "/project",
    route: ProjectRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
