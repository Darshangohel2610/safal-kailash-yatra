import React from "react";
import { Bus, Truck, Compass } from "lucide-react";

export default function TravelOptions({ travelling = [] }) {
  if (!travelling.length) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xs space-y-4">
      <h2 className="text-xl font-extrabold text-heading">Travelling & Transport</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {travelling.map((item, idx) => {
          const isMountain = item.type.toLowerCase().includes("4x4") || item.type.toLowerCase().includes("bolero");
          const IconComp = isMountain ? Truck : Bus;

          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-purple-surface/40 border border-purple-surface flex items-start gap-3.5"
            >
              <div className="p-3 rounded-xl bg-primary text-white flex-shrink-0 shadow-sm">
                <IconComp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-heading">{item.type}</h3>
                <p className="text-xs text-body font-light mt-0.5 leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
