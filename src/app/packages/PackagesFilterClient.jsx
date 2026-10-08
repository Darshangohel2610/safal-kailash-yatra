"use client";

import React, { useState, useMemo } from "react";
import PackageCard from "@/components/packages/PackageCard";
import { Search, Compass } from "lucide-react";

export default function PackagesFilterClient({ initialPackages = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Extract categories dynamically from packages
  const dynamicCategories = useMemo(() => {
    const cats = new Set(initialPackages.map((p) => p.category).filter(Boolean));
    return ["All", ...Array.from(cats)];
  }, [initialPackages]);

  const filteredPackages = useMemo(() => {
    return initialPackages.filter((pkg) => {
      const matchesCategory =
        selectedCategory === "All" || pkg.category === selectedCategory;
      const matchesSearch =
        (pkg.title || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pkg.shortDescription || "").toLowerCase().includes(searchQuery.toLowerCase()) ||
        (pkg.startingPoint || "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialPackages, selectedCategory, searchQuery]);

  return (
    <>
      {/* Filter Bar & Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-border flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {dynamicCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "bg-purple-surface text-body hover:text-heading hover:bg-purple-surface/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by city, title..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>
      </div>

      {/* Package Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {filteredPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-border p-8">
            <Compass className="w-12 h-12 text-primary mx-auto mb-3 opacity-40" />
            <h3 className="text-xl font-bold text-heading mb-1">No Packages Match Your Filter</h3>
            <p className="text-sm text-body mb-6">Try searching for a different term or clearing your category filter.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-xl shadow-md hover:bg-primary-dark transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </>
  );
}
