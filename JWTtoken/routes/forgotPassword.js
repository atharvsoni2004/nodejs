const express = require ('express');
const  {generateResetToken}  = require ('../utils/token.js');
const  {sendResetEmail}  = require ('../utils/email.js');
// const cookieParser = require ('cookie-parser');
let { pool } = require('../db.js');
const router = express.Router();


router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  
  try {
    // Check if the email exists in the database
    const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userResult.rows.length === 0) {
      return res.status(404).send('Email not found');
    }

    // Generate a reset token and save it to the database
    const resetToken = generateResetToken();
    const expirationTime = new Date(Date.now() + 3600000); // 1 hour from now
    await pool.query('INSERT INTO password_resets (email, token, expires_at) VALUES ($1, $2, $3)', [email, resetToken, expirationTime]);

    // Send the reset email
    await sendResetEmail(email, resetToken);

    res.status(200).send('Password reset email sent');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.exports = router;
