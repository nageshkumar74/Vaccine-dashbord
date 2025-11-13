import { Request, Response } from 'express';
import { readFile } from 'fs/promises';
import { URL } from 'url';

async function loadVaccineData() {
    const fileUrl = new URL('../data/vaccines.json', import.meta.url);
    const jsonString = await readFile(fileUrl, 'utf-8');
    return JSON.parse(jsonString);
}

export const getVaccines = async (req: Request, res: Response) => {
    const { region, brand, year } = req.query;

    try {
        let vaccineData = await loadVaccineData();

        if (region) {
            vaccineData = vaccineData.filter((item: any) => item.region === region);
        }
        if (brand) {
            vaccineData = vaccineData.filter((item: any) => item.brand === brand);
        }
        if (year) {
            vaccineData = vaccineData.filter((item: any) => item.year === year);
        }

        res.json(vaccineData);
    } catch (error) {
        console.error('Error loading vaccine data:', error);
        res.status(500).json({ error: 'Failed to load vaccine data' });
    }
};
