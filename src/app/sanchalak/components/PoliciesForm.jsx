"use client";

import React from "react";
import StringListForm from "./StringListForm";

/**
 * Visual Form for Package Policies.
 * Structure expected by frontend PackagePolicies.jsx:
 * {
 *   cancellation: ["Item 1", "Item 2"],
 *   terms: ["Term 1", "Term 2"],
 *   medical: ["Medical rule 1"],
 *   thingsToCarry: ["Warm clothes", "ID Proof"]
 * }
 */
export default function PoliciesForm({ value, onChange }) {
  const policies = value && typeof value === "object" && !Array.isArray(value) ? value : {};

  const handleListChange = (key, list) => {
    onChange({
      ...policies,
      [key]: list
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-purple-surface/30 p-4 border border-purple-surface rounded-2xl">
        <StringListForm
          label="Things to Carry"
          value={policies.thingsToCarry || []}
          onChange={(list) => handleListChange("thingsToCarry", list)}
          placeholder="e.g. Valid Photo ID proof (Aadhar/Passport)"
        />
      </div>

      <div className="bg-purple-surface/30 p-4 border border-purple-surface rounded-2xl">
        <StringListForm
          label="Cancellation & Refund Policy"
          value={policies.cancellation || []}
          onChange={(list) => handleListChange("cancellation", list)}
          placeholder="e.g. 30 days prior: 90% refund"
        />
      </div>

      <div className="bg-purple-surface/30 p-4 border border-purple-surface rounded-2xl">
        <StringListForm
          label="Terms & Conditions"
          value={policies.terms || []}
          onChange={(list) => handleListChange("terms", list)}
          placeholder="e.g. Inner Line Permit approval is subject to local authority"
        />
      </div>

      <div className="bg-purple-surface/30 p-4 border border-purple-surface rounded-2xl">
        <StringListForm
          label="Medical & Fitness Guidelines"
          value={policies.medical || []}
          onChange={(list) => handleListChange("medical", list)}
          placeholder="e.g. Medical fitness certificate required for altitude above 4500m"
        />
      </div>
    </div>
  );
}
