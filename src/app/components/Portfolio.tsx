import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleries = [
  {
    id: 1,
    title: 'Sophia & James',
    location: 'Tuscany, Italy',
  },
  {
    id: 2,
    title: 'Priya & Rahul',
    location: 'Udaipur, India',
  },
  {
    id: 3,
    title: 'Emma & David',
    location: 'Santorini, Greece',
  },
  {
    id: 4,
    title: 'Olivia & Michael',
    location: 'Paris, France',
  },
  {
    id: 5,
    title: 'Isabella & Thomas',
    location: 'Napa Valley, USA',
  },
  {
    id: 6,
    title: 'Ava & Daniel',
    location: 'Bali, Indonesia',
  },
];

export function Portfolio() {
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-canvas)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-4 font-serif text-[var(--color-ink)]">Our Portfolio</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-[var(--color-champagne)]"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans-alt">
            Each wedding tells a unique story. Explore our collection of unforgettable moments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleries.map((gallery, index) => (
            <motion.div
              key={gallery.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer group shadow-lg"
              onClick={() => setSelectedGallery(gallery.id)}
            >
              <div className="w-full h-full bg-[#EAEAEA] flex items-center justify-center text-gray-400 font-sans-alt border border-gray-200">
                <span className="text-sm uppercase tracking-widest">{gallery.title} Placeholder</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl mb-2 font-serif">{gallery.title}</h3>
                  <p className="text-[var(--color-champagne)] font-sans-alt">{gallery.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--color-ink)]/95 z-50 flex flex-col items-center justify-center p-4"
            onClick={() => setSelectedGallery(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[var(--color-champagne)] transition-colors"
              onClick={() => setSelectedGallery(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-white text-3xl font-serif mb-6 text-center">
                {galleries.find(g => g.id === selectedGallery)?.title} Gallery
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((imgItem) => (
                  <div key={imgItem} className="aspect-square bg-white/10 flex items-center justify-center text-white/50 border border-white/20 rounded-lg">
                    <span className="font-sans-alt text-sm">Image {imgItem} Placeholder</span>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-center mt-6 font-sans-alt">Click anywhere outside to close</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
