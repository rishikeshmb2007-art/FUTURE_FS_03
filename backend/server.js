import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Reservation from './models/Reservation.js'; // Make sure the .js extension is there

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://rishikeshmb2007_db_user:zZ7I4rv9trCDC0Jt@cluster0.bo4kptj.mongodb.net/genzDB?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch(err => console.log("❌ DB Connection Error:", err));

// --- ROUTES ---

// 1. GET ALL RESERVATIONS (For Admin Panel)
app.get('/api/reservations', async (req, res) => {
    try {
        const bookings = await Reservation.find().sort({ createdAt: -1 });
        res.status(200).json(bookings);
    } catch (err) {
        console.error("Fetch Error:", err);
        res.status(500).json({ message: "Failed to fetch bookings" });
    }
});

// 2. POST NEW RESERVATION (For Customers)
app.post('/api/reservations', async (req, res) => {
    try {
        const newBooking = new Reservation(req.body);
        await newBooking.save();
        res.status(201).json({ message: "Table Booked Successfully!" });
    } catch (err) {
        console.error("Booking Error:", err);
        res.status(400).json({ message: "Failed to book table" });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});