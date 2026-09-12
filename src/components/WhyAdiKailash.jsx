"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Eye,
  Mountain,
  UserCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { packageData } from "../data/packageData";

const iconMap = {
  Sparkles: Sparkles,
  Droplets: Droplets,
  Eye: Eye,
  Mountain: Mountain,
  UserCheck: UserCheck,
};

export default function WhyAdiKailash() {
  const {
    heading,
    subheading,
    mainImage,
    points,
    badge,
    elevation,
    location,
    quote,
    includesBadgeTitle,
    includesBadgeText,
  } = packageData.whyAdiKailash;

  return (
    <section
      id="why-kailash-yatra"
      className="py-20 sm:py-28 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
              <img
                src={mainImage}
                alt="Adi Kailash Peak & Valleys"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-footer/80 via-transparent to-transparent" />

              {/* Overlay Content Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent text-white">
                    <Mountain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-heading">
                      {elevation}
                    </h4>
                    <p className="text-xs text-body">
                      {location}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-body italic">
                  "{quote}"
                </p>
              </div>
            </div>

            {/* Floating Decorative Accent Card */}
            <div className="hidden sm:flex absolute -top-6 -right-6 bg-primary text-white p-4.5 rounded-2xl shadow-xl items-center gap-3 border border-white/20">
              <CheckCircle2 className="w-6 h-6 text-accent-light" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-accent-light">
                  {includesBadgeTitle || "Includes"}
                </p>
                <p className="text-sm font-semibold">
                  {includesBadgeText || "Om Parvat & Parvati Kund"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Header */}
            <div className="mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-surface text-primary text-xs font-extrabold tracking-wider uppercase mb-3 border border-border">
                {badge || "Sacred Exploration"}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight mb-4">
                {heading}
              </h2>
              <a
                href="https://en.wikipedia.org/wiki/Adi_Kailash"
                target="_blank"
                rel="noopener noreferrer"
                className="inline text-base sm:text-lg text-body font-light leading-relaxed hover:text-primary transition-colors group"
              >
                {subheading}{" "}
                <ExternalLink className="inline-block w-4 h-4 ml-1 text-primary opacity-70 group-hover:opacity-100 transition-opacity align-baseline" />
              </a>
            </div>

            {/* Points List */}
            <div className="space-y-4">
              {points.map((point, index) => {
                const IconComp = iconMap[point.icon] || Sparkles;
                return (
                  <motion.div
                    key={point.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-border shadow-xs hover:shadow-md hover:border-primary/40 transition-all"
                  >
                    <div className="flex-shrink-0 p-3 rounded-xl bg-purple-surface text-primary mt-1">
                      <IconComp className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-heading mb-1">
                        {point.title}
                      </h3>
                      <p className="text-sm text-body leading-relaxed">
                        {point.content}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
