"use client";
import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import { useDispatch, useSelector } from "react-redux";
import { fetchWebinars, verifyPayment, resetRegistration } from "@/store/webinarSlice";
import Swal from "sweetalert2";

const CTA = () => {
  const dispatch = useDispatch();
  const { webinars, registration, paymentVerified } = useSelector(
    (state) => state.webinar
  );
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    webinar_id: 1,
    name: "",
    email: "",
    phone: "",
  });

  // Mouse movement effect
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
  // useEffect(() => {
  //   if (webinars.length > 0) {
  //     setFormData((prev) => ({ ...prev, webinar_id: webinars[0].id }));
  //   }
  // }, [webinars]);

  // Razorpay launch
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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 px-4 md:px-8">
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

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white space-y-8">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Crack GKS Scholarship With Latest Requirements
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Unlock South Korea: How to Get Accepted (Funded) at Korean University 2026 🚀
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
          >
            Register @ INR 199
          </button>
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

export default CTA;
