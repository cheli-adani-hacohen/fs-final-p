// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Both username and password are required.' });
  }

  const token = await authController.authenticateUser(username, password);

  if (!token) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  // אם האימות הצליח, החזרת ה-Token
  res.cookie('authToken', token, { httpOnly: true });
  res.status(200).json({ message: 'Logged in successfully' });
});

module.exports = router;
