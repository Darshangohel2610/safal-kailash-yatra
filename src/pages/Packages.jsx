import React, { useState, useMemo } from "react";
import { packages } from "../data/packages";
import PackageCard from "../components/packages/PackageCard";
import { Search, Compass, ShieldCheck, PhoneCall, Sparkles } from "lucide-react";
import { packageData } from "../data/packageData";

export default function Packages() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Standard Yatra", "Express Yatra", "VIP & Deluxe Yatra"];

  const filteredPackages = useMemo(() => {
    return packages.filter((pkg) => {
      const matchesCategory =
        selectedCategory === "All" || pkg.category === selectedCategory;
      const matchesSearch =
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.startingPoint.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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

      {/* Filter Bar & Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 border border-border flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((category) => (
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
              placeholder="Search by city, duration..."
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
