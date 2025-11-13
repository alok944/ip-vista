import { useState } from "react";
import { mockTrendingIPs, mockIPs } from "@/mock/data";
import TrendingChart from "@/components/TrendingChart";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Flame } from "lucide-react";

type TimeFilter = "24h" | "7d" | "30d";

const Trending = () => {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("24h");
  const trending = mockTrendingIPs[timeFilter];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
          <Flame className="h-8 w-8 text-primary" />
          Trending IPs
        </h1>
        <p className="text-muted-foreground">
          Most popular IP assets based on activity and engagement
        </p>
      </div>

      <div className="flex gap-2 mb-6">
        {(["24h", "7d", "30d"] as TimeFilter[]).map((filter) => (
          <Button
            key={filter}
            variant={timeFilter === filter ? "default" : "outline"}
            onClick={() => setTimeFilter(filter)}
          >
            {filter === "24h" ? "24 Hours" : filter === "7d" ? "7 Days" : "30 Days"}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {trending.map((item, index) => {
          const ip = mockIPs.find((ip) => ip.id === item.id);
          return (
            <Card
              key={item.id}
              className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl font-bold text-muted-foreground/30">
                  #{index + 1}
                </div>
                <div
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${
                    item.change > 0
                      ? "bg-green-500/10 text-green-600"
                      : "bg-red-500/10 text-red-600"
                  }`}
                >
                  {item.change > 0 ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  {Math.abs(item.change)}%
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.name}</h3>
              {ip && (
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {ip.description}
                </p>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Trend Score</p>
                  <p className="text-2xl font-bold text-primary">{item.trendScore}</p>
                </div>
                {ip && (
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Royalty</p>
                    <p className="text-lg font-semibold">
                      ${ip.totalRoyalty.toLocaleString()}
                    </p>
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <TrendingChart trending={trending} />
    </div>
  );
};

export default Trending;
