import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { ServiceTabs } from "@/components/ServiceTabs";
import { Founder } from "@/components/Founder";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { IntroSection } from "@/components/IntroSection";
import { Testimonials } from "@/components/Testimonials";
import { WarmWelcome } from "@/components/WarmWelcome";
import { CTASection } from "@/components/CTASection";
import { AnimatedCarousel } from "@/components/AnimatedCarousel";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <IntroSection />
        <WarmWelcome />
        <ServiceTabs />
        <AnimatedCarousel />
        <Testimonials />
        <Founder />
        <Visit />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
