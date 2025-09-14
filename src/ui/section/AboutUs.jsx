"use client";
import {
  FaCheckCircle,
  FaGraduationCap,
  FaGlobe,
  FaAward,
  FaUsers,
} from "react-icons/fa";

export default function AboutUs() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Enhanced gradient blobs with subtle animation */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-br from-indigo-300/15 to-blue-300/15 rounded-full blur-3xl animate-float-slow animation-delay-6000"></div>

        {/* Geometric patterns with better positioning */}
        <div className="absolute top-16 left-16 w-32 h-32 bg-[radial-gradient(circle,rgba(59,130,246,0.15)_2px,transparent_2px)] [background-size:24px_24px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-[radial-gradient(circle,rgba(147,51,234,0.15)_2px,transparent_2px)] [background-size:24px_24px] opacity-60 animate-pulse animation-delay-2000"></div>

        {/* Flowing lines for visual interest */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Left Side - Enhanced Images */}
          <div className="relative">
            {/* <div className="grid grid-cols-2 gap-6">
              <div className="hide lg:block relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative">
                  <img
                    src="/about.jpeg"
                    alt="Webinar Event"
                    className="rounded-xl shadow-2xl object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <FaUsers className="text-blue-600 text-sm" />
                      <span className="text-sm font-semibold text-gray-800">
                        24k+ Students
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group mt-8">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative">
                  <img
                    src="/southkorea.jpeg"
                    alt="South Korea Education"
                    className="rounded-xl shadow-2xl object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center space-x-2">
                      <FaGlobe className="text-purple-600 text-sm" />
                      <span className="text-sm font-semibold text-gray-800">
                        Global Expert
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Main Event Image (only large screens) */}
  <div className="hidden lg:block relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
    <div className="relative">
      <img
        src="/about.jpeg"
        alt="Webinar Event"
        className="rounded-xl shadow-2xl object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-[1.02]"
      />

      {/* Overlay with stats */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center space-x-2">
          <FaUsers className="text-blue-600 text-sm" />
          <span className="text-sm font-semibold text-gray-800">
            24k+ Students
          </span>
        </div>
      </div>
    </div>
  </div>

  {/* South Korea Image (always visible) */}
  <div className="relative group mt-8 lg:mt-0">
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
    <div className="relative">
      <img
        src="/southkorea.jpeg"
        alt="South Korea Education"
        className="rounded-xl shadow-2xl object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-[1.02]"
      />

      {/* Overlay with feature */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center space-x-2">
          <FaGlobe className="text-purple-600 text-sm" />
          <span className="text-sm font-semibold text-gray-800">
            Global Expert
          </span>
        </div>
      </div>
    </div>
  </div>
</div>


            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
          </div>

          {/* Right Side - Premium Content Card */}
          <div className="relative">
            {/* Background card with glassmorphism effect */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-white/50 to-white/30 rounded-2xl"></div>

            <div className="relative z-10 p-8 lg:p-12">
              {/* Enhanced header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FaGraduationCap className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-sm tracking-wider text-blue-600 uppercase font-bold mb-1">
                    About Us
                  </h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Main heading with improved typography */}
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  The Visa Man
                </span>
                <br />
                <span className="text-2xl lg:text-3xl text-gray-600 font-semibold">
                  Guiding Students to Study Abroad Success
                </span>
              </h2>

              {/* Enhanced description */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                We believe that every student deserves the right guidance to
                achieve their dream of studying abroad. With a proven track
                record of success, we have empowered thousands of students to
                confidently take their first step toward global education.
              </p>

              {/* Premium feature list */}
              <div className="space-y-5">
                {[
                  {
                    icon: FaUsers,
                    text: "45,000+ Students Mentored",
                    color: "blue",
                  },
                  {
                    icon: FaAward,
                    text: "15+ Years of Experience in admissions & visa processes",
                    color: "purple",
                  },
                  {
                    icon: FaGraduationCap,
                    text: "Award-Winning Trainer & Global Study Expert",
                    color: "indigo",
                  },
                  {
                    icon: FaGlobe,
                    text: "Trusted by Families & Students worldwide",
                    color: "emerald",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50/80 to-white/60 hover:from-blue-50/80 hover:to-purple-50/60 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] border border-gray-100/50"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`}
                    >
                      <item.icon className="text-white text-lg" />
                    </div>
                    <span className="text-gray-700 font-semibold text-lg group-hover:text-gray-900 transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Call-to-action area */}
              <div className="mt-10 pt-8 border-t border-gray-200/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`w-10 h-10 bg-gradient-to-br from-blue-${
                            400 + i * 100
                          } to-purple-${
                            400 + i * 100
                          } rounded-full border-2 border-white shadow-md`}
                        ></div>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">
                      Join thousands of successful students
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(20px, -20px) rotate(1deg);
          }
          66% {
            transform: translate(-20px, 10px) rotate(-0.5deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
}
