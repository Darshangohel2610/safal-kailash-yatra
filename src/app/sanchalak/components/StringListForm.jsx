"use client";

import React from "react";
import { Plus, Trash2 } from "lucide-react";

/**
 * A reusable visual form for editing an array of strings.
 * Used for Highlights, Inclusions, Exclusions, etc.
 * Accepts either `value` or `items` prop for maximum compatibility.
 */
export default function StringListForm({
  label,
  items,
  value,
  onChange,
  placeholder = "Enter item...",
  accentColor = "purple",
  compact = false,
}) {
  const currentItems = Array.isArray(value)
    ? value
    : Array.isArray(items)
    ? items
    : [];

  const addItem = () => {
    onChange([...currentItems, ""]);
  };

  const removeItem = (index) => {
    onChange(currentItems.filter((_, i) => i !== index));
  };

  const updateItem = (index, val) => {
    const updated = [...currentItems];
    updated[index] = val;
    onChange(updated);
  };

  const content = (
    <div className="space-y-3">
      {!compact && label && (
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-extrabold text-heading uppercase tracking-wider">
            {label}
          </h3>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-accent/10 text-accent border-accent/20">
            {currentItems.length} item{currentItems.length !== 1 ? "s" : ""}
          </span>
        </div>
      )}

      {compact && label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-heading">{label}</span>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full border bg-accent/10 text-accent border-accent/20">
            {currentItems.length}
          </span>
        </div>
      )}

      {/* Item List */}
      <div className="space-y-2">
        {currentItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 group">
            <span className="text-[10px] font-bold text-text-muted w-5 text-center flex-shrink-0">
              {idx + 1}.
            </span>
            <input
              type="text"
              value={item}
              onChange={(e) => updateItem(idx, e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-3 py-2 text-sm bg-purple-surface/60 border border-purple-surface rounded-xl text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent"
            />
            <button
              type="button"
              onClick={() => removeItem(idx)}
              className="p-2 text-text-muted hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-colors"
              title="Remove"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={addItem}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-accent/10 text-accent hover:bg-accent/20 transition-all border border-accent/20"
      >
        <Plus className="w-3.5 h-3.5" />
        <span>Add {label ? label.replace(/s$/, "") : "Item"}</span>
      </button>
    </div>
  );

  if (compact) return content;

  return (
    <div className="bg-purple-surface/20 p-4 rounded-2xl border border-purple-surface space-y-3">
      {content}
    </div>
  );
}
