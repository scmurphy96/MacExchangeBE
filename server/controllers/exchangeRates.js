import fetch from 'node-fetch';

export const getExchangeRates = async (req, res, next) => {
  try {
    const rate = await fetch(
      `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=${req.params.id}&apikey=${process.env.API_KEY}`
    );
    const data = await rate.json();
    res.send(data);
  } catch (err) {
    next(err);
  }
};
