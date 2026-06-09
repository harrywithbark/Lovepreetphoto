import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FDFAF6]/97 backdrop-blur-xl shadow-sm border-b border-[#E8E0D6]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center">
            <img
              src="/logo.png"
              alt="Lovepreet Photos & Films"
              className={`h-12 w-12 rounded-full object-cover transition-all duration-300 ${isScrolled ? '' : 'brightness-0 invert'}`}
            />
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-sans-alt text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-200 relative group ${
                  isScrolled
                    ? 'text-[#0C0A09] hover:text-[#B8956A]'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#B8956A] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className={`font-sans-alt text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 border transition-all duration-300 ${
                isScrolled
                  ? 'border-[#B8956A] text-[#B8956A] hover:bg-[#B8956A] hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-[#0C0A09]'
              }`}
            >
              Book A Consultation
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen
              ? <X className="w-6 h-6" style={{ color: isScrolled ? '#0C0A09' : '#FFF' }} />
              : <Menu className="w-6 h-6" style={{ color: isScrolled ? '#0C0A09' : '#FFF' }} />
            }
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FDFAF6] border-t border-[#E8E0D6]"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block font-sans-alt text-xs font-semibold tracking-[0.15em] uppercase text-[#2A2420] hover:text-[#B8956A] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center border border-[#B8956A] text-[#B8956A] font-sans-alt text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#B8956A] hover:text-white transition-all"
              >
                Book A Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
