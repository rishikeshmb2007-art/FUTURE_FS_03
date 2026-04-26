import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend URL check pannikonga (5000 port)
      const response = await axios.post('http://localhost:5000/api/reservations', formData);
      alert("✅ " + response.data.message);
      setFormData({ name: '', email: '', date: '', time: '', guests: 1 }); // Clear form
    } catch (err) {
      console.error(err);
      alert("❌ Failed to book table. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-black pt-28 pb-10 px-6">
      <div className="max-w-xl mx-auto bg-white/5 p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-xl">
        <h2 className="text-3xl font-black text-white italic mb-6 tracking-tighter uppercase">Book A Table</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-2">Full Name</label>
            <input 
              type="text" name="name" placeholder="John Doe" required
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-hotel-glow outline-none transition-all"
              value={formData.name} onChange={handleChange}
            />
          </div>

          <div>
            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-2">Email Address</label>
            <input 
              type="email" name="email" placeholder="john@example.com" required
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-hotel-glow outline-none transition-all"
              value={formData.email} onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-2">Date</label>
              <input 
                type="date" name="date" required
                className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-hotel-glow outline-none transition-all"
                value={formData.date} onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-2">Time</label>
              <input 
                type="time" name="time" required
                className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-hotel-glow outline-none transition-all"
                value={formData.time} onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] text-gray-500 font-bold uppercase tracking-widest ml-2">Number of Guests</label>
            <input 
              type="number" name="guests" min="1" max="20" required
              className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl text-white focus:border-hotel-glow outline-none transition-all"
              value={formData.guests} onChange={handleChange}
            />
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-5 bg-hotel-glow text-white font-black rounded-2xl shadow-[0_0_20px_rgba(255,69,0,0.3)] uppercase tracking-widest mt-4"
          >
            Confirm Reservation
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Reservations;