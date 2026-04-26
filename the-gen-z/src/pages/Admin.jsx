import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await axios.get('https://future-fs-03-adl6.onrender.com'); // Backend URL
      setBookings(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching bookings", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-black text-white italic mb-10 tracking-tighter">ADMIN <span className="text-hotel-glow">PANEL</span></h1>
        
        {loading ? (
          <p className="text-gray-500">Loading bookings...</p>
        ) : (
          <div className="overflow-x-auto border border-white/10 rounded-2xl">
            <table className="w-full text-left border-collapse">
              <thead className="bg-white/5 text-gray-400 text-xs uppercase tracking-widest">
                <tr>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Date & Time</th>
                  <th className="p-4">Guests</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {bookings.map((b) => (
                  <tr key={b._id} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-4 font-bold">{b.name}</td>
                    <td className="p-4 text-gray-400">{b.email}</td>
                    <td className="p-4">{b.date} at {b.time}</td>
                    <td className="p-4 text-hotel-glow font-bold">{b.guests}</td>
                    <td className="p-4 text-green-500">Confirmed</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;