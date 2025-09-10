"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  fetchWebinars,
  verifyPayment,
  resetRegistration,
} from "@/store/webinarSlice";
import BookingForm from "./BookingForm";

const Hero = () => {
  const dispatch = useDispatch();
  const { webinars, registration, paymentVerified } = useSelector(
    (state) => state.webinar
  );
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    webinar_id: "",
    name: "",
    email: "",
    phone: "",
  });

  // Load webinars
  useEffect(() => {
    dispatch(fetchWebinars());
  }, [dispatch]);

  // Set default webinar_id
  useEffect(() => {
    if (webinars.length > 0) {
      setFormData((prev) => ({ ...prev, webinar_id: webinars[0].id }));
    }
  }, [webinars]);

  // Launch Razorpay
  useEffect(() => {
    if (registration?.razorpay_order_id) {
      const options = {
        key: registration.key,
        amount: registration.amount * 100,
        currency: registration.currency,
        name: "Webinar Registration",
        description: "Payment for Webinar",
        order_id: registration.razorpay_order_id,
        handler: function (response) {
          dispatch(
            verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              registration_id: registration.registration_id,
            })
          );
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#3399cc" },
      };
      const rzp = new window.Razorpay(options);
      rzp.open();
    }
  }, [registration, dispatch, formData]);

  // SweetAlert after successful payment
  useEffect(() => {
    if (paymentVerified) {
      Swal.fire({
        title: "🎉 Payment Successful!",
        text: "Please check your email for webinar confirmation.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      }).then(() => {
        setShowForm(false);
        dispatch(resetRegistration());
      });
    }
  }, [paymentVerified, dispatch]);

  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen overflow-hidden"
    >
      {/* Ultra-Modern Animated Background */}
      <div className="absolute inset-0">
        {/* Primary gradient with mesh effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950"></div>

        {/* Animated mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>

        {/* Large floating orbs with enhanced glow */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/25 to-pink-500/25 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-gradient-to-r from-indigo-600/30 to-blue-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

        {/* Geometric pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(79, 70, 229, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "400px 400px, 400px 400px, 60px 60px, 60px 60px",
          }}
        ></div>

        {/* Enhanced particle system */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-500/50"></div>
            </div>
          ))}
        </div>

        {/* Flowing lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-flow"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-flow-reverse"></div>
        </div>
      </div>

      {/* Left side content with premium glassmorphism */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2 min-h-screen">
        {/* Ultra-premium backdrop */}
        <div className="absolute inset-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-purple-500/10"></div>
        <div className="absolute inset-6 bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl border border-white/10"></div>

        <div className="relative z-20 space-y-10 text-white p-12">
          {/* Status indicator with enhanced styling */}
          {webinars.length > 0 && (
            <div className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-300 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <div className="absolute inset-0 w-4 h-4 bg-green-400/30 rounded-full animate-ping"></div>
              </div>
              <div className="flex flex-col">
                <p className="uppercase tracking-wider text-xs text-emerald-300 font-bold">
                  LIVE WEBINAR
                </p>
                <p className="text-sm text-gray-300 font-medium">
                  {new Date(webinars[0].start_time).toLocaleString()}
                </p>
              </div>
            </div>
          )}

          {/* Enhanced typography with multiple gradients */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent animate-shimmer">
                Study in
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-300 to-orange-300 bg-clip-text text-transparent animate-shimmer animation-delay-500">
                South Korea
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 leading-relaxed">
              Learn About{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tuition Fees, Courses, Universities
              </span>
              , and More with{" "}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                The Visa Man
              </span>
            </h2>
          </div>

          {/* Enhanced description */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-lg leading-relaxed font-light">
            Join our exclusive paid webinar and discover{" "}
            <span className="text-blue-300 font-semibold">
              proven strategies
            </span>{" "}
            for student visas, scholarships, and admission success.
          </p>

          {/* Premium buttons with advanced effects */}
          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <button
              onClick={() => setShowForm(true)}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 transform-gpu"
            >
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <span>Book Your Seat Now</span>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
            </button>

            <button className="group px-10 py-5 border-2 border-white/30 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:border-purple-400/50 relative overflow-hidden">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Enhanced feature highlights */}
          <div className="flex flex-wrap gap-8 pt-12">
            {[
              { color: "blue", text: "Live Interactive Session", icon: "🎯" },
              { color: "green", text: "Expert Guidance", icon: "👨‍🏫" },
              { color: "purple", text: "Certificate Included", icon: "🏆" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 group cursor-pointer"
              >
                <div className="relative">
                  <div
                    className={`w-3 h-3 bg-${item.color}-400 rounded-full shadow-lg shadow-${item.color}-400/50 group-hover:scale-125 transition-transform duration-300`}
                  ></div>
                  <div
                    className={`absolute inset-0 w-3 h-3 bg-${item.color}-400/30 rounded-full animate-ping group-hover:animate-pulse`}
                  ></div>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                  {item.icon} {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced right side with 3D effects */}
      <div className="relative w-full md:w-1/2 h-screen group">
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/20 to-slate-900/80 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>

        {/* Main image with enhanced effects */}
        <div className="relative w-full h-full overflow-hidden rounded-l-3xl">
          <Image
            src="/hero_image.png"
            alt="Conference Speaker"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>

        {/* Premium floating stats cards */}
        <div className="absolute top-24 right-16 z-20 animate-float">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
            <div className="text-center space-y-2">
              <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-sm text-gray-300 font-semibold tracking-wide">
                Success Stories
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-24 right-8 z-20 animate-float animation-delay-2000">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 hover:scale-105">
            <div className="text-center space-y-2">
              <div className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent">
                98%
              </div>
              <div className="text-xs text-gray-300 font-semibold tracking-wide">
                Visa Success Rate
              </div>
              <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-1/2 right-32 z-20 animate-float animation-delay-1000">
          <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/10 backdrop-blur-xl rounded-2xl p-4 border border-emerald-400/30 shadow-xl">
            <div className="text-emerald-300 text-center font-bold">LIVE</div>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      {showForm && (
        <BookingForm
          formData={formData}
          setFormData={setFormData}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* Advanced Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) rotate(-0.5deg);
          }
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(100%);
          }
        }

        @keyframes flow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        @keyframes flow-reverse {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }
        .animate-flow {
          animation: flow 8s ease-in-out infinite;
        }
        .animate-flow-reverse {
          animation: flow-reverse 12s ease-in-out infinite;
        }

        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
