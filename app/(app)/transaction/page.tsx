import { Card } from "@/components/ui/card";
import { LiveFeedTable } from "./components/liveFeedTable";

export default function Transaction() {
    return (
        <div className="w-full h-full mb-[100px] flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">Live Transaction Feed</h1>
                <p className="text-sm text-gray-500">Real-Time network monitoring and automated threat intercept</p>
            </div>

            <Card className="p-4 bg-card">
                <LiveFeedTable />
            </Card>
        </div>
    )
}