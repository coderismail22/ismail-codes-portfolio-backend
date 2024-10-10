import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AdminServices } from "./admin.service";

// Admin login
const adminLogin = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const result = await AdminServices.loginAdmin(email, password);
  const { token, cookieOptions, user } = result;

  // Set the JWT as an HTTP-only cookie
  res.cookie("token", token, cookieOptions);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Logged in successfully.",
    data: user,
  });
});

const adminLogout = catchAsync(async (req, res) => {
  // Clear the token by setting an empty value with an immediate expiration
  res.cookie("token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    expires: new Date(0), // Expire immediately
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
  });

  // Send success response
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Logged out successfully.",
  });
});

// Check authentication
const checkAuth = catchAsync(async (req, res) => {
  const result = await AdminServices.checkAuthentication(
    req.cookies?.token || req.headers.authorization?.split(" ")[1],
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Authenticated successfully.",
    data: result,
  });
});

// Change password
const changePassword = catchAsync(async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
  const result = await AdminServices.changeAdminPassword(
    token,
    oldPassword,
    newPassword,
  );

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Password changed successfully.",
    data: result,
  });
});

export const AdminControllers = {
  adminLogin,
  adminLogout,
  checkAuth,
  changePassword,
};
