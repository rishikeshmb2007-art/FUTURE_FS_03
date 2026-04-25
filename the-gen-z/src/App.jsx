import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CartProvider } from './context/CartContext'; // Path fixed!
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HotelMenu from './pages/HotelMenu';
import CafeMenu from './pages/CafeMenu';
import Reservations from './pages/Reservations';

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
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;