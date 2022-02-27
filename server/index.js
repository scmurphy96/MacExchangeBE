const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

const api = require('./api');

dotenv.config();

const app = express();

app.use('/api', api);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// logging middleware
app.use(morgan('dev'));

// error handling endware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

// db connection
const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
async function dbSync() {
  try {
    await mongoose.connect(CONNECTION_URL);
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (error) {
    console.log(error.message);
  }
}

dbSync();
