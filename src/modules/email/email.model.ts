import { Schema, model } from "mongoose";
import { TEmail } from "./email.interface";

const emailSchema = new Schema<TEmail>({
  name: { type: String, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const Email = model<TEmail>("Email", emailSchema);

export default Email;
