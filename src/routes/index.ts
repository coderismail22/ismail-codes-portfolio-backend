import express from "express";
import { BlogPostRoutes } from "../modules/blog-post/blog-post.route";
import { NoteRoutes } from "../modules/note/note.route";
import { ProjectRoutes } from "../modules/project/project.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { EmailRoutes } from "../modules/email/email.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/admin",
    route: AdminRoutes,
  },
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
  {
    path: "/email",
    route: EmailRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
