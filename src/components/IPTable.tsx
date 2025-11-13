import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPAsset } from "@/mock/data";
import { ArrowUpDown, TrendingUp, Boxes } from "lucide-react";
import { Card } from "@/components/ui/card";

interface IPTableProps {
  ips: IPAsset[];
}

type SortField = "totalRoyalty" | "derivativeCount" | "createdAt";
type SortDirection = "asc" | "desc";

const IPTable = ({ ips }: IPTableProps) => {
  const navigate = useNavigate();
  const [sortField, setSortField] = useState<SortField>("totalRoyalty");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedIPs = [...ips].sort((a, b) => {
    const aVal = a[sortField];
    const bVal = b[sortField];
    const multiplier = sortDirection === "asc" ? 1 : -1;
    
    if (typeof aVal === "string" && typeof bVal === "string") {
      return multiplier * aVal.localeCompare(bVal);
    }
    return multiplier * ((aVal as number) - (bVal as number));
  });

  return (
    <Card className="overflow-hidden shadow-[var(--shadow-card)]">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Owner
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort("totalRoyalty")}
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Total Royalty
                  <ArrowUpDown className="h-3 w-3 opacity-50" />
                </div>
              </th>
              <th
                className="px-6 py-4 text-left text-sm font-semibold text-foreground cursor-pointer hover:bg-muted/80 transition-colors"
                onClick={() => handleSort("derivativeCount")}
              >
                <div className="flex items-center gap-2">
                  <Boxes className="h-4 w-4" />
                  Derivatives
                  <ArrowUpDown className="h-3 w-3 opacity-50" />
                </div>
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                Created
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {sortedIPs.map((ip) => (
              <tr
                key={ip.id}
                onClick={() => navigate(`/ip/${ip.id}`)}
                className="hover:bg-muted/30 cursor-pointer transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="font-medium text-foreground">{ip.name}</div>
                  <div className="text-sm text-muted-foreground line-clamp-1">
                    {ip.description}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground font-mono">
                  {ip.owner}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary">
                      ${ip.totalRoyalty.toLocaleString()}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm">
                    {ip.derivativeCount}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {new Date(ip.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default IPTable;
