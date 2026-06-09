import { Instagram, Facebook, Youtube, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#080605] text-white border-t border-[#B8956A]/15">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16 border-b border-white/5">
          {/* Brand — 2 cols */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Lovepreet Photography" className="w-16 h-16 rounded-full object-cover mb-6 border border-[#B8956A]/30" />
            <p className="font-serif text-2xl text-white mb-2" style={{ fontWeight: 300 }}>Lovepreet Photography</p>
            <p className="font-sans-alt text-white/30 text-xs tracking-[0.15em] uppercase mb-6">Wedding Photography & Cinematography</p>
            <p className="font-sans text-white/40 text-sm leading-relaxed max-w-xs mb-8">
              Creating cinematic heirlooms that families will treasure for generations. Based in Surrey, BC, serving Vancouver, Fraser Valley, and worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/lovepreetphotography.ca/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#B8956A] hover:text-[#B8956A] transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/lovepreetphotography.ca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#B8956A] hover:text-[#B8956A] transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@lovepreetphotography.ca"
                aria-label="Email"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#B8956A] hover:text-[#B8956A] transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans-alt text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Wedding Photography',
                'Cinematic Films',
                'Pre-Wedding Shoots',
                'Drone & Aerial',
                'Same-Day Edit',
                'Album Design',
              ].map(item => (
                <li key={item}>
                  <a href="#services" className="font-sans text-white/40 text-sm hover:text-[#B8956A] transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans-alt text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Pricing', href: '#pricing' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} className="font-sans text-white/40 text-sm hover:text-[#B8956A] transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans-alt text-white text-xs font-semibold tracking-[0.2em] uppercase mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <p className="font-sans-alt text-white/25 text-xs uppercase tracking-wider mb-1">Email</p>
                <a href="mailto:hello@lovepreetphotography.ca" className="font-sans text-white/50 text-sm hover:text-[#B8956A] transition-colors">
                  hello@lovepreetphotography.ca
                </a>
              </li>
              <li>
                <p className="font-sans-alt text-white/25 text-xs uppercase tracking-wider mb-1">Phone</p>
                <a href="#contact" className="font-sans text-white/50 text-sm hover:text-[#B8956A] transition-colors">
                  Available on enquiry
                </a>
              </li>
              <li>
                <p className="font-sans-alt text-white/25 text-xs uppercase tracking-wider mb-1">Based In</p>
                <span className="font-sans text-white/50 text-sm">Surrey, BC · Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
          <p className="font-sans-alt text-white/25 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Lovepreet Photography. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="font-sans-alt text-white/25 text-xs hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="font-sans-alt text-white/25 text-xs hover:text-white/50 transition-colors">Terms</a>
            <button
              onClick={scrollTop}
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/30 hover:border-[#B8956A] hover:text-[#B8956A] transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
