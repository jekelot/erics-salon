"use client";

import Image from "next/image";
import { site } from "@/lib/site";
import { ScrollReveal, StaggerContainer, staggerChild } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export function Founder() {
  return (
    <section id="founder" className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20 lg:px-10">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[var(--shadow-large)]">
              <Image
                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&q=80"
                alt="Eric, founder and creative director of Eric's Saloon"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <motion.div
              className="absolute -right-4 bottom-6 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-md"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-white/70">
                Owner &middot; Creative Director
              </p>
              <p className="mt-1 font-serif text-xl text-white">
                {site.founder.name}
              </p>
            </motion.div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal delay={0.1}>
            <p className="text-[0.78rem] font-medium uppercase tracking-[0.32em] text-gold">
              Founder
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl">
              A Visionary in Craft & Creativity.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-6 space-y-5 text-[1.02rem] leading-[1.85] text-white/75">
              <p>
                {site.founder.bio}
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2" staggerDelay={0.1}>
            {site.founder.talents.map((talent) => (
              <motion.div
                key={talent.title}
                variants={staggerChild}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:bg-white/10"
                whileHover={{ y: -6, borderColor: "rgba(204,17,17,0.3)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <h3 className="font-serif text-xl text-gold">{talent.title}</h3>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-white/60">
                  {talent.description}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.5}>
            <div className="mt-12 flex flex-wrap items-center gap-3">
              <motion.a
                href={site.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="animate-shine rounded-full bg-gold px-8 py-4 text-[0.8rem] font-bold uppercase tracking-[0.2em] text-navy transition-all hover:bg-gold-soft hover:shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 15px 40px rgba(204,17,17,0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Book an Appointment
              </motion.a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
