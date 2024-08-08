const nodemailer = require ('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // You can use different services like SendGrid, Mailgun, etc.
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

 function sendResetEmail(userEmail, resetToken) {
  const resetLink = `http://yourdomain.com/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: userEmail,
    subject: 'Password Reset Request',
    text: `You requested a password reset. Click the link below to reset your password:\n\n${resetLink}`,
    html: `<p>You requested a password reset. Click the link below to reset your password:</p><p><a href="${resetLink}">Reset Password</a></p>`,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = sendResetEmail