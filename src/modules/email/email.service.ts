import nodemailer from "nodemailer";
import { TEmail } from "./email.interface";
import config from "../../config";

const sendEmailToIsmail = async (emailData: TEmail) => {
  const { name, country, email, message } = emailData;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: config.node_env === "production", // true for port 465, false for other ports
    auth: {
      user: "xordiboy@gmail.com",
      pass: "aesc tcrj ushj gjlc",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    from: `xordiboy@gmail.com`, // sender address
    to: "xordiboy@gmail.com", // recipient's email
    subject: "Connection Message",
    text: `Name: ${name}\nCountry: ${country}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p>Name: ${name}</p><p>Country: ${country}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  await transporter.sendMail(mailOptions);
};

export const EmailServices = {
  sendEmailToIsmail,
};
