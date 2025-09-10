"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aarav Sharma",
    location: "Yonsei University, South Korea",
    message:
      "With proper guidance of Bhavik sir, I am currently studying in Yonsei University, South Korea. Thankyou sir for helping me move ahead in my study abroad journey.",
    rating: 5,
    avatar: "AS",
  },
  {
    name: "Parth Trivedi",
    location: "Germany",
    message:
      "I attended the Study in Germany webinar by Bhavik sir, his guidance gave me a lot of strength in pursuing to Germany. I particularly loved the 1-on-1 session by Bhavik sir at the end which clarified a lot of my confusions. I request Sir and the FSO team to keep doing webinars to help students.",
    rating: 5,
    avatar: "PT",
  },
  {
    name: "Dhruvi Desai",
    location: "South Korea",
    message:
      "The consultancy was very supportive on my South Korea journey. Especially my counselor Bhavik Siddhpura gave me proper guidance throughout my applying period.",
    rating: 5,
    avatar: "DD",
  },
  {
    name: "Jinal Shah",
    location: "Visa Success",
    message:
      "Firstly, I would like to thank the entire team of First Step Overseas for their constant guidance and support throughout my visa processing journey. The dedication, effort, and time you all put in made the entire process smooth and stress-free. I am especially grateful to Bhavik Sir for his personal guidance and encouragement at every step.",
    rating: 5,
    avatar: "JS",
  },
  {
    name: "Krunal Joshi",
    location: "South Korea",
    message:
      "Thankful to Bhavik Sir and the entire team at First Step Overseas for guiding me through my journey to South Korea. From the very beginning, The team provided me with clear guidance, answered all my doubts with patience, and made sure every step of the process went smoothly. Would recommend First Step Overseas to every student trying for South Korea.",
    rating: 5,
    avatar: "KJ",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto scroll every 6 seconds with smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setIsAnimating(false);
    }, 300);
  };

  const handleDotClick = (index) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 300);
  };

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          } transition-colors duration-300`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  const Avatar = ({ initials, name }) => (
    <div className="relative">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ring-4 ring-white/20">
        {initials}
      </div>
      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
        <svg
          className="w-3 h-3 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0">
        <Image
          src="/images/stories/32.jpeg"
          alt="Success Stories Background"
          fill
          priority
          className="object-cover scale-105 transition-transform duration-[10s] ease-out hover:scale-110"
        />
        {/* Enhanced overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
        disabled={isAnimating}
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
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
        disabled={isAnimating}
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

      {/* Main Testimonial Content */}
      <div
        className={`absolute bottom-0 left-0 w-full md:w-3/5 lg:w-1/2 h-[75%] transform transition-all duration-1000 ${
          isLoaded ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        {/* Glass morphism container */}
        <div className="h-full bg-gradient-to-br from-white/95 via-white/90 to-white/85 backdrop-blur-xl border-r border-white/20 shadow-2xl relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-tr-full"></div>

          <div className="relative h-full p-8 md:p-12 flex flex-col justify-between">
            {/* Header Section */}
            <div
              className={`transform transition-all duration-700 delay-300 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <h4 className="uppercase text-sm tracking-widest text-gray-600 font-semibold">
                  Success Stories
                </h4>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
                What Our Clients Say
              </h2>
            </div>

            {/* Testimonial Content */}
            <div
              className={`flex-1 flex flex-col justify-center transform transition-all duration-500 ${
                isAnimating
                  ? "translate-y-4 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <StarRating rating={testimonials[current].rating} />

              <div className="relative mb-8">
                {/* Quote decoration */}
                <div className="absolute -left-4 -top-2">
                  <svg
                    className="w-16 h-16 text-blue-500/20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium relative z-10 pl-8">
                  {testimonials[current].message}
                </blockquote>
              </div>
            </div>

            {/* Author Section */}
            <div
              className={`transform transition-all duration-500 delay-200 ${
                isAnimating
                  ? "translate-y-4 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <div className="flex items-center gap-6 mb-8">
                <Avatar
                  initials={testimonials[current].avatar}
                  name={testimonials[current].name}
                />
                <div>
                  <p className="font-bold text-xl text-gray-900">
                    {testimonials[current].name}
                  </p>
                  <p className="text-gray-600 text-sm font-medium flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {testimonials[current].location}
                  </p>
                </div>
              </div>

              {/* Enhanced Dots Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleDotClick(index)}
                      className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                        current === index
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 scale-125 shadow-lg"
                          : "bg-gray-300 hover:bg-gray-400 hover:scale-110"
                      }`}
                      disabled={isAnimating}
                    >
                      {current === index && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse opacity-50"></div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Progress indicator */}
                <div className="text-sm text-gray-500 font-medium">
                  {current + 1} of {testimonials.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating testimonial count */}
      <div
        className={`absolute top-8 right-8 bg-white/20 backdrop-blur-md rounded-2xl px-6 py-4 text-white border border-white/20 transform transition-all duration-1000 delay-500 ${
          isLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="text-center">
          <div className="text-2xl font-bold">45,000+</div>
          <div className="text-sm opacity-90">Success Stories</div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
