"use client";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="relative bg-white py-16">
      <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-3 gap-10 items-center">
        {/* Left Image */}
        <div className="w-full">
          <img
            src="/images/event.jpg"
            alt="Event"
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
        </div>

        {/* Middle Image with Play Button */}
        <div className="relative w-full">
          <img
            src="/images/speaker.jpg"
            alt="Speaker"
            className="rounded-lg shadow-lg object-cover w-full h-[400px]"
          />
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white text-black rounded-full p-4 shadow-lg">
              ▶
            </div>
          </button>
        </div>

        {/* Right Content */}
        <div>
          <h4 className="text-sm tracking-widest text-gray-500 uppercase mb-2">
            About Us
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black mb-4">
            Driving progress in educational forums
          </h2>
          <p className="text-gray-500 mb-6">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" /> Lorem ipsum dolor sit amet
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" /> Adipiscing elit tempor
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-600" /> Ut enim ad minim
            </li>
          </ul>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition">
            About Us
          </button>
        </div>
      </div>

    </section>
  );
}
