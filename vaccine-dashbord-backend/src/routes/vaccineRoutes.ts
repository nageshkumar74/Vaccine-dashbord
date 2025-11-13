import express from 'express';
import { Request, Response } from 'express';
import vaccines from '../data/vaccines.json';

import {getVaccines} from "../controllers/vaccineController.js";

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const { region, brand, year } = req.query;

    let filteredData = vaccines;

    if (region) {
        filteredData = filteredData.filter(item => item.region === region);
    }
    if (brand) {
        filteredData = filteredData.filter(item => item.brand === brand);
    }
    if (year) {
        filteredData = filteredData.filter(item => item.year === year);
    }

    res.json(filteredData);
});

export default router;
