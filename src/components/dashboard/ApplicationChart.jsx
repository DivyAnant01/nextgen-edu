import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function ApplicationChart() {
  const data = [
    { month: "Jan", applications: 4 },
    { month: "Feb", applications: 7 },
    { month: "Mar", applications: 3 },
    { month: "Apr", applications: 9 },
    { month: "May", applications: 5 },
    { month: "Jun", applications: 8 },
  ];

  return (
    <div className="glass p-6 rounded-3xl">
      <h2 className="text-2xl font-bold mb-6">
        Applications Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="applications" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}