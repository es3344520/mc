const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const tokenAuthPath = '/token-auth';
const cookiePath = '/cookie';

app.post(tokenAuthPath, (req, res) => {
  const password = req.body.password;
  const validPassword = process.env.VALID_PASSWORD || 'your_default_password';

  if (password === validPassword) {
    res.status(200).send('密码正确，可以继续操作');
  } else {
    res.status(401).send('密码错误，请重新输入');
  }
});

app.get(cookiePath, (req, res) => {
  const cookieValue = process.env.COOKIE_VALUE || 'A54kNah1FoC2P_Hx1HDeFA%3D%3D';
  res.cookie('myCookie', cookieValue).send('Cookie 已设置');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
