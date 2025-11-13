import IPTable from "@/components/IPTable";
import { mockIPs } from "@/mock/data";
import { Card } from "@/components/ui/card";
import { TrendingUp, Boxes, DollarSign } from "lucide-react";

const Dashboard = () => {
  const totalRoyalty = mockIPs.reduce((sum, ip) => sum + ip.totalRoyalty, 0);
  const totalDerivatives = mockIPs.reduce((sum, ip) => sum + ip.derivativeCount, 0);
  const avgRoyalty = Math.round(totalRoyalty / mockIPs.length);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">IP Assets Dashboard</h1>
        <p className="text-muted-foreground">
          Track and visualize your intellectual property assets and derivatives
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">
                Total Royalty
              </p>
              <p className="text-3xl font-bold text-primary">
                ${totalRoyalty.toLocaleString()}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">
                Total Derivatives
              </p>
              <p className="text-3xl font-bold text-secondary">
                {totalDerivatives}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Boxes className="h-6 w-6 text-secondary" />
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground font-medium mb-1">
                Avg Royalty per IP
              </p>
              <p className="text-3xl font-bold text-accent">
                ${avgRoyalty.toLocaleString()}
              </p>
            </div>
            <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-accent" />
            </div>
          </div>
        </Card>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">All IP Assets</h2>
        <p className="text-muted-foreground">
          Click on any row to view detailed information
        </p>
      </div>

      <IPTable ips={mockIPs} />
    </div>
  );
};

export default Dashboard;
