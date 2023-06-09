require('dotenv').config();
const express = require('express');
const app = express();

const tokenPath = process.env.TOKEN_PATH;
const cookiePath = process.env.COOKIE_PATH;
const cookieValue = process.env.COOKIE_VALUE;

app.use(express.json());

app.get(tokenPath, (req, res) => {
  const clientToken = req.query.token;
  const serverToken = 'your-server-token-here'; // 请将此替换为你的服务器令牌

  if (clientToken === serverToken) {
    res.send('Token authentication success!');
  } else {
    res.status(401).send('Token authentication failed.');
  }
});

app.get(cookiePath, (req, res) => {
  res.cookie('p-b', cookieValue, { httpOnly: true });
  res.send('Cookie set successfully!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
