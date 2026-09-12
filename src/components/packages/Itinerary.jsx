import React, { useState } from "react";
import { ChevronDown, FileText, CheckCircle, MapPin, Download } from "lucide-react";

export default function Itinerary({ itinerary = [], pdfUrl = "#" }) {
  const [openDay, setOpenDay] = useState(1);

  if (!itinerary.length) return null;

  const toggleDay = (day) => {
    setOpenDay(openDay === day ? null : day);
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xs space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <h2 className="text-xl font-extrabold text-heading">Day-by-Day Itinerary</h2>
          <p className="text-xs text-body font-light">Detailed route & activities for each day</p>
        </div>

        {/* PDF Download Button */}
        {pdfUrl && (
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-surface border border-primary/20 hover:bg-primary hover:text-white text-primary text-xs font-bold rounded-xl transition-all shadow-xs"
          >
            <FileText className="w-4 h-4 text-accent" />
            <span>Get Detailed Itinerary PDF</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Accordion Timeline */}
      <div className="space-y-3">
        {itinerary.map((item) => {
          const isOpen = openDay === item.day;

          return (
            <div
              key={item.day}
              className={`rounded-2xl border transition-all ${
                isOpen ? "border-primary bg-purple-surface/20" : "border-border bg-white hover:border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleDay(item.day)}
                className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="flex-shrink-0 px-3 py-1 bg-primary text-white text-xs font-extrabold rounded-lg">
                    DAY {item.day < 10 ? `0${item.day}` : item.day}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-heading">{item.title}</h3>
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 border-t border-border/50 text-xs sm:text-sm text-body space-y-3">
                  <p className="font-light leading-relaxed">{item.description}</p>

                  {item.activities?.length > 0 && (
                    <div className="space-y-1.5 pt-1">
                      <span className="block text-[11px] font-extrabold uppercase tracking-wider text-heading">Day Highlights:</span>
                      <ul className="space-y-1 pl-1">
                        {item.activities.map((act, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.overnight && (
                    <div className="flex items-center gap-1.5 text-xs text-primary font-bold pt-2 border-t border-border/40">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      <span>Overnight Stay: {item.overnight}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
