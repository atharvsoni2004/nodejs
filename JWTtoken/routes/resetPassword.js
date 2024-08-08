const express = require ('express');
const { pool } = require('../db.js'); // Assuming you have a file for DB configuration
// const  {generateResetToken}  = require ('../utils/token.js');
// const  {sendResetEmail}  = require ('../utils/email.js');
const router = express.Router();

// router.use(cookieParser());

router.post('/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    // Verify the token
    const result = await pool.query('SELECT * FROM password_resets WHERE token = $1 AND expires_at > NOW()', [token]);
    if (result.rows.length === 0) {
      return res.status(400).send('Invalid or expired token');
    }

    const email = result.rows[0].email;

    // Update the user's password
    await pool.query('UPDATE users SET password = $1 WHERE email = $2', [newPassword, email]);

    // Remove the used token
    await pool.query('DELETE FROM password_resets WHERE token = $1', [token]);

    res.status(200).send('Password has been reset');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

module.export = router;
