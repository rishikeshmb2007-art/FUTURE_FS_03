import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      // Exact-ah ID match aagudha nu check panrom
      const existingItem = prev.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Item already cart-la irundha, quantity-a mattum mathu
        return prev.map((cartItem) =>
          cartItem.id === item.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        );
      }
      
      // Puthu ID ulla item vandha, adha array-la add pannu
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCartItems([]);

  // Calculation Logic
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const gst = subtotal * 0.05;
  const total = subtotal + gst;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, subtotal, gst, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);