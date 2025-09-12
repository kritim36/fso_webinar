import React, { useEffect, useState } from "react";

const faqs = [
  {
    question: "When does the workshop start?",
    answer:
      "You can get the workshop dates on the top of the page or in the email.",
  },
  {
    question: "Will this be live or pre-recorded?",
    answer: "It is going to be completely live for 3 hours.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "In case you miss out on attending the live workshop, we can move you to the next batch only once.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePosition({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Interactive background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mouse-following orbs */}
        <div
          className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: `${20 + mousePosition.x * 30}%`,
            top: `${20 + mousePosition.y * 30}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-purple-600/10 rounded-full blur-3xl transition-all duration-1500 ease-out"
          style={{
            right: `${10 + (1 - mousePosition.x) * 40}%`,
            bottom: `${15 + (1 - mousePosition.y) * 35}%`,
            transform: "translate(50%, 50%)",
          }}
        />

        {/* Interactive particles that respond to mouse */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full transition-all duration-700 ease-out hover:bg-blue-400/40 hover:scale-150 cursor-pointer"
              style={{
                left: `${10 + i * 7}%`,
                top: `${20 + i * 5}%`,
                transform: `translate(${mousePosition.x * 50}px, ${
                  mousePosition.y * 30
                }px)`,
              }}
            />
          ))}
        </div>

        {/* Cursor trail effect */}
        <div
          className="absolute w-4 h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-sm pointer-events-none transition-all duration-300"
          style={{
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Interactive grid that responds to hover */}
        <div
          className="absolute inset-0 opacity-[0.02] hover:opacity-[0.05] transition-opacity duration-500"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            backgroundPosition: `${mousePosition.x * 20}px ${
              mousePosition.y * 20
            }px`,
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Explore Common Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-800/60 border border-slate-700 shadow-lg rounded-lg transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
