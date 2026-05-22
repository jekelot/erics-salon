import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ServiceTabs } from "@/components/ServiceTabs";
import { CTASection } from "@/components/CTASection";
import { AnimatedCarousel } from "@/components/AnimatedCarousel";
import { PricingTable } from "@/components/PricingTable";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-20">
        {/* Header */}
        <section className="bg-navy py-20 text-white lg:py-28">
          <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
            <p className="text-[0.78rem] font-medium uppercase tracking-[0.32em] text-gold">
              Crafting Excellence
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Our <span className="italic">Services</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
              From precision hair styling and luxury coloring to signature beauty treatments at Kabira Country Club, we offer a comprehensive suite of services designed to elevate your natural beauty.
            </p>
          </div>
        </section>

        {/* Detailed Services */}
        <ServiceTabs />
        
        {/* Animated Carousel Showcase */}
        <AnimatedCarousel />

        {/* Full Pricing Table */}
        <PricingTable />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
