import express from "express";
import { AdminControllers } from "./admin.controller";

const router = express.Router();

router.post("/login", AdminControllers.adminLogin);
router.post("/check-auth", AdminControllers.checkAuth);
router.post("/change-password", AdminControllers.changePassword);

export const AdminRoutes = router;
