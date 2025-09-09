

"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase } from "lucide-react";

const FloatingElement = ({ src, className, x, y, delay, rotate }) => (
  <motion.img
    src={src}
    alt="decorative"
    className={`absolute ${className}`}
    initial={{ x: 0, y: 0, rotate: 0 }}
    animate={{ 
      x: [0, x, 0], 
      y: [0, y, 0], 
      rotate: rotate ? [0, 360] : 0 
    }}
    transition={{
      duration: rotate ? 12 : 6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "linear",
      delay,
    }}
  />
);

const WhoShouldJoin = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-purple-50 to-pink-50 px-6 md:px-16 py-20 overflow-hidden">
      {/* Floating Decorative Elements */}
      <FloatingElement
        src="https://agora.ancorathemes.com/wp-content/uploads/2024/06/h9-vector-1.svg"
        className="top-10 right-10 w-24 opacity-70"
        x={30}
        y={20}
        delay={0.2}
      />
      <FloatingElement
        src="https://agora.ancorathemes.com/wp-content/uploads/2024/06/h9-vector-1.svg"
        className="bottom-10 left-10 w-32 opacity-50 rotate-180" // 🔥 added rotation
        x={-40}
        y={25}
        delay={0.5}
      />

      <FloatingElement
        src="https://agora.ancorathemes.com/wp-content/uploads/2024/06/h9-vector-1.svg"
        className="top-1/2 left-1/2 w-20 opacity-60"
        x={20}
        y={30}
        delay={0.8}
      />

      {/* Section Title */}
      <div className="text-center mb-14 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3b0a77] drop-shadow">
          Who Should Attend the Webinar?
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center bg-white border border-[#3b0a77] rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 p-8 text-center">
          <div className="bg-[#3b0a77] text-white p-5 rounded-full mb-4 shadow-md">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-[#3b0a77]">Students</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Students planning higher studies abroad
          </p>
        </div>

        <div className="flex flex-col items-center bg-white border border-[#3b0a77] rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 p-8 text-center">
          <div className="bg-[#3b0a77] text-white p-5 rounded-full mb-4 shadow-md">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-[#3b0a77]">Parents</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Parents looking for scholarship/loan options
          </p>
        </div>

        <div className="flex flex-col items-center bg-white border border-[#3b0a77] rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 p-8 text-center">
          <div className="bg-[#3b0a77] text-white p-5 rounded-full mb-4 shadow-md">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-[#3b0a77]">Professionals</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Professionals exploring education opportunities abroad
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldJoin;


