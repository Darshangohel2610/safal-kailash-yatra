import React from "react";
import PackageCard from "./PackageCard";
import { packages } from "../../data/packages";

export default function SimilarPackages({ currentSlug = "" }) {
  const similar = packages.filter((p) => p.slug !== currentSlug).slice(0, 3);

  if (!similar.length) return null;

  return (
    <div className="pt-12 border-t border-border space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h2 className="text-2xl font-extrabold text-heading">Similar Packages</h2>
          <p className="text-xs text-body font-light">Explore other curated Adi Kailash yatra options</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {similar.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}
