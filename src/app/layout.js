import Navbar from "@/ui/components/Navbar";
import "./globals.css";
import Footer from "@/ui/components/Footer";
import StoreProvider from "@/store/StoreProvider";
import Script from "next/script";


export const metadata = {
  title: "Webinar | First Step Overseas",
  description: "Webinar",
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
