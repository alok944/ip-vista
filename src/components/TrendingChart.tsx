import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { TrendingIP } from "@/mock/data";
import { Card } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TrendingChartProps {
  trending: TrendingIP[];
}

const TrendingChart = ({ trending }: TrendingChartProps) => {
  const colors = [
    "hsl(210, 100%, 50%)",
    "hsl(190, 100%, 45%)",
    "hsl(280, 70%, 60%)"
  ];

  return (
    <Card className="p-6 shadow-[var(--shadow-card)]">
      <h3 className="text-lg font-semibold mb-4">Trending Scores</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={trending}>
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
            formatter={(value) => [value, "Score"]}
          />
          <Bar dataKey="trendScore" radius={[8, 8, 0, 0]}>
            {trending.map((_, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {trending.map((item) => (
          <div key={item.id} className="text-center p-3 bg-muted/30 rounded-lg">
            <div className="text-sm font-medium mb-1">{item.name}</div>
            <div className={`flex items-center justify-center gap-1 text-sm ${item.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
              {item.change > 0 ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
              {Math.abs(item.change)}%
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TrendingChart;
