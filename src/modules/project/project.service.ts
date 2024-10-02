import { Project } from "./project.model";
import { TProject } from "./project.interface";

const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result; // Return the populated booking result
};

const getAllProjects = async () => {
  const result = await Project.find();
  return result;
};

const getProject = async (id: string) => {
  const result = await Project.findById(id);
  return result;
};

const updateProject = async (id: string, payload: Partial<TProject>) => {
  const result = await Project.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProject = async (id: string) => {
  const result = await Project.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true, runValidators: true },
  );
  return result;
};

export const ProjectServices = {
  createProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
};
