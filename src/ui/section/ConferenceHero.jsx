"use client";
import { useEffect, useState } from "react";
import { FaShoppingCart, FaEnvelope, FaWallet } from "react-icons/fa";

export default function ConferenceHero() {
  const [timeLeft, setTimeLeft] = useState(null); // don't render on server

  const [showForm, setShowForm] = useState(false);
  
    const handleBookNow = () => {
        setShowForm(true); // Show popup form
    };

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
        <button onClick={handleBookNow} className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md font-medium">
          Book Now
        </button>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-gradient-to-b from-black via-[#0a0a1a] to-black p-8 rounded-2xl w-[90%] max-w-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Book Your Seat</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Country Preference"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />

              {/* Payment Section (placeholder for integration) */}
              <div className="p-4 rounded-md bg-[#1a1a2e]">
                <p className="mb-2">💳 Payment Section</p>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Proceed to Payment
                </button>
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="updates" className="w-4 h-4" />
                <label htmlFor="updates" className="text-sm">
                  Send me updates about future events
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
