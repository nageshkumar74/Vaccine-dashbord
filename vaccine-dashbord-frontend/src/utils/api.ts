import axios from 'axios';

export const fetchVaccines = async (filters: { region: string; brand: string; year: string }) => {
    const res = await axios.get('/apivaccines', { params: filters });
    return res.data;
};

export const fetchKPIs = async (filters: { region: string; brand: string; year: string }) => {
    const res = await axios.get('/apisummary', { params: filters });
    return res.data;
};
