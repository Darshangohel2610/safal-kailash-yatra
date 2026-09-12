import React, { useState } from "react";
import { ChevronDown, ShieldCheck, Backpack, FileText } from "lucide-react";

export default function Policies({ policies = {} }) {
  const [openSection, setOpenSection] = useState("carry");

  if (!policies) return null;

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xs space-y-4">
      <h2 className="text-xl font-extrabold text-heading">Quick Information & Policies</h2>

      <div className="space-y-3">
        {/* Things to Carry */}
        {policies.thingsToCarry?.length > 0 && (
          <div className="rounded-2xl border border-border overflow-hidden">
            <button
              onClick={() => toggleSection("carry")}
              className="w-full p-4 flex items-center justify-between text-left bg-purple-surface/30 hover:bg-purple-surface/50 transition-colors"
            >
              <span className="text-sm font-bold text-heading flex items-center gap-2">
                <Backpack className="w-4 h-4 text-accent" />
                Things to Carry
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openSection === "carry" ? "rotate-180 text-primary" : ""}`} />
            </button>
            {openSection === "carry" && (
              <div className="p-4 border-t border-border bg-white">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-body">
                  {policies.thingsToCarry.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Cancellation Policy */}
        {policies.cancellation && (
          <div className="rounded-2xl border border-border overflow-hidden">
            <button
              onClick={() => toggleSection("cancellation")}
              className="w-full p-4 flex items-center justify-between text-left bg-purple-surface/30 hover:bg-purple-surface/50 transition-colors"
            >
              <span className="text-sm font-bold text-heading flex items-center gap-2">
                <FileText className="w-4 h-4 text-accent" />
                Cancellation & Refund Policy
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openSection === "cancellation" ? "rotate-180 text-primary" : ""}`} />
            </button>
            {openSection === "cancellation" && (
              <div className="p-4 border-t border-border bg-white text-xs text-body leading-relaxed">
                {policies.cancellation}
              </div>
            )}
          </div>
        )}

        {/* Terms & Conditions */}
        {policies.termsAndConditions && (
          <div className="rounded-2xl border border-border overflow-hidden">
            <button
              onClick={() => toggleSection("terms")}
              className="w-full p-4 flex items-center justify-between text-left bg-purple-surface/30 hover:bg-purple-surface/50 transition-colors"
            >
              <span className="text-sm font-bold text-heading flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-accent" />
                Terms & Conditions
              </span>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${openSection === "terms" ? "rotate-180 text-primary" : ""}`} />
            </button>
            {openSection === "terms" && (
              <div className="p-4 border-t border-border bg-white text-xs text-body leading-relaxed">
                {policies.termsAndConditions}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
