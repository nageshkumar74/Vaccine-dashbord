// src/utils/loadVaccineData.ts
import { readFile } from 'fs/promises';
import { URL } from 'url';

export async function loadVaccineData() {
    const fileUrl = new URL('../data/vaccines.json', import.meta.url);
    const jsonString = await readFile(fileUrl, 'utf-8');
    const vaccines = JSON.parse(jsonString);
    return vaccines;
}
