const express = require('express');
const { getAllUsers, createUser } = require('../data/users');
const authenticateToken = require('../middleware/auth');

const router = express.Router();

// GET /api/users  (protected — requires valid JWT)
router.get('/users', authenticateToken, (req, res) => {
  res.json({ users: getAllUsers() });
});

// POST /api/create  (protected — requires valid JWT)
router.post('/create', authenticateToken, (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const result = createUser(username, password);
  if (result.error) {
    return res.status(409).json({ message: result.error });
  }

  res.status(201).json({ message: 'User created successfully', user: result });
});

module.exports = router;
