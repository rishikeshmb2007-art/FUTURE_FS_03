import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Reservation from './models/Reservation.js';

const app = express();
import dotenv from 'dotenv'; // Import pannanum
dotenv.config(); // Config pannanum

const MONGO_URI = process.env.MONGO_URI; // Password ippo hidden!
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection (Idha namma adutha step-la mathuvom)
 const MONGO_URI = "mongodb+srv://rishikeshmb2007_db_user:zZ7I4rv9trCDC0Jt@cluster0.bo4kptj.mongodb.net/?appName=Cluster0"; 

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch(err => console.log("❌ DB Connection Error:", err));

// API Route: Receive form data and save to DB
app.post('/api/reservations', async (req, res) => {
  try {
    const newBooking = new Reservation(req.body);
    await newBooking.save();
    res.status(201).json({ message: "Booking Successful!" });
  } catch (error) {
    res.status(500).json({ error: "Booking Failed. Please try again." });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));