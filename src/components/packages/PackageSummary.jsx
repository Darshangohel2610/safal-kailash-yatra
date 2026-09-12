import React from "react";
import { CheckCircle2, ShieldCheck, Calendar, PhoneCall, Send, MapPin, Truck, Home } from "lucide-react";
import { packageData } from "../../data/packageData";

export default function PackageSummary({ summary = {}, startingPoint = "", onBookNow }) {
  const price = summary.pricePerPerson || 32500;

  return (
    <div className="bg-white rounded-3xl p-6 border border-border shadow-xl space-y-5">
      {/* Starting Price */}
      <div className="border-b border-border pb-4">
        <span className="text-xs font-extrabold text-body uppercase tracking-wider">Starting Price</span>
        <div className="flex items-baseline gap-1 mt-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-primary">
            ₹{price.toLocaleString("en-IN")}
          </span>
          <span className="text-xs text-body font-medium">/ person</span>
        </div>
        {startingPoint && (
          <p className="text-xs text-body font-medium mt-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>Starts from <strong className="text-heading font-semibold">{startingPoint}</strong></span>
          </p>
        )}
      </div>

      {/* Quick Specs Checklist */}
      <div className="space-y-2.5 text-xs text-heading font-medium">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-accent flex-shrink-0" />
          <span>{summary.transport || "4x4 Mountain Vehicle & AC Bus"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Home className="w-4 h-4 text-accent flex-shrink-0" />
          <span>{summary.stay || "Clean Hotel & Kumaoni Homestays"}</span>
        </div>
        {summary.firstAid && (
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>First Aid & Medical Support Included</span>
          </div>
        )}
        {summary.travelSupport && (
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Inner Line Permit (ILP) Assistance</span>
          </div>
        )}
      </div>

      {/* CTA Buttons */}
      <div className="space-y-2.5 pt-2 border-t border-border">
        <button
          onClick={onBookNow}
          className="w-full py-3.5 px-4 bg-accent hover:bg-accent-light active:bg-accent text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
        >
          <Send className="w-4 h-4" />
          <span>Enquire Now / Book Yatra</span>
        </button>

        <a
          href={`tel:${packageData.brand.phone}`}
          className="w-full py-3 px-4 bg-purple-surface hover:bg-purple-surface/80 text-primary font-bold text-xs rounded-xl border border-primary/20 transition-all flex items-center justify-center gap-2"
        >
          <PhoneCall className="w-3.5 h-3.5 text-accent" />
          <span>Call Yatra Expert ({packageData.brand.phone})</span>
        </a>
      </div>
    </div>
  );
}
