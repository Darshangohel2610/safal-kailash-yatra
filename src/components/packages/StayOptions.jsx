import React from "react";
import { Home, Hotel, BedDouble, Plus } from "lucide-react";

export default function StayOptions({ stayOptions = [] }) {
  if (!stayOptions.length) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xs space-y-4">
      <h2 className="text-xl font-extrabold text-heading">Stay Options & Accommodation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stayOptions.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-purple-surface/40 border border-purple-surface flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-bold text-heading flex items-center gap-2">
                  <Home className="w-4 h-4 text-accent flex-shrink-0" />
                  {item.title}
                </span>
                {item.priceAdjustment > 0 && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    +₹{item.priceAdjustment?.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              <p className="text-xs text-body font-light leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
