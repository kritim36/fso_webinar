"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Aarav Sharma",
    location: "Yonsei University, South Korea",
    message:
      "With proper guidance of Bhavik sir, I am currently studying in Yonsei University, South Korea. Thankyou sir for helping me move ahead in my study abroad journey.",
  },
  {
    name: "Parth Trivedi",
    location: "Germany",
    message:
      "I attended the Study in Germany webinar by Bhavik sir, his guidance gave me a lot of strength in pursuing to Germany. I particularly loved the 1-on-1 session by Bhavik sir at the end which clarified a lot of my confusions. I request Sir and the FSO team to keep doing webinars to help students.",
  },
  {
    name: "Dhruvi Desai",
    location: "South Korea",
    message:
      "The consultancy was very supportive on my South Korea journey. Especially my counselor Bhavik Siddhpura gave me proper guidance throughout my applying period.",
  },
  {
    name: "Jinal Shah",
    location: "Visa Success",
    message:
      "Firstly, I would like to thank the entire team of First Step Overseas for their constant guidance and support throughout my visa processing journey. The dedication, effort, and time you all put in made the entire process smooth and stress-free. I am especially grateful to Bhavik Sir for his personal guidance and encouragement at every step.",
  },
  {
    name: "Krunal Joshi",
    location: "South Korea",
    message:
      "Thankful to Bhavik Sir and the entire team at First Step Overseas for guiding me through my journey to South Korea. From the very beginning, The team provided me with clear guidance, answered all my doubts with patience, and made sure every step of the process went smoothly. Would recommend First Step Overseas to every student trying for South Korea.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto scroll every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/images/stories/32.jpeg" 
        alt="Background"
        fill
        priority
        className="object-cover rotate-360 "
      />

      {/* Testimonial Box */}
      <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-[70%] bg-white/90 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-between shadow-lg">
        <div>
          <h4 className="uppercase text-sm tracking-wide text-gray-500 mb-2">
            Testimonials
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What clients say
          </h2>
          <p className="text-gray-600 text-lg mb-6 relative">
            <span className="text-blue-600 text-3xl absolute -left-6 top-0">
              “
            </span>
            {testimonials[current].message}
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div>
            <p className="font-semibold">{testimonials[current].name}</p>
            <p className="text-gray-500 text-sm">
              {testimonials[current].location}
            </p>
          </div>
        </div>

        {/* Dots */}
        <div className="flex space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                current === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
