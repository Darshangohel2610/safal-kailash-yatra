"use client";

import React from "react";
import { Plus, Trash2, HelpCircle } from "lucide-react";

/**
 * Visual Editor for Package FAQs.
 * Structure expected by frontend PackageFaq.jsx:
 * Array of objects: [{ question: "Is physical fitness required?", answer: "Yes, basic cardio..." }]
 * OR Object with category keys: { "General": [{ question: "...", answer: "..." }] }
 */
export default function FaqForm({ value, onChange }) {
  // Normalize value to array of Q&As
  const getFaqList = () => {
    if (Array.isArray(value)) return value;
    if (typeof value === "object" && value !== null) {
      // Flatten category object into single list
      const list = [];
      Object.entries(value).forEach(([category, items]) => {
        if (Array.isArray(items)) {
          items.forEach((item) => list.push({ ...item, category }));
        }
      });
      return list;
    }
    return [];
  };

  const faqList = getFaqList();

  const updateFaq = (index, fields) => {
    const next = [...faqList];
    next[index] = { ...next[index], ...fields };
    onChange(next);
  };

  const addFaq = () => {
    const newFaq = {
      question: "",
      answer: ""
    };
    onChange([...faqList, newFaq]);
  };

  const removeFaq = (index) => {
    onChange(faqList.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-text-muted uppercase tracking-wider flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-accent" />
          Frequently Asked Questions ({faqList.length})
        </label>
        <button
          type="button"
          onClick={addFaq}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-accent/10 text-accent hover:bg-accent/20 transition-all border border-accent/20"
        >
          <Plus className="w-3.5 h-3.5" />
          Add Question
        </button>
      </div>

      {faqList.length === 0 ? (
        <div className="p-6 text-center border border-dashed border-purple-surface rounded-2xl bg-purple-surface/30">
          <p className="text-sm text-text-muted mb-3">No FAQs added yet.</p>
          <button
            type="button"
            onClick={addFaq}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-accent text-primary font-bold hover:bg-accent-hover transition-all"
          >
            <Plus className="w-4 h-4" />
            Add First Question
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="bg-purple-surface/40 border border-purple-surface rounded-2xl p-4 space-y-3 relative"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold text-text-muted uppercase mb-1">
                      Question #{index + 1}
                    </label>
                    <input
                      type="text"
                      value={item.question || ""}
                      onChange={(e) => updateFaq(index, { question: e.target.value })}
                      placeholder="e.g. Is an Inner Line Permit required for Adi Kailash?"
                      className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm font-semibold text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-text-muted uppercase mb-1">
                      Answer
                    </label>
                    <textarea
                      rows={2}
                      value={item.answer || ""}
                      onChange={(e) => updateFaq(index, { answer: e.target.value })}
                      placeholder="Detailed answer to the question..."
                      className="w-full px-3 py-2 bg-purple-surface/60 border border-purple-surface rounded-xl text-sm text-text-light placeholder:text-text-muted/50 focus:outline-none focus:border-accent resize-y"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => removeFaq(index)}
                  className="p-2 rounded-xl text-text-muted hover:text-red-400 hover:bg-red-400/10 transition-colors mt-6"
                  title="Remove FAQ"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
