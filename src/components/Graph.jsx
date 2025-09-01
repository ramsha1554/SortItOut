
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Graph({ tasks }) {
  const data = tasks.reduce((acc, t) => {
    const day = t.date;
    const existing = acc.find((x) => x.date === day);
    if (existing) existing.hours += t.duration || 0;
    else acc.push({ date: day, hours: t.duration || 0 });
    return acc;
  }, []);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Daily Hours Spent</h2>
      <BarChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="hours" fill="#8884d8" />
      </BarChart>
    </div>
  );
}
