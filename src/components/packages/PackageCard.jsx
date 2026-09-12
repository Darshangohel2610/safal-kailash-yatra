import React from "react";
import { Link } from "react-router-dom";
import { Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function PackageCard({ pkg }) {
  if (!pkg) return null;

  return (
    <div className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-gray-100">
        <img
          src={pkg.images?.[0]}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Category Pill */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold text-white bg-primary/90 backdrop-blur-md rounded-full shadow-sm">
          {pkg.category || "Sacred Yatra"}
        </span>

        {/* Duration Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-heading shadow-md">
          <Clock className="w-3.5 h-3.5 text-accent" />
          <span>{pkg.duration?.days} Days / {pkg.duration?.nights} Nights</span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Starting Location */}
          <div className="flex items-center gap-1.5 text-xs text-body font-medium mb-2">
            <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>Starts from: <strong className="text-heading font-semibold">{pkg.startingPoint}</strong></span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-extrabold text-heading group-hover:text-primary transition-colors line-clamp-2 mb-3 leading-snug">
            {pkg.title}
          </h3>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-6">
            {pkg.highlights?.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-body leading-relaxed">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Pricing & CTA */}
        <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
          <div>
            <span className="block text-[10px] uppercase tracking-wider font-extrabold text-body">Starting Price</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-extrabold text-primary">₹{pkg.startingPrice?.toLocaleString("en-IN")}</span>
              <span className="text-xs text-body font-medium">/ person</span>
            </div>
          </div>

          <Link
            to={`/packages/${pkg.slug}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent hover:bg-accent-light text-white text-xs font-bold rounded-xl shadow-md transition-all group-hover:shadow-lg"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
