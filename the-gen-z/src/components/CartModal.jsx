import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const CartModal = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart, subtotal, gst, total, clearCart } = useCart();
  const [isOrdered, setIsOrdered] = useState(false); // To show Invoice screen

  if (!isOpen) return null;

  const handleOrder = () => {
    setIsOrdered(true);
    // Real world-la inga dhan backend API call panni order save pannuvom
  };

  const handleClose = () => {
    if (isOrdered) clearCart();
    setIsOrdered(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={handleClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-md"
        />

        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="relative bg-[#111] border border-white/10 w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl"
        >
          {!isOrdered ? (
            <>
              {/* CART VIEW */}
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                <h2 className="text-xl font-bold text-white italic">YOUR CART</h2>
                <button onClick={onClose} className="text-gray-400">✕</button>
              </div>

              {/* Added 'overflow-y-auto' and 'max-h-[400px]' so you can scroll many items */}
              <div className="p-6 overflow-y-auto max-h-[350px] custom-scrollbar">
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500 py-10">Empty cart!</p>
                ) : (
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="flex items-center gap-3">
                           <img src={item.image} className="w-12 h-12 rounded-lg object-cover" alt="" />
                           <div>
                             <h4 className="text-white text-sm font-bold">{item.name}</h4>
                             <p className="text-gray-400 text-xs">₹{item.price} x {item.quantity}</p>
                           </div>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500 text-xl">×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 bg-white/5 border-t border-white/10">
                  <div className="flex justify-between text-white font-black text-xl mb-4">
                    <span>TOTAL</span>
                    <span className="text-hotel-glow">₹{total.toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={handleOrder}
                    className="w-full py-4 bg-hotel-glow text-white font-black rounded-xl hover:scale-[1.02] transition-transform"
                  >
                    PLACE ORDER
                  </button>
                </div>
              )}
            </>
          ) : (
            /* INVOICE VIEW (Success Screen) */
            <div className="p-8 text-center flex flex-col items-center">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center text-4xl mb-4">✓</div>
              <h2 className="text-2xl font-black text-white mb-2">ORDER PLACED!</h2>
              <p className="text-gray-400 mb-6">Your feast is being prepared at the Gen-Z kitchen.</p>
              
              <div className="w-full bg-white/5 rounded-2xl p-4 text-left border border-dashed border-white/20 mb-6">
                <p className="text-[10px] text-gray-500 mb-2">TAX INVOICE #GZ-{Math.floor(Math.random()*10000)}</p>
                <div className="flex justify-between text-white font-bold">
                   <span>Amount Paid:</span>
                   <span className="text-hotel-glow">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={handleClose}
                className="w-full py-3 border border-white/20 text-white rounded-xl hover:bg-white hover:text-black transition-all"
              >
                CLOSE & CLEAR CART
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CartModal;