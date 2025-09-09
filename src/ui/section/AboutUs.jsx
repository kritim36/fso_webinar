"use client";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section id="about" className="relative bg-gray-50 py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        {/* Dotted patterns */}
        <div className="absolute top-12 left-12 w-40 h-40 bg-[radial-gradient(circle,rgba(59,130,246,0.3)_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
        <div className="absolute bottom-12 right-12 w-40 h-40 bg-[radial-gradient(circle,rgba(236,72,153,0.3)_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      </div>

      <div className="grid lg:grid-cols-2 items-stretch relative z-10">
        {/* Left Side - Images */}
        <div className="relative h-full grid grid-cols-2 gap-6 px-6 lg:px-16">
          {/* Event Image */}
          <div className="flex items-center">
            <img
              src="/about.jpeg"
              alt="Webinar Event"
              className="rounded-lg shadow-md object-cover w-full h-[420px]"
            />
          </div>

          {/* Speaker Image */}
          <div className="relative flex items-center">
            <img
              src="/southkorea.jpeg"
              alt="Speaker"
              className="rounded-lg shadow-md object-cover w-full h-[420px]"
            />
          </div>
        </div>

        {/* Right Side - White Background with Text */}
        <div className="bg-white h-full flex items-center shadow-lg rounded-lg">
          <div className="px-6 lg:px-16 py-10">
            <h4 className="text-sm tracking-widest text-gray-500 uppercase mb-3">
              About Us
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black mb-4">
              The Visa Man – Guiding Students to Study Abroad Success
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that every student deserves the right guidance to achieve
              their dream of studying abroad. With a proven track record of success,
              we have empowered thousands of students to confidently take their first
              step toward global education.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>24,000+ Students Mentored</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>15+ Years of Experience in admissions & visa processes</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>Award-Winning Trainer & Global Study Expert</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>Trusted by Families & Students worldwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

