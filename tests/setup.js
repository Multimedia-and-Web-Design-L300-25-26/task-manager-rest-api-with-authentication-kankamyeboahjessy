import mongoose from "mongoose";
import dotenv from "dotenv";
import connectDB from "../src/config/db.js";

// Load test environment variables
dotenv.config({ path: ".env.test" });

beforeAll(async () => {
  await connectDB();
});

afterAll(async () => {
  await mongoose.connection.close();
});