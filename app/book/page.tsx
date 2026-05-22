"use client";

import React, { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const WHATSAPP_NUMBER = "256775894564";

const services = [
  { id: "cut", label: "Cut & Style", icon: "✂", value: "Cut & Style" },
  { id: "color", label: "Colour", icon: "🎨", value: "Hair Colour" },
  { id: "treatment", label: "Treatment", icon: "✨", value: "Treatments" },
  { id: "nails", label: "Nails", icon: "💅", value: "Nails & Spa" },
];

export default function BookPage() {
  const [selectedService, setSelectedService] = useState("Cut & Style");
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      `*New Booking Request from Salon Website*`,
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
  };

  return (
    <>
      <Nav />
      <main className="min-h-screen pt-32 pb-20 px-6 flex items-center justify-center bg-background relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-gold/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] bg-navy/5 blur-[120px] rounded-full pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xl bg-surface rounded-[48px] shadow-large p-8 md:p-14 relative z-10 border border-line/50"
        >
          <div className="text-center mb-12">
            <span className="text-[0.65rem] uppercase tracking-[0.4em] text-gold font-bold mb-3 block">
              Fast Booking Flow
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-navy mb-6 tracking-tight">
              Reserve Your <span className="italic text-gold">Spot.</span>
            </h1>
            <p className="text-ink-muted text-sm md:text-base max-w-sm mx-auto leading-relaxed">
              Select a service and preferred time to send a direct request to Eric.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {services.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setSelectedService(service.value)}
                className={`p-5 rounded-[24px] border transition-all duration-500 flex flex-col items-center gap-3 group ${
                  selectedService === service.value
                    ? "border-gold bg-gold/5 shadow-lg scale-105"
                    : "border-line bg-white hover:border-gold/30 hover:bg-gold/[0.02]"
                }`}
              >
                <span className={`text-3xl transition-transform duration-500 ${selectedService === service.value ? "scale-110" : "group-hover:scale-110 opacity-70"}`}>
                  {service.icon}
                </span>
                <span className={`text-[0.6rem] font-black uppercase tracking-[0.15em] ${selectedService === service.value ? "text-navy" : "text-ink-muted"}`}>
                  {service.label}
                </span>
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[0.65rem] uppercase tracking-[0.25em] text-gold font-black ml-1">
                Your Full Name
              </label>
              <input
                required
                type="text"
                placeholder="How should Eric address you?"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background/50 border border-line rounded-[20px] px-6 py-5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all placeholder:text-ink-muted/40 text-navy font-medium"
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[0.65rem] uppercase tracking-[0.25em] text-gold font-black ml-1">
                  Preferred Date
                </label>
                <input
                  required
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-background/50 border border-line rounded-[20px] px-6 py-5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all text-navy font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[0.65rem] uppercase tracking-[0.25em] text-gold font-black ml-1">
                  Preferred Time
                </label>
                <input
                  required
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full bg-background/50 border border-line rounded-[20px] px-6 py-5 focus:outline-none focus:ring-4 focus:ring-gold/10 focus:border-gold transition-all text-navy font-medium"
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-[24px] bg-navy py-6 text-center text-[0.8rem] font-black uppercase tracking-[0.3em] text-white shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="relative z-10">Send Request via WhatsApp</span>
                <div className="absolute inset-0 bg-gold translate-y-full transition-transform duration-500 group-hover:translate-y-0"></div>
              </button>
            </div>

            <div className="pt-6 flex flex-col items-center gap-4">
              <a 
                href="/services" 
                className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-ink-muted hover:text-gold transition-colors flex items-center gap-2"
              >
                <span>View Full Menu</span>
                <span className="text-gold text-lg">→</span>
              </a>
              <p className="text-[0.65rem] text-ink-muted/40 italic font-medium">
                Directly notify Eric of your arrival or booking request.
              </p>
            </div>
          </form>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
