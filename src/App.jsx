import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import ProductDetails from "./Pages/ProductDetails"; // Create this component
import Cart from "./Pages/Cart"; // Create this component
import Footer from "./Components/Footer";
import { CartProvider } from "./Context/CartContext"; // Import CartProvider
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart page */}
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
