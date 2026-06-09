Build a production-ready, highly responsive single-page React web application
preview for "Lovepreet Photos & Films" using Next.js App Router and Tailwind CSS.
This is a fine-art wedding photography and cinematography studio based in Langley,
BC, specializing in luxury, multi-day South Asian and Punjabi wedding celebrations
across the Lower Mainland (Surrey, Langley, Vancouver).

Target feel: $5,000 USD agency-grade portfolio. Inquiry-only — no pricing shown
anywhere on the site. All CTAs drive toward the contact form or phone call.

======================================================================
1. DESIGN TOKENS
======================================================================
--color-canvas:      #FFFFFF  (primary background)
--color-ink:         #1A1A1A  (all text, buttons, borders)
--color-linen:       #F7F5F2  (section alternates, card backgrounds)
--color-champagne:   #C5A882  (single accent — dividers, timeline numbers,
                               nav hover underlines, callout badge border ONLY.
                               Used sparingly. Never as a background fill.)

Typography:
- Display / H1 / H2:     Cormorant Garamond — italic sweeping weight
                         matches the flowing script of the circular logo mark
- Nav labels / eyebrows: Montserrat — uppercase, wide tracking, 400 weight
- Body / buttons / forms: DM Sans — 400 weight, ultra clean

Logo reference: Circular badge. Flowing "Lovepreet" handwritten script +
clean "Photos & Films" serif below. White background, black ink only.
The website must feel like a direct extension of this mark — restrained,
minimal, nothing decorative beyond the champagne accent.

======================================================================
2. COMPONENT ARCHITECTURE (v0 file structure)
======================================================================
components/
  Nav.tsx
  Hero.tsx
  DualMedium.tsx
  GalleryGrid.tsx
  Timeline.tsx
  Testimonial.tsx
  FaqAccordion.tsx
  IntakeForm.tsx
  Footer.tsx
page.tsx (assembles all components)

======================================================================
3. SECTION-BY-SECTION SPEC
======================================================================

A. NAV (Nav.tsx)
----------------
- Sticky frosted glass: bg-white/80 backdrop-blur-lg border-b border-black/5
- Left: Wordmark — "LOVEPREET" tracked uppercase Montserrat bold +
  "PHOTOS & FILMS" ultra-light below
