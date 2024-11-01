import jwt from "jsonwebtoken";
import { Admin } from "./admin.model";
import config from "../../config/index";

// Admin login service
const loginAdmin = async (email: string, password: string) => {
  const admin = await Admin.findOne({ email });

  if (!admin || admin.password !== password) {
    throw new Error("Invalid email or password");
  }

  // Create JWT token
  const token = jwt.sign(
    { id: admin._id, role: admin.role },
    config.jwt_secret as string,
    { expiresIn: "7d" },
  );

  const isProduction = process.env.NODE_ENV === "production";

  // Define correct type for sameSite
  const sameSiteOption: "strict" | "lax" | "none" = isProduction
    ? "none"
    : "lax";

  // Return token and cookie options
  return {
    token,
    cookieOptions: {
      httpOnly: true,
      secure: isProduction,
      maxAge: 60 * 1000 * 60, // 1 hour
      sameSite: sameSiteOption,
      path: "/",
    },
    user: {
      id: admin._id,
      role: admin.role,
      email: admin.email,
    },
  };
};

// Check authentication service
const checkAuthentication = (token: string) => {
  if (!token) {
    throw new Error("Not authenticated");
  }

  const decoded = jwt.verify(token, config.jwt_secret as string);
  return decoded;
};

// Change admin password service
const changeAdminPassword = async (
  token: string,
  oldPassword: string,
  newPassword: string,
) => {
  if (!token) {
    throw new Error("Not authenticated");
  }

  const decoded = jwt.verify(token, config.jwt_secret as string);
  // Ensure decoded is of type JwtPayload
  if (typeof decoded === "string" || !("id" in decoded)) {
    throw new Error("Invalid token");
  }

  const admin = await Admin.findById(decoded?.id);

  if (!admin) {
    throw new Error("Admin not found");
  }

  if (admin.password !== oldPassword) {
    throw new Error("Old password is incorrect");
  }

  admin.password = newPassword;
  await admin.save();

  return admin;
};

export const AdminServices = {
  loginAdmin,
  checkAuthentication,
  changeAdminPassword,
};
