import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { id, category } = useParams(); // Get product ID and category from URL
  const { addToCart } = useContext(CartContext); // Get addToCart function from context

  // For demo purposes, hardcoding product data.
  const product = {
    id,
    name:
      category === "men"
        ? "Men's Jacket"
        : category === "women"
        ? "Women's Jacket"
        : "Gym Bag",
    price: category === "men" ? 49.99 : category === "women" ? 49.99 : 29.99,
    description: "A high-quality product for your active lifestyle.",
  };

  return (
    <div className="container mt-5">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button className="btn btn-primary" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
