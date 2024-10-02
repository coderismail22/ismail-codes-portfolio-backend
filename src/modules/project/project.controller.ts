import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProjectServices } from "./project.service";

const createProject = catchAsync(async (req, res) => {
  const result = await ProjectServices.createProject(req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Project created successfully.",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req, res) => {
  const result = await ProjectServices.getAllProjects();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Projects retrieved successfully.",
    data: result,
  });
});

const getProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.getProject(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Project retrieved successfully.",
    data: result,
  });
});

const updateProject = catchAsync(async (req, res) => {
  // TODO: Handle Non-Primitive Fields
  const { id } = req.params;
  const result = await ProjectServices.updateProject(id, req.body);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Project updated successfully.",
    data: result,
  });
});

const deleteProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectServices.deleteProject(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Project deleted successfully.",
    data: result,
  });
});

export const ProjectControllers = {
  createProject,
  getAllProjects,
  getProject,
  updateProject,
  deleteProject,
};
