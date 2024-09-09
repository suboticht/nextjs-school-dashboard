'use client'
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

const data = [
  {
    name: "Jan",
    income: 4000,
    expense: 2400,
  },
  {
    name: "Feb",
    income: 3000,
    expense: 1398,
  },
  {
    name: "Mar",
    income: 2000,
    expense: 9800,
  },
  {
    name: "Apr",
    income: 2780,
    expense: 3908,
  },
  {
    name: "May",
    income: 1890,
    expense: 4800,
  },
  {
    name: "Jun",
    income: 2390,
    expense: 3800,
  },
  {
    name: "Jul",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Aug",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Sep",
    income: 2780,
    expense: 3908,
  },
  {
    name: "Oct",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Nov",
    income: 3490,
    expense: 4300,
  },
  {
    name: "Dec",
    income: 3490,
    expense: 4300,
  },
];

export default function FinanceChart() {
  return (
    <div className="relative w-full h-[100%]">
        <ResponsiveContainer width="100%" height="90%">
            <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fill: "#d1d5db" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#d1d5db" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
            <Legend
                align="center"
                verticalAlign="top"
                wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Legend />
            <Line
                type="monotone"
                dataKey="income"
                stroke="#C3EBFA"
                strokeWidth={5}
                activeDot={{ r: 8 }}
            />
            <Line 
                type="monotone" 
                dataKey="expense" 
                stroke="#CFCEFF"
                strokeWidth={5} 
            />
            </LineChart>
        </ResponsiveContainer>
    </div>
  );
}
