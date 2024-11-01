import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";

const app: Application = express();
// parsers
app.use(express.json());
app.use(cookieParser());

// List of allowed origins
const allowedOrigins = [
  "https://localhost:5173",
  "https://ismailcodes.netlify.app",
];

// CORS configuration
// app.use(
//   cors({
//     origin: (origin, callback) => {
//       if (!origin || allowedOrigins.includes(origin)) {
//         return callback(null, true);
//       }
//       return callback(
//         new Error(
//           "CORS policy does not allow access from the specified origin.",
//         ),
//         false,
//       );
//     },
//   }),
// );

// Custom CORS middleware
app.use((req, res, next) => {
  const origin = req.get("origin");
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader(
      "Access-Control-Allow-Origin",
      "https://ismailcodes.netlify.app",
    ); // Fallback to Netlify
  }
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to my ismail codes..." });
});

app.use("/api/v1/", router);

// Middleware
app.use(globalErrorHandler);
app.use(notFound);

export default app;
