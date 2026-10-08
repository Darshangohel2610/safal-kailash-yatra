import React from "react";
import PackageCard from "@/components/packages/PackageCard";
import { Search, Compass, ShieldCheck, PhoneCall } from "lucide-react";
import { packageData } from "@/data/packageData";
import { getPackages } from "@/lib/queries/packages";
import PackagesFilterClient from "./PackagesFilterClient";

export const revalidate = 0; // dynamic data from db

export default async function PackagesPage() {
  const packagesList = await getPackages({ includeAll: false });

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-24 bg-footer text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
            alt="Adi Kailash Mountain Range"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent-light text-xs font-extrabold tracking-widest uppercase mb-4">
            Explore Sacred Expeditions
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Adi Kailash & Om Parvat Yatra Packages
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Choose from thoughtfully curated 6-day to 10-day packages with complete 4x4 transfers, local homestays, inner line permits, and expert Kumaoni guides.
          </p>
        </div>
      </section>

      {/* Interactive Client Filter & Grid */}
      <PackagesFilterClient initialPackages={packagesList} />

      {/* Trust & Support Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="bg-purple-surface border border-primary/20 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-heading">Need Custom or Group Booking Assistance?</h3>
              <p className="text-xs sm:text-sm text-body">
                Our Yatra specialists are available to plan customized group departures from any city in India.
              </p>
            </div>
          </div>
          <a
            href={`tel:${packageData.brand.phone}`}
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold text-xs sm:text-sm rounded-xl shadow-md hover:bg-accent-light transition-all"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call {packageData.brand.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
