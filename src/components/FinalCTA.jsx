import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  Send,
  X,
  Calendar,
  User,
  Users,
  CheckCircle2,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { packageData } from "../data/packageData";
import { submitInquiry } from "../services/inquiryService";

export default function FinalCTA({ externalOpen = false, onExternalClose, modalOnly = false }) {
  const [internalModalOpen, setInternalModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pilgrims: "2",
    message: "",
  });

  const isModalOpen = externalOpen || internalModalOpen;
  const setIsModalOpen = (state) => {
    setInternalModalOpen(state);
    if (!state && onExternalClose) {
      onExternalClose();
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const phoneDigits = formData.phone.replace(/[\s\-\+\(\)]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phoneDigits)) {
      newErrors.phone = "Enter a valid 10-digit mobile number.";
    }

    if (formData.message.length > 500) {
      newErrors.message = "Message cannot exceed 500 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitInquiry({
        name: formData.name,
        phone: formData.phone,
        pilgrims: formData.pilgrims,
        message: formData.message,
      });

      const targetPhone = packageData.brand.whatsapp.replace(/[^\d]/g, "");
      const waText = `Hello Safal Kailash Yatra Team!\n\nI have submitted a booking enquiry on your website.\n\n *Enquiry Details:*\n• *Name:* ${formData.name}\n• *Phone number:* ${formData.phone}\n• *Pilgrims Count:* ${formData.pilgrims}\n• *Message/Queries:* ${formData.message || "N/A"}\n\nPlease share more details`;
      
      const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodeURIComponent(waText)}`;
      window.open(whatsappUrl, "_blank");

      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setIsModalOpen(false);
        setFormData({ name: "", phone: "", pilgrims: "2", message: "" });
        setErrors({});
      }, 3000);
    } catch (error) {
      setErrorMessage(
        error.message || "Failed to submit inquiry. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderModal = () => (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white text-heading rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-border"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-heading">
                  Enquiry Received!
                </h3>
                <p className="text-sm text-body">
                  Thank you, {formData.name}. Our yatra coordinator will
                  contact you at {formData.phone} within 2 hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-extrabold text-accent uppercase tracking-wider">
                    Plan Your Pilgrimage
                  </span>
                  <h3 className="text-2xl font-extrabold text-heading">
                    Yatra Booking Enquiry
                  </h3>
                  <p className="text-xs text-body mt-1">
                    Fill details below for batch availability, pricing, &
                    permit assistance.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  noValidate
                >
                  <div>
                    <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full pl-10 pr-4 py-3 text-sm bg-background border ${
                          errors.name
                            ? "border-red-500 focus:ring-red-400"
                            : "border-border focus:ring-primary"
                        } rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-1">
                        Phone / WhatsApp{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="tel"
                          required
                          maxLength={15}
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            });
                            if (errors.phone)
                              setErrors({ ...errors, phone: "" });
                          }}
                          placeholder="e.g. 9876543210"
                          className={`w-full pl-10 pr-4 py-3 text-sm bg-background border ${
                            errors.phone
                              ? "border-red-500 focus:ring-red-400"
                              : "border-border focus:ring-primary"
                          } rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-heading uppercase tracking-wider mb-1">
                        Pilgrims Count
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select
                          value={formData.pilgrims}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              pilgrims: e.target.value,
                            })
                          }
                          className="w-full pl-10 pr-4 py-3 text-sm bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                        >
                          <option value="1">1 Person</option>
                          <option value="2">2 Persons</option>
                          <option value="3-5">3 - 5 Persons</option>
                          <option value="6+">6+ Persons Group</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <label className="block text-xs font-bold text-heading uppercase tracking-wider">
                        Specific Questions (Optional)
                      </label>
                      <span
                        className={`text-[10px] ${formData.message.length >= 500 ? "text-red-500 font-bold" : "text-gray-400"}`}
                      >
                        {formData.message.length}/500
                      </span>
                    </div>
                    <textarea
                      rows="2"
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message)
                          setErrors({ ...errors, message: "" });
                      }}
                      placeholder="Mention any health queries, pickup preferences, etc."
                      className={`w-full px-4 py-2.5 text-sm bg-background border ${
                        errors.message
                          ? "border-red-500 focus:ring-red-400"
                          : "border-border focus:ring-primary"
                      } rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 font-medium">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {errorMessage && (
                    <div className="p-3 text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 text-sm font-bold text-white bg-primary hover:bg-primary-dark active:bg-primary rounded-xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Enquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (modalOnly) {
    return renderModal();
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-footer overflow-hidden text-white"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2071&auto=format&fit=crop"
          alt="Himalayan Sunset Peaks"
          className="w-full h-full object-cover object-center opacity-30"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/80 to-footer/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/25 border border-accent/40 text-accent-light text-xs font-bold tracking-widest uppercase mb-6">
            {packageData.finalCta?.badge || "Begin Your Sacred Journey"}
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white">
            {packageData.finalCta?.title || "Begin Your Journey to Adi Kailash"}
          </h2>

          <p className="text-base sm:text-xl text-gray-300 font-light leading-relaxed mb-10">
            {packageData.finalCta?.subtitle || "A sacred Himalayan experience awaits. Plan your journey with a trusted team and take the first step toward Adi Kailash, Parvati Kund, and Om Parvat."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-accent hover:bg-accent-light active:bg-accent rounded-2xl shadow-xl shadow-accent/40 hover:shadow-accent/60 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              <span>{packageData.finalCta?.primaryCtaText || "Book Your Yatra"}</span>
            </button>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md rounded-2xl transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 text-accent-light" />
              <span>{packageData.finalCta?.secondaryCtaText || "Contact Us / Quick Enquiry"}</span>
            </button>
          </div>
        </motion.div>
      </div>

      {renderModal()}
    </section>
  );
}
