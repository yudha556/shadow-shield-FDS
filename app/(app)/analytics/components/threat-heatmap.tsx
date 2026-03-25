'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css"; 

type Region = {
    label: string;
    lat: number;
    lng: number;
    level: "high" | "medium" | "low";
};

const regions: Region[] = [
    { label: "North America", lat: 54, lng: -105, level: "medium" },
    { label: "Eastern Europe", lat: 50, lng: 30, level: "high" },
    { label: "Southeast Asia", lat: -2, lng: 118, level: "medium" },
];

const colors: Record<Region["level"], string> = {
    high: "#ef4444",   
    medium: "#f59e0b",
    low: "#22c55e",   
};

export function ThreatHeatmap() {
    return (
        <>
            <style jsx global>{`
                @keyframes leaflet-ping {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    80% {
                        transform: scale(2.2);
                        opacity: 0;
                    }
                    100% {
                        transform: scale(2.2);
                        opacity: 0;
                    }
                }
                
                /* Target fill dari CircleMarker untuk animasi */
                .blinking-marker path.leaflet-interactive:last-of-type {
                    animation: leaflet-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
                    transform-origin: center;
                }
                
                /* Memastikan stroke (garis pinggir) tidak ikut animasi scale biar rapi */
                .blinking-marker path.leaflet-interactive:first-of-type {
                    animation: none;
                }
            `}</style>

            <Card className="bg-card border-border/60 shadow-lg">
                <CardHeader className="pb-2 pt-5 px-5">
                    <CardTitle className="text-sm font-semibold text-foreground tracking-tight">
                        Global Threat Heatmap
                    </CardTitle>
                </CardHeader>

                <CardContent className="px-5 pb-5">
                    <div 
                        className="relative w-full h-[300px] rounded-lg overflow-hidden border border-border/30 shadow-inner"
                        style={{ backgroundColor: "#242424" }} 
                    >                    
                        <MapContainer
                            center={[30, 0]}
                            zoom={0}
                            zoomSnap={0.5}
                            zoomDelta={0.5}
                            minZoom={1}
                            maxZoom={4}
                            
                            bounds={[
                                [-65, -160],
                                [75, 170],  
                            ]}
                            boundsOptions={{ padding: [10, 10] }}
                            
                            maxBounds={[
                                [-85, -180],
                                [85, 180],
                            ]}
                            maxBoundsViscosity={1.0}
                            
                            dragging={false}
                            zoomControl={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}
                            touchZoom={false}
                            boxZoom={false}
                            keyboard={false}
                            attributionControl={false}
                            style={{ height: "100%", width: "100%", background: 'transparent' }} 
                        >
                            <TileLayer 
                                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" 
                                noWrap={true}
                            />

                            {regions.map((r) => (
                                <CircleMarker
                                    key={r.label}
                                    center={[r.lat, r.lng]}
                                    radius={4} 
                                    pathOptions={{
                                        color: colors[r.level],    
                                        fillColor: colors[r.level],
                                        fillOpacity: 0.8,
                                        weight: 1.5,
                                        className: 'blinking-marker' 
                                    }}
                                >
                                    <Tooltip
                                        direction="top"
                                        offset={[0, -5]}
                                        opacity={1}
                                        className="!bg-black/95 !text-white !border !border-white/10 !rounded-md !px-2.5 !py-1.5 !text-xs !shadow-xl"
                                    >
                                        <div className="flex flex-col gap-0.5">
                                            <span className="font-semibold">{r.label}</span>
                                            <span className="text-[10px] opacity-80 flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: colors[r.level] }}></span>
                                                Risk: <span className="capitalize font-medium text-white/90">{r.level}</span>
                                            </span>
                                        </div>
                                    </Tooltip>
                                </CircleMarker>
                            ))}
                        </MapContainer>

                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#242424]/90 to-transparent" />
                    </div>
                </CardContent>
            </Card>
        </>
    );
}