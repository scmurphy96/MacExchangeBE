const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
  name: String,
  iso: String,
  currency: String,
  localPrice: Number,
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
