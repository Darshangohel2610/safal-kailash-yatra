import React, { useState } from "react";
import { Calendar as CalendarIcon, CheckCircle2, AlertCircle, XCircle } from "lucide-react";

export default function DepartureDates({ departureDates = {} }) {
  const months = Object.keys(departureDates);
  const [selectedMonth, setSelectedMonth] = useState(months[0] || "");

  if (!months.length) return null;

  const currentDates = departureDates[selectedMonth] || [];

  const getStatusBadge = (status) => {
    switch (status) {
      case "available":
        return {
          label: "Available",
          bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
          icon: CheckCircle2,
        };
      case "limited":
        return {
          label: "Limited Seats",
          bg: "bg-amber-50 text-amber-700 border-amber-200",
          icon: AlertCircle,
        };
      case "soldout":
        return {
          label: "Sold Out",
          bg: "bg-red-50 text-red-700 border-red-200",
          icon: XCircle,
        };
      default:
        return {
          label: "Available",
          bg: "bg-emerald-50 text-emerald-700 border-emerald-200",
          icon: CheckCircle2,
        };
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xs space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-extrabold text-heading">Departure Dates</h2>
        <span className="text-xs text-body font-medium flex items-center gap-1">
          <CalendarIcon className="w-3.5 h-3.5 text-accent" />
          Yatra Season 2026
        </span>
      </div>

      {/* Month Selector Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {months.map((month) => (
          <button
            key={month}
            onClick={() => setSelectedMonth(month)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              selectedMonth === month
                ? "bg-primary text-white shadow-md"
                : "bg-purple-surface text-body hover:text-heading hover:bg-purple-surface/80"
            }`}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Date Cards Grid */}
      <div className="pt-2">
        {currentDates.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {currentDates.map((item, idx) => {
              const badge = getStatusBadge(item.status);
              const IconComp = badge.icon;
              const formattedDate = new Date(item.date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              });

              return (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border flex flex-col justify-between items-center text-center transition-all ${
                    item.status === "soldout"
                      ? "opacity-60 bg-gray-50 border-gray-200"
                      : "bg-purple-surface/30 border-border hover:border-primary/40"
                  }`}
                >
                  <span className="text-sm font-extrabold text-heading mb-1.5">{formattedDate}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border flex items-center gap-1 ${badge.bg}`}>
                    <IconComp className="w-3 h-3" />
                    <span>{badge.label}</span>
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-xs text-body italic text-center py-4">No departures scheduled for {selectedMonth}.</p>
        )}
      </div>
    </div>
  );
}
