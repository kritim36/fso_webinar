

"use client";
import React, { useEffect, useRef, useState } from "react";

const stories = [
  { id: 1, image: "1.jpeg", name: "Story 1" },
  { id: 2, image: "2.jpeg", name: "Story 2" },
  { id: 3, image: "3.jpeg", name: "Story 3" },
  { id: 4, image: "4.jpeg", name: "Story 4" },
  { id: 5, image: "5.jpeg", name: "Story 5" },
  { id: 6, image: "6.jpeg", name: "Story 6" },
  { id: 7, image: "7.jpeg", name: "Story 7" },
  { id: 8, image: "9.jpeg", name: "Story 9" },
  { id: 9, image: "11.jpeg", name: "Story 11" },
  { id: 10, image: "12.jpeg", name: "Story 12" },
  { id: 11, image: "13.jpeg", name: "Story 13" },
  { id: 12, image: "14.jpeg", name: "Story 14" },
  { id: 13, image: "15.jpeg", name: "Story 15" },
  { id: 14, image: "17.jpeg", name: "Story 17" },
  { id: 15, image: "18.jpeg", name: "Story 18" },
  { id: 16, image: "19.jpeg", name: "Story 19" },
  { id: 17, image: "20.jpeg", name: "Story 20" },
  { id: 18, image: "21.jpeg", name: "Story 21" },
  { id: 19, image: "22.jpeg", name: "Story 22" },
  { id: 20, image: "23.jpeg", name: "Story 23" },
  { id: 21, image: "24.jpeg", name: "Story 24" },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const cardWidth = container.offsetWidth / 3; // 3 cards per view
      container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="relative p-4 mx-auto pt-8 pb-12 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#312d7c]/20 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-[#e15228]/20 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/2 left-10 w-3 h-3 bg-[#312d7c] rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-16 w-2 h-2 bg-[#e15228] rounded-full animate-bounce"></div>

      {/* Heading */}
      <div className="text-center relative z-10">
        <h2 className="text-3xl font-bold text-[#312d7c] !leading-tight">
          Moments from Our South Korea Visit & Webinars
        </h2>
        <p className="text-[15px] mt-6 leading-relaxed text-slate-600 max-w-2xl mx-auto">
          A glimpse into our exclusive sessions and university visits in South Korea. 
          From exploring world-ranked campuses to engaging with students in our webinars, 
          these moments capture the journey of making study abroad dreams a reality.
        </p>
      </div>

      {/* Gallery */}
      <div
        ref={containerRef}
        className="flex gap-6 mt-16 overflow-x-scroll no-scrollbar scroll-smooth transition-all duration-500 relative z-10"
      >
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative group min-w-[calc(100%/3)] md:min-w-[calc(100%/4)] lg:min-w-[calc(100%/5)] flex-shrink-0"
          >
            <img
              src={`/images/stories/${story.image}`}
              alt={story.name}
              className="w-full h-[7rem] lg:h-[14rem] object-cover rounded-lg shadow-lg transform transition duration-500 group-hover:scale-110"
            />
            {/* Overlay Caption */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-medium transition duration-500 rounded-lg">
              {story.name}
            </div>
          </div>
        ))}
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
