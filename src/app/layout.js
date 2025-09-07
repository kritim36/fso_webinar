import Navbar from "@/ui/components/Navbar";
import "./globals.css";
import Footer from "@/ui/components/Footer";
import FixedFooterCTA from "@/ui/section/FixedFooterCTA";
import StoreProvider from "@/store/StoreProvider";


export const metadata = {
  title: "Fso_Webinar",
  description: "Webinar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Navbar />
            {children}
          <Footer />
          <FixedFooterCTA />
        </StoreProvider>
      </body>
    </html>
  );
}
