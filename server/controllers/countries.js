const Country = require('../models/country.js');

const getCountries = async (req, res, next) => {
  try {
    const countries = await Country.find();
    res.status(200).send(countries);
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = getCountries;
