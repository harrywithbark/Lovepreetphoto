import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophia & James Anderson',
    wedding: 'Tuscany, Italy — June 2024',
    initials: 'SJ',
    text: 'From the first consultation to the final film delivery, Lovepreet\'s team was exceptional. They didn\'t just photograph our wedding — they felt every moment alongside us. Our album is an heirloom we\'ll treasure for generations.',
  },
  {
    name: 'Priya & Rahul Sharma',
    wedding: 'Udaipur, India — December 2024',
    initials: 'PR',
    text: 'The cinematography is breathtaking. They captured not just visuals but the entire emotional weight of a three-day royal wedding. When we saw the final film, we wept. It was more beautiful than we ever imagined possible.',
  },
  {
    name: 'Emma & David Chen',
    wedding: 'Santorini, Greece — September 2023',
    initials: 'EC',
    text: 'Booking Lovepreet for our destination wedding was the single best decision we made. Their eye for light, their patience during golden hour, their ability to disappear into the background — everything was flawless.',
  },
  {
    name: 'Ananya & Vikram Patel',
    wedding: 'Jaipur, India — February 2024',
    initials: 'AV',
    text: 'The attention to detail is unmatched. They photographed every ritual, every family moment, every stolen glance — without us ever feeling observed. The result is a collection that truly tells our entire story.',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="bg-[#0C0A09] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#B8956A]" />
            <span className="font-sans-alt text-[#B8956A] text-xs font-semibold tracking-[0.3em] uppercase">Client Voices</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl text-white max-w-lg" style={{ fontWeight: 300 }}>
            What Our Couples<br />
            <span style={{ fontStyle: 'italic', color: '#B8956A' }}>Have to Say</span>
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Quote side */}
              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B8956A] text-[#B8956A]" />
                  ))}
                </div>
                <blockquote className="font-serif text-white text-2xl sm:text-3xl leading-relaxed mb-10" style={{ fontWeight: 300, fontStyle: 'italic' }}>
                  "{testimonials[current].text}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#B8956A]/20 border border-[#B8956A]/40 flex items-center justify-center font-sans-alt text-sm text-[#B8956A] font-semibold">
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-sans-alt text-white text-sm font-semibold tracking-wide">{testimonials[current].name}</p>
                    <p className="font-sans-alt text-[#B8956A]/70 text-xs tracking-[0.1em] mt-0.5">{testimonials[current].wedding}</p>
                  </div>
                </div>
              </div>

              {/* All testimonials grid - small cards */}
              <div className="grid grid-cols-2 gap-4">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`text-left p-5 border transition-all duration-300 ${
                      i === current
                        ? 'border-[#B8956A] bg-[#B8956A]/10'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                    }`}
                  >
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} className={`w-3 h-3 ${i === current ? 'fill-[#B8956A] text-[#B8956A]' : 'fill-white/20 text-white/20'}`} />
                      ))}
                    </div>
                    <p className="font-sans-alt text-white/80 text-xs font-semibold mb-0.5">{t.name.split(' & ')[0]}</p>
                    <p className="font-sans-alt text-white/30 text-xs">{t.wedding.split(' — ')[0]}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-[#B8956A] hover:text-[#B8956A] transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-white hover:border-[#B8956A] hover:text-[#B8956A] transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="font-sans-alt text-white/30 text-xs tracking-wider ml-2">
              {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
