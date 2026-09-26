const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.cookies.tamizh;

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid or expired token' });
    }
    req.user = decoded;
    next();
  });
}

module.exports = authenticateToken;
