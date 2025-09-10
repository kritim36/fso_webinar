"use client";
import React from "react";
import {
  GraduationCap,
  Users,
  Briefcase,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const WhoShouldJoin = () => {
  const attendees = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Planning higher studies abroad and seeking expert guidance",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      highlights: ["12th Grade & Above", "Undergraduate", "Graduate Students"],
      accent: "blue",
    },
    {
      icon: Users,
      title: "Parents",
      description:
        "Looking for scholarship/loan options and financial planning",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
      highlights: ["Financial Planning", "Scholarship Info", "Safety Concerns"],
      accent: "purple",
    },
    {
      icon: Briefcase,
      title: "Professionals",
      description:
        "Exploring education opportunities abroad for career advancement",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      highlights: ["Career Growth", "Skill Enhancement", "Global Exposure"],
      accent: "emerald",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-50/40"></div>

      {/* Enhanced Decorative Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-500/10 rounded-full blur-3xl animate-float-gentle animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-violet-400/8 to-purple-500/8 rounded-full blur-3xl animate-float-gentle animation-delay-6000"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-16 left-16 w-4 h-4 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full animate-bounce-slow opacity-60"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-bounce-slow animation-delay-2000 opacity-60"></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full animate-bounce-slow animation-delay-4000 opacity-60"></div>

        {/* Pattern overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 to-transparent"></div>

        {/* Flowing lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-200/30 rounded-full px-6 py-3 mb-8">
            <Target className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-bold text-purple-700 tracking-wide uppercase">
              Target Audience
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Who Should Attend
            </span>
            <br />
            <span className="text-3xl lg:text-4xl text-gray-700">
              the Webinar?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            This comprehensive webinar is designed for anyone interested in
            studying in South Korea
          </p>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {attendees.map((attendee, index) => (
            <div
              key={index}
              className="group relative transform transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2"
            >
              {/* Card background with glassmorphism */}
              <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${attendee.bgColor} opacity-0 group-hover:opacity-40 rounded-3xl transition-opacity duration-500`}
              ></div>

              {/* Gradient border effect on hover */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${attendee.color} p-[1px]`}
              >
                <div className="w-full h-full bg-white/95 backdrop-blur-xl rounded-3xl"></div>
              </div>

              {/* Card content */}
              <div className="relative z-10 p-8 text-center">
                {/* Enhanced icon */}
                <div className="relative mb-8">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${attendee.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
                  >
                    <attendee.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br ${attendee.color} rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>
                  {/* Floating indicator */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {attendee.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {attendee.description}
                </p>

                {/* Highlights list */}
                <div className="space-y-3 mb-6">
                  {attendee.highlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center space-x-2 text-sm"
                    >
                      <div
                        className={`w-2 h-2 bg-${attendee.accent}-400 rounded-full`}
                      ></div>
                      <span className="text-gray-600 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Call to action */}
                <div
                  className={`inline-flex items-center space-x-2 text-${attendee.accent}-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                >
                  <span>Perfect for you</span>
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* Progress indicator */}
                <div className="mt-6 w-full h-1 bg-gray-200/50 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${attendee.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-block p-8 bg-gradient-to-r from-white/60 to-white/40 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Future?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of successful students and parents who have already
              secured their path to studying in South Korea
            </p>
            <div className="flex items-center justify-center space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
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
                500+ attendees this month
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-gentle {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(15px, -15px) scale(1.02);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
};

export default WhoShouldJoin;
