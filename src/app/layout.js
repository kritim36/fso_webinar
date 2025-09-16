import Navbar from "@/ui/components/Navbar";
import "./globals.css";
import Footer from "@/ui/components/Footer";
import StoreProvider from "@/store/StoreProvider";
import Script from "next/script";

export const metadata = {
  title: "First Step Overseas Workshop",
  description: "Join our exclusive paid workshop and discover proven strategies for student visas, scholarships, and admission success.",
  openGraph: {
    title: "First Step Overseas Workshop",
    description: "Join our workshops to learn and explore opportunities overseas.",
    url: "https://workshop.firststepoverseas.com/",
    siteName: "First Step Overseas",
    images: [
      {
        url: "https://workshop.firststepoverseas.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "First Step Overseas Workshop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Load Razorpay Checkout script */}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="afterInteractive"
        />
      </head>

      <body>
        <StoreProvider>
          <Navbar />
            {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
