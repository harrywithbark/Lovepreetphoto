import { motion } from 'motion/react';
import { ArrowDown, MapPin, Award, Camera } from 'lucide-react';

const stats = [
  { value: '500+', label: 'Weddings Captured' },
  { value: '25+', label: 'Countries' },
  { value: '8', label: 'Years of Artistry' },
  { value: '99%', label: 'Client Satisfaction' },
];

export function Hero() {
  return (
    <>
      <section id="home" className="relative min-h-screen flex flex-col overflow-hidden bg-[#0C0A09]">
        {/* Cinematic background texture */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              background: 'radial-gradient(ellipse at 30% 50%, #2A1F17 0%, #0C0A09 60%), linear-gradient(135deg, #1A1208 0%, #0C0A09 100%)',
            }}
          />
          {/* Decorative grain overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px',
            }}
          />
        </div>

        {/* Decorative gold lines */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#B8956A]/20 to-transparent ml-[8%] hidden lg:block" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#B8956A]/20 to-transparent mr-[8%] hidden lg:block" />
        <div className="absolute top-0 left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-[#B8956A]/30 to-transparent hidden lg:block" style={{ top: '12%' }} />

        {/* Main content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 pt-28 pb-16">
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-10"
          >
            <img src="/logo.png" alt="Lovepreet Photos & Films" className="w-24 h-24 rounded-full object-cover mx-auto border border-[#B8956A]/40" />
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-12 h-px bg-[#B8956A]" />
            <span className="font-sans-alt text-[#B8956A] text-xs font-semibold tracking-[0.3em] uppercase">
              Wedding Photography &amp; Cinematography
            </span>
            <div className="w-12 h-px bg-[#B8956A]" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 leading-[0.9]"
            style={{ fontWeight: 300 }}
          >
            Timeless
            <br />
            <span style={{ color: '#B8956A', fontStyle: 'italic' }}>Love Stories</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-sans text-white/60 text-lg sm:text-xl max-w-xl mx-auto mb-12 leading-relaxed font-light"
          >
            Luxurious wedding photography and cinematic films that preserve
            the essence of your most important day — forever.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#portfolio"
              className="group px-10 py-4 bg-[#B8956A] text-white font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#8C6E47]"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="px-10 py-4 border border-white/30 text-white font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 hover:border-[#B8956A] hover:text-[#B8956A]"
            >
              Inquire Now
            </a>
          </motion.div>

          {/* Location tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center gap-2 mt-10 text-white/40 font-sans-alt text-xs tracking-widest"
          >
            <MapPin className="w-3 h-3" />
            <span>Based in India · Shooting Worldwide</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="relative z-10 flex flex-col items-center pb-10 gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-5 h-5 text-[#B8956A]/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats ribbon */}
      <div className="bg-[#0C0A09] border-t border-[#B8956A]/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#B8956A]/20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center py-8 px-4 gap-1"
              >
                <span className="font-serif text-3xl text-[#B8956A]">{stat.value}</span>
                <span className="font-sans-alt text-white/40 text-xs tracking-[0.15em] uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
