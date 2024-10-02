import { Note } from "./note.model";
import { TNote } from "./note.interface";

const createNote = async (payload: TNote) => {
  const result = await Note.create(payload);
  return result; // Return the populated booking result
};

const getAllNotes = async () => {
  const result = await Note.find();
  return result;
};

const getNote = async (id: string) => {
  const result = await Note.findById(id);
  return result;
};

const updateNote = async (id: string, payload: Partial<TNote>) => {
  const result = await Note.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteNote = async (id: string) => {
  const result = await Note.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true, runValidators: true },
  );
  return result;
};

export const NoteServices = {
  createNote,
  getAllNotes,
  getNote,
  updateNote,
  deleteNote,
};
