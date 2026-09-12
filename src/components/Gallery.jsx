import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { packageData } from '../data/packageData';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const categories = ['All', 'Peak', 'Lake', 'Darshan', 'Culture', 'Route'];

  const filteredImages = selectedFilter === 'All'
    ? packageData.galleryImages
    : packageData.galleryImages.filter(img => img.category === selectedFilter);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-surface text-primary text-xs font-extrabold tracking-wider uppercase mb-3 border border-border">
            Visual Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-heading tracking-tight mb-4">
            Captivating Himalayan Gallery
          </h2>
          <p className="text-base sm:text-lg text-body font-light leading-relaxed">
            Glance at the sacred peaks, crystal lakes, mountain valleys, and vibrant Kumaoni villages awaiting your arrival.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-4.5 py-2 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 ${
                selectedFilter === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-heading hover:bg-purple-surface border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group relative rounded-2xl overflow-hidden shadow-md bg-footer border border-border ${
                item.aspect === 'large' ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
              }`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Hover Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-footer/85 via-footer/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Image Info Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between z-10">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-accent/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  <Camera className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
