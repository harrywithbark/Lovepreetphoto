import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'Surrey', region: 'Fraser Valley' },
  { name: 'Vancouver', region: 'Metro Vancouver' },
  { name: 'Burnaby', region: 'Metro Vancouver' },
  { name: 'Richmond', region: 'Metro Vancouver' },
  { name: 'Delta', region: 'Metro Vancouver' },
  { name: 'Abbotsford', region: 'Fraser Valley' },
  { name: 'Langley', region: 'Fraser Valley' },
  { name: 'Chilliwack', region: 'Fraser Valley' },
  { name: 'Victoria', region: 'Vancouver Island' },
  { name: 'Kelowna', region: 'Interior BC' },
  { name: 'Whistler', region: 'Sea to Sky' },
  { name: 'Destination', region: 'Worldwide' },
];

export function Locations() {
  return (
    <section className="bg-[#F9F5F0] py-20 border-y border-[#E8E0D6]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-[#B8956A]" />
              <span className="font-sans-alt text-[#B8956A] text-xs font-semibold tracking-[0.3em] uppercase">Service Area</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0C0A09]" style={{ fontWeight: 300 }}>
              Where We <span style={{ fontStyle: 'italic' }}>Shoot</span>
            </h2>
          </div>
          <p className="font-sans text-[#6B5E54] text-sm max-w-sm leading-relaxed">
            Proudly based in Surrey, BC, serving couples across the Lower Mainland, Fraser Valley, and beyond.
            Destination weddings worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="bg-white border border-[#E8E0D6] px-4 py-5 group hover:border-[#B8956A] transition-colors"
            >
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-3 h-3 text-[#B8956A]" />
                <span className="font-sans-alt text-[#0C0A09] text-sm font-semibold tracking-wide">{loc.name}</span>
              </div>
              <p className="font-sans text-[#6B5E54] text-xs pl-5">{loc.region}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
