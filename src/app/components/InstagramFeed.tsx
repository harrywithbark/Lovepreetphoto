import { motion } from 'motion/react';
import { Instagram, ExternalLink } from 'lucide-react';

const posts = [
  { id: 1, aspect: 'square' },
  { id: 2, aspect: 'tall' },
  { id: 3, aspect: 'square' },
  { id: 4, aspect: 'square' },
  { id: 5, aspect: 'tall' },
  { id: 6, aspect: 'square' },
  { id: 7, aspect: 'square' },
  { id: 8, aspect: 'tall' },
  { id: 9, aspect: 'square' },
  { id: 10, aspect: 'square' },
  { id: 11, aspect: 'tall' },
  { id: 12, aspect: 'square' },
];

export function InstagramFeed() {
  return (
    <section className="bg-[#0C0A09] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-px bg-[#B8956A]" />
              <span className="font-sans-alt text-[#B8956A] text-xs font-semibold tracking-[0.3em] uppercase">Social</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-white" style={{ fontWeight: 300 }}>
              On <span style={{ fontStyle: 'italic', color: '#B8956A' }}>Instagram</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/lovepreetphotography.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase border border-[#B8956A] text-[#B8956A] px-6 py-3 hover:bg-[#B8956A] hover:text-white transition-all duration-300"
          >
            <Instagram className="w-4 h-4" />
            @lovepreetphotography.ca
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/lovepreetphotography.ca/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className={`relative overflow-hidden group cursor-pointer ${post.aspect === 'tall' ? 'row-span-2' : ''}`}
              style={{ aspectRatio: post.aspect === 'tall' ? '1/2' : '1/1' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2A1F15] to-[#0C0A09]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 border border-[#B8956A] flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-[#B8956A]" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
