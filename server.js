const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use('/guest', require('./routes/guestRoutes'));

app.use('/admin', require('./routes/adminRoutes'));