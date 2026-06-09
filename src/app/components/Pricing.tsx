import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

const packages = [
  {
    name: 'Essential',
    subtitle: 'For intimate celebrations',
    price: '£2,999',
    note: 'Starting from',
    features: [
      '6 hours of coverage',
      'One lead photographer',
      '300+ curated & edited images',
      'Private online gallery',
      'Full print rights',
      'USB in keepsake packaging',
    ],
    popular: false,
    dark: false,
  },
  {
    name: 'Signature',
    subtitle: 'Our most requested package',
    price: '£5,999',
    note: 'Starting from',
    features: [
      '10 hours of coverage',
      'Two photographers',
      'One cinematographer',
      '500+ edited photographs',
      '3–5 minute highlight film',
      'Private online gallery',
      'Full print rights',
      'Pre-wedding session included',
      'Premium USB & packaging',
    ],
    popular: true,
    dark: true,
  },
  {
    name: 'Prestige',
    subtitle: 'The complete experience',
    price: '£9,999',
    note: 'Starting from',
    features: [
      'Full day + multi-event coverage',
      'Three photographers',
      'Two cinematographers',
      '800+ edited photographs',
      'Cinematic film (15–20 min)',
      '3–5 min highlight reel',
      'Drone footage',
      'Pre-wedding session',
      'Custom heirloom album',
      'Premium USB & packaging',
      'Full raw footage archive',
    ],
    popular: false,
    dark: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-[#F9F5F0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#B8956A]" />
            <span className="font-sans-alt text-[#B8956A] text-xs font-semibold tracking-[0.3em] uppercase">Investment</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-5xl sm:text-6xl text-[#0C0A09] max-w-lg" style={{ fontWeight: 300 }}>
              Packages<br />
              <span style={{ fontStyle: 'italic' }}>Designed for You</span>
            </h2>
            <p className="text-[#6B5E54] font-sans max-w-sm leading-relaxed">
              Every package can be fully tailored to your vision. Contact us for bespoke pricing.
            </p>
          </div>
        </motion.div>

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E8E0D6] mb-10">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative flex flex-col p-10 ${
                pkg.dark
                  ? 'bg-[#0C0A09] text-white'
                  : 'bg-white text-[#0C0A09]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-8 right-8">
                  <span className="font-sans-alt text-[0.65rem] font-semibold tracking-[0.2em] uppercase bg-[#B8956A] text-white px-3 py-1">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Package name */}
              <div className="mb-10">
                <p className={`font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase mb-2 ${pkg.dark ? 'text-[#B8956A]' : 'text-[#B8956A]'}`}>
                  {pkg.name}
                </p>
                <p className={`font-sans text-sm ${pkg.dark ? 'text-white/50' : 'text-[#6B5E54]'}`}>
                  {pkg.subtitle}
                </p>
              </div>

              {/* Price */}
              <div className="mb-10 pb-10 border-b" style={{ borderColor: pkg.dark ? 'rgba(255,255,255,0.1)' : '#E8E0D6' }}>
                <p className={`font-sans-alt text-xs mb-1 ${pkg.dark ? 'text-white/40' : 'text-[#6B5E54]'}`}>{pkg.note}</p>
                <span className={`font-serif text-5xl ${pkg.dark ? 'text-white' : 'text-[#0C0A09]'}`} style={{ fontWeight: 300 }}>
                  {pkg.price}
                </span>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-4 mb-10">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#B8956A]" />
                    <span className={`font-sans text-sm leading-relaxed ${pkg.dark ? 'text-white/70' : 'text-[#2A2420]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`group flex items-center justify-between px-6 py-4 border font-sans-alt text-xs font-semibold tracking-[0.15em] uppercase transition-all duration-300 ${
                  pkg.dark
                    ? 'border-[#B8956A] text-[#B8956A] hover:bg-[#B8956A] hover:text-white'
                    : 'border-[#0C0A09] text-[#0C0A09] hover:bg-[#0C0A09] hover:text-white'
                }`}
              >
                Enquire Now
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Custom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white px-8 py-6 border border-[#E8E0D6]"
        >
          <p className="font-sans text-[#6B5E54] text-sm">
            Planning a multi-day event, destination wedding, or require a fully bespoke package?
          </p>
          <a href="#contact" className="font-sans-alt text-xs font-semibold tracking-[0.15em] uppercase text-[#B8956A] hover:text-[#8C6E47] transition-colors flex items-center gap-2 whitespace-nowrap">
            Request Custom Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
