"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const achievements = [
  {
    src: "/achievements/achiv-1.jpg",
    title: "Best Innovation Award",
    subtitle: "Recognized for outstanding creativity in 2023",
  },
  {
    src: "/achievements/achiv-3.jpg",
    title: "Top Performer",
    subtitle: "Ranked #1 among 200+ participants",
  },
  {
    src: "/achievements/achiv-5.jpg",
    title: "Community Service",
    subtitle: "Awarded for social impact contributions",
  },
  {
    src: "/achievements/achiv-6.jpg",
    title: "Excellence in Design",
    subtitle: "Recognized for UI/UX excellence",
  },
  {
    src: "/achievements/achiv-7.jpg",
    title: "Best Innovation Award",
    subtitle: "Recognized for outstanding creativity in 2023",
  },
  {
    src: "/achievements/achiv-8.jpg",
    title: "Top Performer",
    subtitle: "Ranked #1 among 200+ participants",
  },
  {
    src: "/achievements/achiv-9.jpg",
    title: "Community Service",
    subtitle: "Awarded for social impact contributions",
  },
  {
    src: "/achievements/achiv-10.jpg",
    title: "Excellence in Design",
    subtitle: "Recognized for UI/UX excellence",
  },
  {
    src: "/achievements/achiv-11.jpg",
    title: "Excellence in Design",
    subtitle: "Recognized for UI/UX excellence",
  },
];

export default function AchievementCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto slide every 4s (paused on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Helper to get index safely
  const getIndex = (offset) =>
    (currentIndex + offset + achievements.length) % achievements.length;

  const handleImageClick = (offset) => {
    setCurrentIndex(getIndex(offset));
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center px-4">
        {/* Enhanced Section Title */}
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-semibold text-gray-700 tracking-wide">
              ACHIEVEMENTS
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
            Our Legacy of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Celebrating milestones and recognitions that define our journey of
            innovation and impact
          </p>
        </div>

        {/* Premium Image Carousel */}
        <div
          className="flex items-center justify-center gap-6 md:gap-8 mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Far Left */}
          <div
            className="group w-20 h-20 md:w-24 md:h-24 relative opacity-30 scale-75 transition-all duration-700 cursor-pointer hover:opacity-60 hover:scale-85"
            onClick={() => handleImageClick(-2)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <Image
              src={achievements[getIndex(-2)].src}
              alt={achievements[getIndex(-2)].title}
              fill
              className="object-cover rounded-xl border border-white/20 shadow-lg"
            />
          </div>

          {/* Left */}
          <div
            className="group w-32 h-32 md:w-40 md:h-40 relative opacity-60 scale-85 transition-all duration-700 cursor-pointer hover:opacity-80 hover:scale-95"
            onClick={() => handleImageClick(-1)}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <Image
              src={achievements[getIndex(-1)].src}
              alt={achievements[getIndex(-1)].title}
              fill
              className="object-cover rounded-xl border border-white/30 shadow-xl relative z-10"
            />
          </div>

          {/* Center (highlighted) */}
          <div className="group w-64 h-64 md:w-80 md:h-80 relative scale-100 transition-all duration-700">
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
            <div className="absolute -inset-2 bg-gradient-to-br from-white to-gray-100 rounded-2xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-xl"></div>
            <Image
              src={achievements[getIndex(0)].src}
              alt={achievements[getIndex(0)].title}
              fill
              className="object-cover rounded-xl relative z-10 shadow-2xl border-2 border-white group-hover:scale-105 transition-transform duration-500"
            />

            {/* Center image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl z-20"></div>

            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 z-30 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
              FEATURED
            </div>
          </div>

          {/* Right */}
          <div
            className="group w-32 h-32 md:w-40 md:h-40 relative opacity-60 scale-85 transition-all duration-700 cursor-pointer hover:opacity-80 hover:scale-95"
            onClick={() => handleImageClick(1)}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <Image
              src={achievements[getIndex(1)].src}
              alt={achievements[getIndex(1)].title}
              fill
              className="object-cover rounded-xl border border-white/30 shadow-xl relative z-10"
            />
          </div>

          {/* Far Right */}
          <div
            className="group w-20 h-20 md:w-24 md:h-24 relative opacity-30 scale-75 transition-all duration-700 cursor-pointer hover:opacity-60 hover:scale-85"
            onClick={() => handleImageClick(2)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <Image
              src={achievements[getIndex(2)].src}
              alt={achievements[getIndex(2)].title}
              fill
              className="object-cover rounded-xl border border-white/20 shadow-lg"
            />
          </div>
        </div>

        {/* Enhanced Title & Subtitle Display */}
        <div className="text-center transition-all duration-700 transform hover:scale-105">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
              {achievements[currentIndex].title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {achievements[currentIndex].subtitle}
            </p>

            {/* Decorative elements */}
            <div className="flex justify-center space-x-2 mt-6">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-10">
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg"
                  : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="max-w-md mx-auto mt-8">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 shadow-sm"
              style={{
                width: `${((currentIndex + 1) / achievements.length) * 100}%`,
              }}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {currentIndex + 1} of {achievements.length} achievements
          </p>
        </div>
      </div>
    </section>
  );
}
