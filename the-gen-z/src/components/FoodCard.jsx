import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext'; // Cart context import

const FoodCard = ({ id, image, name, description, price, isVeg, theme }) => {
  const { addToCart } = useCart(); // UseCart hook-a activate panrom

  const glowColor = theme === 'hotel' ? 'group-hover:shadow-[0_0_20px_rgba(255,69,0,0.5)] border-hotel-glow' 
                                      : 'group-hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] border-cafe-glow';
  
  const textColor = theme === 'hotel' ? 'text-hotel-glow' : 'text-cafe-glow';

  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = "https://images.unsplash.com/photo-1414235077428-33898b04a11f?q=80&w=1000&auto=format&fit=crop"; 
  };

  // Add to cart function
  const handleAdd = () => {
    addToCart({ id, name, price, image }); 
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-opacity-50 ${glowColor}`}
    >
      <div className="h-48 w-full overflow-hidden relative bg-black/50">
        <img 
          src={image} 
          alt={name} 
          onError={handleImageError}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-2 py-1 rounded border border-white/20">
          <span className={`text-xs font-bold ${isVeg ? 'text-green-500' : 'text-red-500'}`}>
            {isVeg ? 'VEG' : 'NON-VEG'}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className={`text-2xl font-bold ${textColor}`}>₹{price}</span>
          <button 
            onClick={handleAdd}
            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors border border-white/10"
          >
            ➕
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;