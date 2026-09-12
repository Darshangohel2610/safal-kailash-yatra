import React from "react";
import { Clock, MapPin, Tag } from "lucide-react";

export default function PackageHeader({ pkg }) {
  if (!pkg) return null;

  return (
    <div className="space-y-4">
      {/* Category & Tag Pills */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="px-3.5 py-1 text-xs font-extrabold text-white bg-primary rounded-full uppercase tracking-wider shadow-xs">
          {pkg.category || "Standard Yatra"}
        </span>
        <span className="px-3 py-1 text-xs font-bold text-accent bg-accent/10 border border-accent/20 rounded-full flex items-center gap-1">
          <Tag className="w-3 h-3" />
          <span>Guaranteed Departure</span>
        </span>
      </div>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-4xl font-extrabold text-heading tracking-tight leading-tight">
        {pkg.title}
      </h1>

      {/* Meta Highlights Line */}
      <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-body font-medium pt-1 border-b border-border pb-4">
        <div className="flex items-center gap-1.5 bg-purple-surface px-3 py-1.5 rounded-xl text-primary font-bold">
          <Clock className="w-4 h-4 text-accent" />
          <span>{pkg.duration?.days} Days / {pkg.duration?.nights} Nights</span>
        </div>

        <div className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Starting Point: <strong className="text-heading font-semibold">{pkg.startingPoint}</strong></span>
        </div>
      </div>
    </div>
  );
}
