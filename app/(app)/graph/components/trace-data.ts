export type NodeType = "safe" | "suspicious" | "flagged";

export interface TraceNode {
  id: string;
  label: string;
  type: NodeType;
  position: { x: number; y: number };
  icon: "exchange" | "wallet" | "mixer" | "merchant" | "unknown";
}

export interface TraceEdge {
  id: string;
  source: string;
  target: string;
  amount: string;
  style: "solid" | "dashed";
  animated?: boolean;
}

export interface RecentTx {
  id: string;
  txId: string;
  date: string;
  amount: string;
  positive: boolean;
}

export interface RiskFactor {
  label: string;
  level: "critical" | "warning" | "medium";
}

export interface EntityDetail {
  totalVolume: string;
  txCount: number;
  firstSeen: string;
  lastActive: string;
}

export interface WalletIntelligence {
  address: string;
  riskScore: number;
  entityDetails: EntityDetail;
  riskFactors: RiskFactor[];
  recentTxs: RecentTx[];
}

export interface TraceIncident {
  id: string;
  incidentLabel: string;
  nodes: TraceNode[];
  edges: TraceEdge[];
  walletIntelligence: WalletIntelligence;
}

export const TRACE_INCIDENTS: TraceIncident[] = [
  {
    id: "incident-8942-A",
    incidentLabel: "Incident #8942-A",
    nodes: [
      { id: "n1", label: "Exchange A", type: "suspicious", position: { x: 80, y: 220 }, icon: "exchange" },
      { id: "n2", label: "0x8F1...22A", type: "suspicious", position: { x: 280, y: 220 }, icon: "wallet" },
      { id: "n3", label: "0x2B4...1C0", type: "safe", position: { x: 280, y: 80 }, icon: "wallet" },
      { id: "n4", label: "Merchant Gateway", type: "safe", position: { x: 430, y: 140 }, icon: "merchant" },
      { id: "n5", label: "0x402...981", type: "flagged", position: { x: 280, y: 360 }, icon: "wallet" },
      { id: "n6", label: "Known Mixer", type: "flagged", position: { x: 430, y: 360 }, icon: "mixer" },
      { id: "n7", label: "0x7A9...1D1", type: "flagged", position: { x: 580, y: 360 }, icon: "unknown" },
    ],
    edges: [
      { id: "e1", source: "n1", target: "n2", amount: "$12,500", style: "dashed" },
      { id: "e2", source: "n2", target: "n3", amount: "", style: "solid" },
      { id: "e3", source: "n3", target: "n4", amount: "", style: "solid" },
      { id: "e4", source: "n2", target: "n5", amount: "$45,000", style: "solid", animated: true },
      { id: "e5", source: "n5", target: "n6", amount: "$45,000", style: "solid", animated: true },
      { id: "e6", source: "n6", target: "n7", amount: "", style: "dashed", animated: true },
    ],
    walletIntelligence: {
      address: "0x7A9...1D1",
      riskScore: 88,
      entityDetails: {
        totalVolume: "$1.24M USD",
        txCount: 842,
        firstSeen: "Oct 12, 2023",
        lastActive: "1 hour ago",
      },
      riskFactors: [
        { label: "Direct link to darknet market", level: "critical" },
        { label: "Automated sweeping behavior", level: "critical" },
        { label: "Interaction with sanctioned region", level: "warning" },
      ],
      recentTxs: [
        { id: "tx1", txId: "TX-994C", date: "Today, 14:32", amount: "+$45,000", positive: true },
        { id: "tx2", txId: "TX-981B", date: "Yesterday, 09:15", amount: "-$12,400", positive: false },
        { id: "tx3", txId: "TX-977A", date: "Nov 02, 18:45", amount: "+$8,200", positive: true },
      ],
    },
  },
  {
    id: "incident-7731-B",
    incidentLabel: "Incident #7731-B",
    nodes: [
      { id: "n1", label: "CEX Deposit", type: "safe", position: { x: 80, y: 180 }, icon: "exchange" },
      { id: "n2", label: "0xA3F...9C2", type: "suspicious", position: { x: 260, y: 180 }, icon: "wallet" },
      { id: "n3", label: "0xD11...4E8", type: "suspicious", position: { x: 440, y: 100 }, icon: "wallet" },
      { id: "n4", label: "0x99C...77B", type: "flagged", position: { x: 440, y: 280 }, icon: "wallet" },
      { id: "n5", label: "Sanctioned Addr", type: "flagged", position: { x: 600, y: 280 }, icon: "unknown" },
    ],
    edges: [
      { id: "e1", source: "n1", target: "n2", amount: "$8,000", style: "solid" },
      { id: "e2", source: "n2", target: "n3", amount: "$3,200", style: "dashed" },
      { id: "e3", source: "n2", target: "n4", amount: "$4,800", style: "solid", animated: true },
      { id: "e4", source: "n4", target: "n5", amount: "$4,800", style: "solid", animated: true },
    ],
    walletIntelligence: {
      address: "0x99C...77B",
      riskScore: 76,
      entityDetails: {
        totalVolume: "$320K USD",
        txCount: 214,
        firstSeen: "Mar 5, 2024",
        lastActive: "3 hours ago",
      },
      riskFactors: [
        { label: "Linked to sanctioned address", level: "critical" },
        { label: "Rapid fund dispersal pattern", level: "warning" },
      ],
      recentTxs: [
        { id: "tx1", txId: "TX-883A", date: "Today, 11:05", amount: "+$4,800", positive: true },
        { id: "tx2", txId: "TX-871C", date: "Yesterday, 22:30", amount: "-$3,200", positive: false },
        { id: "tx3", txId: "TX-860B", date: "Oct 28, 09:10", amount: "+$6,100", positive: true },
      ],
    },
  },
  {
    id: "incident-6610-C",
    incidentLabel: "Incident #6610-C",
    nodes: [
      { id: "n1", label: "DeFi Protocol", type: "safe", position: { x: 80, y: 200 }, icon: "merchant" },
      { id: "n2", label: "0x5E8...3F1", type: "safe", position: { x: 260, y: 120 }, icon: "wallet" },
      { id: "n3", label: "0xB2A...8D4", type: "suspicious", position: { x: 260, y: 300 }, icon: "wallet" },
      { id: "n4", label: "Bridge Contract", type: "suspicious", position: { x: 440, y: 300 }, icon: "exchange" },
      { id: "n5", label: "0x1C7...5A9", type: "flagged", position: { x: 600, y: 300 }, icon: "unknown" },
    ],
    edges: [
      { id: "e1", source: "n1", target: "n2", amount: "$15,000", style: "solid" },
      { id: "e2", source: "n1", target: "n3", amount: "$22,000", style: "solid" },
      { id: "e3", source: "n3", target: "n4", amount: "$22,000", style: "dashed", animated: true },
      { id: "e4", source: "n4", target: "n5", amount: "$21,500", style: "solid", animated: true },
    ],
    walletIntelligence: {
      address: "0x1C7...5A9",
      riskScore: 91,
      entityDetails: {
        totalVolume: "$2.1M USD",
        txCount: 1203,
        firstSeen: "Jan 20, 2023",
        lastActive: "30 mins ago",
      },
      riskFactors: [
        { label: "Cross-chain obfuscation pattern", level: "critical" },
        { label: "Direct link to darknet market", level: "critical" },
        { label: "Known bridge abuse vector", level: "warning" },
      ],
      recentTxs: [
        { id: "tx1", txId: "TX-1102A", date: "Today, 15:47", amount: "+$21,500", positive: true },
        { id: "tx2", txId: "TX-1088D", date: "Today, 08:22", amount: "-$9,800", positive: false },
        { id: "tx3", txId: "TX-1075C", date: "Nov 01, 14:00", amount: "+$14,200", positive: true },
      ],
    },
  },
];