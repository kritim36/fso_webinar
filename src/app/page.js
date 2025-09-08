
import AboutUs from "@/ui/section/AboutUs";
import ConferenceHero from "@/ui/section/ConferenceHero";
import ContactSection from "@/ui/section/ContactSection";

import Gallery from "@/ui/section/Gallery";
import Hero from "@/ui/section/Hero";
import JoinUs from "@/ui/section/JoinUs";
import MapFullScreen from "@/ui/section/MapFullScreen";
import Speakers from "@/ui/section/Speakers";
import WhoShouldJoin from "@/ui/section/WhoShouldJoin";
import WhyChooseUs from "@/ui/section/WhyChooseUs";

export default function Home() {
  return (
      <main>
      
      <Hero />
      <JoinUs />
      <AboutUs />
      <Speakers />
      <WhyChooseUs />
      <WhoShouldJoin />
      <ConferenceHero />
      <Gallery />
      {/* <PricingSection />
      <Blog /> */}
      <ContactSection />
      <MapFullScreen />
      
      </main>
  );
}
