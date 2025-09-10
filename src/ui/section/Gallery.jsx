"use client";
import React, { useEffect, useRef, useState } from "react";

const stories = [
  {
    id: 1,
    image: "1.jpeg",
    name: "Campus Exploration",
    category: "University Visit",
  },
  { id: 2, image: "2.jpeg", name: "Student Interaction", category: "Webinar" },
  {
    id: 3,
    image: "3.jpeg",
    name: "Academic Session",
    category: "University Visit",
  },
  { id: 4, image: "4.jpeg", name: "Campus Tour", category: "University Visit" },
  { id: 5, image: "5.jpeg", name: "Success Story", category: "Achievement" },
  { id: 6, image: "6.jpeg", name: "Group Discussion", category: "Webinar" },
  {
    id: 7,
    image: "7.jpeg",
    name: "University Meeting",
    category: "University Visit",
  },
  { id: 8, image: "9.jpeg", name: "Student Guidance", category: "Webinar" },
  {
    id: 9,
    image: "11.jpeg",
    name: "Campus Life",
    category: "University Visit",
  },
  {
    id: 10,
    image: "12.jpeg",
    name: "Achievement Moment",
    category: "Achievement",
  },
  {
    id: 11,
    image: "13.jpeg",
    name: "Interactive Session",
    category: "Webinar",
  },
  {
    id: 12,
    image: "14.jpeg",
    name: "University Partnership",
    category: "University Visit",
  },
  {
    id: 13,
    image: "15.jpeg",
    name: "Student Success",
    category: "Achievement",
  },
  {
    id: 14,
    image: "17.jpeg",
    name: "Educational Tour",
    category: "University Visit",
  },
  { id: 15, image: "18.jpeg", name: "Webinar Highlight", category: "Webinar" },
  {
    id: 16,
    image: "19.jpeg",
    name: "Campus Experience",
    category: "University Visit",
  },
  {
    id: 17,
    image: "20.jpeg",
    name: "Success Celebration",
    category: "Achievement",
  },
  { id: 18, image: "21.jpeg", name: "Knowledge Sharing", category: "Webinar" },
  {
    id: 19,
    image: "22.jpeg",
    name: "University Collaboration",
    category: "University Visit",
  },
  { id: 20, image: "23.jpeg", name: "Student Mentoring", category: "Webinar" },
  {
    id: 21,
    image: "24.jpeg",
    name: "Academic Excellence",
    category: "Achievement",
  },
  {
    id: 22,
    image: "8.jpeg",
    name: "Campus Discovery",
    category: "University Visit",
  },
  { id: 23, image: "10.jpeg", name: "Learning Session", category: "Webinar" },
  {
    id: 24,
    image: "16.jpeg",
    name: "University Insights",
    category: "University Visit",
  },
  {
    id: 25,
    image: "25.jpeg",
    name: "Student Journey",
    category: "Achievement",
  },
  {
    id: 26,
    image: "26.jpeg",
    name: "Educational Workshop",
    category: "Webinar",
  },
  {
    id: 27,
    image: "27.jpeg",
    name: "Campus Highlights",
    category: "University Visit",
  },
  {
    id: 28,
    image: "28.jpeg",
    name: "Success Stories",
    category: "Achievement",
  },
  {
    id: 29,
    image: "29.jpeg",
    name: "Interactive Learning",
    category: "Webinar",
  },
  {
    id: 30,
    image: "30.jpeg",
    name: "University Experience",
    category: "University Visit",
  },
  {
    id: 31,
    image: "31.jpeg",
    name: "Achievement Showcase",
    category: "Achievement",
  },
  {
    id: 32,
    image: "32.jpeg",
    name: "Educational Journey",
    category: "Webinar",
  },
];

