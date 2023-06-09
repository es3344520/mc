const express = require('express');
const app = express();

const TOKEN_PATH = "/token-auth";
const COOKIE_PATH = "/cookie-auth";
const COOKIE_NAME = "p-b";

app.use(express.json());

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

// Cookie authentication middleware
app.use(COOKIE_PATH, (req, res, next) => {
  const clientCookie = req.cookies[COOKIE_NAME];
  const serverCookie = process.env.COOKIE_SECRET;

  if (clientCookie && clientCookie === serverCookie) {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
});

// Token authentication route
app.get(TOKEN_PATH, (req, res) => {
  res.send('Token authentication successful');
});

// Cookie authentication route
app.get(COOKIE_PATH, (req, res) => {
  res.send('Cookie authentication successful');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
