import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest text-white">
          THE GEN-<span className="text-hotel-glow">Z</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-semibold tracking-wider text-gray-300">
          <Link to="/" className="hover:text-white transition-colors duration-300">HOME</Link>
          <Link to="/hotel-menu" className="hover:text-hotel-glow transition-colors duration-300">MEALS</Link>
          <Link to="/cafe-menu" className="hover:text-cafe-glow transition-colors duration-300">CAFE</Link>
        </div>

        {/* CTA Button */}
        <Link 
          to="/reserve" 
          className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors duration-300"
        >
          Reserve Table
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;