"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, ShieldCheck, Star } from 'lucide-react';
import { packageData } from '../data/packageData';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-footer overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: '.hero-prev-btn',
          nextEl: '.hero-next-btn',
        }}
        className="hero-swiper w-full h-full"
      >
        {packageData.heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
                loading={slide.id === 1 ? "eager" : "lazy"}
              />
              {/* Dark Gradient Overlay for optimal legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-footer/85 via-footer/60 to-footer/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-footer/90 via-transparent to-footer/40" />
            </div>

            {/* Slide Content */}
            <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-20 pb-16">
              <div className="max-w-2xl text-white">
                
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/25 border border-accent/40 backdrop-blur-md mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-xs font-bold tracking-wider text-accent-light uppercase">
                    {slide.badge}
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.15]"
                >
                  {slide.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-base sm:text-lg lg:text-xl text-gray-200 mb-8 leading-relaxed font-light"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
                >
                  {/* Primary CTA */}
                  <a
                    href={slide.primaryCtaLink}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-accent hover:bg-accent-light active:bg-accent rounded-2xl shadow-xl shadow-accent/30 hover:shadow-accent/50 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>

                  {/* Secondary PDF Itinerary CTA */}
                  <a
                    href={slide.secondaryCtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 border border-white/30 backdrop-blur-md rounded-2xl transition-all duration-300"
                  >
                    <FileText className="w-5 h-5 text-accent-light" />
                    <span>{slide.secondaryCtaText}</span>
                  </a>
                </motion.div>

                {/* Quick Trust Highlights */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/15 text-xs sm:text-sm text-gray-300"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                    <span>Verified Guides & Homestays</span>
                  </div>
                </motion.div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Side Navigation Arrow Buttons */}
      <button
        aria-label="Previous Slide"
        className="hero-prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-accent border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        aria-label="Next Slide"
        className="hero-next-btn absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-accent border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer">
        <a href="#trust" className="flex flex-col items-center gap-1">
          <span className="text-[11px] font-medium tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-accent-light" />
        </a>
      </div>
    </section>
  );
}
