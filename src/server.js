import 'dotenv/config';
import express, { json } from 'express';
import mongoose from 'mongoose';
const app = express()
const port = process.env.PORT || 3000;

app.use(json());
app.use("/recipes", require("./routes/recipes.js").default);

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