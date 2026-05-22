"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_NUMBER = "256775894564";

const services = [
  { id: "cut", label: "Cut & Style", icon: "✂", value: "Cut & Style" },
  { id: "color", label: "Colour", icon: "🎨", value: "Hair Colour" },
  { id: "treatment", label: "Treatment", icon: "✨", value: "Treatments" },
  { id: "nails", label: "Nails", icon: "💅", value: "Nails & Spa" },
];

export function BookingPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Cut & Style");
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `*New Fast Booking Request*`,
      ``,
      `Name: ${formData.name}`,
      `Service: ${selectedService}`,
      `Date: ${formData.date}`,
      `Time: ${formData.time}`,
      ``,
      `Is this slot available?`,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    closePopup();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/60 backdrop-blur-sm"
            onClick={closePopup}
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg bg-surface rounded-[32px] shadow-large p-6 md:p-10 relative pointer-events-auto border border-line"
            >
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-line/50 text-navy hover:bg-gold hover:text-white transition-colors"
                aria-label="Close"
              >
                ✕
              </button>

              <div className="text-center mb-8">
                <span className="text-[0.65rem] uppercase tracking-[0.3em] text-gold font-bold mb-2 block">
                  Quick Booking
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-navy mb-3">
                  Reserve Your Spot
                </h2>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Select a service and preferred time. We will finalize via WhatsApp.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {services.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setSelectedService(service.value)}
                    className={`p-3 rounded-2xl border transition-all duration-300 flex flex-col items-center gap-2 group ${
                      selectedService === service.value
                        ? "border-gold bg-gold/5 shadow-md scale-105"
                        : "border-line bg-white hover:border-gold/30"
                    }`}
                  >
                    <span className="text-2xl">{service.icon}</span>
                    <span className="text-[0.55rem] font-bold uppercase tracking-wider text-navy">
                      {service.label}
                    </span>
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-background border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                  />
                  <input
                    required
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-background border border-line rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-navy text-white rounded-xl py-4 text-xs font-bold uppercase tracking-[0.2em] shadow-xl hover:bg-gold transition-all active:scale-[0.98]"
                >
                  Book via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
