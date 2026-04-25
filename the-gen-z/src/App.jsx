import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelMenu from './pages/HotelMenu';
import CafeMenu from './pages/CafeMenu'; // Puthiya import
import Navbar from './components/Navbar';
import Reservations from './pages/Reservations'; // Add this import


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel-menu" element={<HotelMenu />} />
        <Route path="/cafe-menu" element={<CafeMenu />} /> {/* Puthiya route */}
        <Route path="/reserve" element={<Reservations />} />
      </Routes>
    </Router>
  );
}

export default App;