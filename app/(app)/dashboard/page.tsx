import { Card } from "@/components/ui/card";
import { AlertCircle, CheckCircle, Clock, TrendingUp } from "lucide-react";

export default function Dashboard() {

  return (
    <div className="w-full h-full mb-[100px] flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Security Operations Center</h1>
        <p className="text-sm text-gray-500">Real-Time AI Fraud Detection & Network Intelligence</p>
      </div>

      <div className="grid grid-cols-4 gap-4 items-center">
        <Card className="p-4 flex flex-col gap-4 w-full">
          <h1 className="text-gray-500 font-semibold">24H VOLUME EVALUATED</h1>
          <h1 className="text-4xl font-bold ">$142.5M</h1>
          <div className="flex flex-row gap-2 items-center text-green-500">
            <TrendingUp />
            <p>+12.5% vs yesterday</p>
          </div>
        </Card>
        <Card className="p-4 flex flex-col gap-4 w-full">
          <h1 className="text-gray-500 font-semibold">FRAUD DETECTION (VALUE)</h1>
          <h1 className="text-4xl font-bold ">$4.29M</h1>
          <div className="flex flex-row gap-2 items-center text-red-500">
            <AlertCircle />
            <p>1.8% of total volume</p>
          </div>
        </Card>
        <Card className="p-4 flex flex-col gap-4 w-full">
          <h1 className="text-gray-500 font-semibold">TRANSACTION HELD</h1>
          <h1 className="text-4xl font-bold ">425</h1>
          <div className="flex flex-row gap-2 items-center text-gray-500">
            <Clock />
            <p>Awaiting manual review</p>
          </div>
        </Card>
        <Card className="p-4 flex flex-col gap-4 w-full">
          <h1 className="text-gray-500 font-semibold">AVG NETWORK RISK SCORE</h1>
          <h1 className="text-4xl font-bold ">14.2 <span className="text-gray-600 text-lg">/ 100</span></h1>
          <div className="flex flex-row gap-2 items-center text-green-500">
            <CheckCircle />
            <p>Normal Baseline</p>
          </div>
        </Card>
      </div>
    </div>
  )
}