const Country = require('../models/country.js');
const csvToJson = require('csvtojson');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const bigMacData = 'bigMacData.csv';

dotenv.config();

async function convert() {
  const jsonObj = await csvToJson().fromFile(bigMacData);
  return jsonObj;
}

async function seed() {
  await mongoose.connect(process.env.CONNECTION_URL);
  const connection = mongoose.connection;
  await connection.dropDatabase();
  console.log('db synced');
  console.log('seeding...');

  const data = await convert();

  await Country.insertMany(data);
  console.log('seeding successful');
  await connection.close();
  console.log('Connection closed');
}

seed();
