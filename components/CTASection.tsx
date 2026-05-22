"use client";

import { site } from "@/lib/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white lg:py-32">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10">
        <ScrollReveal>
          <h2 className="font-serif text-4xl uppercase tracking-[0.15em] sm:text-5xl">
            Are you ready to transform?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-lg leading-relaxed text-white/80">
            Allow us to curate an aesthetic that expresses your personality, helping you feel like your most authentic self. Our beauty services are driven by a passion for people. We love seeing our clients&rsquo; faces when they see their new look—there&rsquo;s truly nothing like it!
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Our team of beauty specialists is dedicated to helping you feel your best and making that change with confidence.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.4}>
          <div className="mt-12">
            <motion.a
              href="/book"
              className="animate-shine inline-block rounded-full bg-gold px-12 py-5 text-[0.85rem] font-bold uppercase tracking-[0.25em] text-navy transition-all hover:bg-gold-soft hover:shadow-[0_20px_50px_-10px_rgba(204,17,17,0.5)]"
              whileHover={{ scale: 1.08, boxShadow: "0 25px 60px -10px rgba(204,17,17,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
