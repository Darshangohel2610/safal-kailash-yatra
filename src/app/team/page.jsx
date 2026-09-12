"use client";

import React, { useState } from "react";
import { teamData } from "@/data/teamData";
import FinalCTA from "@/components/FinalCTA";

export default function TeamPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredMembers = teamData.members.filter(
    (member) => activeCategory === "All" || member.category === activeCategory
  );

  return (
    <div className="bg-background min-h-screen pb-24 pt-24">
      {/* Header Banner */}
      <section className="relative py-16 sm:py-20 bg-footer text-white overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
            alt="Adi Kailash Team Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent-light text-xs font-extrabold tracking-widest uppercase">
            Meet Our Guardians & Guides
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Dedicated Yatra Team
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            The passionate leaders, local Kumaoni coordinators, high-altitude guides, and volunteers ensuring your sacred journey to Adi Kailash is safe and unforgettable.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Leadership Section (Founder, Co-Founder, Directors) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-accent uppercase tracking-wider">Leadership</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-heading tracking-tight mt-1">
              Executive Leadership
            </h2>
            <p className="text-xs sm:text-sm text-body font-light mt-2">
              Guiding our vision with decades of Himalayan pilgrimage experience and local community partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.leadership.map((leader) => (
              <div
                key={leader.id}
                className="group bg-white rounded-3xl overflow-hidden border border-border shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col transform hover:-translate-y-1"
              >
                {/* Image Box */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-100">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-extrabold rounded-full shadow-md">
                    {leader.roleBadge}
                  </span>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-extrabold">{leader.name}</h3>
                    <p className="text-xs font-medium text-accent-light">{leader.position}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-body font-light leading-relaxed">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filters & 6-Per-Line Grid Section */}
        <section className="space-y-8 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-extrabold text-accent uppercase tracking-wider">Our Backbone</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-heading tracking-tight mt-0.5">
                Core Members & Volunteers
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {teamData.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-purple-surface text-body hover:text-heading hover:bg-purple-surface/80"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 6-Column Grid (6 members per line on desktop) */}
          {filteredMembers.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="group bg-white rounded-2xl p-3 border border-border shadow-xs hover:shadow-md hover:border-primary/30 transition-all text-center flex flex-col items-center"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-3 border-2 border-purple-surface group-hover:border-primary transition-all">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-heading group-hover:text-primary transition-colors line-clamp-1">
                    {member.name}
                  </h4>
                  <p className="text-[11px] text-body font-light line-clamp-2 mt-0.5 leading-tight">
                    {member.position}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-body italic text-center py-8">
              No members found in this category.
            </p>
          )}
        </section>
      </div>

      {/* Inquiry Form Modal Overlay */}
      <FinalCTA externalOpen={isModalOpen} onExternalClose={() => setIsModalOpen(false)} modalOnly={true} />
    </div>
  );
}
