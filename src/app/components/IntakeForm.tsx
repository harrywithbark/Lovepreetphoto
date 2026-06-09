import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export function IntakeForm() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--color-ink)] text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 font-serif text-white">Let's Create Together</h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-[var(--color-champagne)]"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-sans-alt">
            We'd love to hear about your special day. Please fill out the form below and we'll get back to you within 48 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
            {/* Column 1 */}
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-sans-alt">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-champagne)] text-white transition-all"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="partner_name" className="block text-sm font-medium text-gray-300 mb-2 font-sans-alt">Partner's Name</label>
                <input
                  type="text"
                  id="partner_name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-champagne)] text-white transition-all"
                  placeholder="Partner's Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-sans-alt">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-champagne)] text-white transition-all"
                  placeholder="hello@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2 font-sans-alt">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-champagne)] text-white transition-all"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <div>
                <label htmlFor="event_date" className="block text-sm font-medium text-gray-300 mb-2 font-sans-alt">Event Date</label>
                <input
                  type="date"
                  id="event_date"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-champagne)] text-white transition-all [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert"
                />
              </div>

              <div>
                <label htmlFor="event_location" className="block text-sm font-medium text-gray-300 mb-2 font-sans-alt">Venue / Location</label>
                <input
                  type="text"
                  id="event_location"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-champagne)] text-white transition-all"
                  placeholder="City, State, or Venue Name"
                />
              </div>

              <div>
                <label htmlFor="services" className="block text-sm font-medium text-gray-300 mb-2 font-sans-alt">Interested Services</label>
                <select
                  id="services"
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-champagne)] text-white transition-all"
                >
                  <option value="photography">Photography Only</option>
                  <option value="videography">Cinematography Only</option>
                  <option value="both">Photography & Cinematography</option>
                  <option value="prewedding">Pre-wedding Shoot</option>
                </select>
              </div>

              <div>
                <label htmlFor="details" className="block text-sm font-medium text-gray-300 mb-2 font-sans-alt">Tell Us More</label>
                <textarea
                  id="details"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-champagne)] text-white transition-all resize-none"
                  placeholder="Share details about your wedding vision, guest count, and what you're looking for..."
                ></textarea>
              </div>
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                className="group flex items-center gap-2 px-8 py-4 bg-[var(--color-champagne)] text-[#050505] rounded-full font-medium hover:bg-[#E6D5B8] transition-all"
              >
                Submit Inquiry
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}