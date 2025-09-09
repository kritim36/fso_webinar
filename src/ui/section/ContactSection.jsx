

"use client";
import React from "react";

const ContactSection = () => {
  return (
    <section className="relative bg-[#f8f9fc] py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute bottom-10 left-10 opacity-40">
        <svg
          width="150"
          height="150"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-purple-400"
        >
          {Array.from({ length: 10 }).map((_, row) =>
            Array.from({ length: 10 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 10}
                cy={row * 10}
                r="1.2"
                fill="currentColor"
              />
            ))
          )}
        </svg>
      </div>

      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full border border-purple-200 opacity-30 translate-x-20 -translate-y-20"></div>

      {/* Content Grid */}
      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto relative z-10 items-center">
        {/* Left Side */}
        <div className="lg:col-span-1">
          <p className="uppercase text-sm tracking-wide text-gray-500 mb-2">
            Contact Us
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Conference location
          </h2>
          <p className="text-gray-600 max-w-lg">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim. Adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* Right Side (Address + Contact side by side) */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-12">
          {/* Address */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-purple-300 text-purple-600">
              📍
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">Address</h3>
              <p className="text-gray-600 text-sm mt-1">
                Germany — 785 15th Street, Office 478,
                <br /> Berlin, De 81566
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full border border-purple-300 text-purple-600">
              ☎️
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">
                Contact Details
              </h3>
              <p className="text-gray-600 text-sm mt-1">info@yoursite.com</p>
              <p className="text-[#3b0a77] font-bold mt-1">
                +1 840 841 25 69
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

