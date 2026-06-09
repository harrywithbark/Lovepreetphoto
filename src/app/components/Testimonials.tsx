import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia & James Anderson',
    wedding: 'Tuscany Wedding 2024',
    rating: 5,
    text: 'Lovepreet Photos & Films captured our wedding day in the most beautiful and artistic way. Every photo tells a story, and we are forever grateful for these precious memories. Their team was professional, creative, and made us feel so comfortable throughout the day.',
  },
  {
    name: 'Priya & Rahul Sharma',
    wedding: 'Udaipur Royal Wedding 2024',
    rating: 5,
    text: 'The cinematography was absolutely breathtaking! They captured not just moments, but emotions. Our wedding film makes us cry happy tears every time we watch it. The drone footage was spectacular and the editing was cinematic perfection.',
  },
  {
    name: 'Emma & David Chen',
    wedding: 'Santorini Destination Wedding 2024',
    rating: 5,
    text: 'Working with Lovepreet Photos & Films was the best decision we made for our wedding. From the pre-wedding shoot to the final edited films, everything exceeded our expectations. They have an incredible eye for detail and know exactly how to capture the magic of the moment.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 font-serif text-[var(--color-ink)]">Client Testimonials</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-[var(--color-champagne)]"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans-alt">
            What our couples say about their experience with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[var(--color-champagne)] p-8 rounded-2xl shadow-sm relative"
            >
              <Quote className="w-12 h-12 mb-4 opacity-30 text-[var(--color-champagne)]" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-[var(--color-champagne)]" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 italic font-sans">
                "{testimonial.text}"
              </p>

              <div className="border-t border-[var(--color-champagne)]/30 pt-6">
                <p className="text-[var(--color-ink)] font-serif font-medium text-lg">{testimonial.name}</p>
                <p className="text-gray-500 text-sm font-sans-alt">{testimonial.wedding}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
