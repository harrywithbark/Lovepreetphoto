import { motion } from 'motion/react';
import { Camera, Video, Film, Plane, Heart, Edit, Calendar } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'Wedding Photography',
    description: 'Stunning high-resolution photographs that freeze your precious moments in time, capturing every emotion and detail.',
  },
  {
    icon: Video,
    title: 'Videography',
    description: 'Professional video coverage of your entire wedding day, documenting every beautiful moment as it unfolds.',
  },
  {
    icon: Film,
    title: 'Cinematography',
    description: 'Cinematic wedding films with artistic direction, creating a movie-like experience of your special day.',
  },
  {
    icon: Plane,
    title: 'Drone Shoots',
    description: 'Breathtaking aerial perspectives that add a unique dimension to your wedding story.',
  },
  {
    icon: Heart,
    title: 'Pre-wedding Shoots',
    description: 'Romantic pre-wedding sessions in stunning locations, celebrating your journey before the big day.',
  },
  {
    icon: Edit,
    title: 'Wedding Film Editing',
    description: 'Expert post-production with color grading, sound design, and storytelling that brings your wedding to life.',
  },
  {
    icon: Calendar,
    title: 'Event Coverage',
    description: 'Comprehensive coverage of all wedding events including engagement, sangeet, mehendi, and reception.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-canvas)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 font-serif text-[var(--color-ink)]">Our Services</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-[var(--color-champagne)]"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans-alt">
            Comprehensive wedding coverage tailored to capture every precious moment of your celebration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl border border-[var(--color-champagne)] shadow-sm hover:shadow-xl transition-all"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#FAFAFA] border border-[#E6D5B8]"
              >
                <service.icon className="w-8 h-8 text-[var(--color-ink)]" />
              </div>
              <h3 className="text-2xl mb-4 font-serif text-[var(--color-ink)]">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed font-sans">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
