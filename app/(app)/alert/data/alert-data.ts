import { AlertItem } from "../components/alert-card";

export const DUMMY_ALERTS: AlertItem[] = [
  {
    id: "1",
    txId: "TX-992A",
    walletAddress: "0x8A2...9B1",
    title: "Anomali Biometrics Perilaku Terdeteksi",
    riskLevel: "critical",
    riskScore: 94,
    description:
      "Banyak percobaan autentikasi gagal diikuti urutan interaksi perangkat yang terlalu cepat. Alamat tujuan cocok dengan klaster darknet market yang sudah dikenal di Trace Graph.",
    timeAgo: "2 menit lalu",
    icon: "biometrics",
    actions: [
      { label: "Tinjau Insiden", variant: "default", primary: true, icon: "review" },
      { label: "Blokir Wallet", variant: "destructive", icon: "block" },
      { label: "Abaikan", variant: "outline" },
    ],
  },
  {
    id: "2",
    txId: "TX-992F",
    walletAddress: "0x384...7C2",
    title: "Interaksi Wallet Mencurigakan",
    riskLevel: "warning",
    riskScore: 72,
    description:
      "Dana dipindahkan ke wallet yang historinya terhubung dengan crypto mixer yang dikenal. Kecepatan pergerakan dana mengindikasikan potensi structuring. Transaksi saat ini ditahan.",
    timeAgo: "15 menit lalu",
    icon: "wallet",
    actions: [
      { label: "Tinjau Insiden", variant: "default", primary: true, icon: "review" },
      { label: "Tahan Dana", variant: "outline", icon: "hold" },
      { label: "Abaikan", variant: "outline" },
    ],
  },
  {
    id: "3",
    txId: "TX-993B",
    walletAddress: "0x1F2...4C2",
    title: "Anomali Timeout Sesi & Perpindahan IP",
    riskLevel: "medium",
    riskScore: 45,
    description:
      "Sesi user idle selama 45 menit, lalu lanjut dari alamat IP baru yang berjarak jauh dari koneksi sebelumnya. Nominal di bawah ambang, tapi tetap memicu flag perilaku.",
    timeAgo: "42 menit lalu",
    icon: "session",
    actions: [
      { label: "Minta Re-auth", variant: "outline", icon: "reauth" },
      { label: "Tandai Aman", variant: "outline", icon: "safe" },
    ],
  },
  {
    id: "4",
    txId: "TX-994C",
    walletAddress: "0x7A9...1D1",
    title: "Batas Kecepatan Terlampaui",
    riskLevel: "critical",
    riskScore: 88,
    description:
      "Wallet mencoba 12 transfer keluar dengan total besar dalam jendela 5 menit. Polanya cocok dengan signature script sweeping otomatis. Pembekuan otomatis diterapkan.",
    timeAgo: "1 jam lalu",
    icon: "velocity",
    actions: [
      { label: "Tinjau Insiden", variant: "default", primary: true, icon: "review" },
      { label: "Lanjutkan Freeze", variant: "destructive", icon: "freeze" },
    ],
  },
  {
    id: "5",
    txId: "TX-995D",
    walletAddress: "0x3C1...8F4",
    title: "Transfer Cross-Chain Tidak Wajar",
    riskLevel: "warning",
    riskScore: 68,
    description:
      "Terlihat transaksi bridge memindahkan dana lintas tiga chain berbeda dalam 10 menit. Wallet tujuan tidak punya riwayat on-chain sebelumnya.",
    timeAgo: "2 jam lalu",
    icon: "wallet",
    actions: [
      { label: "Tinjau Insiden", variant: "default", primary: true, icon: "review" },
      { label: "Tahan Dana", variant: "outline", icon: "hold" },
      { label: "Abaikan", variant: "outline" },
    ],
  },
  {
    id: "6",
    txId: "TX-996E",
    walletAddress: "0x9B5...2A7",
    title: "Dokumen KYC Tidak Cocok",
    riskLevel: "medium",
    riskScore: 52,
    description:
      "Detail dokumen identitas yang dikirim tidak cocok dengan data yang tersimpan. Skor kepercayaan pengenalan wajah turun di bawah ambang saat verifikasi ulang.",
    timeAgo: "3 jam lalu",
    icon: "session",
    actions: [
      { label: "Minta Re-auth", variant: "outline", icon: "reauth" },
      { label: "Tandai Aman", variant: "outline", icon: "safe" },
    ],
  },
];
