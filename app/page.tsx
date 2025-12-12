"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { PopupModal } from "react-calendly";

export default function Home() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Wait for mount to set root element
    setRootElement(document.getElementById("root") || document.body);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navbar onBookCall={() => setIsCalendlyOpen(true)} />
      <Hero onBookCall={() => setIsCalendlyOpen(true)} />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />

      {rootElement && (
        <PopupModal
          url="https://calendly.com/admin-tuumagency/30min"
          onModalClose={() => setIsCalendlyOpen(false)}
          open={isCalendlyOpen}
          rootElement={rootElement}
        />
      )}
    </main>
  );
}
