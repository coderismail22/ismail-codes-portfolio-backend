import nodemailer from "nodemailer";
import { TEmail } from "./email.interface";
import config from "../../config";

const sendEmailToIsmail = async (emailData: TEmail) => {
  const { name, country, email, message } = emailData;
  const transporter = nodemailer.createTransport({
    // TODO: change email to ismailmdhossain2@gmail.com
    host: "smtp.gmail.com",
    port: 587,
    secure: config.node_env === "production", // true for port 465, false for other ports
    auth: {
      user: "ismailmdhossain2@gmail.com",
      pass: "uume cyrd vtdn orwq",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `ismailmdhossain2@gmail.com`, // sender address
    to: "ismailmdhossain2@gmail.com", // recipient's email
    subject: "Connection Request From Portfolio",
    text: `Name: ${name}\nCountry: ${country}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p>Name: ${name}</p><p>Country: ${country}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  await transporter.sendMail(mailOptions);
};

export const EmailServices = {
  sendEmailToIsmail,
};
