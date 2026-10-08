import React from "react";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import PackageCard from "../components/packages/PackageCard";
import { getPackages } from "@/lib/queries/packages";

export default async function HomePackagesSection() {
  const packagesList = await getPackages({ includeAll: false });
  const featuredPackages = packagesList.slice(0, 3);

  return (
    <section id="itinerary" className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header with Top-Right "View All Packages" CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-surface text-primary text-xs font-extrabold tracking-wider uppercase mb-3 border border-border">
              Sacred Expeditions
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight">
              Adi Kailash & Om Parvat Packages
            </h2>
            <p className="text-base text-body font-light max-w-xl mt-2">
              Explore our curated yatra packages with 4x4 mountain transfers, homestays, inner line permits, and expert guides.
            </p>
          </div>

          <Link
            href="/packages"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold text-sm rounded-2xl shadow-md transition-all self-start md:self-auto flex-shrink-0"
          >
            <span>View All Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Packages Grid */}
        {featuredPackages.length === 0 ? (
          <div className="py-12 text-center text-gray-500 bg-white rounded-3xl border border-border">
            <Compass className="w-10 h-10 text-gray-300 mx-auto mb-2" />
            <p className="text-sm font-bold text-heading">No packages available right now.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
