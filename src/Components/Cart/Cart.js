import React, { useState } from "react";
import "./styles.css";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 199, quantity: 1, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Product 2", price: 299, quantity: 1, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Product 3", price: 399, quantity: 1, image: "https://via.placeholder.com/100" },
  ]);

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(cart.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${totalPrice}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
