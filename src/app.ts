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
  "http://localhost:5173",
  "https://ismailcodes.netlify.app",
];

// CORS configuration
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(
        new Error(
          "CORS policy does not allow access from the specified origin.",
        ),
        false,
      );
    },
  }),
);


app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to my ismail codes..." });
});

app.use("/api/v1/", router);

// Middleware
app.use(globalErrorHandler);
app.use(notFound);

export default app;
