import express from "express";
import { EmailControllers } from "./email.controller";
import validateRequest from "../../middlewares/validateRequest";
import { EmailValidations } from "./email.validation";

const router = express.Router();

router.post(
  "/send-contact-email-to-ismail",
  validateRequest(EmailValidations.sendEmailToIsmail),
  EmailControllers.sendEmailToIsmail,
);

export const EmailRoutes = router;
