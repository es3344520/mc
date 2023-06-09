const express = require('express');
const app = express();

const tokenValue = process.env.TOKEN_VALUE;
const cookieValue = process.env.COOKIE_VALUE;

app.use(express.json());

// 令牌验证的路由
app.post('/token-validation', (req, res) => {
  const clientToken = req.body.token;

  if (clientToken === tokenValue) {
    res.status(200).json({ message: 'Token validation successful.' });
  } else {
    res.status(401).json({ message: 'Token validation failed.' });
  }
});

// Cookie路由
app.get('/cookie', (req, res) => {
  res.cookie('p-b', cookieValue).json({ message: 'Cookie has been set.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
