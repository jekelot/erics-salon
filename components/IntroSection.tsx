"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="left" className="relative aspect-video overflow-hidden rounded-[32px] shadow-[var(--shadow-large)] lg:aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80"
              alt="Hair styling at Eric's Saloon"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </ScrollReveal>
          <div className="max-w-xl lg:pl-10">
            <ScrollReveal delay={0.15}>
              <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
                Time for a change?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                As a premier hair studio in Kampala, we love connecting with new members from our community every day. With a relaxing atmosphere at Kabira Country Club and exceptional attention to detail, we provide an experience you'll crave coming back for.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Let us create a look to showcase your unique individuality. We help discover the designs that accentuate your natural features while staying true to your personal style.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <div className="mt-10">
                <motion.a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="animate-shine inline-block rounded-full bg-gold px-8 py-4 text-[0.8rem] font-medium uppercase tracking-[0.2em] text-navy transition-all hover:bg-gold-soft hover:shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(204,17,17,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Now
                </motion.a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
