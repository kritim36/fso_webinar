import Navbar from "@/ui/components/Navbar";
import AboutUs from "@/ui/section/AboutUs";
import Blog from "@/ui/section/Blog";
import ConferenceHero from "@/ui/section/ConferenceHero";
import ContactSection from "@/ui/section/ContactSection";
import FixedFooterCTA from "@/ui/section/FixedFooterCTA";
import Hero from "@/ui/section/Hero";
import JoinUs from "@/ui/section/JoinUs";
import MapFullScreen from "@/ui/section/MapFullScreen";
import PricingSection from "@/ui/section/PricingSection";
import Speakers from "@/ui/section/Speakers";

export default function Home() {
  return (
      <main>
        <Navbar />
      <Hero />
      <JoinUs />
      <AboutUs />
      <Speakers />
      <ConferenceHero />
      <PricingSection />
      <Blog />
      <ContactSection />
      <MapFullScreen />
      <FixedFooterCTA />
      </main>
  );
}
