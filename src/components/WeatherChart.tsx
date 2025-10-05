import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface WeatherChartProps {
  data: { timestamp: string; [key: string]: number | string }[];
  dataKey: string;
  color?: string;
}

const WeatherChart: React.FC<WeatherChartProps> = ({
  data,
  dataKey,
  color = "#8884d8",
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} stroke={color} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;
