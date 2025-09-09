"use client";
import React, { useState } from "react";
import BookingForm from "./BookingForm";


export default function FixedFooterCTA() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    webinar_id: "",
    name: "",
    email: "",
    phone: "",
  });

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

