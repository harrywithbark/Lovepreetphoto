import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, ArrowRight } from 'lucide-react';

const categories = ['All', 'Destination', 'Traditional', 'Intimate', 'Grand'];

const galleries = [
  { id: 1, title: 'Sophia & James', location: 'Tuscany, Italy', category: 'Destination', year: '2024', aspect: 'tall', bg: 'from-[#3D2B1F] to-[#1A110A]' },
  { id: 2, title: 'Priya & Rahul', location: 'Surrey, BC', category: 'Grand', year: '2024', aspect: 'wide', bg: 'from-[#2B1F3D] to-[#110A1A]' },
  { id: 3, title: 'Emma & David', location: 'Santorini, Greece', category: 'Destination', year: '2024', aspect: 'square', bg: 'from-[#1F3D2B] to-[#0A1A11]' },
  { id: 4, title: 'Ananya & Vikram', location: 'Vancouver, BC', category: 'Traditional', year: '2024', aspect: 'tall', bg: 'from-[#3D2B1F] to-[#241508]' },
  { id: 5, title: 'Isabella & Thomas', location: 'Napa Valley, USA', category: 'Intimate', year: '2023', aspect: 'wide', bg: 'from-[#2B3D1F] to-[#141F0A]' },
  { id: 6, title: 'Aisha & Omar', location: 'Dubai, UAE', category: 'Grand', year: '2023', aspect: 'square', bg: 'from-[#3D1F2B] to-[#1A0A11]' },
  { id: 7, title: 'Charlotte & Liam', location: 'Lake Como, Italy', category: 'Destination', year: '2023', aspect: 'tall', bg: 'from-[#1F2B3D] to-[#0A1118]' },
  { id: 8, title: 'Meera & Arjun', location: 'Abbotsford, BC', category: 'Traditional', year: '2023', aspect: 'square', bg: 'from-[#3D3120] to-[#1A1508]' },
  { id: 9, title: 'Olivia & Ben', location: 'Paris, France', category: 'Intimate', year: '2023', aspect: 'wide', bg: 'from-[#2B1F3D] to-[#150A1A]' },
];

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);

  const filtered = selectedCategory === 'All'
    ? galleries
    : galleries.filter(g => g.category === selectedCategory);

  const selected = galleries.find(g => g.id === selectedGallery);

  return (
    <section id="portfolio" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-[#B8956A]" />
            <span className="font-sans-alt text-[#B8956A] text-xs font-semibold tracking-[0.3em] uppercase">Our Portfolio</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="font-serif text-5xl sm:text-6xl text-[#0C0A09] max-w-md" style={{ fontWeight: 300 }}>
              A Gallery of<br />
              <span style={{ fontStyle: 'italic' }}>Real Love</span>
            </h2>
            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`font-sans-alt text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-[#0C0A09] text-white border-[#0C0A09]'
                      : 'border-[#E8E0D6] text-[#6B5E54] hover:border-[#B8956A] hover:text-[#B8956A]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Masonry-ish grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {filtered.map((gallery, index) => (
              <motion.div
                key={gallery.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setSelectedGallery(gallery.id)}
                className={`relative overflow-hidden cursor-pointer group ${
                  gallery.aspect === 'tall' ? 'row-span-2' :
                  gallery.aspect === 'wide' ? 'col-span-1' : ''
                }`}
                style={{ minHeight: gallery.aspect === 'tall' ? '480px' : '220px' }}
              >
                {/* Placeholder with gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gallery.bg}`} />

                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(184,149,106,0.3) 0%, transparent 70%)',
                  }}
                />

                {/* Gallery label placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-sans-alt text-white/20 text-xs tracking-widest uppercase">{gallery.title}</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09]/90 via-[#0C0A09]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-sans-alt text-[#B8956A] text-xs tracking-[0.15em] uppercase mb-1 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {gallery.location} · {gallery.year}
                    </p>
                    <h3 className="font-serif text-white text-2xl mb-3">{gallery.title}</h3>
                    <div className="flex items-center gap-2 text-white/70 font-sans-alt text-xs tracking-wider uppercase">
                      <span>View Gallery</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a href="#contact" className="inline-flex items-center gap-3 font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase border border-[#B8956A] text-[#B8956A] px-10 py-4 hover:bg-[#B8956A] hover:text-white transition-all duration-300">
            Commission Your Story
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0C0A09]/97 z-50 flex flex-col overflow-auto"
            onClick={() => setSelectedGallery(null)}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div>
                <h3 className="font-serif text-white text-3xl">{selected.title}</h3>
                <p className="font-sans-alt text-[#B8956A] text-xs tracking-[0.15em] uppercase mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  {selected.location} · {selected.year}
                </p>
              </div>
              <button
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-[#B8956A] hover:text-[#B8956A] transition-colors"
                onClick={() => setSelectedGallery(null)}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex-1 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-5xl mx-auto">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className={`bg-gradient-to-br ${selected.bg} flex items-center justify-center border border-white/5`}
                    style={{ aspectRatio: item % 3 === 0 ? '4/5' : '4/3' }}
                  >
                    <span className="font-sans-alt text-white/20 text-xs tracking-widest uppercase">Photo {item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
