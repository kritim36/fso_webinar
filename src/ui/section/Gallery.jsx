"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const stories = [
  { id: 1, image: "1.jpeg", name: "Story 1" },
  { id: 2, image: "2.jpeg", name: "Story 2" },
  { id: 3, image: "3.jpeg", name: "Story 3" },
  { id: 4, image: "4.jpeg", name: "Story 4" },
  { id: 5, image: "5.jpeg", name: "Story 5" },
  { id: 6, image: "6.jpeg", name: "Story 6" },
  { id: 7, image: "7.jpeg", name: "Story 7" },
  // { id: 8, image: "8.jpeg", name: "Story 8" },
  { id: 8, image: "9.jpeg", name: "Story 9" },
  // { id: 10, image: "10.jpeg", name: "Story 10" },
  { id: 9, image: "11.jpeg", name: "Story 11" },
  { id: 10, image: "12.jpeg", name: "Story 12" },
  { id: 11, image: "13.jpeg", name: "Story 13" },
  { id: 12, image: "14.jpeg", name: "Story 14" },
  { id: 13, image: "15.jpeg", name: "Story 15" },
  // { id: 16, image: "16.jpeg", name: "Story 16" },
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

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
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
    <div className="p-4 max-w-6xl mx-auto overflow-hidden">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#312d7c] !leading-tight">
          Moments from Our South Korea Visit & Webinars
        </h2>
        <p className="text-[15px] mt-6 leading-relaxed text-slate-600">
          A glimpse into our exclusive sessions and university visits in South Korea. 
          From exploring world-ranked campuses to engaging with students in our webinars, 
          these moments capture the journey of making study abroad dreams a reality.
        </p>
      </div>

      <div
        ref={containerRef}
        className="flex gap-6 mt-16 overflow-x-scroll no-scrollbar scroll-smooth transition-all duration-500"
      >
        {stories.map((story) => (
          <div
            key={story.id}
            className="min-w-[calc(100%/3)] md:min-w-[calc(100%/4)] lg:min-w-[calc(100%/5)] flex-shrink-0 flex flex-col items-center"
          >
            <img
              src={`/images/stories/${story.image}`} // ✅ from public folder
              alt={story.name}
              className="w-full h-[7rem] lg:h-[14rem] object-cover rounded-lg shadow"
            />
          </div>
        ))}
      </div>

      {/* <div className="text-center mt-6 mb-10">
        <Link
          href="/stories"
          className="inline-block bg-[#e15228] text-white px-6 py-2 rounded-lg hover:bg-[#e15328e0] transition"
        >
          See More
        </Link>
      </div> */}

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
