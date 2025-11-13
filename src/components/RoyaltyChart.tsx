import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { Derivative } from "@/mock/data";
import { Card } from "@/components/ui/card";

interface RoyaltyChartProps {
  derivatives: Derivative[];
}

const RoyaltyChart = ({ derivatives }: RoyaltyChartProps) => {
  const data = derivatives.map((d) => ({
    name: d.name.split("—")[1]?.trim() || d.name,
    royalty: d.royalty
  }));

  const colors = [
    "hsl(210, 100%, 50%)",
    "hsl(190, 100%, 45%)",
    "hsl(280, 70%, 60%)",
    "hsl(210, 100%, 60%)",
    "hsl(190, 100%, 55%)"
  ];

  return (
    <Card className="p-6 shadow-[var(--shadow-card)]">
      <h3 className="text-lg font-semibold mb-4">Royalty Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="name"
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "hsl(var(--muted-foreground))" }}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "var(--radius)",
              color: "hsl(var(--foreground))"
            }}
            formatter={(value) => [`$${value}`, "Royalty"]}
          />
          <Bar dataKey="royalty" radius={[8, 8, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default RoyaltyChart;
