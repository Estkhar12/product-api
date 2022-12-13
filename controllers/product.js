import Product from "../models/product.js";

export const getAllProduct = async (req, res, next) => {
  const { maxPrice, minRating } = req.query;

  let filter = {};
  if (maxPrice && minRating) {
    filter = { price: { $lt: maxPrice }, rating: {$gte: minRating} };
  } else if(maxPrice) {
    filter = { price: { $lt: maxPrice }};
  } else if(minRating) {
    filter = {rating: { $gte: minRating } };
  }
  try {
    const products = await Product.find(filter);
    res.status(200).json({
      status: "success",
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const addProduct = async (req, res, next) => {
  console.log(req.body);
  try {
    const newProduct = await Product.create(req.body);
    res.status(200).json({
      status: "success",
      newProduct,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      deletedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const fetchFeaturedProduct = async (req, res, next) => {
  try {
    const featuredProduct = await Product.find({ featured: true });
    res.status(200).json({
      status: "success",
      featuredProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
