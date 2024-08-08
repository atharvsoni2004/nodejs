let express = require('express');
let bodyParser = require('body-parser');
let forgotPasswordRoutes = require('./routes/forgotPassword.js');
let resetPasswordRoutes = require('./routes/resetPassword.js');

const app = express();

app.use(bodyParser.json());
app.use('/api/forgot-password', forgotPasswordRoutes);
app.use('/api/reset-password', resetPasswordRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
