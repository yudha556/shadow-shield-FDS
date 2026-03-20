// lib/dummy-transactions.ts

import type { Transaction, TransactionDetail } from "@/types/transaction"

export const transactions: Transaction[] = [
  { id: "995A", txId: "TX-995A", time: "13:42:05", sender: "0x8A2...9B1", receiver: "0x1F2...4C2", amount: 12450.00, riskScore: 94, status: "Blocked" },
  { id: "995B", txId: "TX-995B", time: "13:41:52", sender: "0x3E1...7A8", receiver: "0x9D4...2B1", amount: 250.00,   riskScore: 12, status: "Approved" },
  { id: "995C", txId: "TX-995C", time: "13:41:20", sender: "0x5C2...1F9", receiver: "0x2A1...8C4", amount: 4800.00,  riskScore: 68, status: "Held" },
  { id: "995D", txId: "TX-995D", time: "13:40:45", sender: "0x7B8...3E2", receiver: "0x4F1...9D5", amount: 8900.00,  riskScore: 82, status: "Held" },
  { id: "995E", txId: "TX-995E", time: "13:40:11", sender: "0x1A4...6C3", receiver: "0x8E2...5B7", amount: 15.50,    riskScore: 5,  status: "Approved" },
  { id: "995F", txId: "TX-995F", time: "13:39:58", sender: "0x2D1...8F4", receiver: "0x6B3...1A9", amount: 1200.00,  riskScore: 22, status: "Approved" },
  { id: "995G", txId: "TX-995G", time: "13:38:22", sender: "0x4C5...2A1", receiver: "0x9F8...3E6", amount: 3450.00,  riskScore: 45, status: "Approved" },
  { id: "995H", txId: "TX-995H", time: "13:37:10", sender: "0x6E2...9D7", receiver: "0x1B4...5C8", amount: 85.00,    riskScore: 18, status: "Approved" },
  { id: "995I", txId: "TX-995I", time: "13:35:45", sender: "0x8F1...4B2", receiver: "0x3C9...7A1", amount: 45000.00, riskScore: 98, status: "Blocked" },
  { id: "995J", txId: "TX-995J", time: "13:32:04", sender: "0x9A3...1E5", receiver: "0x5D2...8F4", amount: 450.00,   riskScore: 14, status: "Approved" },
  { id: "995K", txId: "TX-995K", time: "13:30:17", sender: "0x2B7...3F1", receiver: "0x7A9...6C2", amount: 6700.00,  riskScore: 71, status: "Held" },
  { id: "995L", txId: "TX-995L", time: "13:28:44", sender: "0x5D4...8A3", receiver: "0x4E6...2D9", amount: 320.00,   riskScore: 9,  status: "Approved" },
]

