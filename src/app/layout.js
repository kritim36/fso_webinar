import Navbar from "@/ui/components/Navbar";
import "./globals.css";
import Footer from "@/ui/components/Footer";
import StoreProvider from "@/store/StoreProvider";
import Script from "next/script";
import MetaPixel from "@/ui/components/MetaPixel";

export const metadata = {
  title: "Studiy in South Korea Workshop 2026",
  description: "Join our exclusive paid workshop and discover proven strategies for student visas, scholarships, and admission success.",
  openGraph: {
    title: "Studiy in South Korea Workshop 2026",
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

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://workshop.firststepoverseas.com/"
  },
  "headline": "Study in South Korea Workshop in 2026 | From Application to Visa",
  "description":
    "What You’ll Learn from the South Korea Workshop 2026: Tuition Fees, Courses, Universities, Scholarships & Visa Guidance with The Visa Man.",
  "image": "https://workshop.firststepoverseas.com/og-image.jpg",
  "author": {
    "@type": "Organization",
    "name": "First Step Overseas",
    "url": "https://workshop.firststepoverseas.com/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "South Korea Workshop",
    "logo": {
      "@type": "ImageObject",
      "url": "https://workshop.firststepoverseas.com/logo.png"
    }
  },
  "datePublished": "2026-01-20",
  "dateModified": "2026-01-20"
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
        <Script
          id="article-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />

      </head>

      <body>
         <MetaPixel />
        <StoreProvider>
          <Navbar />
            {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
