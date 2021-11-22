import express from 'express';

import { getCountries, createCountry } from '../controllers/countries.js';

const router = express.Router();

// http://localhost:5001/countries
router.get('/', getCountries);
router.post('/', createCountry);

export default router;
