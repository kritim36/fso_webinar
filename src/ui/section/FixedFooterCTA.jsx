"use client";
import React, { useState } from "react";

export default function FixedFooterCTA() {
  const [showForm, setShowForm] = useState(false);

  const handleBookNow = () => {
      setShowForm(true); // Show popup form
  };
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-50 to-white shadow-lg border-t border-gray-200 z-40">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-1 md:py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Extra Content (Desktop only) */}
        <div className="hidden md:flex flex-col text-gray-800">
          <h3 className="text-xl font-bold">🎉 Limited Time Offer!</h3>
          <p className="text-sm text-gray-600">
            Register today and unlock premium benefits for just ₹99.
          </p>
        </div>

        {/* Price + CTA */}
        <div className="flex flex-row md:flex-row items-center justify-between w-full md:w-auto gap-3">
          {/* Price Section */}
          <div className="text-left">
            <p className="text-lg font-bold text-blue-600">₹99/-</p>
            <p className="text-sm text-gray-500 line-through">₹9999</p>
            <p className="hidden md:block text-xs text-gray-600">Only 50 seats left!</p>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleBookNow}
            className="flex-1 md:flex-none px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-base rounded-md shadow-md hover:opacity-90 transition text-center"
          >
            Register Now For Just ₹99/-
          </button>
        </div>
      </div>


      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-gradient-to-b from-black via-[#0a0a1a] to-black p-8 rounded-2xl w-[90%] max-w-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Book Your Seat</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Country Preference"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />

              {/* Payment Section (placeholder for integration) */}
              <div className="p-4 rounded-md bg-[#1a1a2e]">
                <p className="mb-2">💳 Payment Section</p>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Proceed to Payment
                </button>
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="updates" className="w-4 h-4" />
                <label htmlFor="updates" className="text-sm">
                  Send me updates about future events
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-600 rounded-md hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