export const transactionDetails: Record<string, TransactionDetail> = {
  "995A": {
    id: "995A",
    txId: "TX-995A",
    time: "13:42:05",
    sender: "0x8A2...9B1",
    receiver: "0x1F2...4C2",
    amount: 12458.00,
    riskScore: 94,
    status: "Blocked",
    assetType: "USDC (ERC-20)",
    networkFee: "$1.38 (26 Gwei)",
    smartContract: "0x4e7a...Cee8",
    blockedBy: "BLOCKED BY POLICY",
    timeOfInterception: "13:42:05 UTC",
    date: "Oct 26, 2023",

    aiInsights: [
      {
        id: "1",
        type: "sanctioned",
        title: "Sanctioned Mixer Interaction",
        description: "Funds are being routed through a known mixing service (Tornado Cash). This severely violates AML policy #832. The transaction was automatically halted.",
        severity: "critical",
      },
      {
        id: "2",
        type: "impossible_travel",
        title: "Impossible Travel Detected",
        description: "IP address originates from St. Petersburg, Russia. Previous session 2 hours ago was logged from London, UK. Device fingerprint is completely new.",
        severity: "warning",
      },
      {
        id: "3",
        type: "velocity",
        title: "Abnormal Velocity",
        description: "Transaction amount ($12,458.00) is 840% higher than the sender's 90-day historical average transaction size.",
        severity: "warning",
      },
    ],

    behavioralBiometrics: [
      { label: "Device Fingerprint Match", value: 12, threshold: 80 },
      { label: "Location Consistency", value: 9, threshold: 70 },
      { label: "Typing Cadence (Session)", value: 43, threshold: 60 },
      { label: "Navigation Pattern", value: 68, threshold: 75 },
    ],

    blockchainTrace: [
      { id: "1", label: "SENDER ORIGIN", address: "0x8A2...9B1", type: "origin" },
      { id: "2", label: "Bridge", address: "Hop Protocol", type: "bridge" },
      { id: "3", label: "MIXER CONTRACT", address: "Tornado Cash", type: "mixer", flagged: true, flagLabel: "Tornado Cash" },
      { id: "4", label: "Direct", address: "", type: "direct" },
      { id: "5", label: "RECEIVER", address: "0x1F2...4C2", type: "receiver" },
    ],

    entityReputation: {
      sender: {
        walletAge: "4 Days",
        currentBalance: "$15.20",
        previousFlags: "3 Incidents",
        kycStatus: "Tier 1 (Basic)",
        kycTier: "basic",
      },
      receiver: {
        walletAge: "13 Years",
        currentBalance: "$45,988.00",
        previousFlags: "None",
        kycStatus: "Tier 2 (Verified)",
        kycTier: "verified",
      },
    },

    auditLog: [
      { id: "1", timestamp: "13:42:05.140", message: "Transaction payload received by ShadowShield ingestion node.", type: "info" },
      { id: "2", timestamp: "13:42:05.370", message: "AI Behavioral Analysis completed. Device mismatch anomaly detected.", type: "warning" },
      { id: "3", timestamp: "13:42:05.612", message: "Trace Graph Engine flagged suspicious smart contract interaction (Tornado Cash).", type: "critical" },
      { id: "4", timestamp: "13:42:05.780", message: "Policy Engine triggered Rule #60. Transaction automatically halted. Risk Score generated: 94.", type: "critical" },
      { id: "5", timestamp: "13:43:14.009", message: "Added to SOC analyst queue for manual review.", type: "success" },
    ],
  },

  "995C": {
    id: "995C",
    txId: "TX-995C",
    time: "13:41:20",
    sender: "0x5C2...1F9",
    receiver: "0x2A1...8C4",
    amount: 4800.00,
    riskScore: 68,
    status: "Held",
    assetType: "ETH",
    networkFee: "$0.82 (18 Gwei)",
    smartContract: "0x2b3c...Fa91",
    blockedBy: null,
    timeOfInterception: "13:41:20 UTC",
    date: "Oct 26, 2023",

    aiInsights: [
      {
        id: "1",
        type: "velocity",
        title: "Unusual Transaction Size",
        description: "Transaction amount is 320% higher than sender's 30-day average. Flagged for manual review.",
        severity: "warning",
      },
      {
        id: "2",
        type: "impossible_travel",
        title: "New Device Detected",
        description: "Transaction initiated from an unrecognized device. User's typical device was last seen 6 hours ago.",
        severity: "warning",
      },
    ],

    behavioralBiometrics: [
      { label: "Device Fingerprint Match", value: 55, threshold: 80 },
      { label: "Location Consistency", value: 72, threshold: 70 },
      { label: "Typing Cadence (Session)", value: 61, threshold: 60 },
      { label: "Navigation Pattern", value: 80, threshold: 75 },
    ],

    blockchainTrace: [
      { id: "1", label: "SENDER ORIGIN", address: "0x5C2...1F9", type: "origin" },
      { id: "2", label: "Bridge", address: "Across Protocol", type: "bridge" },
      { id: "3", label: "Direct", address: "", type: "direct" },
      { id: "4", label: "RECEIVER", address: "0x2A1...8C4", type: "receiver" },
    ],

    entityReputation: {
      sender: {
        walletAge: "8 Months",
        currentBalance: "$3,200.00",
        previousFlags: "1 Incident",
        kycStatus: "Tier 2 (Verified)",
        kycTier: "verified",
      },
      receiver: {
        walletAge: "2 Years",
        currentBalance: "$12,440.00",
        previousFlags: "None",
        kycStatus: "Tier 2 (Verified)",
        kycTier: "verified",
      },
    },

    auditLog: [
      { id: "1", timestamp: "13:41:20.110", message: "Transaction payload received by ShadowShield ingestion node.", type: "info" },
      { id: "2", timestamp: "13:41:20.340", message: "Behavioral analysis flagged new device fingerprint.", type: "warning" },
      { id: "3", timestamp: "13:41:20.590", message: "Velocity check triggered — amount exceeds 3x 30-day average.", type: "warning" },
      { id: "4", timestamp: "13:41:20.750", message: "Transaction placed on hold pending manual analyst review.", type: "info" },
    ],
  },
}

// Fallback for IDs without full detail data
export function getTransactionDetail(id: string): TransactionDetail {
  if (transactionDetails[id]) return transactionDetails[id]

  const base = transactions.find((t) => t.id === id)
  if (!base) {
    return transactionDetails["995A"]
  }

  return {
    ...base,
    assetType: "USDC (ERC-20)",
    networkFee: "$0.50 (12 Gwei)",
    smartContract: "0x0000...0000",
    blockedBy: base.status === "Blocked" ? "BLOCKED BY POLICY" : null,
    timeOfInterception: `${base.time} UTC`,
    date: "Oct 26, 2023",
    aiInsights: [
      {
        id: "1",
        type: "velocity",
        title: "Flagged for Review",
        description: "This transaction has been flagged based on automated risk scoring rules.",
        severity: "warning",
      },
    ],
    behavioralBiometrics: [
      { label: "Device Fingerprint Match", value: 78, threshold: 80 },
      { label: "Location Consistency", value: 85, threshold: 70 },
      { label: "Typing Cadence (Session)", value: 62, threshold: 60 },
      { label: "Navigation Pattern", value: 71, threshold: 75 },
    ],
    blockchainTrace: [
      { id: "1", label: "SENDER ORIGIN", address: base.sender, type: "origin" },
      { id: "2", label: "Direct", address: "", type: "direct" },
      { id: "3", label: "RECEIVER", address: base.receiver, type: "receiver" },
    ],
    entityReputation: {
      sender: { walletAge: "1 Year", currentBalance: "$500.00", previousFlags: "None", kycStatus: "Tier 1 (Basic)", kycTier: "basic" },
      receiver: { walletAge: "3 Years", currentBalance: "$2,000.00", previousFlags: "None", kycStatus: "Tier 2 (Verified)", kycTier: "verified" },
    },
    auditLog: [
      { id: "1", timestamp: `${base.time}.100`, message: "Transaction received and processed by ShadowShield.", type: "info" },
      { id: "2", timestamp: `${base.time}.400`, message: "Risk scoring completed.", type: "info" },
    ],
  }
}