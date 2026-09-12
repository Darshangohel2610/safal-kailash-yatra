"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Headset } from 'lucide-react';
import { packageData } from '../data/packageData';

const iconMap = {
  Compass: Compass,
  ShieldCheck: ShieldCheck,
  Headset: Headset,
};

export default function TrustFeatures() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-surface text-primary text-xs font-extrabold tracking-wider uppercase mb-3 border border-border">
            {packageData.trustHeader?.badge || "Why Pilgrims Choose Us"}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading tracking-tight">
            {packageData.trustHeader?.title || "Designed for Trust, Comfort & Peace of Mind"}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {packageData.trustFeatures.map((feature, index) => {
            const IconComponent = iconMap[feature.iconName] || Compass;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-background hover:bg-white p-8 rounded-3xl border border-border shadow-xs hover:shadow-xl hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-start"
              >
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-purple-surface group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center mb-6 transition-colors duration-300 shadow-inner">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-heading mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-body leading-relaxed font-normal">
                  {feature.description}
                </p>

                {/* Bottom Decorative Line */}
                <div className="mt-6 w-10 h-1 bg-accent/30 group-hover:w-16 group-hover:bg-accent rounded-full transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
