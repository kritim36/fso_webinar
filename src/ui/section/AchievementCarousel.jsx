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

  // Auto slide every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Helper to get index safely
  const getIndex = (offset) =>
    (currentIndex + offset + achievements.length) % achievements.length;

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Section Title */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Our Achievements
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Celebrating milestones and recognitions along our journey
        </p>

        {/* Image Carousel */}
        <div className="flex items-center justify-center gap-4">
          {/* Far Left */}
          <div className="w-24 h-24 relative opacity-40 scale-75 transition-all duration-500">
            <Image
              src={achievements[getIndex(-2)].src}
              alt={achievements[getIndex(-2)].title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Left */}
          <div className="w-36 h-36 relative opacity-70 scale-90 transition-all duration-500">
            <Image
              src={achievements[getIndex(-1)].src}
              alt={achievements[getIndex(-1)].title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Center (highlighted) */}
          <div className="w-80 h-80 relative scale-110 transition-all duration-500 shadow-2xl">
            <Image
              src={achievements[getIndex(0)].src}
              alt={achievements[getIndex(0)].title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Right */}
          <div className="w-36 h-36 relative opacity-70 scale-90 transition-all duration-500">
            <Image
              src={achievements[getIndex(1)].src}
              alt={achievements[getIndex(1)].title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Far Right */}
          <div className="w-24 h-24 relative opacity-40 scale-75 transition-all duration-500">
            <Image
              src={achievements[getIndex(2)].src}
              alt={achievements[getIndex(2)].title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Title & Subtitle */}
        {/* <div className="text-center mt-6 transition-all duration-500">
          <h2 className="text-2xl font-bold text-gray-900">
            {achievements[currentIndex].title}
          </h2>
          <p className="text-gray-600">
            {achievements[currentIndex].subtitle}
          </p>
        </div> */}
      </div>
    </section>
  );
}
