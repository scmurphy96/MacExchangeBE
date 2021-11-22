import Country from '../models/country.js';
import csvToJson from 'csvtojson';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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
