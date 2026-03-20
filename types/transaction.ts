// types/transaction.ts

export type Status = "Approved" | "Blocked" | "Held"
export type RiskLevel = "Critical" | "High" | "Medium" | "Low"

export interface Transaction {
  id: string
  txId: string
  time: string
  sender: string
  receiver: string
  amount: number
  riskScore: number
  status: Status
}

export interface TransactionDetail extends Transaction {
  assetType: string
  networkFee: string
  smartContract: string
  blockedBy: string | null
  timeOfInterception: string
  date: string

  aiInsights: AiInsight[]
  behavioralBiometrics: BiometricItem[]
  blockchainTrace: BlockchainNode[]
  entityReputation: EntityReputation
  auditLog: AuditEntry[]
}

export interface AiInsight {
  id: string
  type: "sanctioned" | "impossible_travel" | "velocity"
  title: string
  description: string
  severity: "critical" | "warning" | "info"
}

export interface BiometricItem {
  label: string
  value: number
  threshold: number
}

export interface BlockchainNode {
  id: string
  label: string
  address: string
  type: "origin" | "bridge" | "mixer" | "direct" | "receiver"
  flagged?: boolean
  flagLabel?: string
}

export interface EntityReputation {
  sender: {
    walletAge: string
    currentBalance: string
    previousFlags: string
    kycStatus: string
    kycTier: string
  }
  receiver: {
    walletAge: string
    currentBalance: string
    previousFlags: string
    kycStatus: string
    kycTier: string
  }
}

export interface AuditEntry {
  id: string
  timestamp: string
  message: string
  type: "info" | "warning" | "critical" | "success"
}