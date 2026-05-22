"use client";

import Image from "next/image";
import { ScrollReveal, StaggerContainer, staggerChild } from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Justin B",
    text: "A very modern, chic, clean place with friendly staff. Definitely a must go to if you are looking to get proper care for your hair, regardless of style.",
    stars: 5,
    initial: "J",
    color: "bg-teal-600",
  },
  {
    name: "Tammylynn Hill",
    text: "I had an amazing experience. I have dark thick hair and I wanted to go completely blonde. I knew it was going to be a process for my stylist, but they handled it with such care and expertise. I love my new look!",
    stars: 5,
    initial: "T",
    color: "bg-red-600",
  },
  {
    name: "Michelle Kouyzer",
    text: "I had a great first experience. My stylist did an excellent job at fixing a previously butchered hair cut from another salon. She took her time and explained what she was doing. Truly expert craft.",
    stars: 5,
    initial: "M",
    color: "bg-orange-600",
  },
  {
    name: "Lisa P",
    text: "Took my daughter here and we absolutely loved what the team did! My daughter had expectations to keep her length while also maintaining lots of thick layers. It turned out perfectly. We will be back!",
    stars: 5,
    initial: "L",
    color: "bg-purple-600",
  },
];

export function Testimonials() {
  return (
    <section className="bg-navy py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-serif text-3xl uppercase tracking-widest sm:text-4xl">
              What some of our clients say
            </h2>
            <div className="mt-8 flex justify-center">
              <motion.div
                className="flex flex-col items-center gap-2 rounded-lg bg-white p-4 text-navy"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    alt="Google"
                    width={60}
                    height={20}
                    className="h-auto"
                  />
                  <span className="text-sm font-bold">Reviews</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm font-bold">4.9</span>
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-[0.6rem] text-ink-muted">Based on 96 reviews</p>
                <a
                  href="https://g.page/ericssaloon/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 rounded bg-[#4285F4] px-4 py-1 text-[0.7rem] font-bold text-white transition-colors hover:bg-[#3367D6]"
                >
                  Review us on Google
                </a>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.12}>
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerChild}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all"
              whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "rgba(204,17,17,0.25)" }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div>
                <div className="flex gap-1 text-gold">
                  {[...Array(t.stars)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-sm"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, type: "spring" }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-white/90 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className={`grid size-10 place-items-center rounded-full text-sm font-bold ${t.color}`}>
                  {t.initial}
                </div>
                <span className="text-sm font-medium uppercase tracking-wider">
                  {t.name}
                </span>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
