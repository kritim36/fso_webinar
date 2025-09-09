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
    <section id="home" className="relative flex flex-col md:flex-row items-center justify-between min-h-screen">
      {/* Left side */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2 min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a1a] to-black" />
          <div className="absolute inset-0 bg-[url('/waves.svg')] bg-cover opacity-30 animate-waves" />
        </div>

        <div className="relative z-10 space-y-6 text-white">
          {webinars.length > 0 && (
            <div>
              <p className="uppercase tracking-widest text-sm">
                {new Date(webinars[0].start_time).toLocaleString()}
              </p>
            </div>
          )}
          <h1 className="text-4xl md:text-3xl font-bold leading-tight">
            Study in South Korea:
            <br /> Learn About Tuition Fees, Courses, Universities, and More
            with The Visa Man.
          </h1>
          <p className="tracking-widest text-sm max-w-md">
            Join our exclusive paid webinar and discover proven strategies for
            student visas, scholarships, and admission success.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            Book Your Seat Now
          </button>
        </div>
      </div>

      {/* Right side image */}
      <div className="relative w-full md:w-1/2 h-screen">
        <Image
          src="/hero_image.png"
          alt="Conference Speaker"
          fill
          className="object-cover"
          priority
        />
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
