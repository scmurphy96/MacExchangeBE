import express from 'express';

import { getCountries } from '../controllers/countries.js';

const router = express.Router();

// http://localhost:5001/countries
router.get('/', getCountries);

export default router;
