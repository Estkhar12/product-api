import express from "express";
import mongoose from "mongoose";
import productRoute from "./routes/product.js";
import cors from "cors";
import * as dotenv from "dotenv"; 
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(productRoute);

mongoose.connect(
  process.env.MONGO_URI
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
