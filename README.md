# 🎨 IP Royalty Visualizer

> **Democratizing Intellectual Property through Story Protocol**  
> A next-generation dashboard for visualizing, tracking, and managing IP assets in the decentralized creative economy.

[![Built with React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Story Protocol](https://img.shields.io/badge/Story%20Protocol-Ready-purple.svg)](https://www.story.foundation/)

---

## 🌟 Vision

The IP Royalty Visualizer transforms how creators, brands, and investors interact with intellectual property on-chain. By leveraging **Story Protocol**, we're building the infrastructure for the future of programmable IP—where every creative asset can be tracked, remixed, and monetized transparently.

---

## 🚀 Features

### 📊 **Dashboard Analytics**
- Real-time IP asset tracking and performance metrics
- Sort and filter by royalty earnings, derivative count, and creation date
- Comprehensive overview of your IP portfolio

### 🔍 **IP Details Deep Dive**
- **Metadata Visualization**: Owner info, descriptions, license terms
- **Derivative Graph**: Interactive network visualization powered by Cytoscape.js
- **Royalty Distribution**: Bar charts showing revenue streams across derivatives
- **License Information**: Terms, permissions, and commercial rights at a glance

### 👥 **Creator Leaderboard**
- Rank creators by total royalty earnings
- Track IP creation and derivative metrics
- Identify top performers in the ecosystem

### 📈 **Trending IPs**
- 24h / 7d / 30d trending analysis
- Momentum indicators and change percentages
- Discover rising IP assets before they explode

### 🎯 **Interactive Visualizations**
- **Graph Interactions**: Click, hover, and explore IP relationships
- **Animated Charts**: Smooth transitions and responsive design
- **Dark Mode**: Elegant gradient-based design system

---

## 🏗️ Technical Architecture

### **Tech Stack**

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 18.3 + TypeScript | Type-safe component architecture |
| **Build Tool** | Vite | Lightning-fast HMR and optimized builds |
| **Routing** | React Router v6 | Client-side navigation |
| **Styling** | TailwindCSS | Utility-first responsive design |
| **Charts** | Recharts | Declarative, composable chart library |
| **Graphs** | Cytoscape.js | Network visualization for derivatives |
| **State** | React Query | Server state management (ready for API integration) |
| **UI Components** | shadcn/ui | Accessible, customizable component library |

### **Project Structure**

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── Navigation.tsx         # App navigation bar
│   ├── IPTable.tsx           # Sortable IP asset table
│   ├── IPGraph.tsx           # Cytoscape derivative graph
│   ├── RoyaltyChart.tsx      # Recharts royalty visualization
│   ├── CreatorLeaderboard.tsx # Creator rankings
│   └── TrendingChart.tsx     # Trending IPs visualization
├── pages/
│   ├── Dashboard.tsx         # Main dashboard view
│   ├── IPDetails.tsx         # Individual IP detail page
│   ├── Creators.tsx          # Creator leaderboard page
│   └── Trending.tsx          # Trending IPs page
├── mock/
│   └── data.ts               # Mock Story Protocol data
├── App.tsx                   # Root component with routing
└── main.tsx                  # App entry point
```

---

## 🔗 Story Protocol Integration

### **Current Implementation** (Mock Data)
This version uses carefully structured mock data that mirrors Story Protocol's data model:

```typescript
interface IPAsset {
  id: string;                  // Story Protocol IP ID
  name: string;                // IP Asset name
  owner: string;               // Wallet address of IP owner
  description: string;         // IP metadata
  derivativeCount: number;     // Number of derivatives created
  totalRoyalty: number;        // Aggregate royalty earnings
  createdAt: string;           // Registration timestamp
  derivatives: string[];       // Array of derivative IP IDs
}
```

### **Story Protocol SDK Integration** (Production Ready)

When connecting to Story Protocol mainnet/testnet:

```typescript
// 1. Install Story Protocol SDK
npm install @story-protocol/core-sdk

// 2. Initialize SDK
import { StoryClient } from '@story-protocol/core-sdk';

const client = StoryClient.newClient({
  transport: http(process.env.RPC_PROVIDER_URL),
  chainId: 'odyssey', // or 'mainnet'
});

// 3. Fetch IP Assets
const ipAssets = await client.ipAsset.list({
  owner: walletAddress,
  pagination: { limit: 50 }
});

// 4. Query Derivatives
const derivatives = await client.ipAsset.getDerivatives({
  parentIpId: ipAssetId
});

// 5. Fetch Royalty Data
const royalties = await client.royalty.getRoyaltyPayments({
  ipId: ipAssetId,
  timeframe: '30d'
});
```

### **API Endpoints** (Ready to Implement)

Replace mock data with these Story Protocol queries:

| Feature | Story SDK Method | Endpoint |
|---------|-----------------|----------|
| Dashboard IPs | `client.ipAsset.list()` | `/api/ip-assets` |
| IP Details | `client.ipAsset.get(id)` | `/api/ip-assets/:id` |
| Derivatives | `client.ipAsset.getDerivatives(id)` | `/api/ip-assets/:id/derivatives` |
| Royalties | `client.royalty.getRoyaltyPayments(id)` | `/api/royalties/:id` |
| License Info | `client.license.getLicenseTerms(id)` | `/api/licenses/:id` |

---

## 🎨 Design System

### **Color Palette**
- **Primary**: Electric Blue (`220 100% 60%`) - Innovation & Trust
- **Secondary**: Deep Indigo (`240 50% 30%`) - Sophistication
- **Accent**: Vibrant Teal (`180 80% 50%`) - Growth & Opportunity
- **Gradients**: Multi-layer depth for premium feel

### **Typography**
- **Headings**: Inter (Bold, 600-700 weight)
- **Body**: Inter (Regular, 400 weight)
- **Code**: Monospace for wallet addresses

---

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ and npm
- Modern browser (Chrome, Firefox, Safari, Edge)

### **Installation**

```bash
# Clone the repository
git clone <repository-url>
cd ip-royalty-visualizer

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### **Build for Production**

```bash
# Create optimized build
npm run build

# Preview production build
npm run preview
```

---

## 🔮 Future Roadmap

### **Phase 1: Enhanced Analytics** (Q1 2025)
- [ ] Real-time royalty streaming dashboard
- [ ] Advanced filtering and search
- [ ] Export reports (CSV, PDF)
- [ ] Wallet connection (WalletConnect, MetaMask)

### **Phase 2: Story Protocol Integration** (Q2 2025)
- [ ] Live mainnet/testnet integration
- [ ] Transaction history and on-chain verification
- [ ] License term modification UI
- [ ] Batch IP registration

### **Phase 3: Social Features** (Q3 2025)
- [ ] Creator profiles and portfolios
- [ ] IP collaboration tools
- [ ] Notification system for royalty payments
- [ ] Community discovery feed

### **Phase 4: Advanced Tools** (Q4 2025)
- [ ] AI-powered IP valuation
- [ ] Predictive trending analysis
- [ ] Royalty split calculators
- [ ] Cross-chain IP bridges

---

## 📊 Mock Data Structure

The current implementation uses three data models:

### **IP Assets** (`mockIPs`)
- 3 sample IP assets with varying derivative counts
- Realistic royalty distributions
- Temporal data for trend analysis

### **Derivatives** (`mockDerivatives`)
- Hierarchical parent-child relationships
- Individual royalty tracking per derivative
- Name variations demonstrating remixability

### **Creators** (`mockCreators`)
- Leaderboard ranking system
- Aggregate metrics per creator
- Wallet address integration

---

## 🤝 Contributing

We welcome contributions! This project is ready for:
- Story Protocol SDK integration
- Additional chart types and analytics
- Performance optimizations
- Accessibility improvements
- Internationalization (i18n)

---

## 📄 License

MIT License - See LICENSE file for details

---

## 🔗 Resources

- [Story Protocol Documentation](https://docs.story.foundation/)
- [Story Protocol SDK](https://github.com/storyprotocol/story-protocol-sdk)
- [React Documentation](https://react.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Recharts](https://recharts.org/)
- [Cytoscape.js](https://js.cytoscape.org/)

---

## 🌐 Connect

- **Project URL**: [https://lovable.dev/projects/48453612-c6dc-4541-9ec4-ad9d6f6756f7](https://lovable.dev/projects/48453612-c6dc-4541-9ec4-ad9d6f6756f7)
- **Story Protocol**: [https://www.story.foundation/](https://www.story.foundation/)

---

<div align="center">

**Built with ❤️ for the Creator Economy**

*Powered by Story Protocol | React | TypeScript | TailwindCSS*

</div>
