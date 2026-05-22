"use client";

import { site } from "@/lib/site";
import { ScrollReveal, StaggerContainer, staggerChild } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const socials = [
  { platform: "facebook", href: "https://www.facebook.com/ericssaloon", icon: "f" },
  { platform: "instagram", href: "https://www.instagram.com/ericssaloon", icon: "in" },
  { platform: "pinterest", href: "https://www.pinterest.com/ericssaloon", icon: "p" },
  { platform: "twitter", href: "https://x.com/ericssaloon", icon: "x" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <StaggerContainer className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10" staggerDelay={0.12}>
        <motion.div variants={staggerChild}>
          <p className="font-serif text-2xl text-white">
            Eric&rsquo;s <span className="text-gold">Saloon</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            {site.tagline}
          </p>
          <div className="mt-6 flex gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid size-9 place-items-center rounded-full border border-white/10 text-white/50 transition hover:border-gold hover:text-gold"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="sr-only">{social.platform}</span>
                <span className="text-xs font-bold uppercase">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={staggerChild}>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">
            Visit
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {site.address.street}
            <br />
            {site.address.city}, {site.address.state}
          </p>
          <a
            href={site.phoneHref}
            className="mt-3 block text-sm text-white hover:text-gold transition-colors"
          >
            {site.phoneDisplay}
          </a>
        </motion.div>

        <motion.div variants={staggerChild}>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">
            Hours
          </p>
          <ul className="mt-3 space-y-1 text-sm">
            {site.hours.map((row) => (
              <li key={row.day} className="flex justify-between gap-6">
                <span>{row.day}</span>
                <span className="text-white/55">{row.time}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </StaggerContainer>

      <div className="border-t border-white/10">
        <ScrollReveal delay={0.1}>
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/45 sm:flex-row lg:px-10">
            <p>&copy; {new Date().getFullYear()} Eric&rsquo;s Saloon. All rights reserved.</p>
            <p>
              Crafted by{" "}
              <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="text-gold hover:text-gold-soft transition-colors">
                EJJ Studio
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
