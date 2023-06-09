const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const IDENTITY = process.env.IDENTITY;
const PASSWORD = process.env.PASSWORD;

app.get('/identity', (req, res) => {
  res.json({ identity: IDENTITY });
});

app.get('/password', (req, res) => {
  res.json({ password: PASSWORD });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
