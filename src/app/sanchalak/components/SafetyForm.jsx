"use client";

import React from "react";
import { Plus, Trash2, ShieldCheck, HeartPulse } from "lucide-react";
import StringListForm from "./StringListForm";

/**
 * Visual Editor for Package Safety & Emergency Guidelines.
 * Structure expected by frontend SafetySection.jsx:
 * {
 *   oxygenSupport: "Portable oxygen cylinders available throughout trek",
 *   medicalKit: "First-aid & high altitude sickness meds with guide",
 *   guidelines: ["Hydrate properly", "Inform guide immediately if feeling dizzy"],
 *   emergencyContact: "24/7 Base Camp Support"
 * }
 * OR Array of safety measures.
 */
export default function SafetyForm({ value, onChange }) {
  const isObj = value && typeof value === "object" && !Array.isArray(value);
  const safety = isObj ? value : {};

  const guidelines = isObj ? (safety.guidelines || []) : (Array.isArray(value) ? value : []);
  const oxygenSupport = safety.oxygenSupport || "";
  const medicalKit = safety.medicalKit || "";
  const emergencyContact = safety.emergencyContact || "";

  const updateSafety = (updated) => {
    onChange({
      guidelines,
      oxygenSupport,
      medicalKit,
      emergencyContact,
      ...updated
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
            Oxygen & Medical Support
          </label>
          <input
            type="text"
            value={oxygenSupport}
            onChange={(e) => updateSafety({ oxygenSupport: e.target.value })}
            placeholder="e.g. Portable oxygen cylinders in support vehicle"
            className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
            First Aid & Guide Equipment
          </label>
          <input
            type="text"
            value={medicalKit}
            onChange={(e) => updateSafety({ medicalKit: e.target.value })}
            placeholder="e.g. First-aid kit + Oximeter + BP monitor"
            className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
            24/7 Emergency Assistance Contact
          </label>
          <input
            type="text"
            value={emergencyContact}
            onChange={(e) => updateSafety({ emergencyContact: e.target.value })}
            placeholder="e.g. Dharchula Helpline: +91 XXXXXXXXXX"
            className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent"
          />
        </div>
      </div>

      <div className="bg-purple-surface/30 p-4 border border-purple-surface rounded-2xl">
        <StringListForm
          label="Safety Guidelines & Best Practices"
          value={guidelines}
          onChange={(list) => updateSafety({ guidelines: list })}
          placeholder="e.g. Avoid rapid ascent; stay hydrated with minimum 3-4L water daily"
        />
      </div>
    </div>
  );
}
