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
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";

const Hero = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { webinars, registration, paymentVerified } = useSelector(
    (state) => state.webinar
  );
  const [showForm, setShowForm] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    webinar_id: "",
    name: "",
    email: "",
    phone: "",
  });

  // Track mouse movement
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
      className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 mt-12 lg:mt-0 pt-12 lg:pt-20"
    >
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
                transform: `translate(${mousePosition.x * 50}px, ${mousePosition.y * 30
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
            backgroundPosition: `${mousePosition.x * 20}px ${mousePosition.y * 20
              }px`,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12 gap-8 lg:gap-12">
          {/* Content Section */}
          <div className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8 max-w-2xl">
            {/* Live Status */}
            {/* {webinars.length > 0 && (
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-sm text-gray-300">
                  <span className="text-green-400 font-semibold">
                    LIVE WEBINAR
                  </span>
                  <span className="ml-2 text-gray-400">
                    {new Date(webinars[0].start_time).toLocaleDateString()}
                  </span>
                </div>
              </div>
            )} */}


            {webinars.length > 0 && (
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="text-sm text-gray-300 flex items-center space-x-4">
                  <span className="text-green-400 font-semibold">
                    LIVE WEBINAR
                  </span>
                  {/* Date */}
                  <div className="flex items-center space-x-1 text-white font-bold">
                    <CalendarDays size={16} className="text-white" />
                    <span>{new Date(webinars[0].start_time).toLocaleDateString()}</span>
                  </div>
                  {/* Time */}
                  <div className="flex items-center space-x-1 text-white font-bold">
                    <Clock size={16} className="text-white" />
                    <span>{new Date(webinars[0].start_time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
                  </div>
                </div>
              </div>
            )}


            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                From Application to {" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Visa
                </span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
                Master Your Korean University Journey in 2 hours.{" "}
                <span className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
                  Learn About Tuition Fees, Courses, Universities, Scholarships with{" "}
                  <span className="text-orange-400 font-semibold">
                    The Visa Man
                  </span>
                </span>
              </h2>
              {/* <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium">
                Learn About Tuition Fees, Courses, Universities with{" "}
                <span className="text-orange-400 font-semibold">
                  The Visa Man
                </span>
              </h2> */}
            </div>

            {/* Description */}
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join our exclusive paid webinar and discover proven strategies for
              student visas, scholarships, and admission success.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Book Your Seat Now
              </button>
              <Link href="/#about" className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-200">
                Learn More
              </Link>
            </div>

            {/* Feature Points */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              {[
                "🎯 Live Interactive Session",
                "👨‍🏫 Expert Guidance",
                "🏆 Certificate Included",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-gray-400"
                >
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          {/* <div className="flex-1 mt-2 relative w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/webinar.jpg"
                alt="Conference Speaker"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-xs text-gray-300">Success Stories</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-xs text-gray-300">Visa Success</div>
              </div>
            </div>
          </div> */}
          {/* Image Section */}
<div className="flex-1 mt-2 relative w-full max-w-lg lg:max-w-none flex flex-col items-center">
  <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl">
    <Image
      src="/webinar_visaman.jpg"
      alt="Conference Speaker"
      fill
      className="object-cover"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
  </div>

  {/* Floating Stats */}
  <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
    <div className="text-center">
      <div className="text-2xl font-bold text-white">100+</div>
      <div className="text-xs text-gray-300">Success Stories</div>
    </div>
  </div>

  <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
    <div className="text-center">
      <div className="text-2xl font-bold text-white">95%</div>
      <div className="text-xs text-gray-300">Visa Success</div>
    </div>
  </div>
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
    </section>
  );
};

export default Hero;
