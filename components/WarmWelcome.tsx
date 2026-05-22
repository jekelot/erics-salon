"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export function WarmWelcome() {
  return (
    <section className="bg-[#fdfcf9] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <ScrollReveal direction="left" className="relative aspect-video overflow-hidden rounded-[40px] shadow-[var(--shadow-large)] lg:aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80"
              alt="Hair textures and tools"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </ScrollReveal>
          <div className="lg:pl-10">
            <ScrollReveal delay={0.15}>
              <h2 className="font-serif text-4xl leading-tight text-navy sm:text-5xl">
                Transform into your <span className="italic text-gold">most radiant</span> self.
              </h2>
            </ScrollReveal>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-muted">
              <ScrollReveal delay={0.3}>
                <p>
                  We believe that everyone deserves to look and feel their best. At our professionally designed and elegant hair studio in Bukoto, Kampala, we help you discover your true radiance.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p>
                  Our experienced and talented stylists will work with you to create a look that works for your personality and lifestyle.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
