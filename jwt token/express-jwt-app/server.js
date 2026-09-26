require('dotenv').config();
const express = require('express');
const cors = require("cors")
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const cookieParser=require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api', authRoutes);   // POST /api/login
app.use('/api', userRoutes);   // GET /api/users, POST /api/create

app.get('/', (req, res) => {
  res.json({ message: 'Express + JWT API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
