import catchAsync from "../../utils/catchAsync";
import { EmailServices } from "./email.service";

export const sendEmailToIsmail = catchAsync(async (req, res) => {
  // Delegate email sending to the service
  await EmailServices.sendEmailToIsmail(req.body);

  // Response to client
  res.status(200).json({ message: "Email sent successfully!" });
});

export const EmailControllers = {
  sendEmailToIsmail,
};
