import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { NoteServices } from "./note.service";

const createNote = catchAsync(async (req, res) => {
  const result = await NoteServices.createNote(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Note created successfully.",
    data: result,
  });
});

const getAllNotes = catchAsync(async (req, res) => {
  const result = await NoteServices.getAllNotes();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Notes retrieved successfully.",
    data: result,
  });
});

const getNote = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await NoteServices.getNote(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Note retrieved successfully.",
    data: result,
  });
});

const updateNote = catchAsync(async (req, res) => {
  // TODO: Handle Non-Primitive Fields
  const { id } = req.params;
  const result = await NoteServices.updateNote(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Note updated successfully.",
    data: result,
  });
});

const deleteNote = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await NoteServices.deleteNote(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Note deleted successfully.",
    data: result,
  });
});

export const NoteControllers = {
  createNote,
  getAllNotes,
  getNote,
  updateNote,
  deleteNote,
};
