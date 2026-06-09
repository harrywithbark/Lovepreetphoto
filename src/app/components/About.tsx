import { motion } from 'motion/react';
import { Camera, MapPin, Heart, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* Placeholder with warm gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2A1F15] to-[#0C0A09]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-12 h-12 text-[#B8956A]/30 mx-auto mb-4" />
                  <span className="font-sans-alt text-white/20 text-xs tracking-[0.3em] uppercase">Portrait Placeholder</span>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-[#B8956A]/20 pointer-events-none" />
            </div>
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white border border-[#E8E0D6] px-8 py-6 shadow-xl"
            >
              <p className="font-serif text-4xl text-[#B8956A]" style={{ fontWeight: 300 }}>8+</p>
              <p className="font-sans-alt text-[#6B5E54] text-xs tracking-[0.15em] uppercase mt-1">Years of Artistry</p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#B8956A]" />
              <span className="font-sans-alt text-[#B8956A] text-xs font-semibold tracking-[0.3em] uppercase">Behind the Lens</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-6xl text-[#0C0A09] mb-8" style={{ fontWeight: 300 }}>
              About the<br />
              <span style={{ fontStyle: 'italic' }}>Artist</span>
            </h2>

            <div className="space-y-5 font-sans text-[#6B5E54] leading-relaxed mb-10">
              <p>
                Based in <strong className="text-[#0C0A09]">Surrey, British Columbia</strong>, Lovepreet Photography is a boutique wedding photography studio 
                dedicated to capturing the genuine emotion, unscripted joy, and timeless beauty of your most important day.
              </p>
              <p>
                With a deep understanding of both Western and South Asian wedding traditions, every ceremony — from the intimate 
                civil exchange to the vibrant multi-day celebration — is approached with the same care and artistic vision.
              </p>
              <p>
                The philosophy is simple: <em className="text-[#0C0A09]">documentary over direction</em>. The best moments are the ones that happen naturally. 
                The glance, the laugh, the tear. That’s what makes the story.
              </p>
            </div>

            {/* Mini values */}
            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { icon: Heart, label: 'Emotion First', desc: 'Real moments over poses' },
                { icon: MapPin, label: 'Local & Global', desc: 'BC-based, worldwide ready' },
                { icon: Award, label: 'Trusted', desc: 'Featured in wedding publications' },
                { icon: Camera, label: 'Full Service', desc: 'Photo, film, & album design' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 border border-[#E8E0D6] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#B8956A]" />
                  </div>
                  <div>
                    <p className="font-sans-alt text-[#0C0A09] text-xs font-semibold tracking-wider uppercase">{item.label}</p>
                    <p className="font-sans text-[#6B5E54] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase border border-[#B8956A] text-[#B8956A] px-8 py-4 hover:bg-[#B8956A] hover:text-white transition-all duration-300"
            >
              Work With Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
