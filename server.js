const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Ecological Data Analysis! Version 1.1');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});