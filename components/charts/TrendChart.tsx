"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", cases: 400 },
  { month: "Feb", cases: 600 },
  { month: "Mar", cases: 800 },
  { month: "Apr", cases: 500 }
];

export default function TrendChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="cases" stroke="#000" />
      </LineChart>
    </ResponsiveContainer>
  );
}
