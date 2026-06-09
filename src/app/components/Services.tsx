import { motion } from 'motion/react';
import { Camera, Video, Film, Plane, Heart, Edit, Calendar, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Camera,
    number: '01',
    title: 'Wedding Photography',
    description: 'Documentary-style and artful portraiture that captures authentic emotion, intimate glances, and the quiet details that make your day uniquely yours.',
  },
  {
    icon: Film,
    number: '02',
    title: 'Cinematic Films',
    description: 'Feature-length wedding films crafted with cinematic direction, professional sound design, and colour grading that rivals studio productions.',
  },
  {
    icon: Heart,
    number: '03',
    title: 'Pre-Wedding Sessions',
    description: 'Intimate shoots in meaningful locations — a chance to connect with us and create heirloom portraits before the celebration begins.',
  },
  {
    icon: Plane,
    number: '04',
    title: 'Destination Weddings',
    description: 'We travel the world to capture your ceremony — from Tuscany vineyards to Rajasthan palaces. No destination is too grand or too remote.',
  },
  {
    icon: Video,
    number: '05',
    title: 'Same-Day Edits',
    description: 'A same-day film screened at your reception — reliving the morning\'s ceremony just hours after it happened. A guest favourite.',
  },
  {
    icon: Calendar,
    number: '06',
    title: 'Multi-Day Events',
    description: 'Full coverage across mehendi, sangeet, ceremony, and reception. Every ritual and tradition preserved with equal care and artistry.',
  },
  {
    icon: Plane,
    number: '07',
    title: 'Aerial & Drone',
    description: 'Breathtaking aerial perspectives that reveal the scale and beauty of your venue, adding a cinematic dimension to your visual story.',
  },
  {
    icon: Edit,
    number: '08',
    title: 'Album Design',
    description: 'Handcrafted heirloom albums printed on archival paper, designed as a keepsake that will be treasured across generations.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-28 bg-[#F9F5F0]">
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
            <span className="font-sans-alt text-[#B8956A] text-xs font-semibold tracking-[0.3em] uppercase">What We Offer</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-5xl sm:text-6xl text-[#0C0A09] max-w-lg" style={{ fontWeight: 300 }}>
              Crafting Stories<br />
              <span style={{ fontStyle: 'italic' }}>Worth Keeping</span>
            </h2>
            <p className="text-[#6B5E54] font-sans max-w-md leading-relaxed lg:text-right">
              Every wedding is a world of its own. We offer a complete suite of visual storytelling services, tailored to honour your unique celebration.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E8E0D6]">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group bg-[#F9F5F0] hover:bg-white p-8 transition-all duration-300 cursor-default"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-sans-alt text-[#B8956A]/50 text-xs font-semibold tracking-[0.2em]">{service.number}</span>
                <service.icon className="w-5 h-5 text-[#B8956A] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-serif text-xl text-[#0C0A09] mb-3 leading-tight">{service.title}</h3>
              <p className="text-[#6B5E54] text-sm leading-relaxed font-sans">{service.description}</p>
              <div className="mt-6 flex items-center gap-2 text-[#B8956A] opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="font-sans-alt text-xs tracking-wider uppercase font-semibold">Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
