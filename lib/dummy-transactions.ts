// lib/dummy-transactions.ts

import type { Transaction, TransactionDetail } from "@/types/transaction"

export const transactions: Transaction[] = [
  { id: "995A", txId: "TX-995A", time: "13:42:05", sender: "Bank Jambi", receiver: "VA Pintu", amount: 143000000.00, riskScore: 94, status: "Blocked" },
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
    sender: "Rekening Nasabah Bank Jambi",
    receiver: "Virtual Account On-Ramp Bursa Pintu",
    amount: 143000000.00,
    riskScore: 94,
    status: "Blocked",
    assetType: "Fiat-to-Crypto: BI-FAST Rp143.000.000 -> USDC (ERC-20)",
    networkFee: "Rp21.500 gas Ethereum (26 Gwei)",
    smartContract: "USDC ERC-20: 0xA0b8...eB48",
    blockedBy: "DIBLOKIR OLEH POLICY",
    timeOfInterception: "13:42:05 WIB",
    date: "1 Jun 2026",

    aiInsights: [
      {
        id: "1",
        type: "sanctioned",
        title: "Masuk ke Mixer Berisiko",
        description: "Dana bermula dari Transfer BI-FAST Rp143.000.000 Bank Jambi, masuk lewat VA on-ramp Pintu, lalu terdeteksi akan ditukar ke USDC ERC-20 dan diarahkan ke Tornado Cash. Sistem langsung menahan transaksi.",
        severity: "critical",
      },
      {
        id: "2",
        type: "impossible_travel",
        title: "Lokasi Login Janggal",
        description: "Sesi pembuat instruksi memakai IP luar negeri yang tidak cocok dengan pola nasabah. Perangkatnya juga belum pernah muncul di histori transaksi.",
        severity: "warning",
      },
      {
        id: "3",
        type: "velocity",
        title: "Nominal Melonjak Tidak Wajar",
        description: "Nominal Rp143.000.000 jauh di atas pola transaksi 90 hari terakhir nasabah. Polanya mirip layering: bank lokal, rekening penampung, on-ramp kripto, lalu wallet luar negeri.",
        severity: "warning",
      },
    ],

    behavioralBiometrics: [
      { label: "Kecocokan Perangkat", value: 12, threshold: 80 },
      { label: "Konsistensi Lokasi", value: 9, threshold: 70 },
      { label: "Ritme Ketik Sesi", value: 43, threshold: 60 },
      { label: "Pola Navigasi", value: 68, threshold: 75 },
    ],

    blockchainTrace: [
      { id: "1", label: "REKENING ASAL", address: "Nasabah Bank Jambi", type: "origin" },
      { id: "2", label: "Multi-Hop", address: "Mule Account Bank DKI", type: "bridge" },
      { id: "3", label: "ON-RAMP", address: "VA Bursa Pintu", type: "bridge" },
      { id: "4", label: "WALLET CRYPTO", address: "0x8F1...22A", type: "receiver" },
      { id: "5", label: "MIXER", address: "Tornado Cash", type: "mixer", flagged: true, flagLabel: "Tornado Cash" },
    ],

    entityReputation: {
      sender: {
        walletAge: "6 Bulan",
        currentBalance: "Rp18.420.000",
        previousFlags: "3 Temuan",
        kycStatus: "Tier 1 (Dasar)",
        kycTier: "basic",
      },
      receiver: {
        walletAge: "2 Tahun",
        currentBalance: "USDC 45.988",
        previousFlags: "Tidak ada",
        kycStatus: "Tier 2 (Terverifikasi)",
        kycTier: "verified",
      },
    },

    auditLog: [
      { id: "1", timestamp: "13:42:05.140", message: "Instruksi BI-FAST Rp143.000.000 dari Bank Jambi diterima oleh node ShadowShield.", type: "info" },
      { id: "2", timestamp: "13:42:05.370", message: "Analisis perilaku selesai. Perangkat dan lokasi tidak cocok dengan kebiasaan nasabah.", type: "warning" },
      { id: "3", timestamp: "13:42:05.612", message: "Trace Graph menemukan alur Bank Jambi -> Bank DKI -> VA Pintu -> USDC ERC-20.", type: "critical" },
      { id: "4", timestamp: "13:42:05.780", message: "Policy Engine memicu Rule #60. Transaksi ditahan sebelum dana masuk ke Tornado Cash. Risk Score: 94.", type: "critical" },
      { id: "5", timestamp: "13:43:14.009", message: "Kasus masuk antrean analis SOC untuk eskalasi dan laporan.", type: "success" },
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
    timeOfInterception: "13:41:20 WIB",
    date: "1 Jun 2026",

    aiInsights: [
      {
        id: "1",
        type: "velocity",
        title: "Nominal Transaksi Tidak Biasa",
        description: "Nominal transaksi 320% lebih besar dari rata-rata 30 hari pengirim. Ditandai untuk dicek analis.",
        severity: "warning",
      },
      {
        id: "2",
        type: "impossible_travel",
        title: "Perangkat Baru Terdeteksi",
        description: "Transaksi dibuat dari perangkat yang belum dikenal. Perangkat biasa nasabah terakhir terlihat 6 jam lalu.",
        severity: "warning",
      },
    ],

    behavioralBiometrics: [
      { label: "Kecocokan Perangkat", value: 55, threshold: 80 },
      { label: "Konsistensi Lokasi", value: 72, threshold: 70 },
      { label: "Ritme Ketik Sesi", value: 61, threshold: 60 },
      { label: "Pola Navigasi", value: 80, threshold: 75 },
    ],

    blockchainTrace: [
      { id: "1", label: "ASAL PENGIRIM", address: "0x5C2...1F9", type: "origin" },
      { id: "2", label: "Bridge", address: "Across Protocol", type: "bridge" },
      { id: "3", label: "Langsung", address: "", type: "direct" },
      { id: "4", label: "PENERIMA", address: "0x2A1...8C4", type: "receiver" },
    ],

    entityReputation: {
      sender: {
        walletAge: "8 Bulan",
        currentBalance: "Rp49.600.000",
        previousFlags: "1 Temuan",
        kycStatus: "Tier 2 (Terverifikasi)",
        kycTier: "verified",
      },
      receiver: {
        walletAge: "2 Tahun",
        currentBalance: "Rp192.820.000",
        previousFlags: "Tidak ada",
        kycStatus: "Tier 2 (Terverifikasi)",
        kycTier: "verified",
      },
    },

    auditLog: [
      { id: "1", timestamp: "13:41:20.110", message: "Payload transaksi diterima oleh node ingestion ShadowShield.", type: "info" },
      { id: "2", timestamp: "13:41:20.340", message: "Analisis perilaku menandai sidik perangkat baru.", type: "warning" },
      { id: "3", timestamp: "13:41:20.590", message: "Cek velocity terpicu karena nominal melebihi 3x rata-rata 30 hari.", type: "warning" },
      { id: "4", timestamp: "13:41:20.750", message: "Transaksi ditahan sambil menunggu review manual analis.", type: "info" },
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
    blockedBy: base.status === "Blocked" ? "DIBLOKIR OLEH POLICY" : null,
    timeOfInterception: `${base.time} WIB`,
    date: "1 Jun 2026",
    aiInsights: [
      {
        id: "1",
        type: "velocity",
        title: "Ditandai untuk Dicek",
        description: "Transaksi ini ditandai oleh aturan skor risiko otomatis.",
        severity: "warning",
      },
    ],
    behavioralBiometrics: [
      { label: "Kecocokan Perangkat", value: 78, threshold: 80 },
      { label: "Konsistensi Lokasi", value: 85, threshold: 70 },
      { label: "Ritme Ketik Sesi", value: 62, threshold: 60 },
      { label: "Pola Navigasi", value: 71, threshold: 75 },
    ],
    blockchainTrace: [
      { id: "1", label: "ASAL PENGIRIM", address: base.sender, type: "origin" },
      { id: "2", label: "Langsung", address: "", type: "direct" },
      { id: "3", label: "PENERIMA", address: base.receiver, type: "receiver" },
    ],
    entityReputation: {
      sender: { walletAge: "1 Tahun", currentBalance: "Rp7.750.000", previousFlags: "Tidak ada", kycStatus: "Tier 1 (Dasar)", kycTier: "basic" },
      receiver: { walletAge: "3 Tahun", currentBalance: "Rp31.000.000", previousFlags: "Tidak ada", kycStatus: "Tier 2 (Terverifikasi)", kycTier: "verified" },
    },
    auditLog: [
      { id: "1", timestamp: `${base.time}.100`, message: "Transaksi diterima dan diproses oleh ShadowShield.", type: "info" },
      { id: "2", timestamp: `${base.time}.400`, message: "Skor risiko selesai dihitung.", type: "info" },
    ],
  }
}
