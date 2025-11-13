import { Creator } from "@/mock/data";
import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp, Boxes, Image } from "lucide-react";

interface CreatorLeaderboardProps {
  creators: Creator[];
}

const CreatorLeaderboard = ({ creators }: CreatorLeaderboardProps) => {
  const sortedCreators = [...creators].sort((a, b) => b.totalRoyalty - a.totalRoyalty);

  const getMedalColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-yellow-500";
      case 1:
        return "text-gray-400";
      case 2:
        return "text-amber-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <Card className="overflow-hidden shadow-[var(--shadow-card)]">
      <div className="bg-gradient-to-r from-primary to-secondary p-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Trophy className="h-6 w-6" />
          Top Creators
        </h2>
      </div>
      <div className="divide-y divide-border">
        {sortedCreators.map((creator, index) => (
          <div
            key={creator.wallet}
            className="p-6 hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className={`text-3xl font-bold w-12 text-center ${getMedalColor(index)}`}>
                {index < 3 ? <Trophy className="h-8 w-8 mx-auto" /> : `#${index + 1}`}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{creator.name}</h3>
                    <p className="text-sm text-muted-foreground font-mono">
                      {creator.wallet}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">
                      ${creator.totalRoyalty.toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Royalty</div>
                  </div>
                </div>
                <div className="flex gap-6 mt-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Image className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">
                      {creator.ipCount} IPs
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Boxes className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">
                      {creator.derivativeCount} Derivatives
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CreatorLeaderboard;
