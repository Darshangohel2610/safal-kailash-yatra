"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Loader2, Image as ImageIcon, FileText } from "lucide-react";
import SectionFieldContainer from "../../components/SectionFieldContainer";
import TrekInfoForm from "../../components/TrekInfoForm";
import StringListForm from "../../components/StringListForm";
import ItineraryForm from "../../components/ItineraryForm";
import PricingForm from "../../components/PricingForm";
import DatesBatchForm from "../../components/DatesBatchForm";
import PoliciesForm from "../../components/PoliciesForm";
import GalleryImagesForm from "../../components/GalleryImagesForm";
import {
  ITINERARY_SAMPLE,
  JOIN_FROM_SAMPLE,
  STAY_OPTIONS_SAMPLE,
  TRAVEL_OPTIONS_SAMPLE,
  PLACES_SAMPLE,
  DEPARTURE_DATES_SAMPLE,
  HIGHLIGHTS_SAMPLE,
  TREK_INFO_SAMPLE,
  INCLUSIONS_SAMPLE,
  EXCLUSIONS_SAMPLE,
  POLICIES_SAMPLE,
} from "../../components/jsonSamples";

export default function CreatePackagePage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    startingPrice: "32500",
    durationDays: "8",
    durationNights: "7",
    startingPoint: "Kathgodam",
    endPoint: "Kathgodam",
    imageUrl: "",
    images: [],
    shortDescription: "",
    about: "",
    featured: true,
    status: "PUBLISHED",
    itineraryPdf: "",
    // JSON fields (stored as strings in form state, parsed on submit)
    highlights: JSON.stringify(HIGHLIGHTS_SAMPLE, null, 2),
    trekInformation: JSON.stringify(TREK_INFO_SAMPLE, null, 2),
    inclusions: JSON.stringify(INCLUSIONS_SAMPLE, null, 2),
    exclusions: JSON.stringify(EXCLUSIONS_SAMPLE, null, 2),
    policies: JSON.stringify(POLICIES_SAMPLE, null, 2),
    itinerary: JSON.stringify(ITINERARY_SAMPLE, null, 2),
    joinFrom: JSON.stringify(JOIN_FROM_SAMPLE, null, 2),
    stayOptions: JSON.stringify(STAY_OPTIONS_SAMPLE, null, 2),
    travelOptions: JSON.stringify(TRAVEL_OPTIONS_SAMPLE, null, 2),
    placesToVisit: JSON.stringify(PLACES_SAMPLE, null, 2),
    departureDates: JSON.stringify(DEPARTURE_DATES_SAMPLE, null, 2),
  });

  const handleTitleChange = (e) => {
    const title = e.target.value;
    const generatedSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
    setFormData({ ...formData, title, slug: generatedSlug });
  };

  const updateField = (field) => (val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.title || !formData.startingPrice) {
      setError("Please fill in required fields (Title and Starting Price).");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          imageUrl: formData.images?.[0] || formData.imageUrl,
          startingPrice: Number(formData.startingPrice),
          durationDays: Number(formData.durationDays),
          durationNights: Number(formData.durationNights),
        }),
      });

      const json = await res.json();
      if (json.success) {
        router.push("/sanchalak");
      } else {
        setError(json.error || "Failed to create package.");
      }
    } catch (err) {
      setError("Network error submitting package.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button & Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/sanchalak"
            className="p-2 bg-white border border-border rounded-xl text-gray-500 hover:text-heading hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-extrabold text-heading">Create New Yatra Package</h1>
            <p className="text-xs text-body">Add a complete package with photo gallery and visual form editors into DB</p>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl">
            {error}
          </div>
        )}

        {/* ═══════════════ SECTION 1: BASIC INFO ═══════════════ */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-border shadow-xs space-y-4">
          <h2 className="text-sm font-extrabold text-heading uppercase tracking-wider mb-5 flex items-center gap-2">
            <span className="w-6 h-6 bg-primary/10 text-primary rounded-lg flex items-center justify-center text-[10px] font-black">1</span>
            Basic Information
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2">
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                Package Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="e.g. Adi Kailash Yatra - Standard 8 Days"
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                URL Slug <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                placeholder="adi-kailash-yatra-8-days"
                className="w-full px-4 py-3 text-sm font-mono bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                Starting Price (₹) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.startingPrice}
                onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                placeholder="32500"
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                Duration Days
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.durationDays}
                onChange={(e) => setFormData({ ...formData, durationDays: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                Duration Nights
              </label>
              <input
                type="number"
                required
                min="0"
                value={formData.durationNights}
                onChange={(e) => setFormData({ ...formData, durationNights: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                Starting Point
              </label>
              <input
                type="text"
                value={formData.startingPoint}
                onChange={(e) => setFormData({ ...formData, startingPoint: e.target.value })}
                placeholder="Kathgodam / Haldwani"
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                Ending Point
              </label>
              <input
                type="text"
                value={formData.endPoint}
                onChange={(e) => setFormData({ ...formData, endPoint: e.target.value })}
                placeholder="Kathgodam / Haldwani"
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                Short Description
              </label>
              <textarea
                rows="2"
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                placeholder="Brief description shown on package cards..."
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                About Overview
              </label>
              <textarea
                rows="4"
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                placeholder="Detailed about section for the package detail page..."
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                Publication Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-3 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <option value="PUBLISHED">Published (Visible on site)</option>
                <option value="DRAFT">Draft (Internal only)</option>
              </select>
            </div>

            <div className="flex items-center gap-3 pt-6">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-5 h-5 accent-primary rounded cursor-pointer"
              />
              <label htmlFor="featured" className="text-sm font-bold text-heading cursor-pointer">
                Mark as Featured Package (Show on Homepage)
              </label>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-extrabold text-heading uppercase tracking-wider mb-2">
                Itinerary PDF URL
              </label>
              <div className="relative">
                <FileText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={formData.itineraryPdf}
                  onChange={(e) => setFormData({ ...formData, itineraryPdf: e.target.value })}
                  placeholder="/itinerary/adi-kailash-yatra.pdf"
                  className="w-full pl-10 pr-4 py-3 text-sm bg-background border border-border rounded-xl focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════ SECTION 2: PHOTO GALLERY ═══════════════ */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-border shadow-xs">
          <GalleryImagesForm
            images={formData.images}
            onChange={updateField("images")}
          />
        </div>

        {/* ═══════════════ SECTION 3: VISUAL FORM EDITORS ═══════════════ */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-border shadow-xs space-y-6">
          <h2 className="text-sm font-extrabold text-heading uppercase tracking-wider mb-2 flex items-center gap-2">
            <span className="w-6 h-6 bg-accent/10 text-accent rounded-lg flex items-center justify-center text-[10px] font-black">2</span>
            Package Details & Sections
          </h2>

          <SectionFieldContainer
            label="Trek Information"
            value={formData.trekInformation}
            onChange={updateField("trekInformation")}
            sampleFormat={TREK_INFO_SAMPLE}
            VisualComponent={TrekInfoForm}
            helpText="Difficulty grade, max altitude, distance, best season, age group, start/end points."
          />

          <SectionFieldContainer
            label="Highlights"
            value={formData.highlights}
            onChange={updateField("highlights")}
            sampleFormat={HIGHLIGHTS_SAMPLE}
            VisualComponent={StringListForm}
            visualProps={{ label: "Package Highlights", placeholder: "e.g. Darshan of Holy Adi Kailash & Om Parvat" }}
            helpText="Key selling points rendered as bullet points on the detail page."
          />

          <SectionFieldContainer
            label="Itinerary (Day-by-Day)"
            value={formData.itinerary}
            onChange={updateField("itinerary")}
            sampleFormat={ITINERARY_SAMPLE}
            VisualComponent={ItineraryForm}
            helpText="Day title, distance, altitude, description, and list of activities per day."
          />

          <SectionFieldContainer
            label="Inclusions"
            value={formData.inclusions}
            onChange={updateField("inclusions")}
            sampleFormat={INCLUSIONS_SAMPLE}
            VisualComponent={StringListForm}
            visualProps={{ label: "Included Items", placeholder: "e.g. Pure vegetarian meals throughout yatra" }}
            helpText="What is included in the package price."
          />

          <SectionFieldContainer
            label="Exclusions"
            value={formData.exclusions}
            onChange={updateField("exclusions")}
            sampleFormat={EXCLUSIONS_SAMPLE}
            VisualComponent={StringListForm}
            visualProps={{ label: "Excluded Items", placeholder: "e.g. Personal expenses, laundry, tips" }}
            helpText="What is NOT included in the package price."
          />

          <SectionFieldContainer
            label="Policies (Cancellation, Terms, Medical & Things to Carry)"
            value={formData.policies}
            onChange={updateField("policies")}
            sampleFormat={POLICIES_SAMPLE}
            VisualComponent={PoliciesForm}
            helpText="Things to carry, cancellation guidelines, terms & conditions, medical rules."
          />

          <SectionFieldContainer
            label="Pricing Options & Tiers"
            value={formData.stayOptions}
            onChange={updateField("stayOptions")}
            sampleFormat={STAY_OPTIONS_SAMPLE}
            VisualComponent={PricingForm}
            helpText="Package tiers (Standard, Deluxe, Luxury) with prices and included features."
          />

          <SectionFieldContainer
            label="Fixed Departure Dates & Batches"
            value={formData.departureDates}
            onChange={updateField("departureDates")}
            sampleFormat={DEPARTURE_DATES_SAMPLE}
            VisualComponent={DatesBatchForm}
            helpText="Batch start/end dates, available seats, and status badges."
          />
        </div>

        {/* ═══════════════ SUBMIT ═══════════════ */}
        <div className="bg-white p-6 rounded-3xl border border-border shadow-xs flex items-center justify-end gap-4">
          <Link
            href="/sanchalak"
            className="px-6 py-3 text-xs font-bold text-body bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent hover:bg-accent-light text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Saving Package...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save & Create Package</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
