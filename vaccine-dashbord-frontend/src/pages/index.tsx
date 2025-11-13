import React, { useState, useEffect } from 'react';
import SidebarFilter from '../components/SidebarFilter';
import KPICard from '../components/KPICard';
import BarChart from '../components/charts/BarChart';
import { fetchKPIs, fetchVaccines } from '../utils/api';

const regions = ['North America', 'Europe', 'Asia'];
const brands = ['Moderna', 'Pfizer', 'J&J'];
const years = ['2020', '2021', '2022'];

const Home = () => {
    const [filters, setFilters] = useState({ region: '', brand: '', year: '' });
    const [kpis, setKpis] = useState<any>({});
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        fetchKPIs(filters).then(setKpis);
        fetchVaccines(filters).then(setChartData);
    }, [filters]);

    return (
        <div style={{ display: 'flex' }}>
            <SidebarFilter
                regions={regions}
                brands={brands}
                years={years}
                filters={filters}
                setFilters={setFilters}
            />
            <main style={{ flexGrow: 1, padding: 24 }}>
                <div style={{ display: 'flex', gap: 24, marginBottom: 24 }}>
                    <KPICard label="Market Size" value={kpis.marketSize || '-'} />
                    <KPICard label="CAGR" value={kpis.cagr || '-'} />
                    <KPICard label="Avg Price" value={kpis.avgPrice || '-'} />
                </div>
                <BarChart data={chartData} />
            </main>
        </div>
    );
};

export default Home;
