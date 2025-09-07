"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Hero = () => {
   const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  const handleBookNow = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      setShowForm(true); // Show popup form
    } else {
      router.push("/login"); // Redirect to login
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen">
      {/* Left side with wavy background */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2 min-h-screen overflow-hidden">
        
        {/* Waves background */}
        <div className="absolute inset-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a1a] to-black" />

          {/* Vertical wavy stripes */}
          <div className="absolute inset-0 bg-[url('/waves.svg')] bg-cover opacity-30 animate-waves" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-6 text-white">
          <p className="uppercase tracking-widest text-sm">
            18 - 21 October, Ahamdabaad, India
          </p>
          <h1 className="text-4xl md:text-3xl font-bold leading-tight">
            Study in South Korea:<br /> Learn About Tuition Fees, Courses, Universities, and So on with The Visa Man.
          </h1>
          <p className="tracking-widest text-sm max-w-md">
            Join our exclusive paid webinar and discover proven strategies for student visas, scholarships, and admission success.
          </p>
          <button onClick={handleBookNow} className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
            Book Your Seat Now
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="relative w-full md:w-1/2 h-screen">
        <Image
          src="/hero_image.png"
          alt="Conference Speaker"
          fill
          className="object-cover"
          priority
        />
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
};

export default Hero;



