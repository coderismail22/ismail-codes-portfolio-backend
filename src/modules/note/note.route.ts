import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { NoteControllers } from "./note.controller";
import { NoteValidations } from "./note.validation";
const router = express.Router();

// Create a blog post
router.post(
  "/",
  validateRequest(NoteValidations.createNoteValidationSchema),
  NoteControllers.createNote,
);
router.get("/", NoteControllers.getAllNotes);
router.get("/:id", NoteControllers.getNote);
router.patch(
  "/:id",
  validateRequest(NoteValidations.updateNoteValidationSchema),
  NoteControllers.updateNote,
);
router.delete("/:id", NoteControllers.deleteNote);

export const NoteRoutes = router;
