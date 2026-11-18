import 'dotenv/config';
import cors from "cors";
import express, { json } from 'express';
import mongoose from 'mongoose';
const app = express()
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://laughing-broccoli-6wp5rj5vx56cqg7-5173.app.github.dev",
      "https://express-recipes-1.onrender.com",
    ],
  })
);

app.use(json());
app.use("/recipe", require("./routes/recipe.js").default);

async function start() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI is not set. Add it to .env or the environment.");
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB");
    app.listen(port);
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exitCode = 1;
  }
}

start();