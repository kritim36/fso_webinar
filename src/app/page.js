"use client";
import { useEffect, useState } from "react";
import AboutUs from "@/ui/section/AboutUs";
import ConferenceHero from "@/ui/section/ConferenceHero";
import FixedFooterCTA from "@/ui/section/FixedFooterCTA";
// import ContactSection from "@/ui/section/ContactSection";

import Gallery from "@/ui/section/Gallery";
import Hero from "@/ui/section/Hero";
import JoinUs from "@/ui/section/JoinUs";
import MapFullScreen from "@/ui/section/MapFullScreen";
import Speakers from "@/ui/section/Speakers";
import Testimonials from "@/ui/section/Testimonials";
import WhoShouldJoin from "@/ui/section/WhoShouldJoin";
import WhyChooseUs from "@/ui/section/WhyChooseUs";
import AchievementCarousel from "@/ui/section/AchievementCarousel";
import CTA from "@/ui/section/CTA";
import FAQ from "@/ui/section/FAQ";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <main>
      
      <Hero />
      <JoinUs />
      <CTA />
      <AboutUs />
      <Speakers />
      <WhyChooseUs />
      <WhoShouldJoin />
      <ConferenceHero />
      
      <Testimonials />
      <Gallery />
      <AchievementCarousel />
      <FAQ />
      {/* <PricingSection />
      <Blog /> */}
      {/* <ContactSection /> */}
      <MapFullScreen />
       {isMobile && <FixedFooterCTA />}
      
      </main>
  );
}
