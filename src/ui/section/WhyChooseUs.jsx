"use client";
import React from "react";
import {
  GraduationCap,
  Users,
  Building2,
  Star,
  Award,
  CheckCircle,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Well-trained Personnel",
      description:
        "Our team has 15+ years of industry expertise to guide you in your South Korea journey.",
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50",
      accent: "blue",
    },
    {
      icon: Building2,
      title: "Strong University Affiliations",
      description:
        "Good partnerships with top universities for improved admission chances.",
      color: "from-purple-500 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50",
      accent: "purple",
    },
    {
      icon: Users,
      title: "Personalized Counseling",
      description:
        "Ideal guidance and individualized attention tailored to every student's needs.",
      color: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50",
      accent: "emerald",
    },
  ];

  return (
    <section
      id="why_us"
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-indigo-50/30"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-20 -right-32 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-indigo-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/8 to-cyan-500/8 rounded-full blur-3xl animate-float-slow animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-violet-400/6 to-purple-500/6 rounded-full blur-3xl animate-float-slow animation-delay-2000"></div>

        {/* Geometric patterns */}
        <div className="absolute top-16 left-16 w-40 h-40 bg-[radial-gradient(circle,rgba(99,102,241,0.08)_2px,transparent_2px)] [background-size:28px_28px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-40 h-40 bg-[radial-gradient(circle,rgba(147,51,234,0.08)_2px,transparent_2px)] [background-size:28px_28px] opacity-60 animate-pulse animation-delay-3000"></div>

        {/* Flowing lines */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200/40 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/40 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side - Enhanced Content */}
          <div className="relative space-y-8">
            {/* Background card effect */}
            <div className="absolute -inset-8 bg-gradient-to-br from-white/60 to-white/30 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl"></div>

            <div className="relative z-10 p-8">
              {/* Header badge */}
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-200/30 rounded-full px-6 py-3 mb-8">
                <Star className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-bold text-purple-700 tracking-wide uppercase">
                  Why The Visa Man for South Korea?
                </span>
              </div>

              {/* Main heading */}
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                <span className="bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-700 bg-clip-text text-transparent">
                  Reliable advice for
                </span>
                <br />
                <span className="text-gray-800">
                  Indian students of Korean studies
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Make your dream of studying in South Korea a reality with{" "}
                  <span className="font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    The Visa Man
                  </span>
                  . From admission to visa sanction, we will be with you at
                  every stage.
                </p>
                <p>
                  Get in touch with us today and begin your path to a brighter
                  future in South Korea.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200/50">
                {[
                  { number: "24k+", label: "Students Guided" },
                  { number: "15+", label: "Years Experience" },
                  { number: "95%", label: "Success Rate" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Enhanced Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
              >
                {/* Card background with glassmorphism */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-2xl border border-white/60 shadow-xl group-hover:shadow-2xl transition-all duration-500"></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-30 rounded-2xl transition-opacity duration-500`}
                ></div>

                {/* Gradient border effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${feature.color} p-[1px]`}
                >
                  <div className="w-full h-full bg-white/95 backdrop-blur-xl rounded-2xl"></div>
                </div>

                {/* Card content */}
                <div className="relative z-10 flex items-start p-8">
                  {/* Enhanced icon */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <CheckCircle
                        className={`w-5 h-5 text-${feature.accent}-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                    </div>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="mt-4 w-full h-1 bg-gray-200/50 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${feature.color} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Trust indicators */}
            <div className="mt-12 p-6 bg-gradient-to-r from-gray-50/80 to-white/60 backdrop-blur-sm rounded-2xl border border-gray-200/50 shadow-lg">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    Award Winning
                  </span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    Trusted Globally
                  </span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-purple-500" />
                  <span className="text-sm font-semibold text-gray-700">
                    Top Rated
                  </span>
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
            transform: translate(0px, 0px) scale(1);
          }
          50% {
            transform: translate(20px, -20px) scale(1.02);
          }
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
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
};

export default WhyChooseUs;
