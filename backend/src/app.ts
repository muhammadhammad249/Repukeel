import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env";
import contactRouter from "./routes/contact";
import authRouter from "./routes/auth";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: [env.CLIENT_URL, 'http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic health check route
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "RepuKeel API is running" });
});

// Routes
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/auth", authRouter);

export default app;
