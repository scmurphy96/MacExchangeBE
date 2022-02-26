const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
  name: String,
  iso: String,
  currency: String,
  local_price: Number,
});

const Country = mongoose.model('Country', countrySchema);

module.exports = Country;
