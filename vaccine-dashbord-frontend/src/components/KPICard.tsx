import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface Props {
    label: string;
    value: string | number;
}
const KPICard: React.FC<Props> = ({ label, value }) => (
    <Card elevation={2} sx={{ minWidth: 150 }}>
        <CardContent>
            <Typography variant="subtitle2" color="text.secondary">{label}</Typography>
            <Typography variant="h6">{value}</Typography>
        </CardContent>
    </Card>
);

export default KPICard;
