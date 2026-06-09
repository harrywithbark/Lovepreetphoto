import { motion } from 'motion/react';
import { Send, Phone, Mail, MapPin, Instagram } from 'lucide-react';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@lovepreetfilms.com' },
  { icon: Phone, label: 'Phone', value: '+44 7700 900 000' },
  { icon: MapPin, label: 'Based In', value: 'India · Available Worldwide' },
  { icon: Instagram, label: 'Instagram', value: '@lovepreetfilms' },
];

export function IntakeForm() {
  return (
    <section id="contact" className="bg-[#0C0A09] py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left — Brand + Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 flex flex-col"
          >
            <img src="/logo.png" alt="Lovepreet Photos & Films" className="w-20 h-20 rounded-full object-cover mb-8 border border-[#B8956A]/30" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-[#B8956A]" />
              <span className="font-sans-alt text-[#B8956A] text-xs font-semibold tracking-[0.3em] uppercase">Get In Touch</span>
            </div>

            <h2 className="font-serif text-5xl sm:text-6xl text-white mb-6" style={{ fontWeight: 300 }}>
              Let's Create<br />
              <span style={{ fontStyle: 'italic', color: '#B8956A' }}>Together</span>
            </h2>

            <p className="font-sans text-white/50 leading-relaxed mb-12">
              Every great wedding story begins with a conversation. Tell us about your day — we'd love to hear every detail.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 border border-[#B8956A]/30 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#B8956A]" />
                  </div>
                  <div>
                    <p className="font-sans-alt text-white/30 text-xs tracking-wider uppercase mb-0.5">{item.label}</p>
                    <p className="font-sans text-white/70 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust signals */}
            <div className="border-t border-white/10 pt-8 mt-auto">
              <p className="font-sans-alt text-white/30 text-xs tracking-wider uppercase mb-4">As Featured In</p>
              <div className="flex flex-wrap gap-4">
                {['Vogue Weddings', 'Harper\'s Bazaar', 'Brides India', 'The Knot'].map(pub => (
                  <span key={pub} className="font-sans-alt text-white/40 text-xs tracking-wide border border-white/10 px-3 py-1.5">
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans-alt text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Your Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-[#B8956A] transition-colors"
                    placeholder="First & Last Name"
                  />
                </div>
                <div>
                  <label className="block font-sans-alt text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Partner's Name</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-[#B8956A] transition-colors"
                    placeholder="First & Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans-alt text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-[#B8956A] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-sans-alt text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-[#B8956A] transition-colors"
                    placeholder="+1 (555) 000 0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans-alt text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Wedding Date</label>
                  <input
                    type="date"
                    className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-white/70 font-sans text-sm focus:outline-none focus:border-[#B8956A] transition-colors [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-30"
                  />
                </div>
                <div>
                  <label className="block font-sans-alt text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Venue / Location</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-[#B8956A] transition-colors"
                    placeholder="City, Country or Venue"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans-alt text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Services Interested In</label>
                  <select
                    className="w-full bg-[#1A1410] border border-white/10 px-4 py-3.5 text-white/70 font-sans text-sm focus:outline-none focus:border-[#B8956A] transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="photography">Photography</option>
                    <option value="cinematography">Cinematography</option>
                    <option value="both">Photography & Cinematography</option>
                    <option value="prewedding">Pre-Wedding Shoot</option>
                    <option value="full">Full Prestige Package</option>
                  </select>
                </div>
                <div>
                  <label className="block font-sans-alt text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Approximate Budget</label>
                  <select
                    className="w-full bg-[#1A1410] border border-white/10 px-4 py-3.5 text-white/70 font-sans text-sm focus:outline-none focus:border-[#B8956A] transition-colors"
                  >
                    <option value="">Select range</option>
                    <option value="essential">£2,000 – £3,999</option>
                    <option value="signature">£4,000 – £6,999</option>
                    <option value="prestige">£7,000 – £12,000</option>
                    <option value="bespoke">£12,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans-alt text-white/40 text-xs tracking-[0.15em] uppercase mb-3">Tell Us About Your Wedding</label>
                <textarea
                  rows={5}
                  className="w-full bg-transparent border border-white/10 px-4 py-3.5 text-white font-sans text-sm placeholder:text-white/20 focus:outline-none focus:border-[#B8956A] transition-colors resize-none"
                  placeholder="Share your vision — the venue, the style, any special moments you want captured, cultural elements, or anything else that makes your day uniquely yours..."
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
                <p className="font-sans text-white/30 text-xs leading-relaxed max-w-xs">
                  We respond to all enquiries within 24 hours. Your details are kept strictly private.
                </p>
                <button
                  type="submit"
                  className="group flex items-center gap-3 bg-[#B8956A] text-white font-sans-alt text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#8C6E47] transition-all duration-300"
                >
                  Send Enquiry
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
