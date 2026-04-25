import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import CartModal from './CartModal';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-black text-white italic tracking-tighter">
            THE GEN-Z
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">HOME</Link>
            <Link to="/hotel-menu" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">HOTEL</Link>
            <Link to="/cafe-menu" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">CAFE</Link>
            <Link to="/reserve" className="text-orange-500 hover:text-orange-400 transition-colors text-sm font-bold border border-orange-500/30 px-4 py-1.5 rounded-full">BOOK TABLE</Link>
          </div>
          
          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-white/5 rounded-full border border-white/10 hover:border-hotel-glow transition-all group"
            >
              <span className="text-xl group-hover:scale-110 block transition-transform">🛒</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-hotel-glow text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(255,69,0,0.5)]">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Modal for Billing */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;