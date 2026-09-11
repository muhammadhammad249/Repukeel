import app from "../src/app";
import { connectDB } from "../src/config/db";

// Connect to DB once (Vercel serverless cold start)
let isConnected = false;

const handler = async (req: import("http").IncomingMessage, res: import("http").ServerResponse) => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
  return app(req, res);
};

export default handler;
