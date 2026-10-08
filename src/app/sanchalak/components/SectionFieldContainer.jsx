"use client";

import React, { useState } from "react";
import { Code, Eye } from "lucide-react";
import JsonField from "./JsonField";

/**
 * Container that wraps each section in package creation/editing.
 * Provides a seamless toggle between Visual Form Editor and Raw JSON Editor.
 * Accepts `visualProps` so VisualComponent reference stays STABLE across re-renders.
 */
export default function SectionFieldContainer({
  label,
  value,
  onChange,
  sampleFormat,
  VisualComponent,
  visualProps = {},
  helpText,
}) {
  const [mode, setMode] = useState("visual"); // "visual" | "json"

  // Parse value string to JS Object/Array for visual component
  const getParsedValue = () => {
    if (typeof value === "string") {
      if (!value.trim()) return null;
      try {
        return JSON.parse(value);
      } catch (err) {
        return null;
      }
    }
    return value;
  };

  // When visual component updates JS Object/Array, stringify for formData
  const handleVisualChange = (newVal) => {
    onChange(JSON.stringify(newVal, null, 2));
  };

  const parsedVal = getParsedValue();

  return (
    <div className="bg-purple-surface/30 border border-purple-surface rounded-2xl p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-purple-surface/50">
        <div>
          <h3 className="text-base font-bold text-heading flex items-center gap-2">
            {label}
          </h3>
          {helpText && <p className="text-xs text-text-muted mt-0.5">{helpText}</p>}
        </div>

        {/* Mode Toggle Buttons */}
        <div className="inline-flex items-center p-1 bg-purple-surface/80 rounded-xl border border-purple-surface/60">
          <button
            type="button"
            onClick={() => setMode("visual")}
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              mode === "visual"
                ? "bg-accent text-primary shadow-xs"
                : "text-text-muted hover:text-text-light"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            Visual Form
          </button>
          <button
            type="button"
            onClick={() => setMode("json")}
            className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-lg transition-all ${
              mode === "json"
                ? "bg-accent text-primary shadow-xs"
                : "text-text-muted hover:text-text-light"
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Raw JSON
          </button>
        </div>
      </div>

      {mode === "visual" ? (
        <VisualComponent
          value={parsedVal}
          onChange={handleVisualChange}
          {...visualProps}
        />
      ) : (
        <JsonField
          label={label}
          value={value}
          onChange={onChange}
          sampleFormat={sampleFormat}
          rows={10}
        />
      )}
    </div>
  );
}
