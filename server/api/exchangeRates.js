import express from 'express';
import { getExchangeRates } from '../controllers/exchangeRates.js';

const router = express.Router();

// GET http://localhost:5001/exchangeRates/:id
router.get('/:id', getExchangeRates);

module.exports = router;