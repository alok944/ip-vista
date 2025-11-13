import { useParams, useNavigate } from "react-router-dom";
import { mockIPs, mockDerivatives } from "@/mock/data";
import IPGraph from "@/components/IPGraph";
import RoyaltyChart from "@/components/RoyaltyChart";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, FileText, Shield } from "lucide-react";

const IPDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const ip = mockIPs.find((ip) => ip.id === id);
  const derivatives = mockDerivatives[id || ""] || [];

  if (!ip) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">IP Asset Not Found</h2>
          <p className="text-muted-foreground mb-4">
            The requested IP asset could not be found.
          </p>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="outline"
        onClick={() => navigate("/")}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Dashboard
      </Button>

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{ip.name}</h1>
        <p className="text-lg text-muted-foreground">{ip.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card className="p-6 shadow-[var(--shadow-card)]">
          <h3 className="text-lg font-semibold mb-4">Asset Information</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Owner</p>
                <p className="font-mono font-medium">{ip.owner}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-secondary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Created</p>
                <p className="font-medium">
                  {new Date(ip.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-accent mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Total Derivatives</p>
                <p className="font-medium text-2xl">{ip.derivativeCount}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">Total Royalty</p>
                <p className="font-medium text-2xl text-primary">
                  ${ip.totalRoyalty.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-[var(--shadow-card)]">
          <h3 className="text-lg font-semibold mb-4">License Information</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-1">License Type</p>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Commercial Remix
              </span>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Royalty Rate</p>
              <p className="text-2xl font-bold">10%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Attribution Required</p>
              <p className="font-medium">Yes</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Commercial Use</p>
              <p className="font-medium">Allowed</p>
            </div>
          </div>
        </Card>
      </div>

      {derivatives.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IPGraph ip={ip} derivatives={derivatives} />
          <RoyaltyChart derivatives={derivatives} />
        </div>
      )}
    </div>
  );
};

export default IPDetails;
