import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';

import countryRoutes from './api/countries.js';
const exchangeRateRoutes = require('./api/exchangeRates');

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
