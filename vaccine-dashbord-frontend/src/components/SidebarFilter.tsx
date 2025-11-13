import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';

type Props = {
    regions: string[];
    brands: string[];
    years: string[];
    filters: { region: string; brand: string; year: string };
    setFilters: (v: { region: string; brand: string; year: string }) => void;
};

const SidebarFilter: React.FC<Props> = ({ regions, brands, years, filters, setFilters }) => (
    <Box display="flex" flexDirection="column" gap={2} width={220} p={2}>
        <FormControl fullWidth>
            <InputLabel>Region</InputLabel>
            <Select
                value={filters.region}
                label="Region"
                onChange={e => setFilters({ ...filters, region: e.target.value as string })}
            >
                <MenuItem value="">All</MenuItem>
                {regions.map(r => <MenuItem key={r} value={r}>{r}</MenuItem>)}
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel>Brand</InputLabel>
            <Select
                value={filters.brand}
                label="Brand"
                onChange={e => setFilters({ ...filters, brand: e.target.value as string })}
            >
                <MenuItem value="">All</MenuItem>
                {brands.map(b => <MenuItem key={b} value={b}>{b}</MenuItem>)}
            </Select>
        </FormControl>
        <FormControl fullWidth>
            <InputLabel>Year</InputLabel>
            <Select
                value={filters.year}
                label="Year"
                onChange={e => setFilters({ ...filters, year: e.target.value as string })}
            >
                <MenuItem value="">All</MenuItem>
                {years.map(y => <MenuItem key={y} value={y}>{y}</MenuItem>)}
            </Select>
        </FormControl>
    </Box>
);

export default SidebarFilter;
