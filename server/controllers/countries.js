import Country from '../models/country.js';

export const getCountries = async (req, res, next) => {
  try {
    const countries = await Country.find();

    res.status(200).send(countries);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

export const createCountry = async (req, res, next) => {
  res.send('COUNTRY CREATION');
};
