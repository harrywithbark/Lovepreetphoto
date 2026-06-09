import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { IntakeForm } from './components/IntakeForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Lovepreet Photos & Films",
    "image": "/logo.png",
    "description": "Award-winning wedding photography and cinematic film by Lovepreet Photos & Films. Serving couples globally with luxury visual storytelling.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "India",
      "addressCountry": "IN"
    },
    "priceRange": "££££",
    "url": "https://lovepreetfilms.com"
  };

  return (
    <div className="min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <IntakeForm />
      <Footer />
    </div>
  );
}
