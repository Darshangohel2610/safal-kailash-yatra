"use client";

import React from "react";
import { Plus, Trash2, CheckCircle2, ShieldCheck } from "lucide-react";

/**
 * Visual Editor for Package Pricing Tier Options.
 * Structure expected by frontend PricingCard.jsx / PackagePricing.jsx:
 * {
 *   standard: { title: "Standard Package", price: "₹28,500", sharing: "Triple Sharing", features: [...] },
 *   deluxe: { title: "Deluxe Package", price: "₹35,000", sharing: "Double Sharing", features: [...] },
 * }
 * OR array of options: [{ category: "Standard", price: 28500, sharing: "Triple", features: [...] }]
 */
export default function PricingForm({ value, onChange }) {
  // Normalize value to object format with keys or array
  const rawPricing = value || {};

  // Convert raw pricing object or array into normalized list for UI editing
  const getInitialOptions = () => {
    if (Array.isArray(rawPricing)) {
      return rawPricing;
    }
    if (typeof rawPricing === "object" && rawPricing !== null) {
      return Object.entries(rawPricing).map(([key, val]) => ({
        key,
        title: val.title || key,
        price: val.price || "",
        sharing: val.sharing || "",
        features: Array.isArray(val.features) ? val.features : [],
        isPopular: !!val.isPopular
      }));
    }
    return [];
  };

  const options = getInitialOptions();

  const handleUpdate = (newList) => {
    // Reconstruct object format key -> object
    const resultObj = {};
    newList.forEach((opt, idx) => {
      const keyName = opt.key || `tier_${idx + 1}`;
      resultObj[keyName] = {
        title: opt.title,
        price: opt.price,
        sharing: opt.sharing,
        features: opt.features,
        isPopular: opt.isPopular
      };
    });
    onChange(resultObj);
  };

  const updateOption = (index, fields) => {
    const next = [...options];
    next[index] = { ...next[index], ...fields };
    handleUpdate(next);
  };

  const addOption = () => {
    const newOpt = {
      key: `tier_${options.length + 1}`,
      title: "New Tier",
      price: "₹30,000",
      sharing: "Double Sharing",
      features: ["Accommodation", "All Meals", "Permits"],
      isPopular: false
    };
    handleUpdate([...options, newOpt]);
  };

  const removeOption = (index) => {
    const next = options.filter((_, i) => i !== index);
    handleUpdate(next);
  };

  const updateFeature = (optIdx, featIdx, text) => {
    const currentFeats = options[optIdx]?.features || [];
    const nextFeats = [...currentFeats];
    nextFeats[featIdx] = text;
    updateOption(optIdx, { features: nextFeats });
  };

  const addFeature = (optIdx) => {
    const currentFeats = options[optIdx]?.features || [];
    updateOption(optIdx, { features: [...currentFeats, ""] });
  };

  const removeFeature = (optIdx, featIdx) => {
    const currentFeats = options[optIdx]?.features || [];
    const nextFeats = currentFeats.filter((_, i) => i !== featIdx);
    updateOption(optIdx, { features: nextFeats });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-text-muted uppercase tracking-wider">
          Pricing Tiers ({options.length})
        </label>
        <button
          type="button"
          onClick={addOption}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-accent/10 text-accent hover:bg-accent/20 transition-all border border-accent/20"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Pricing Tier
        </button>
      </div>

      {options.length === 0 ? (
        <div className="p-6 text-center border border-dashed border-purple-surface rounded-2xl bg-purple-surface/30">
          <p className="text-sm text-text-muted mb-3">No pricing tiers configured.</p>
          <button
            type="button"
            onClick={addOption}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-accent text-primary font-bold hover:bg-accent-hover transition-all"
          >
            <Plus className="w-4 h-4" />
            Add Pricing Tier
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {options.map((opt, optIdx) => (
            <div
              key={optIdx}
              className="bg-purple-surface/40 border border-purple-surface rounded-2xl p-4 space-y-4 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-2.5 py-1 rounded-lg">
                  Tier {optIdx + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeOption(optIdx)}
                  className="p-1.5 rounded-lg text-text-muted hover:text-red-400 hover:bg-red-400/10 transition-colors"
                  title="Remove Tier"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-text-muted uppercase mb-1">
                    Tier Name / Title
                  </label>
                  <input
                    type="text"
                    value={opt.title || ""}
                    onChange={(e) => updateOption(optIdx, { title: e.target.value })}
                    placeholder="e.g. Standard Package"
                    className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-text-muted uppercase mb-1">
                    Price
                  </label>
                  <input
                    type="text"
                    value={opt.price || ""}
                    onChange={(e) => updateOption(optIdx, { price: e.target.value })}
                    placeholder="e.g. ₹28,500"
                    className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-text-muted uppercase mb-1">
                    Sharing Type
                  </label>
                  <input
                    type="text"
                    value={opt.sharing || ""}
                    onChange={(e) => updateOption(optIdx, { sharing: e.target.value })}
                    placeholder="e.g. Triple Sharing / Per Person"
                    className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light focus:outline-none focus:border-accent"
                  />
                </div>

                <div className="col-span-2 sm:col-span-1 flex items-end">
                  <label className="flex items-center gap-2 cursor-pointer pb-2">
                    <input
                      type="checkbox"
                      checked={!!opt.isPopular}
                      onChange={(e) => updateOption(optIdx, { isPopular: e.target.checked })}
                      className="w-4 h-4 accent-accent rounded"
                    />
                    <span className="text-xs font-semibold text-text-light">
                      Mark as "Most Popular"
                    </span>
                  </label>
                </div>
              </div>

              {/* Features included in this tier */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Included Features
                  </label>
                  <button
                    type="button"
                    onClick={() => addFeature(optIdx)}
                    className="text-xs text-accent hover:underline flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" /> Add Feature
                  </button>
                </div>

                {(opt.features || []).map((feat, featIdx) => (
                  <div key={featIdx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                    <input
                      type="text"
                      value={feat}
                      onChange={(e) => updateFeature(optIdx, featIdx, e.target.value)}
                      placeholder="e.g. Hotel / Homestay accommodation"
                      className="flex-1 px-3 py-1 bg-purple-surface/60 border border-purple-surface rounded-lg text-xs text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent"
                    />
                    <button
                      type="button"
                      onClick={() => removeFeature(optIdx, featIdx)}
                      className="p-1 rounded text-text-muted hover:text-red-400"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
