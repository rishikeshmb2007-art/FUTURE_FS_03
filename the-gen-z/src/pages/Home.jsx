import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* PAZHARE SPLIT HERO SECTION */}
      <div className="relative h-screen flex flex-col md:flex-row overflow-hidden">
        
        {/* HOTEL SIDE */}
        <Link 
          to="/hotel-menu" 
          className="relative flex-1 group overflow-hidden flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              alt="Hotel"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
          <div className="relative z-10 text-center">
            <motion.h2 
              initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              className="text-6xl md:text-8xl font-black text-white italic tracking-tighter"
            >
              HOTEL
            </motion.h2>
            <p className="text-hotel-glow font-black tracking-[0.3em] mt-2">SPICE & FIRE</p>
            <button className="mt-8 px-8 py-3 border-2 border-hotel-glow text-white font-bold rounded-full hover:bg-hotel-glow transition-all uppercase tracking-widest text-xs">
              Explore Meals
            </button>
          </div>
        </Link>

        {/* CAFE SIDE */}
        <Link 
          to="/cafe-menu" 
          className="relative flex-1 group overflow-hidden flex items-center justify-center"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2000" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
              alt="Cafe"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
          <div className="relative z-10 text-center">
            <motion.h2 
              initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}
              className="text-6xl md:text-8xl font-black text-white italic tracking-tighter"
            >
              CAFE
            </motion.h2>
            <p className="text-cafe-glow font-black tracking-[0.3em] mt-2">CHILL & VIBE</p>
            <button className="mt-8 px-8 py-3 border-2 border-cafe-glow text-white font-bold rounded-full hover:bg-cafe-glow transition-all uppercase tracking-widest text-xs">
              Visit Cafe
            </button>
          </div>
        </Link>
      </div>

      {/* NEW ABOUT SECTION (Kela scroll panna varum) */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic uppercase leading-tight">
              We Are <br/> The Gen-Z
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Velachery-oda heart-la irukura leading tech-infused restaurant namma Gen-Z. 
              Traditional taste-a modern neon vibes-oda mix panni, oru unique dining experience-a provide panrom.
            </p>
            <div className="flex gap-6">
              <div className="border border-white/10 p-6 rounded-3xl bg-white/5 backdrop-blur-md">
                <h4 className="text-hotel-glow text-2xl font-black">100%</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Fresh Food</p>
              </div>
              <div className="border border-white/10 p-6 rounded-3xl bg-white/5 backdrop-blur-md">
                <h4 className="text-cafe-glow text-2xl font-black">24/7</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Chill Vibe</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="h-[450px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
              alt="Kitchen" 
            />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-16 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-black text-white italic tracking-tighter uppercase">THE GEN-Z</h3>
              <p className="text-gray-600 text-sm mt-4 max-w-xs mx-auto md:mx-0">
                Future Interns project: Build with passion, served with tech.
              </p>
            </div>
            
            <div className="flex flex-col gap-3 items-center md:items-start">
              <h4 className="text-white text-xs font-black tracking-[0.2em] uppercase mb-2">Links</h4>
              <Link to="/reserve" className="text-gray-500 hover:text-white transition-colors">Book Table</Link>
              <Link to="/hotel-menu" className="text-gray-500 hover:text-white transition-colors">Hotel Menu</Link>
              <Link to="/cafe-menu" className="text-gray-500 hover:text-white transition-colors">Cafe Menu</Link>
            </div>

            <div className="md:text-right">
              <h4 className="text-white text-xs font-black tracking-[0.2em] uppercase mb-2">Location</h4>
              <p className="text-gray-500 text-sm">Velachery, Chennai - 42</p>
              <div className="flex justify-center md:justify-end gap-6 mt-6">
                <span className="text-gray-600 hover:text-white transition-colors cursor-pointer text-sm font-bold uppercase tracking-widest">Insta</span>
                <span className="text-gray-600 hover:text-white transition-colors cursor-pointer text-sm font-bold uppercase tracking-widest">Linked</span>
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-700 tracking-[0.3em] font-black uppercase">
            <p>© 2026 THE GEN-Z RESTAURANT</p>
            <p>Built by Rishikesh MB</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;