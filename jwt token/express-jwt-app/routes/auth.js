const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { findByUsername } = require('../data/users');

const router = express.Router();

// POST /api/login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  console.log("Username",username)
  console.log("Password:",password)

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = findByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
  );
  

   // Store JWT in HttpOnly cookie
  res.cookie('tamizh', token, {
    httpOnly: true,
    secure: true,       // true in HTTPS production
    sameSite: 'strict',
    maxAge: 60 * 60 * 1000
  });

  return res.status(200).json({
    message: 'Login successful'
  });
});

module.exports = router;
