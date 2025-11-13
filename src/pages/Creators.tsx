import CreatorLeaderboard from "@/components/CreatorLeaderboard";
import { mockCreators } from "@/mock/data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";

const Creators = () => {
  const topCreators = [...mockCreators]
    .sort((a, b) => b.totalRoyalty - a.totalRoyalty)
    .slice(0, 5);

  const chartData = topCreators.map((creator) => ({
    name: creator.name,
    royalty: creator.totalRoyalty
  }));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Creator Leaderboard</h1>
        <p className="text-muted-foreground">
          Top creators ranked by total royalty earnings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CreatorLeaderboard creators={mockCreators} />
        </Card>

        <Card className="p-6 shadow-[var(--shadow-card)]">
          <h3 className="text-lg font-semibold mb-4">Top 5 by Royalty</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis
                type="number"
                tick={{ fill: "hsl(var(--muted-foreground))" }}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="name"
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
                formatter={(value) => [`$${value}`, "Total Royalty"]}
              />
              <Bar
                dataKey="royalty"
                fill="hsl(210, 100%, 50%)"
                radius={[0, 8, 8, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

export default Creators;
