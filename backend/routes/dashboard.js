import express from 'express';
import ChatMessage from '../models/ChatMessage.js';
import User from '../models/User.js';
import Payment from '../models/Payment.js';
const router = express.Router();

// GET /api/dashboard
router.get('/', async (req, res) => {
  try {
    const users = await User.countDocuments();
    const messages = await ChatMessage.countDocuments();
    const payments = await Payment.countDocuments({ status: 'completed' });

    res.json({
      totalUsers: users,
      totalMessages: messages,
      totalPayments: payments,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