const Gallery = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleStories, setVisibleStories] = useState([]);

  const categories = ["All", "University Visit", "Webinar", "Achievement"];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Filter stories based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setVisibleStories(stories);
    } else {
      setVisibleStories(
        stories.filter((story) => story.category === selectedCategory)
      );
    }
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Auto-scroll with pause on hover
  useEffect(() => {
    if (isHovered || visibleStories.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(
        (prev) => (prev + 1) % Math.max(1, visibleStories.length - 4)
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, visibleStories.length]);

  // Smooth scroll effect
  useEffect(() => {
    const container = containerRef.current;
    if (container && visibleStories.length > 0) {
      const cardWidth = 320; // Fixed card width + gap
      container.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex, visibleStories]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "University Visit":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
        );
      case "Webinar":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
          </svg>
        );
      case "Achievement":
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "University Visit":
        return "from-blue-500 to-cyan-500";
      case "Webinar":
        return "from-purple-500 to-pink-500";
      case "Achievement":
        return "from-yellow-500 to-orange-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <div
      id="gallery"
      className="relative py-16 px-4 mx-auto overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-[#312d7c]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tl from-[#e15228]/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#312d7c] rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#e15228] rounded-full animate-bounce"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-500 rounded-full animate-pulse"></div>
      </div>

      {/* Header Section */}
      <div
        className={`text-center relative z-10 max-w-4xl mx-auto mb-16 transform transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#312d7c]/10 to-[#e15228]/10 rounded-full border border-[#312d7c]/20 mb-6">
          <div className="w-2 h-2 bg-[#312d7c] rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-[#312d7c] uppercase tracking-wider">
            Our Journey
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#312d7c] via-purple-600 to-[#e15228] mb-8 leading-tight">
          Moments from Our South Korea Visit & Webinars
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          A glimpse into our exclusive sessions and university visits in South
          Korea. From exploring world-ranked campuses to engaging with students
          in our webinars, these moments capture the journey of making study
          abroad dreams a reality.
        </p>
      </div>

      {/* Category Filter */}
      <div
        className={`flex flex-wrap justify-center gap-4 mb-12 relative z-10 transform transition-all duration-1000 delay-300 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`group flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-[#312d7c] to-purple-600 text-white shadow-lg scale-105"
                : "bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-[#312d7c] shadow-md border border-gray-200"
            }`}
          >
            {category !== "All" && (
              <span
                className={`${
                  selectedCategory === category
                    ? "text-white"
                    : "text-gray-400 group-hover:text-[#312d7c]"
                }`}
              >
                {getCategoryIcon(category)}
              </span>
            )}
            {category}
            {category !== "All" && (
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-[#312d7c]/10"
                }`}
              >
                {stories.filter((story) => story.category === category).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Gallery Container */}
      <div
        className="relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 hover:text-[#312d7c] hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <svg
            className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() =>
            setCurrentIndex(
              Math.min(Math.max(0, visibleStories.length - 4), currentIndex + 1)
            )
          }
          disabled={currentIndex >= Math.max(0, visibleStories.length - 4)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 hover:text-[#312d7c] hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed group"
        >
          <svg
            className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Gallery Grid */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth transition-all duration-500 px-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {visibleStories.map((story, index) => (
            <div
              key={story.id}
              className={`relative group min-w-[300px] flex-shrink-0 transform transition-all duration-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Main Image Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 bg-white">
                <img
                  src={`/images/stories/${story.image}`}
                  alt={story.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(
                    story.category
                  )} shadow-lg transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500`}
                >
                  <div className="flex items-center gap-1">
                    {getCategoryIcon(story.category)}
                    {story.category}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold mb-2">{story.name}</h3>
                  <div className="flex items-center gap-2 text-sm opacity-90">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Captured during our journey</span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#312d7c]/30 rounded-2xl transition-colors duration-500"></div>
              </div>

              {/* Reflection Effect */}
              <div className="absolute -bottom-2 left-0 right-0 h-8 bg-gradient-to-b from-white/10 to-transparent rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Indicator */}
      <div
        className={`flex justify-center mt-12 gap-2 relative z-10 transform transition-all duration-1000 delay-700 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {Array.from({
          length: Math.max(1, Math.ceil(visibleStories.length / 4)),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / 4) === index
                ? "bg-gradient-to-r from-[#312d7c] to-purple-600 scale-125 shadow-lg"
                : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
            }`}
          />
        ))}
      </div>

      {/* Stats */}
      <div
        className={`text-center mt-16 relative z-10 transform transition-all duration-1000 delay-900 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="inline-flex items-center gap-8 px-8 py-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#312d7c]">
              {stories.filter((s) => s.category === "University Visit").length}+
            </div>
            <div className="text-sm text-gray-600">University Visits</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {stories.filter((s) => s.category === "Webinar").length}+
            </div>
            <div className="text-sm text-gray-600">Webinar Sessions</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#e15228]">100+</div>
            <div className="text-sm text-gray-600">Success Stories</div>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .overflow-x-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
