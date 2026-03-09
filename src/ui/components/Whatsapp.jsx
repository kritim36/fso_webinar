"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {
  const message = encodeURIComponent("Can I know about Webinar?");

  return (
    <div className="fixed bottom-20 lg:bottom-8 left-6 z-20">
      <a
        href={`https://wa.me/916359933777?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg shadow-green-400/50 hover:scale-125 transition-all duration-500 cursor-pointer"
      >
        {/* Pulsing ring */}
        <span className="absolute w-full h-full rounded-full bg-green-400 opacity-50 animate-ping"></span>

        {/* Glow effect */}
        <span className="absolute w-20 h-20 rounded-full bg-green-400 opacity-20 blur-2xl animate-pulse"></span>

        {/* WhatsApp Icon */}
        <FaWhatsapp size={32} color="white" className="relative z-10" />
      </a>
    </div>
  );
}