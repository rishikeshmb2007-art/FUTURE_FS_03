import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios'; // The Bridge!

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    section: 'Hotel',
    message: ''
  });
  
  const [status, setStatus] = useState(''); // To show success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Booking...'); // Loading state
    
    try {
      // Sending data to our Node.js backend
      const response = await axios.post('http://localhost:5000/api/reservations', formData);
      
      if(response.status === 201) {
        setStatus('Success! Table Reserved 🎉');
        // Clear the form after success
        setFormData({ name: '', phone: '', date: '', time: '', guests: '2', section: 'Hotel', message: '' });
      }
    } catch (error) {
      console.error("Booking Error:", error);
      setStatus('Failed to book. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-darkbg pt-28 pb-12 px-6 flex justify-center items-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">RESERVE A <span className="text-hotel-glow">TABLE</span></h1>
          <p className="text-gray-400">Book your spot at The GEN-Z, Velachery.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-2">Full Name</label>
            <input 
              type="text" required value={formData.name}
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-hotel-glow outline-none transition-all"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-2">Phone Number</label>
            <input 
              type="tel" required value={formData.phone}
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-hotel-glow outline-none transition-all"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-2">Date</label>
            <input 
              type="date" required value={formData.date}
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-hotel-glow outline-none transition-all"
              onChange={(e) => setFormData({...formData, date: e.target.value})}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-2">Time</label>
            <input 
              type="time" required value={formData.time}
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-hotel-glow outline-none transition-all"
              onChange={(e) => setFormData({...formData, time: e.target.value})}
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-2">Number of Guests</label>
            <select 
              value={formData.guests}
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-hotel-glow outline-none transition-all"
              onChange={(e) => setFormData({...formData, guests: e.target.value})}
            >
              {[1,2,3,4,5,6,7,8].map(num => <option key={num} value={num} className="bg-darkbg">{num} Persons</option>)}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-400 mb-2">Section Choice</label>
            <select 
              value={formData.section}
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-hotel-glow outline-none transition-all"
              onChange={(e) => setFormData({...formData, section: e.target.value})}
            >
              <option value="Hotel" className="bg-darkbg">Hotel (Heavy Meals)</option>
              <option value="Cafe" className="bg-darkbg">Cafe (Snacks & Chill)</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col">
            <label className="text-sm text-gray-400 mb-2">Special Requests</label>
            <textarea 
              rows="3" value={formData.message}
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-hotel-glow outline-none transition-all"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="md:col-span-2 mt-4 py-4 bg-white text-black font-bold rounded-xl hover:bg-hotel-glow hover:text-white transition-all duration-300 shadow-lg"
          >
            CONFIRM BOOKING
          </button>
          
          {/* Status Message */}
          {status && (
            <div className={`md:col-span-2 text-center font-bold mt-2 ${status.includes('Success') ? 'text-green-400' : 'text-hotel-glow'}`}>
              {status}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Reservations;