import React from "react";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export default function JoinFromUs({ joinFrom = [] }) {
  if (!joinFrom.length) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xs space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-heading">Join From Us</h2>
        <span className="text-xs text-body font-medium">Multiple departure cities</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {joinFrom.map((item, idx) => (
          <div
            key={idx}
            className="p-4 rounded-2xl bg-purple-surface/50 border border-border hover:border-primary/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-base font-extrabold text-heading flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  {item.city}
                </span>
                <span className="text-sm font-extrabold text-primary bg-white px-2.5 py-1 rounded-lg shadow-xs">
                  ₹{item.pricePerPerson?.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="space-y-1 text-xs text-body">
                {item.pickupPoint && (
                  <p className="flex items-center gap-1">
                    <strong className="text-heading font-semibold">Pickup:</strong> {item.pickupPoint}
                  </p>
                )}
                {item.departureTime && (
                  <p className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-accent inline" />
                    <span><strong className="text-heading font-semibold">Timing:</strong> {item.departureTime}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
