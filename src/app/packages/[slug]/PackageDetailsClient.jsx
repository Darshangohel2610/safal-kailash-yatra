"use client";

import React, { useState } from "react";
import Link from "next/link";
import PackageGallery from "@/components/packages/PackageGallery";
import PackageHeader from "@/components/packages/PackageHeader";
import AboutTrek from "@/components/packages/AboutTrek";
import TrekInformation from "@/components/packages/TrekInformation";
import JoinFromUs from "@/components/packages/JoinFromUs";
import TravelOptions from "@/components/packages/TravelOptions";
import StayOptions from "@/components/packages/StayOptions";
import DepartureDates from "@/components/packages/DepartureDates";
import Itinerary from "@/components/packages/Itinerary";
import PlacesToVisit from "@/components/packages/PlacesToVisit";
import InclusionsExclusions from "@/components/packages/InclusionsExclusions";
import Policies from "@/components/packages/Policies";
import PackageSummary from "@/components/packages/PackageSummary";
import SimilarPackages from "@/components/packages/SimilarPackages";
import MobileStickyCTA from "@/components/packages/MobileStickyCTA";
import FinalCTA from "@/components/FinalCTA";
import { Compass } from "lucide-react";

export default function PackageDetailsClient({ pkg, slug, allPackages = [] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!pkg) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-background">
        <Compass className="w-16 h-16 text-primary mb-4 opacity-50 animate-pulse" />
        <h1 className="text-3xl font-extrabold text-heading mb-2">Package Not Found</h1>
        <p className="text-body max-w-md mb-6">
          The requested yatra package slug "{slug}" does not exist or has been updated.
        </p>
        <Link
          href="/packages"
          className="px-6 py-3 bg-accent text-white font-bold rounded-xl shadow-md hover:bg-accent-light transition-all"
        >
          View All Packages
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Gallery Hero */}
        <PackageGallery images={pkg.images} title={pkg.title} />

        {/* Package Header */}
        <PackageHeader pkg={pkg} />

        {/* Desktop 70% Main / 30% Sidebar Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Content Area (~70%) */}
          <div className="lg:col-span-8 space-y-8 min-w-0">
            <AboutTrek about={pkg.about} />
            <TrekInformation info={pkg.trekInformation} />
            <JoinFromUs joinFrom={pkg.joinFrom} />
            <TravelOptions travelling={pkg.travelling} />
            <StayOptions stayOptions={pkg.stayOptions} />
            <DepartureDates departureDates={pkg.departureDates} />
            <Itinerary itinerary={pkg.itinerary} pdfUrl={pkg.itineraryPdf} />
            <PlacesToVisit places={pkg.placesToVisit} />
            <InclusionsExclusions inclusions={pkg.inclusions} exclusions={pkg.exclusions} />
            <Policies policies={pkg.policies} />
          </div>

          {/* Sticky Sidebar Area (~30%) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <PackageSummary
              startingPrice={pkg.startingPrice}
              pkg={pkg}
              summary={pkg.summary}
              startingPoint={pkg.startingPoint}
              onBookNow={() => setIsModalOpen(true)}
            />
          </div>
        </div>

        {/* Similar Packages Section */}
        <SimilarPackages currentSlug={pkg.slug} packages={allPackages} />
      </div>

      {/* Mobile Bottom Sticky Bar */}
      <MobileStickyCTA
        price={pkg.startingPrice}
        onBookNow={() => setIsModalOpen(true)}
      />

      {/* Inquiry Form Modal Overlay */}
      <FinalCTA externalOpen={isModalOpen} onExternalClose={() => setIsModalOpen(false)} modalOnly={true} />
    </div>
  );
}
