const express = require('express');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.use('/books/', bookRoutes);

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});