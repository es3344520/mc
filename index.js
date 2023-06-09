const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

const TOKEN_AUTH_PATH = '/token-auth';
const COOKIE_AUTH_PATH = '/cookie-auth';

app.get(TOKEN_AUTH_PATH, (req, res) => {
  const token = req.headers.authorization;

  if (token === process.env.TOKEN) {
    res.status(200).send('Token authentication successful');
  } else {
    res.status(401).send('Invalid token');
  }
});

app.get(COOKIE_AUTH_PATH, (req, res) => {
  const cookieValue = req.cookies['p-b'];

  if (cookieValue === process.env.COOKIE_VALUE) {
    res.status(200).send('Cookie authentication successful');
  } else {
    res.status(401).send('Invalid cookie');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
