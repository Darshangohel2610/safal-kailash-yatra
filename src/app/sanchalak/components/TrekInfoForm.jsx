"use client";

import React from "react";
import { Users, Route, ShieldAlert, Mountain, Calendar, MapPin } from "lucide-react";

/**
 * Visual form for editing Trek Information — matches the exact keys
 * the frontend TrekInformation.jsx reads:
 *   ageGroup, distance, difficulty, altitude, bestSeason, startPoint, endPoint
 */
export default function TrekInfoForm({ value = {}, onChange }) {
  const update = (field, val) => {
    onChange({ ...value, [field]: val });
  };

  const fields = [
    { key: "ageGroup", label: "Age Group", placeholder: "e.g. 12-60 years", icon: Users },
    { key: "distance", label: "Journey Distance", placeholder: "e.g. ~120 km drive + 35 km trek", icon: Route },
    { key: "difficulty", label: "Difficulty Grade", placeholder: "e.g. Moderate / Difficult", icon: ShieldAlert },
    { key: "altitude", label: "Max Altitude", placeholder: "e.g. 5500m (Adi Kailash)", icon: Mountain },
    { key: "bestSeason", label: "Best Season", placeholder: "e.g. May - October", icon: Calendar },
    { key: "startPoint", label: "Start Point", placeholder: "e.g. Kathgodam", icon: MapPin },
    { key: "endPoint", label: "End Point", placeholder: "e.g. Kathgodam", icon: MapPin },
  ];

  return (
    <div className="bg-white p-5 rounded-2xl border border-border space-y-4">
      <h3 className="text-xs font-extrabold text-heading uppercase tracking-wider">
        Trek Information
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {fields.map((f) => {
          const IconComp = f.icon;
          return (
            <div key={f.key} className="space-y-1.5">
              <label className="flex items-center gap-1.5 text-[11px] font-bold text-body uppercase tracking-wider">
                <IconComp className="w-3.5 h-3.5 text-primary" />
                {f.label}
              </label>
              <input
                type="text"
                value={value[f.key] || ""}
                onChange={(e) => update(f.key, e.target.value)}
                placeholder={f.placeholder}
                className="w-full px-3 py-2.5 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none transition-colors"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
