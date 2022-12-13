import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "please enter the product name!"],
    },
    price: {
      type: Number,
      required: [true, "Price must be required!"],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
    },
    company: {
      type: String,
      required: [true, "Campany name most be required!"],
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
