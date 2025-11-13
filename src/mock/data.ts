export interface IPAsset {
  id: string;
  name: string;
  owner: string;
  description: string;
  derivativeCount: number;
  totalRoyalty: number;
  createdAt: string;
  derivatives: string[];
}

export interface Derivative {
  id: string;
  parentId: string;
  name: string;
  royalty: number;
}

export interface Creator {
  name: string;
  wallet: string;
  totalRoyalty: number;
  ipCount: number;
  derivativeCount: number;
}

export const mockIPs: IPAsset[] = [
  {
    id: "ip1",
    name: "Eternal Hero",
    owner: "0xABC123",
    description: "A mythic warrior who travels dimensions.",
    derivativeCount: 4,
    totalRoyalty: 5230,
    createdAt: "2024-02-10",
    derivatives: ["ip1-1", "ip1-2", "ip1-3"]
  },
  {
    id: "ip2",
    name: "Cosmic Dragon",
    owner: "0xFFE991",
    description: "Ancient dragon whose scales store stardust.",
    derivativeCount: 7,
    totalRoyalty: 8021,
    createdAt: "2024-01-20",
    derivatives: ["ip2-1", "ip2-2"]
  },
  {
    id: "ip3",
    name: "Shadow AI",
    owner: "0x445799",
    description: "A rogue artificial intelligence that evolves.",
    derivativeCount: 2,
    totalRoyalty: 991,
    createdAt: "2024-03-01",
    derivatives: ["ip3-1"]
  }
];

export const mockDerivatives: Record<string, Derivative[]> = {
  "ip1": [
    { id: "ip1-1", parentId: "ip1", name: "Eternal Hero — Dark Mode", royalty: 800 },
    { id: "ip1-2", parentId: "ip1", name: "Eternal Hero — Teen Version", royalty: 350 },
    { id: "ip1-3", parentId: "ip1", name: "Eternal Hero — Manga Edition", royalty: 1200 }
  ],
  "ip2": [
    { id: "ip2-1", parentId: "ip2", name: "Cosmic Dragon — Neon Style", royalty: 3000 },
    { id: "ip2-2", parentId: "ip2", name: "Cosmic Dragon — Baby Dragon", royalty: 1100 }
  ],
  "ip3": [
    { id: "ip3-1", parentId: "ip3", name: "Shadow AI Agent v2", royalty: 500 }
  ]
};

export const mockCreators: Creator[] = [
  {
    name: "Alice",
    wallet: "0xAAA111",
    totalRoyalty: 9000,
    ipCount: 5,
    derivativeCount: 12
  },
  {
    name: "Bob",
    wallet: "0xBBB222",
    totalRoyalty: 5300,
    ipCount: 2,
    derivativeCount: 8
  },
  {
    name: "Charlie",
    wallet: "0xCCC333",
    totalRoyalty: 4000,
    ipCount: 4,
    derivativeCount: 3
  }
];

export interface TrendingIP {
  id: string;
  name: string;
  trendScore: number;
  change: number;
}

export const mockTrendingIPs: Record<string, TrendingIP[]> = {
  "24h": [
    { id: "ip2", name: "Cosmic Dragon", trendScore: 95, change: 12 },
    { id: "ip1", name: "Eternal Hero", trendScore: 78, change: -5 },
    { id: "ip3", name: "Shadow AI", trendScore: 65, change: 8 }
  ],
  "7d": [
    { id: "ip1", name: "Eternal Hero", trendScore: 88, change: 15 },
    { id: "ip2", name: "Cosmic Dragon", trendScore: 82, change: 3 },
    { id: "ip3", name: "Shadow AI", trendScore: 55, change: -2 }
  ],
  "30d": [
    { id: "ip2", name: "Cosmic Dragon", trendScore: 92, change: 25 },
    { id: "ip1", name: "Eternal Hero", trendScore: 75, change: 8 },
    { id: "ip3", name: "Shadow AI", trendScore: 48, change: -5 }
  ]
};
