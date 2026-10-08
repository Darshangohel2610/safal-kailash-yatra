"use client";

import React, { useState, useId } from "react";
import { ChevronDown, ChevronRight, Copy, Check, AlertCircle, CheckCircle2 } from "lucide-react";

export default function JsonField({ label, value, onChange, sampleFormat, rows = 8, helpText }) {
  const [collapsed, setCollapsed] = useState(true);
  const [copied, setCopied] = useState(false);
  const [jsonError, setJsonError] = useState("");
  const fieldId = useId();

  const handleCopyFormat = async () => {
    try {
      await navigator.clipboard.writeText(
        typeof sampleFormat === "string" ? sampleFormat : JSON.stringify(sampleFormat, null, 2)
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for non-HTTPS
      const textarea = document.createElement("textarea");
      textarea.value = typeof sampleFormat === "string" ? sampleFormat : JSON.stringify(sampleFormat, null, 2);
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const validateJson = (text) => {
    if (!text || text.trim() === "") {
      setJsonError("");
      return;
    }
    try {
      JSON.parse(text);
      setJsonError("");
    } catch (e) {
      setJsonError(e.message);
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(val);
    validateJson(val);
  };

  const handleBlur = () => {
    validateJson(value);
  };

  const isValid = value && value.trim() !== "" && !jsonError;

  const handleFormat = () => {
    if (!value || value.trim() === "") return;
    try {
      const parsed = JSON.parse(value);
      onChange(JSON.stringify(parsed, null, 2));
      setJsonError("");
    } catch (e) {
      setJsonError(e.message);
    }
  };

  return (
    <div className="sm:col-span-2 border border-border rounded-2xl overflow-hidden bg-white">
      {/* Collapsible Header */}
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-between px-5 py-3.5 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <div className="flex items-center gap-2.5">
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-400" />
          ) : (
            <ChevronDown className="w-4 h-4 text-primary" />
          )}
          <span className="text-xs font-extrabold text-heading uppercase tracking-wider">
            {label}
          </span>
          {isValid && (
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
          )}
          {jsonError && (
            <AlertCircle className="w-3.5 h-3.5 text-red-500" />
          )}
        </div>

        {value && value.trim() !== "" && (
          <span className="text-[10px] font-semibold text-body bg-white px-2 py-0.5 rounded-full border border-border">
            Has Data
          </span>
        )}
      </button>

      {/* Collapsible Content */}
      {!collapsed && (
        <div className="px-5 py-4 space-y-3 border-t border-border">
          {helpText && (
            <p className="text-xs text-body leading-relaxed">{helpText}</p>
          )}

          {/* Action Buttons Row */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={handleCopyFormat}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy JSON Format</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleFormat}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold bg-gray-50 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span>✨ Pretty Print</span>
            </button>
          </div>

          {/* Textarea */}
          <textarea
            id={fieldId}
            rows={rows}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={`Paste ${label} JSON here...`}
            spellCheck={false}
            className={`w-full px-4 py-3 text-xs font-mono leading-relaxed bg-background border rounded-xl focus:ring-2 focus:outline-none transition-colors ${
              jsonError
                ? "border-red-300 focus:ring-red-200 bg-red-50/30"
                : isValid
                ? "border-green-300 focus:ring-green-200"
                : "border-border focus:ring-primary"
            }`}
          />

          {/* Validation Message */}
          {jsonError && (
            <div className="flex items-start gap-2 p-2.5 bg-red-50 border border-red-200 rounded-lg">
              <AlertCircle className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
              <p className="text-[11px] text-red-600 font-medium leading-snug">
                Invalid JSON: {jsonError}
              </p>
            </div>
          )}

          {isValid && (
            <div className="flex items-center gap-2 p-2.5 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
              <p className="text-[11px] text-green-600 font-medium">Valid JSON ✓</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
