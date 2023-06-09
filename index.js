const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const identity = process.env.identity;
const password = process.env.password;

app.get('/identity', (req, res) => {
  res.json({ identity: identity });
});

app.get('/password', (req, res) => {
  res.json({ password: password });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
