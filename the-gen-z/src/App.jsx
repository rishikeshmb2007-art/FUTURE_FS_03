import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext'; // Path fixed!
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HotelMenu from './pages/HotelMenu';
import CafeMenu from './pages/CafeMenu';
import Reservations from './pages/Reservations';
import Admin from './pages/Admin'; // Mela import pannunga

// Inside <Routes>
<Route path="/admin-gz-2026" element={<Admin />} />

function App() {
  return (
    <CartProvider> {/* Context Provider must wrap everything */}
      <Router>
        <Navbar />
        <Toaster position="bottom-right" reverseOrder={false} /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotel-menu" element={<HotelMenu />} />
          <Route path="/cafe-menu" element={<CafeMenu />} />
          <Route path="/reserve" element={<Reservations />} />
          <Route path="/admin-gz-2026" element={<Admin />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;