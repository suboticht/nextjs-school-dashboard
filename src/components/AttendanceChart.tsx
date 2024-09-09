'use client'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "Mon",
    present: 55,
    absent: 35,
  },
  {
    date: "Tue",
    present: 60,
    absent: 55,
  },
  {
    date: "Wed",
    present: 85,
    absent: 75,
  },
  {
    date: "Thu",
    present: 85,
    absent: 75,
  },
  {
    date: "Fri",
    present: 60,
    absent: 55,
  },
];

export default function AttendanceChart() {
  return (
    <div className="relative w-full h-[100%]">
        <ResponsiveContainer width="100%" height="90%">
            <BarChart
                data={data}
                barSize={20}
            >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="date" tick={{ fill: "#d1d5db" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#d1d5db" }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
            <Legend
                align="left"
                verticalAlign="top"
                wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
            />
            <Bar
                dataKey="present"
                fill="#FAE27C"
                legendType="circle"
                radius={[10, 10, 0, 0]}
            />
            <Bar
                dataKey="absent"
                fill="#C3EBFA"
                legendType="circle"
                radius={[10, 10, 0, 0]}
            />
            </BarChart>
        </ResponsiveContainer>
    </div>
  );
}
