import React from "react";
import { Check, X } from "lucide-react";

export default function InclusionsExclusions({ inclusions = [], exclusions = [] }) {
  if (!inclusions.length && !exclusions.length) return null;

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xs space-y-6">
      <h2 className="text-xl font-extrabold text-heading">Inclusions & Exclusions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inclusions Column */}
        <div className="space-y-3 bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100">
          <h3 className="text-sm font-extrabold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-600" />
            Inclusions
          </h3>
          <ul className="space-y-2">
            {inclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-heading leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exclusions Column */}
        <div className="space-y-3 bg-rose-50/40 p-5 rounded-2xl border border-rose-100">
          <h3 className="text-sm font-extrabold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
            <X className="w-4 h-4 text-rose-600" />
            Exclusions
          </h3>
          <ul className="space-y-2">
            {exclusions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-body leading-relaxed">
                <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <X className="w-3 h-3" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
