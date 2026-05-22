import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { IntroSection } from "@/components/IntroSection";
import { WarmWelcome } from "@/components/WarmWelcome";
import { CTASection } from "@/components/CTASection";
import Image from "next/image";

export default function SaloonPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-20">
        {/* Hero Section for the Saloon */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=80"
            alt="Eric's Saloon at Kabira Country Club"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/40 backdrop-blur-[2px]" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-6">
              <p className="text-[0.8rem] font-medium uppercase tracking-[0.4em] text-gold">
                The Experience
              </p>
              <h1 className="mt-6 font-serif text-5xl leading-tight text-white sm:text-7xl">
                The <span className="italic">Saloon</span>
              </h1>
            </div>
          </div>
        </section>

        <WarmWelcome />
        
        {/* Gallery of the Space */}
        <section className="bg-surface py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="fade-up">
                <h2 className="font-serif text-4xl text-navy sm:text-5xl">
                  A Sanctuary in Bukoto.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink-muted">
                  Located within the prestigious Kabira Country Club, Eric's Saloon is more than just a place for hair. It is a sanctuary where art, style, and hospitality converge.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                  From the moment you step in, you are greeted with a bright, open atmosphere designed to uplift and inspire. Every detail, from the ergonomic chairs to the premium Affirm products, is chosen for your comfort.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80" alt="Salon interior" fill className="object-cover" />
                </div>
                <div className="mt-8 relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                  <Image src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80" alt="Salon interior" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <IntroSection />

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
