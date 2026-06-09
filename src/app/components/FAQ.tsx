import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Do you travel for destination weddings?",
    answer: "Absolutely. We love capturing love stories around the globe. Travel and accommodation fees are calculated based on your wedding destination."
  },
  {
    question: "How long does it take to receive our photos and films?",
    answer: "We deliver a sneak peek within 48 hours. Full photography galleries are typically delivered within 6-8 weeks, and films within 10-12 weeks, depending on the season."
  },
  {
    question: "How many images will we receive?",
    answer: "For a standard full-day wedding, you can expect between 600-800 carefully curated and beautifully edited high-resolution images."
  },
  {
    question: "Do you provide raw files?",
    answer: "We do not provide RAW files, as our color grading and editing style are an integral part of our art and finished product."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-canvas)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 font-serif text-[var(--color-ink)]">Frequently Asked Questions</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-[var(--color-champagne)]"></div>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-[var(--color-champagne)] rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-white text-left text-[var(--color-ink)] font-sans-alt font-medium"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[var(--color-champagne)]" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 bg-white/50 text-gray-700">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
