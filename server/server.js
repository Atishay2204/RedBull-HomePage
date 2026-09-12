const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ─── MongoDB connection (optional — app works without it) ────────────────────
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/redbull';

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('✓ MongoDB connected'))
  .catch((err) =>
    console.log('⚠ MongoDB not available (newsletter will not persist):', err.message)
  );

// ─── Subscriber model ───────────────────────────────────────────────────────
const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  subscribedAt: { type: Date, default: Date.now },
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

// ─── API Routes ──────────────────────────────────────────────────────────────

// POST /api/newsletter — subscribe an email
app.post('https://redbull-homepage-backend.onrender.com/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.status(201).json({ message: 'Successfully subscribed! 🎉' });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ error: 'This email is already subscribed' });
    }
    console.error('Newsletter error:', err);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

// GET /api/subscribers — get subscriber count
app.get('/api/subscribers', async (_req, res) => {
  try {
    const count = await Subscriber.countDocuments();
    res.json({ count });
  } catch {
    res.json({ count: 0 });
  }
});

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── Start server ────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Red Bull API running on http://localhost:${PORT}`);
});
