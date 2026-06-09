import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[var(--color-ink)]">
      {/* Background Div instead of Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-[#0a0a0a] border-b border-[var(--color-champagne)] opacity-50 flex items-center justify-center text-gray-500 font-sans-alt">
          Hero Video/Image Placeholder
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl sm:text-2xl text-[var(--color-champagne)] mb-4 tracking-[0.2em] font-sans-alt uppercase">
            Lovepreet Photos & Films
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 font-serif">
            Capturing Your
            <br />
            <span style={{ color: 'var(--color-champagne)' }}>Eternal Moments</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto font-sans-alt font-light"
        >
          Luxurious wedding photography and cinematography that tells your unique love story
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full transition-all hover:scale-105 font-sans-alt font-medium"
            style={{
              backgroundColor: 'var(--color-champagne)',
              color: 'var(--color-ink)',
            }}
          >
            Explore Galleries
          </a>
          <button className="flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all font-sans-alt">
            <Play className="w-5 h-5" />
            Watch Showreel
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
