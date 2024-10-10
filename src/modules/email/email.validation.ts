import { z } from "zod";

// Define the Zod schema for the validation
export const sendEmailToIsmail = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    country: z.string({ required_error: "Country is required" }),
    email: z.string({ required_error: "Email is required" }),
    message: z.string({ required_error: "Message is required" }),
  }),
});

export const EmailValidations = {
  sendEmailToIsmail,
};
