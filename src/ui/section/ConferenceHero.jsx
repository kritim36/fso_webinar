"use client";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaEnvelope, FaWallet } from "react-icons/fa";

export default function ConferenceHero() {
  const [timeLeft, setTimeLeft] = useState(null); // don't render on server

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-10-01T00:00:00");
      const difference = targetDate - new Date();

      let time = {};
      if (difference > 0) {
        time = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return time;
    };

    // run immediately after mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center text-white z-10 px-4">
        <p className="uppercase tracking-widest text-sm">Join Us</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Our conference starts in
        </h1>

        {/* Countdown */}
        {timeLeft ? (
          <div className="flex justify-center gap-6 mt-6 text-2xl md:text-4xl font-bold">
            <div className="text-center">
              <p>{timeLeft.days}</p>
              <span className="text-sm font-light">Days</span>
            </div>
            <span>:</span>
            <div className="text-center">
              <p>{timeLeft.hours}</p>
              <span className="text-sm font-light">Hours</span>
            </div>
            <span>:</span>
            <div className="text-center">
              <p>{timeLeft.minutes}</p>
              <span className="text-sm font-light">Minutes</span>
            </div>
            <span>:</span>
            <div className="text-center">
              <p>{timeLeft.seconds}</p>
              <span className="text-sm font-light">Seconds</span>
            </div>
          </div>
        ) : (
          <p className="mt-6">Loading...</p>
        )}

        {/* Button */}
        <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md font-medium">
          Tickets
        </button>
      </div>

    </section>
  );
}
