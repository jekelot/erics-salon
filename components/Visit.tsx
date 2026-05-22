"use client";

import { site } from "@/lib/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

export function Visit() {
  return (
    <section id="visit" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <p className="text-[0.78rem] font-medium uppercase tracking-[0.32em] text-gold">
              Visit Us
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl">
              Find your next look.
            </h2>
          </ScrollReveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ScrollReveal direction="left" delay={0.15}>
            <motion.div
              className="h-full rounded-[28px] border border-line bg-surface p-8 shadow-[var(--shadow-soft)] lg:p-10 transition-shadow hover:shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <p className="text-[0.78rem] uppercase tracking-[0.22em] text-gold">
                Hours
              </p>
              <h3 className="mt-3 font-serif text-3xl text-navy">Open Schedule</h3>
              <ul className="mt-6 divide-y divide-line">
                {site.hours.map((row) => (
                  <li
                    key={row.day}
                    className="flex items-center justify-between py-3 text-[0.95rem]"
                  >
                    <span className="text-navy">{row.day}</span>
                    <span
                      className={`font-medium ${
                        row.time === "Closed" ? "italic text-coral" : "text-ink-muted"
                      }`}
                    >
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.25}>
            <motion.div
              className="h-full rounded-[28px] border border-line bg-surface p-8 shadow-[var(--shadow-soft)] lg:p-10 transition-shadow hover:shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <p className="text-[0.78rem] uppercase tracking-[0.22em] text-gold">
                Location
              </p>
              <h3 className="mt-3 font-serif text-3xl text-navy">Find Us</h3>
              <address className="mt-6 not-italic text-[1rem] leading-[1.8] text-ink-muted">
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state}
              </address>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
                    Mobile &middot; WhatsApp
                  </p>
                  <div className="mt-1 space-y-1">
                    {site.phones.map((phone) => (
                      <a
                        key={phone}
                        href={`tel:${phone.replace(/\s/g, "")}`}
                        className="block font-serif text-xl text-navy hover:text-gold transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-ink-muted">
                    Landline &middot; {site.kabiraExtension}
                  </p>
                  <a
                    href={`tel:${site.landline.replace(/\s/g, "")}`}
                    className="mt-1 block font-serif text-xl text-navy hover:text-gold transition-colors"
                  >
                    {site.landline}
                  </a>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${site.address.street} ${site.address.city} ${site.address.state} ${site.address.zip}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-navy px-6 py-3 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-white transition hover:bg-ink"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                </motion.a>
                <motion.a
                  href="/book"
                  className="rounded-full border border-navy/15 px-6 py-3 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-navy transition hover:bg-[color:var(--gold-tint)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Appointment
                </motion.a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
