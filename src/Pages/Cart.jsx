import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Calculate total units and total price
  const totalUnits = cart.reduce((acc, product) => acc + product.quantity, 0);
  const totalPrice = cart
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <div className="container mt-5">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group">
            {cart.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  {product.name} - ${product.price}
                  <span className="badge bg-secondary ms-2">
                    Quantity: {product.quantity}
                  </span>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove One
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h4>Total Units: {totalUnits}</h4>
            <h4>Total Price: ${totalPrice}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
