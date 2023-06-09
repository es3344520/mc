const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

const TOKEN_PATH = "/token-auth";
const COOKIE_PATH = "/cookie-auth";
const COOKIE_NAME = "p-b";

app.use(express.json());
app.use(cookieParser());

// Token authentication middleware
app.use(TOKEN_PATH, (req, res, next) => {
  const authToken = req.header('Authorization');
  const serverToken = process.env.TOKEN_SECRET;

  if (authToken && authToken === `Bearer ${serverToken}`) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
});

// Token authentication route
app.get(TOKEN_PATH, (req, res) => {
  res.send('Token authentication successful');
});

// Cookie route without authentication
app.get(COOKIE_PATH, (req, res) => {
  const cookieValue = process.env.COOKIE_SECRET;
  res.send(`Cookie value from environment variable: ${cookieValue}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Set cookie route
app.get(SET_COOKIE_PATH, (req, res) => {
  res.cookie(COOKIE_NAME, process.env.COOKIE_SECRET, { httpOnly: true });
  res.send('Cookie set successfully');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
