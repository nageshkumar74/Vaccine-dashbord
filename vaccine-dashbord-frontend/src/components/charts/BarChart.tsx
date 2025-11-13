import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

type Props = {
    data: Array<{ name: string; value: number }>;
};

const BarChartComponent: React.FC<Props> = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#1976d2" />
        </BarChart>
    </ResponsiveContainer>
);

export default BarChartComponent;
