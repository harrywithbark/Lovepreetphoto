import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { InstagramFeed } from './components/InstagramFeed';
import { Locations } from './components/Locations';
import { FAQ } from './components/FAQ';
import { IntakeForm } from './components/IntakeForm';
import { Footer } from './components/Footer';

export default function App() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Lovepreet Photography",
    "image": "/logo.png",
    "description": "Wedding photography and cinematography by Lovepreet Photography. Based in Surrey, BC, serving couples across Vancouver, Fraser Valley, and worldwide.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Surrey",
      "addressRegion": "British Columbia",
      "addressCountry": "CA"
    },
    "priceRange": "££££",
    "url": "https://www.lovepreetphotography.ca"
  };

  return (
    <div className="min-h-screen font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <InstagramFeed />
      <Locations />
      <FAQ />
      <IntakeForm />
      <Footer />
    </div>
  );
}
