"use client";

import React from "react";
import { Plus, Trash2, FileCheck, ShieldAlert } from "lucide-react";
import StringListForm from "./StringListForm";

/**
 * Visual Editor for Package Permits & Requirements.
 * Structure expected by frontend PermitsSection.jsx:
 * {
 *   requiredDocs: ["Aadhar Card", "Medical Fitness Certificate", "Passport Photos"],
 *   permitInfo: "Inner Line Permit (ILP) issued by SDM Dharchula",
 *   notes: ["Non-Indian citizens require special clearance"]
 * }
 * OR Array of required documents/permits.
 */
export default function PermitsForm({ value, onChange }) {
  const isObj = value && typeof value === "object" && !Array.isArray(value);
  const permits = isObj ? value : {};

  // If value is simple array, wrap into requiredDocs
  const requiredDocs = isObj ? (permits.requiredDocs || []) : (Array.isArray(value) ? value : []);
  const permitInfo = permits.permitInfo || "";
  const notes = permits.notes || [];

  const updatePermits = (updated) => {
    onChange({
      requiredDocs,
      permitInfo,
      notes,
      ...updated
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 flex items-center gap-1.5">
          <FileCheck className="w-4 h-4 text-accent" />
          Permit Description / Overview
        </label>
        <textarea
          rows={2}
          value={permitInfo}
          onChange={(e) => updatePermits({ permitInfo: e.target.value })}
          placeholder="e.g. Inner Line Permit (ILP) is compulsory and will be issued at Dharchula SDM office with assistance from our team."
          className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent resize-y"
        />
      </div>

      <div className="bg-purple-surface/30 p-4 border border-purple-surface rounded-2xl">
        <StringListForm
          label="Required Documents for Permit"
          value={requiredDocs}
          onChange={(list) => updatePermits({ requiredDocs: list })}
          placeholder="e.g. Original Aadhaar Card + 4 Passport Size Photos"
        />
      </div>

      <div className="bg-purple-surface/30 p-4 border border-purple-surface rounded-2xl">
        <StringListForm
          label="Important Permit Notes & Guidelines"
          value={notes}
          onChange={(list) => updatePermits({ notes: list })}
          placeholder="e.g. Police verification report required for certain regions"
        />
      </div>
    </div>
  );
}
