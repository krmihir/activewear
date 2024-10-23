import React, { createContext, useState } from 'react';

// Create the CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        // If the product is already in the cart, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the product is not in the cart, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to remove one unit of a product from the cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);

      if (existingProduct.quantity === 1) {
        // If the quantity is 1, remove the product entirely
        return prevCart.filter((item) => item.id !== productId);
      } else {
        // Otherwise, decrease the quantity by 1
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