- Center (desktop): Nav links — The Offerings | The Gallery |
  The Experience | Logistics | Start the Conversation
  Hover state: champagne (#C5A882) underline slide-in animation
- Right (desktop): Solid #1A1A1A pill button "Check Availability"
  — scrolls to intake form. On mobile renders as tap-to-call:
  href="tel:+16043657401"
- Mobile (<1024px): Burger icon → slide-in drawer from right edge
  transform: translateX(0) cubic-bezier(0.16, 1, 0.3, 1) 400ms
  Backdrop: bg-black/40 backdrop-blur-md

B. HERO (Hero.tsx)
------------------
- Asymmetric split layout: 55% content / 45% image frame
- Left column:
  Eyebrow (Montserrat, tracked): "LANGLEY · SURREY · VANCOUVER"
  H1 (Cormorant Garamond, 4rem clamp):
    "One Vision. Two Mediums.
     <em>Captured as One.</em>"
  Body (DM Sans): "We handcraft fine-art imagery and heirloom cinematic
  films for luxury South Asian celebrations across Langley, Surrey, and
  the Lower Mainland. By blending timeless stillness with moving emotion
  under a single creative direction, we eliminate vendor friction —
  leaving you completely present in your moments."
  CTA row:
    Primary button (#1A1A1A solid): "Start the Conversation" → intake form
    Secondary link: "Call +1 604-365-7401" → tel:+16043657401

- Right column:
  aspect-[2/3] placeholder div — bg-[#F7F5F2]
  Inner label: "Regal Sikh wedding couple in traditional cream and deep
  red attire walking through a sun-drenched Langley forest pathway."
  Floating "▶ Play Showreel" circular button bottom-right corner →
  triggers full-screen modal with backdrop-blur-xl and × close button

C. DUAL MEDIUM (DualMedium.tsx)
--------------------------------
- bg-[#F7F5F2] section
- Centered H2 (Cormorant Garamond italic): "The Dual Medium Advantage"
- 2-column grid:
  Left — Fine-Art Stills: aspect-[4/5] placeholder + text on editorial
  lighting, portraiture clarity, emotional documentation
  Right — Cinematic Films: aspect-video placeholder + text on premium
  soundscapes, cultural pacing, multi-day storytelling
- Centered callout badge between columns:
  Border: 1px solid #C5A882
  Text: "Single Crew Synergy — One team, synchronized timelines, and a
  cohesive visual identity across your entire multi-day itinerary."

D. GALLERY GRID (GalleryGrid.tsx)
-----------------------------------
- Centered H2: "The Documented Chapters"
- Asymmetric CSS grid / masonry — 4 placeholder frames:
  Frame 1 aspect-[2/3]:  The Vibrant Sangeet & Maiyan Rituals
  Frame 2 aspect-video:  The Sacred Anand Karaj Ceremony
  Frame 3 aspect-square: Intimate Editorial Portraits
  Frame 4 aspect-[3/4]:  The Grand Reception
- All frames: bg-[#F7F5F2] with descriptive aria-label and inner text
- Hover (desktop): scale-[1.02] transition-all duration-500 + dark overlay
  text: "Langley, British Columbia"

E. TIMELINE (Timeline.tsx)
----------------------------
- Centered H2: "The Cohesive Journey"
- Horizontal 3-step sequence line
- Phase numbers in champagne (#C5A882)
- Phase 01 — The Intentional Consult
  Mapping multi-day timelines, ceremonial locations, and lighting windows
- Phase 02 — The Celebration Capture
  One coordinated crew managing stills and cinematography seamlessly
- Phase 03 — The Masterpiece Delivery
  Fine-art galleries and heirloom films within agreed delivery windows

F. TESTIMONIAL (Testimonial.tsx)
----------------------------------
- Centered H2: "Words from Our Couples"
- Single centered card, soft fade transition
- Quote: "Lovepreet and the team didn't just capture our wedding — they
  protected our peace. Managing a 4-day Sikh wedding across Surrey and
  Langley is chaotic, but their crew was synchronized, calm, and
  invisible. The final film felt like a theatrical masterpiece."
  — Aman & Nav, Surrey

G. FAQ ACCORDION (FaqAccordion.tsx)
-------------------------------------
- Centered H2: "Logistics & Curations"
- max-w-[800px] mx-auto, thin border rows, smooth CSS height expansion

  Q: Do you accommodate multi-day South Asian wedding itineraries?
  A: Absolutely. Our collections are entirely custom-tailored to cover
     Sangeet, Maiyan, Temple Ceremonies, and Receptions seamlessly.

  Q: What are the benefits of booking your unified Photos & Films team?
  A: A single cohesive creative direction. Our photographers and
     cinematographers never fight for the same angle — lighting matches
     perfectly, and you only deal with one point of contact.

  Q: What is your typical delivery window?
  A: Sneak peeks within 7 days. Complete galleries and cinema features
     delivered within 8-12 weeks.

  Q: How do I get started?
  A: Fill out the form below or call us at +1 604-365-7401. We will
     schedule a private consultation to map out your timeline.

H. INTAKE FORM (IntakeForm.tsx)
---------------------------------
- bg-[#F7F5F2] section
- 2-column layout:
  Left col:
    H2 (Cormorant Garamond): "Secure Your Timeline."
    Subtext: "Dates across the Lower Mainland wedding seasons book up to
    a year in advance. Let's start mapping your legacy collection today."
    Tap-to-call line: "Prefer to talk? +1 604-365-7401"
    href="tel:+16043657401"

  Right col — 3 inputs:
    1. Select — Event Classification:
       Multi-Day South Asian Wedding
       Intimate Ceremony & Reception
       Engagement Portraiture Session

    2. Text input — "Wedding Date & Intended Venues
       (e.g. Langley, Surrey, Vancouver)"

    3. Textarea — "Tell us about your visual inspiration &
       celebration story."

  Submit button: bg-[#1A1A1A] text-white w-full
  Label: "Request Availability Blueprint"

I. FOOTER (Footer.tsx)
------------------------
- bg-[#1A1A1A] text-white
- 3 columns:

  Col 1 — Studio Heritage:
    LOVEPREET PHOTOS & FILMS (tracked Montserrat)
    "Documenting love stories across Langley, Surrey, and Metro
    Vancouver, British Columbia."

  Col 2 — Digital Channels:
    Instagram: @lovepreetphotography.ca
    Facebook: Portfolio Portal
    Direct Line: +1 604-365-7401 (tap-to-call)
    Email: [To be updated before launch]

  Col 3 — Studio Operations:
    "Consultation windows by private appointment only.
    © 2026 Lovepreet Photos & Films. All rights reserved."

- Thin champagne (#C5A882) top border line on footer

======================================================================
4. TECHNICAL GUARDS
======================================================================
- NO EXTERNAL IMAGES. All media = styled div placeholders with
  explicit Tailwind aspect ratios and aria-label attributes.
- loading="lazy" on all below-fold placeholder wrappers.
- max-w-[1440px] mx-auto on all section containers.
- font-size: clamp(2.25rem, 5vw, 4rem) on hero H1.
- Full semantic HTML: <header> <main> <section> <footer>
- Smooth scroll behavior: html { scroll-behavior: smooth }
- JSON-LD in <head>:
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Lovepreet Photos & Films",
    "telephone": "+16043657401",
    "areaServed": ["Langley", "Surrey", "Vancouver", "BC"],
    "description": "Luxury South Asian Wedding Photography and
                    Punjabi Wedding Cinematography",
    "url": "https://www.instagram.com/lovepreetphotography.ca/"
  }
- WCAG AAA contrast: #1A1A1A on #FFFFFF and #F7F5F2 throughout.
- Champagne (#C5A882) used ONLY as accent — never as text background.

======================================================================
                    END OF PROMPT — v0 FINAL VERSION
======================================================================