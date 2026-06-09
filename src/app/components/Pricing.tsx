import { motion } from 'motion/react';
import { Check, Sparkles } from 'lucide-react';

const packages = [
  {
    name: 'Essential',
    price: '$2,999',
    description: 'Perfect for intimate weddings',
    features: [
      '6 hours coverage',
      'One photographer',
      '300+ edited photos',
      'Online gallery',
      'Print rights',
      'USB with high-res images',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    price: '$5,999',
    description: 'Our most popular package',
    features: [
      '10 hours coverage',
      'Two photographers',
      'One videographer',
      '500+ edited photos',
      '3-5 minute highlight film',
      'Online gallery',
      'Print rights',
      'USB with high-res images',
      'Engagement shoot included',
    ],
    popular: true,
  },
  {
    name: 'Luxury',
    price: '$9,999',
    description: 'Complete wedding experience',
    features: [
      'Full day coverage',
      'Three photographers',
      'Two videographers',
      '800+ edited photos',
      'Cinematic wedding film (15-20 min)',
      '3-5 minute highlight reel',
      'Drone footage',
      'Pre-wedding shoot',
      'Online gallery',
      'Print rights',
      'Premium USB packaging',
      'Custom photo album',
      'All raw footage',
    ],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 font-serif text-[var(--color-ink)]">Investment Packages</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-[var(--color-champagne)]"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans-alt">
            Choose the package that best fits your special day
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl ${
                pkg.popular
                  ? 'bg-gradient-to-b from-[#FAFAFA] to-white shadow-2xl scale-105 border-2 border-[var(--color-champagne)]'
                  : 'bg-white shadow-lg border border-gray-100'
              }`}
            >
              {pkg.popular && (
                <div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full flex items-center gap-1 text-[var(--color-ink)] text-sm bg-[var(--color-champagne)] font-sans-alt"
                >
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl mb-2 font-serif text-[var(--color-ink)]">{pkg.name}</h3>
                <p className="text-gray-500 mb-4 font-sans-alt text-sm">{pkg.description}</p>
                <div className="text-5xl mb-2 font-serif text-[var(--color-ink)]">
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-[var(--color-champagne)]" />
                    <span className="text-gray-700 font-sans">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center px-6 py-3 rounded-full transition-all font-sans-alt font-medium ${
                  pkg.popular
                    ? 'bg-[var(--color-ink)] text-white hover:scale-105 hover:bg-black'
                    : 'bg-[var(--color-champagne)] text-[var(--color-ink)] hover:bg-[#E6D5B8]'
                }`}
              >
                Book Now
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-500 font-sans-alt"
        >
          All packages can be customized to suit your specific needs. Contact us for a personalized quote.
        </motion.p>
      </div>
    </section>
  );
}
