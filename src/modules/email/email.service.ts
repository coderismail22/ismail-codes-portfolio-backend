import nodemailer from "nodemailer";
import { TEmail } from "./email.interface";
import config from "../../config";

const sendEmailToIsmail = async (emailData: TEmail) => {
  const { name, country, email, message } = emailData;

  const transporter = nodemailer.createTransport({
    host: config.email_host,
    port: parseInt(config.email_port as string),
    secure: config.email_port === "465", // secure should be true for port 465
    auth: {
      user: config.email_address,
      pass: config.email_password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.error("Transporter verification failed:", error);
        reject(error);
      } else {
        console.log("Transporter is ready");
        resolve(success);
      }
    });
  });

  const mailOptions = {
    from: `ismailmdhossain2@gmail.com`,
    to: "ismailmdhossain2@gmail.com",
    subject: "Connection Request From Portfolio",
    text: `Name: ${name}\nCountry: ${country}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p>Name: ${name}</p><p>Country: ${country}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  return await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending mail:", err);
        reject(err);
      } else {
        console.log("Mail sent successfully:", info);
        resolve(info);
      }
    });
  });
};

export const EmailServices = {
  sendEmailToIsmail,
};
