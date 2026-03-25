import { AlertItem } from "../components/alert-card";

export const DUMMY_ALERTS: AlertItem[] = [
  {
    id: "1",
    txId: "TX-992A",
    walletAddress: "0x8A2...9B1",
    title: "Behavioral Biometrics Anomaly Detected",
    riskLevel: "critical",
    riskScore: 94,
    description:
      "Multiple failed authentication attempts followed by an unusually fast sequence of device interactions. Destination address matches a known darknet market cluster on the Trace Graph.",
    timeAgo: "2 mins ago",
    icon: "biometrics",
    actions: [
      { label: "Review Incident", variant: "default", primary: true, icon: "review" },
      { label: "Block Wallet", variant: "destructive", icon: "block" },
      { label: "Dismiss", variant: "outline" },
    ],
  },
  {
    id: "2",
    txId: "TX-992F",
    walletAddress: "0x384...7C2",
    title: "Suspicious Wallet Interaction",
    riskLevel: "warning",
    riskScore: 72,
    description:
      "Funds transferred to a wallet historically associated with a known crypto mixer. Velocity of funds movement suggests potential structuring behavior. Transaction is currently held.",
    timeAgo: "15 mins ago",
    icon: "wallet",
    actions: [
      { label: "Review Incident", variant: "default", primary: true, icon: "review" },
      { label: "Hold Funds", variant: "outline", icon: "hold" },
      { label: "Dismiss", variant: "outline" },
    ],
  },
  {
    id: "3",
    txId: "TX-993B",
    walletAddress: "0x1F2...4C2",
    title: "Session Timeout & IP Shift Anomaly",
    riskLevel: "medium",
    riskScore: 45,
    description:
      "User session idled for 45 minutes, then resumed from a new IP address located 500 miles away from previous connection. Amount is below threshold, but triggered behavioral flag.",
    timeAgo: "42 mins ago",
    icon: "session",
    actions: [
      { label: "Trigger Re-auth", variant: "outline", icon: "reauth" },
      { label: "Mark Safe", variant: "outline", icon: "safe" },
    ],
  },
  {
    id: "4",
    txId: "TX-994C",
    walletAddress: "0x7A9...1D1",
    title: "Velocity Limit Exceeded",
    riskLevel: "critical",
    riskScore: 88,
    description:
      "Wallet attempted 12 outbound transfers totaling $45,000 within a 5-minute window. Pattern matches known automated sweeping script signatures. Automatic freeze applied.",
    timeAgo: "1 hour ago",
    icon: "velocity",
    actions: [
      { label: "Review Incident", variant: "default", primary: true, icon: "review" },
      { label: "Maintain Freeze", variant: "destructive", icon: "freeze" },
    ],
  },
  {
    id: "5",
    txId: "TX-995D",
    walletAddress: "0x3C1...8F4",
    title: "Unusual Cross-Chain Transfer",
    riskLevel: "warning",
    riskScore: 68,
    description:
      "Bridge transaction detected moving funds across three different chains within a 10-minute window. The destination wallet has no prior on-chain history.",
    timeAgo: "2 hours ago",
    icon: "wallet",
    actions: [
      { label: "Review Incident", variant: "default", primary: true, icon: "review" },
      { label: "Hold Funds", variant: "outline", icon: "hold" },
      { label: "Dismiss", variant: "outline" },
    ],
  },
  {
    id: "6",
    txId: "TX-996E",
    walletAddress: "0x9B5...2A7",
    title: "KYC Document Mismatch",
    riskLevel: "medium",
    riskScore: 52,
    description:
      "Submitted identity document details do not match the information on file. Facial recognition confidence score fell below the required threshold during re-verification.",
    timeAgo: "3 hours ago",
    icon: "session",
    actions: [
      { label: "Trigger Re-auth", variant: "outline", icon: "reauth" },
      { label: "Mark Safe", variant: "outline", icon: "safe" },
    ],
  },
];