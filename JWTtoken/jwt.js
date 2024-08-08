const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const SECRET_KEY = 'your_secret_key';

// Mock user
const user = {
  id: 1,
  username: 'john',
  password: 'password123'
};

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    // Set JWT to expire in 10 seconds
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '10s' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected route
app.get('/orders', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'Token is missing' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: `Welcome, user ${decoded.userId}`, orders: [] });
  } catch (err) {
    // Properly handle expired or invalid tokens
    if (err.name === 'TokenExpiredError') {
      return res.status(403).json({ message: 'Token has expired' });
    } else {
      return res.status(403).json({ message: 'Invalid token' });
    }
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyMzExMTQ3NiwiZXhwIjoxNzIzMTExNDg2fQ.ntXH-ZPvIsKPdpPOzS4MHwQv9hC1C5BRP5bR-tLzmBU"