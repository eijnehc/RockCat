const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/login', async (req, res) => {
  const email = req.body.email;
  const params = {
    email,
    login_magic_link_url: 'https://localhost:5173/auth',
    signup_magic_link_url: 'https://localhost:5173/auth',
  };

  res.json();
});

app.listen(PORT, () => {
  console.log('Server is running');
});
