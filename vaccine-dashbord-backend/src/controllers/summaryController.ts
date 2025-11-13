import { Request, Response } from 'express';
import { readFile } from 'fs/promises';
import { URL } from 'url';

interface VaccineDataItem {
    region: string;
    brand: string;
    year: string;
    marketSize: number;
    avgPrice: number;
}

interface KPI {
    marketSize: number;
    cagr: number;
    avgPrice: number;
}

async function loadVaccineData(): Promise<VaccineDataItem[]> {
    const fileUrl = new URL('../data/vaccines.json', import.meta.url);
    const jsonString = await readFile(fileUrl, 'utf8');
    return JSON.parse(jsonString);
}

interface QueryParams {
    region?: string;
    brand?: string;
    year?: string;
}

export const getSummary = async (req: Request<{}, {}, {}, QueryParams>, res: Response) => {
    const { region, brand, year } = req.query;

    try {
        let vaccineData = await loadVaccineData();

        if (region) {
            vaccineData = vaccineData.filter(item => item.region === region);
        }
        if (brand) {
            vaccineData = vaccineData.filter(item => item.brand === brand);
        }
        if (year) {
            vaccineData = vaccineData.filter(item => item.year === year);
        }

        const marketSize = vaccineData.reduce((sum, item) => sum + item.marketSize, 0);
        const avgPrice = vaccineData.reduce((sum, item) => sum + item.avgPrice, 0) / (vaccineData.length || 1);

        // Placeholder CAGR
        const cagr = 5;

        const result: KPI = {
            marketSize,
            cagr,
            avgPrice,
        };

        res.json(result);
    } catch (error) {
        console.error('Error loading vaccine data:', error);
        res.status(500).json({ error: 'Failed to load vaccine data' });
    }
};
