import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-darkbg font-sans">
      
      {/* ================= LEFT SIDE: HOTEL/MEALS ================= */}
      <motion.div
        className="relative flex items-center justify-center h-full cursor-pointer overflow-hidden border-r border-gray-800"
        initial={{ width: '50%' }}
        animate={{ width: hovered === 'hotel' ? '60%' : hovered === 'cafe' ? '40%' : '50%' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setHovered('hotel')}
        onMouseLeave={() => setHovered(null)}
      >
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700"
          style={{ transform: hovered === 'hotel' ? 'scale(1.03)' : 'scale(1)' }}
        >
          <div className={`absolute inset-0 transition-colors duration-500 ${hovered === 'hotel' ? 'bg-black/40' : 'bg-black/70'}`}></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-2"
            animate={{ textShadow: hovered === 'hotel' ? '0px 0px 25px rgba(255,69,0,0.9)' : '0px 0px 0px rgba(255,69,0,0)' }}
          >
            HOTEL
          </motion.h1>
          <p className="text-hotel-glow text-sm md:text-lg mb-8 font-semibold tracking-[0.3em] uppercase">
            Spice & Fire
          </p>
          <button className="px-8 py-3 bg-transparent border-2 border-hotel-glow text-white font-bold rounded-full hover:bg-hotel-glow hover:text-black hover:shadow-[0_0_20px_rgba(255,69,0,0.8)] transition-all duration-300">
            Explore Meals
          </button>
        </div>
      </motion.div>

      {/* ================= RIGHT SIDE: CAFE/SNACKS ================= */}
      <motion.div
        className="relative flex items-center justify-center h-full cursor-pointer overflow-hidden"
        initial={{ width: '50%' }}
        animate={{ width: hovered === 'cafe' ? '60%' : hovered === 'hotel' ? '40%' : '50%' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={() => setHovered('cafe')}
        onMouseLeave={() => setHovered(null)}
      >
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700"
          style={{ transform: hovered === 'cafe' ? 'scale(1.03)' : 'scale(1)' }}
        >
          <div className={`absolute inset-0 transition-colors duration-500 ${hovered === 'cafe' ? 'bg-black/40' : 'bg-black/70'}`}></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-2"
            animate={{ textShadow: hovered === 'cafe' ? '0px 0px 25px rgba(0,255,255,0.9)' : '0px 0px 0px rgba(0,255,255,0)' }}
          >
            CAFE
          </motion.h1>
          <p className="text-cafe-glow text-sm md:text-lg mb-8 font-semibold tracking-[0.3em] uppercase">
            Chill & Vibe
          </p>
          <button className="px-8 py-3 bg-transparent border-2 border-cafe-glow text-white font-bold rounded-full hover:bg-cafe-glow hover:text-black hover:shadow-[0_0_20px_rgba(0,255,255,0.8)] transition-all duration-300">
            Visit Cafe
          </button>
        </div>
      </motion.div>

    </div>
  );
};

export default Home;