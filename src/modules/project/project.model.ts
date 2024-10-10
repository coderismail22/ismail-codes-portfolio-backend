// BlogPost Schema
import mongoose, { Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    title: { type: String, required: true, trim: true },
    technologies: { type: [String], required: true },
    coverImage: { type: String },
    detailedImages: { type: [String], required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    liveLink: { type: String, required: true },
    githubLink: { type: String, required: true },
    priorityMarkId: { type: String, required: true },
    tags: { type: [String], required: true },
    comments: { type: [String], default: [] },
    isDeleted: { type: Boolean, required: true, default: false },
  },
  { timestamps: true },
);

export const Project = mongoose.model<TProject>("Project", projectSchema);
