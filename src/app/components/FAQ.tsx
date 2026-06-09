import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you travel for destination weddings?",
    answer: "Absolutely — destination weddings are a speciality. We have shot in over 25 countries, from Italian villas to Rajasthani palaces and Greek clifftops. Travel and accommodation costs are discussed transparently at the time of booking."
  },
  {
    question: "How long until we receive our photos and film?",
    answer: "We send a curated sneak-peek gallery within 48 hours. Full photography galleries are typically delivered within 6–8 weeks. Wedding films take 10–14 weeks due to the depth of post-production involved."
  },
  {
    question: "How many photographs will we receive?",
    answer: "For a full wedding day, couples typically receive 600–900 carefully curated, fully retouched, high-resolution images. We do not deliver unedited bulk files — every image is individually considered."
  },
  {
    question: "Do you provide raw files or unedited footage?",
    answer: "We do not provide RAW or unedited files. Our colour grading, editing style, and post-production are integral to the final artwork we create. What you receive is a completed, polished work."
  },
  {
    question: "How do we secure our booking date?",
    answer: "A signed contract and 30% non-refundable retainer secures your date. Dates are held on a first-come, first-served basis — we recommend booking 12–18 months in advance for peak season weddings."
  },
  {
    question: "Can we customise a package?",
    answer: "Absolutely. We treat every couple uniquely. Whether you want to add a same-day edit, a second album, additional shooting days, or swap specific services — we will create a bespoke proposal tailored to your vision."
  },
  {
    question: "What happens if you are unavailable on our date?",
    answer: "In the rare event of an emergency, we maintain a trusted network of equally skilled photographers and cinematographers. You would always be informed immediately and offered a solution we stand behind."
  },
  {
    question: "Do you photograph South Asian and multicultural weddings?",
    answer: "South Asian and multicultural weddings are at the heart of our work. We have deep experience documenting Hindu, Muslim, Sikh, and fusion ceremonies with cultural sensitivity and genuine artistic investment."
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#B8956A]" />
              <span className="font-sans-alt text-[#B8956A] text-xs font-semibold tracking-[0.3em] uppercase">FAQ</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl text-[#0C0A09] mb-8" style={{ fontWeight: 300 }}>
              Questions<br />
              <span style={{ fontStyle: 'italic' }}>Answered</span>
            </h2>
            <p className="font-sans text-[#6B5E54] leading-relaxed mb-10">
              Everything you need to know before we begin our journey together. Don't see your question here? We'd love to hear from you directly.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase border border-[#B8956A] text-[#B8956A] px-8 py-4 hover:bg-[#B8956A] hover:text-white transition-all duration-300"
            >
              Ask Us Directly
            </a>
          </motion.div>

          {/* Right column — accordion */}
          <div className="lg:col-span-3">
            <div className="divide-y divide-[#E8E0D6]">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                >
                  <button
                    className="w-full py-6 flex items-start justify-between gap-6 text-left group"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className={`font-sans text-base leading-snug transition-colors duration-200 ${openIndex === index ? 'text-[#B8956A]' : 'text-[#0C0A09] group-hover:text-[#B8956A]'}`}>
                      {faq.question}
                    </span>
                    <div className={`flex-shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-300 mt-0.5 ${openIndex === index ? 'border-[#B8956A] bg-[#B8956A] text-white' : 'border-[#E8E0D6] text-[#6B5E54]'}`}>
                      {openIndex === index
                        ? <Minus className="w-3 h-3" />
                        : <Plus className="w-3 h-3" />
                      }
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-[#6B5E54] leading-relaxed pb-6 pr-10">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
