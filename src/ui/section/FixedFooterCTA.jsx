"use client";
import React, { useState, useEffect } from "react";
import BookingForm from "./BookingForm";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  fetchWebinars,
  verifyPayment,
  resetRegistration,
} from "@/store/webinarSlice";

export default function FixedFooterCTA() {
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
    <>
      {/* CTA Footer (only visible on mobile) */}
      <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-50 to-white shadow-lg border-t border-gray-200 z-40 md:hidden">
        <div className="max-w-7xl mx-auto w-full px-4 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Price + CTA */}
          <div className="flex flex-row items-center justify-between w-full gap-3">
            {/* Price Section */}
            <div className="text-left">
              <p className="text-lg font-bold text-blue-600">₹99/-</p>
              <p className="text-sm text-gray-500 line-through">₹9999</p>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => setShowForm(true)}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm rounded-md shadow-md hover:opacity-90 transition text-center"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showForm && (
        <BookingForm
          formData={formData}
          setFormData={setFormData}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}

