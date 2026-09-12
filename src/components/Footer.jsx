import React from 'react';
import { Phone, Mail, MapPin, FileText, ChevronRight } from 'lucide-react';
import { packageData } from '../data/packageData';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const { brand, navLinks, itineraryPdf } = packageData;

  return (
    <footer className="bg-footer text-gray-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-block group">
              <div className="bg-white p-2 px-3 rounded-2xl shadow-md border border-gray-100 transition-transform duration-300 group-hover:scale-105 inline-block">
                <img
                  src={logoImg.src || logoImg}
                  alt="Safal Kailash Yatra"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
            </a>


            <p className="text-sm leading-relaxed text-gray-400 font-light pr-4">
              {brand.description}
            </p>


          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-gray-400 hover:text-accent-light transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-accent" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Yatra Information */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Yatra Info</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#why-adi-kailash" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-accent-light transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-accent" />
                  <span>Om Parvat Darshan</span>
                </a>
              </li>
              <li>
                <a href="#why-adi-kailash" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-accent-light transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-accent" />
                  <span>Parvati Kund</span>
                </a>
              </li>
              <li>
                <a
                  href={itineraryPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent-light hover:text-accent font-medium transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Itinerary PDF</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-accent-light transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-accent" />
                  <span>Permit Assistance</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Support & Office</h4>
            
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${brand.phone}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 text-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{brand.phone}</span>
              </a>

              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <div className="p-2 rounded-lg bg-white/5 text-accent">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{brand.email}</span>
              </a>

              <div className="flex items-start gap-3 text-gray-400">
                <div className="p-2 rounded-lg bg-white/5 text-accent mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-xs leading-relaxed">{brand.address}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 {brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-gray-400 transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-gray-400 transition-colors">Cancellation Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
