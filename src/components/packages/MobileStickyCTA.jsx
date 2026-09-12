import React from "react";
import { Send } from "lucide-react";

export default function MobileStickyCTA({ price = 32500, onBookNow }) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border p-3 px-4 flex items-center justify-between shadow-2xl">
      <div>
        <span className="block text-[10px] uppercase font-extrabold text-body">Starting Price</span>
        <div className="flex items-baseline gap-1">
          <span className="text-xl font-extrabold text-primary">₹{price.toLocaleString("en-IN")}</span>
          <span className="text-[10px] text-body font-medium">/ person</span>
        </div>
      </div>

      <button
        onClick={onBookNow}
        className="px-6 py-2.5 bg-accent hover:bg-accent-light active:bg-accent text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-1.5"
      >
        <Send className="w-3.5 h-3.5" />
        <span>Enquire Now</span>
      </button>
    </div>
  );
}
