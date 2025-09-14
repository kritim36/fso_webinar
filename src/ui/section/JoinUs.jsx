"use client";
import React from "react";
import {
  GraduationCap,
  Landmark,
  Briefcase,
  Globe,
  Users,
  ShieldCheck,
  Calendar,
  Clock,
  Utensils,
} from "lucide-react";

export default function WebinarSection() {
  // const features = [
  //   {
  //     icon: GraduationCap,
  //     title: "World-ranked universities",
  //     description: "Access to top Korean institutions",
  //     color: "from-blue-500 to-indigo-600",
  //     bgColor: "from-blue-50 to-indigo-50",
  //   },
  //   {
  //     icon: Landmark,
  //     title: "Affordable education",
  //     description: "Quality education at reasonable costs",
  //     color: "from-purple-500 to-violet-600",
  //     bgColor: "from-purple-50 to-violet-50",
  //   },
  //   {
  //     icon: Briefcase,
  //     title: "Post-study work visa",
  //     description: "Work opportunities after graduation",
  //     color: "from-emerald-500 to-teal-600",
  //     bgColor: "from-emerald-50 to-teal-50",
  //   },
  //   {
  //     icon: Globe,
  //     title: "Global career scope",
  //     description: "International career opportunities",
  //     color: "from-orange-500 to-red-600",
  //     bgColor: "from-orange-50 to-red-50",
  //   },
  //   {
  //     icon: Users,
  //     title: "Expert mentorship",
  //     description: "Guidance from industry professionals",
  //     color: "from-cyan-500 to-blue-600",
  //     bgColor: "from-cyan-50 to-blue-50",
  //   },
  //   {
  //     icon: ShieldCheck,
  //     title: "Safe & modern lifestyle",
  //     description: "Secure and contemporary living",
  //     color: "from-pink-500 to-rose-600",
  //     bgColor: "from-pink-50 to-rose-50",
  //   },
  // ];

    const features = [
    {
      icon: GraduationCap,
      title: "Top-ranked Universities",
      description: "Including prestigious institutions like Seoul National University, KAIST & GSK University.",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
    },
    {
      icon: Landmark,
      title: "Affordable Tuition Fees",
      description: "Get world-class education with lower tuition compared to US, UK & Australia.",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
    },
    {
      icon: Utensils,
      title: "Living & Lifestyle",
      description: "Safe, modern cities with efficient transport, affordable food & student-friendly culture.",
      color: "from-orange-500 to-red-600",
      bgColor: "from-orange-50 to-red-50",
    },
    {
      icon: ShieldCheck,
      title: "Safety & Security",
      description: "South Korea is one of the safest countries with a high quality of life for students.",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
    },
    {
      icon: Globe,
      title: "Top Courses & Careers",
      description: "Engineering, IT, Business & Arts with global career scope & industry exposure.",
      color: "from-cyan-500 to-blue-600",
      bgColor: "from-cyan-50 to-blue-50",
    },
    {
      icon: Briefcase,
      title: "Post-study Work Visa (PSW)",
      description: "Opportunities to stay back & build your career in Korea after graduation.",
      color: "from-pink-500 to-rose-600",
      bgColor: "from-pink-50 to-rose-50",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50/40"></div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-500/20 rounded-full blur-3xl animate-float-gentle"></div>
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/15 to-pink-500/15 rounded-full blur-3xl animate-float-gentle animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-cyan-500/10 rounded-full blur-3xl animate-float-gentle animation-delay-2000"></div>

        {/* Enhanced geometric patterns */}
        <div className="absolute top-16 left-16 w-48 h-48 bg-[radial-gradient(circle,rgba(99,102,241,0.1)_2px,transparent_2px)] [background-size:32px_32px] opacity-50 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-48 h-48 bg-[radial-gradient(circle,rgba(147,51,234,0.1)_2px,transparent_2px)] [background-size:32px_32px] opacity-50 animate-pulse animation-delay-3000"></div>

        {/* Flowing accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-200/60 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200/60 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-200/30 rounded-full px-6 py-3 mb-8">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <span className="text-sm font-semibold text-indigo-700 tracking-wide uppercase">
              South Korea Webinar 2025-26
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Why Study in South Korea?
            </span>
            <br />
            <span className="text-3xl lg:text-4xl text-gray-700 font-semibold">
              Insights with Bhavik Siddhpura
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Learn about tuition fees, courses, scholarships, and the complete
            student visa process for South Korea with{" "}
            <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              The Visa Man
            </span>
            .
          </p>

          {/* Quick info badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 shadow-lg">
              <Clock className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-gray-700">
                2 Hours Live Session
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 shadow-lg">
              <Users className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">
                Interactive Q&A
              </span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full px-4 py-2 shadow-lg">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">
                Certificate Included
              </span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              {/* Card background with glassmorphism */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-2xl border border-white/40 shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-500`}
              ></div>

              {/* Card content */}
              <div className="relative z-10 p-8 text-center">
                {/* Icon container */}
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 mx-auto bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 shadow-current/25`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-br ${feature.color} rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Text content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover border effect */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.color} p-[1px]`}
              >
                <div className="w-full h-full bg-white/90 backdrop-blur-xl rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl">
              <p className="text-lg font-semibold">
                🎯 Join thousands of successful students who achieved their
                foreign study dreams!
              </p>
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
            transform: translate(15px, -15px) scale(1.05);
          }
        }

        .animate-float-gentle {
          animation: float-gentle 12s ease-in-out infinite;
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
      `}</style>
    </section>
  );
}
