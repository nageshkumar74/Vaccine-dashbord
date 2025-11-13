import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

type DataItem = {
    name: string;
    value: number;
    color?: string;
};

type Props = {
    data: DataItem[];
};

const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#d0ed57'];

const PieChartComponent: React.FC<Props> = ({ data }) => (
    <ResponsiveContainer width="100%" height={300}>
        <PieChart>
            <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color || colors[index % colors.length]} />
                ))}
            </Pie>
            <Tooltip />
        </PieChart>
    </ResponsiveContainer>
);

export default PieChartComponent;
