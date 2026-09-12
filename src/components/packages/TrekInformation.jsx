import React from "react";
import { Users, Route, ShieldAlert, Mountain, Calendar, MapPin } from "lucide-react";

export default function TrekInformation({ info }) {
  if (!info) return null;

  const items = [
    { label: "Age Group", value: info.ageGroup, icon: Users },
    { label: "Journey Distance", value: info.distance, icon: Route },
    { label: "Difficulty Grade", value: info.difficulty, icon: ShieldAlert },
    { label: "Max Altitude", value: info.altitude, icon: Mountain },
    { label: "Best Season", value: info.bestSeason, icon: Calendar },
    { label: "Start & End Point", value: `${info.startPoint} → ${info.endPoint}`, icon: MapPin },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xs space-y-4">
      <h2 className="text-xl font-extrabold text-heading">Trek Information</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {items.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div key={idx} className="bg-purple-surface/60 rounded-2xl p-4 border border-purple-surface">
              <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-1">
                <IconComp className="w-3.5 h-3.5 text-accent" />
                <span>{item.label}</span>
              </div>
              <p className="text-sm font-bold text-heading">{item.value || "N/A"}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
