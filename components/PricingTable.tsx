import { serviceCategories } from "@/lib/site";

export function PricingTable() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center mb-16">
          <p className="text-[0.78rem] font-medium uppercase tracking-[0.32em] text-gold">
            Transparent Pricing
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-navy sm:text-5xl">
            Our Full Price List
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="fade-up rounded-[32px] border border-line bg-surface p-8 shadow-[var(--shadow-soft)] transition-all hover:shadow-lg"
            >
              <h3 className="font-serif text-2xl text-navy pb-4 border-b border-line">
                {category.label}
              </h3>
              <ul className="mt-6 space-y-4">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex justify-between items-baseline gap-4 text-sm"
                  >
                    <span className="text-navy/80 font-medium">{item.name}</span>
                    <span className="shrink-0 font-bold text-gold">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 rounded-3xl bg-navy p-8 text-center text-white/80 lg:p-12">
          <p className="text-[0.9rem] leading-relaxed max-w-2xl mx-auto italic">
            "Prices are subject to change based on hair length, density, and specific products used. A consultation with your stylist will confirm the final quote for your personalized service."
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
             <div className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-xs uppercase tracking-widest">Consultation Fee: 20K</div>
          </div>
        </div>
      </div>
    </section>
  );
}
