const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

require('./routes/transaction')(app);

app.listen(PORT, () => {
  console.log(`Server port ${PORT} is running`);
});
