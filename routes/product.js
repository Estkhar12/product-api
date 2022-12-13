import express from "express";
import {
  addProduct,
  deleteProduct,
  fetchFeaturedProduct,
  getAllProduct,
  updateProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/product", getAllProduct);

router.post("/product", addProduct);

router.put("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);

router.get("/product/featured", fetchFeaturedProduct);

export default router;
