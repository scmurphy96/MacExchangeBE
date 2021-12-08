const fetch = require('node-fetch');

const getExchangeRates = async (req, res, next) => {
  try {
    const rate = await fetch(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=${req.params.id}&apikey=${process.env.API_KEY}`
    );
    const data = await rate.json();
    res.status(200).send(data);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
};

module.exports = getExchangeRates;
