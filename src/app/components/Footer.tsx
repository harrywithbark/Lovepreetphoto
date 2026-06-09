import { Camera, Instagram, Facebook, Youtube, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--color-champagne)]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="w-8 h-8 text-[var(--color-champagne)]" />
              <span className="font-serif text-2xl">Lovepreet Photos & Films</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 font-sans-alt">
              Creating timeless memories through the art of luxurious wedding photography and cinematography. 
              Every love story deserves to be beautifully told.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--color-champagne)] hover:text-[var(--color-ink)] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--color-champagne)] hover:text-[var(--color-ink)] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--color-champagne)] hover:text-[var(--color-ink)] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[var(--color-champagne)] hover:text-[var(--color-ink)] flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 font-serif text-[var(--color-champagne)]">Quick Links</h3>
            <ul className="space-y-2 font-sans-alt">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[var(--color-champagne)] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-[var(--color-champagne)] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-[var(--color-champagne)] transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 hover:text-[var(--color-champagne)] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[var(--color-champagne)] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4 font-serif text-[var(--color-champagne)]">Services</h3>
            <ul className="space-y-2 text-gray-400 font-sans-alt">
              <li>Photography</li>
              <li>Videography</li>
              <li>Cinematography</li>
              <li>Drone Shoots</li>
              <li>Pre-wedding Shoots</li>
              <li>Event Coverage</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 font-sans-alt text-sm">
          <p>&copy; {new Date().getFullYear()} Lovepreet Photos & Films. All rights reserved. Crafted with love for couples in love.</p>
        </div>
      </div>
    </footer>
  );
}
