"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';
import { packageData } from '../data/packageData';

export default function JourneySummary() {
  const { title, subtitle, steps } = packageData.journeyRoute;

  return (
    <section id="itinerary" className="py-20 sm:py-28 bg-white border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-surface text-primary text-xs font-extrabold tracking-wider uppercase mb-3 border border-border">
            8 Days / 7 Nights Expedition
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-body font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Desktop Horizontal Route Flow */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-surface via-primary to-purple-surface transform -translate-y-1/2 z-0" />

            <div className="grid grid-cols-8 gap-3 relative z-10">
              {steps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Node */}
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-primary group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 transform group-hover:scale-110 mb-4">
                    {item.step}
                  </div>

                  {/* Step Info */}
                  <div className="bg-background group-hover:bg-white p-4 rounded-xl border border-border shadow-xs group-hover:shadow-lg group-hover:border-primary/40 transition-all duration-300 w-full">
                    <span className="text-[11px] font-bold text-accent uppercase tracking-wider block mb-1">
                      Day {item.step}
                    </span>
                    <h3 className="text-sm font-bold text-heading mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-body font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Route Flow */}
        <div className="lg:hidden mb-16 space-y-5">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border shadow-xs"
            >
              {/* Step Badge */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shadow-sm">
                {item.step}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-extrabold text-accent uppercase tracking-wider">
                    Day {item.step}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-xs text-body font-medium">{item.subtitle}</span>
                </div>
                <h3 className="text-base font-bold text-heading mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* High-Impact PDF Itinerary Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-br from-footer via-primary-dark to-primary text-white p-8 sm:p-12 shadow-2xl overflow-hidden"
        >
          {/* Subtle Background Accent */}
          <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute top-0 right-1/3 w-48 h-48 bg-primary-light/30 rounded-full blur-2xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent-light text-xs font-bold uppercase tracking-wider mb-4">
                <FileText className="w-3.5 h-3.5" />
                <span>Complete Day-by-Day Guide</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-3">
                Plan Every Step of Your Journey
              </h3>
              <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed">
                Download the complete day-by-day itinerary PDF featuring detailed travel routes, accommodation details, food arrangements, permit requirements, and packing recommendations.
              </p>
            </div>

            <div className="flex-shrink-0 w-full sm:w-auto">
              <a
                href={packageData.itineraryPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-accent hover:bg-accent-light active:bg-accent rounded-2xl shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5 text-white" />
                <span>View Detailed Itinerary PDF</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
