"use client";
import React from "react";

export default function FixedFooterCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-50 to-white shadow-lg border-t border-gray-200 z-50">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-3 md:py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
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
          <a
            href="#register"
            className="flex-1 md:flex-none px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-sm md:text-base rounded-md shadow-md hover:opacity-90 transition text-center"
          >
            Register Now For Just ₹99/-
          </a>
        </div>
      </div>
    </div>
  );
}
