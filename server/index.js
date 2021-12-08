const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const countryRoutes = require('./api/countries.js');
const exchangeRateRoutes = require('./api/exchangeRates.js');

const app = express();
dotenv.config();

app.use('/countries', countryRoutes);
app.use('/exchangerates', exchangeRateRoutes);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// logging middleware
app.use(morgan('dev'));

const PORT = process.env.PORT;

async function dbSync() {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.log(error.message);
  }
}

dbSync();
