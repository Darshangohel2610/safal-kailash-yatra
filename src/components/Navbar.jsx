"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { packageData } from "../data/packageData";
import logoImg from "../assets/logo.png";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (pathname?.startsWith("/sanchalak")) {
    return null;
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-3.5 text-heading"
          : "bg-gradient-to-b from-footer/80 via-footer/40 to-transparent py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
          >
            <div className="bg-white p-1.5 px-2.5 rounded-2xl transition-transform duration-300 group-hover:scale-105">
              <img
                src={logoImg.src || logoImg}
                alt="Safal Kailash Yatra"
                className="h-14 sm:h-16 lg:h-18 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {packageData.navLinks.map((link) => {
              const isHashLink = link.href.includes("#");
              const className = `text-sm font-semibold transition-colors hover:text-accent ${
                isScrolled ? "text-heading" : "text-gray-100 hover:text-white"
              }`;

              return isHashLink ? (
                <a key={link.label} href={link.href} className={className}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${packageData.brand.phone}`}
              className={`flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-full border transition-all ${
                isScrolled
                  ? "border-border text-heading hover:border-primary hover:bg-purple-surface"
                  : "border-white/25 text-white hover:bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-accent" />
              <span>{packageData.brand.phone}</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-accent hover:bg-accent-light active:bg-accent rounded-full shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span>Book Now</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#contact"
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-accent rounded-full"
            >
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled
                  ? "text-heading hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white text-heading border-b border-border shadow-xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-3">
              {packageData.navLinks.map((link) => {
                const isHashLink = link.href.includes("#");
                const className =
                  "block px-3 py-2.5 rounded-lg text-base font-semibold text-heading hover:text-primary hover:bg-purple-surface transition-colors";

                return isHashLink ? (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={className}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={className}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href={`tel:${packageData.brand.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 text-sm font-medium text-heading bg-purple-surface rounded-xl"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  <span>Call {packageData.brand.phone}</span>
                </a>

                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 text-sm font-bold text-white bg-accent hover:bg-accent-light rounded-xl shadow-md"
                >
                  <span>Book Your Yatra</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
