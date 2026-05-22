"use client";

import Image from "next/image";
import { serviceCategories } from "@/lib/site";
import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function AnimatedCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const handleNext = () => {
    const currentX = x.get();
    const nextX = Math.max(currentX - 340, -width);
    animate(x, nextX, { type: "spring", stiffness: 300, damping: 30 });
  };

  const handlePrev = () => {
    const currentX = x.get();
    const prevX = Math.min(currentX + 340, 0);
    animate(x, prevX, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <section className="bg-surface py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[0.78rem] font-medium uppercase tracking-[0.32em] text-gold">
              Signature Menu
            </p>
            <h2 className="mt-3 font-serif text-4xl text-navy lg:text-5xl">Expert Services</h2>
          </div>
          <div className="hidden sm:flex gap-3">
            <button 
              onClick={handlePrev}
              className="grid size-12 place-items-center rounded-full border border-line bg-background text-navy transition hover:bg-gold hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              className="grid size-12 place-items-center rounded-full border border-line bg-background text-navy transition hover:bg-gold hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative cursor-grab active:cursor-grabbing px-6 lg:px-10">
        <motion.div 
          ref={carousel}
          className="flex gap-6 py-4"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          style={{ x }}
        >
          {serviceCategories.map((category) => (
            <motion.div
              key={category.id}
              className="min-w-[280px] sm:min-w-[320px] max-w-[320px] shrink-0 overflow-hidden rounded-[32px] border border-line bg-background shadow-sm transition-shadow hover:shadow-md group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6">
                   <p className="text-[0.65rem] font-bold uppercase tracking-widest text-gold/90">
                    Starting from {category.items[0].price}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl text-navy">{category.label}</h3>
                <div className="mt-6 space-y-3">
                  {category.items.slice(0, 3).map((item) => (
                    <div key={item.name} className="flex justify-between items-center text-[0.85rem]">
                      <span className="text-ink-muted">{item.name}</span>
                      <span className="font-bold text-navy">{item.price}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-8 w-full rounded-xl border border-line py-3 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-navy transition hover:bg-gold hover:border-gold hover:text-white">
                  View Full Menu
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 flex justify-center sm:hidden">
        <p className="text-[0.7rem] uppercase tracking-widest text-ink-muted/50">
           Swipe to explore
        </p>
      </div>
    </section>
  );
}
