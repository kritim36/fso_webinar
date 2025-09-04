"use client";
import React from "react";
import { Grid, CircleDot, Check } from "lucide-react"; // icons

export default function PricingSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-10 items-start">
        
        {/* Gold Pack */}
        <div className="bg-white shadow-md rounded-md p-8 flex flex-col items-center text-center">
          <Grid className="w-10 h-10 text-black mb-4" />
          <h3 className="text-lg font-bold text-gray-900">Gold pack</h3>
          <p className="text-sm text-gray-500 mb-4">Perfect for small business</p>
          <p className="text-4xl font-extrabold text-gray-900">
            $90<span className="text-lg font-normal text-gray-500">/mo</span>
          </p>
          <p className="text-gray-500 mt-4">Lorem ipsum</p>
          <p className="text-gray-500">Adipiscing elit sed</p>
          <p className="text-gray-500 mb-6">Labore et dolore tempor</p>
          <a
            href="#"
            className="px-6 py-3 w-full bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            GET NOW
          </a>
        </div>

        {/* Silver Pack */}
        <div className="bg-white shadow-md rounded-md p-8 flex flex-col items-center text-center">
          <CircleDot className="w-10 h-10 text-black mb-4" />
          <h3 className="text-lg font-bold text-gray-900">Silver pack</h3>
          <p className="text-sm text-gray-500 mb-4">Perfect for small business</p>
          <p className="text-4xl font-extrabold text-gray-900">
            $70<span className="text-lg font-normal text-gray-500">/mo</span>
          </p>
          <p className="text-gray-500 mt-4">Lorem ipsum</p>
          <p className="text-gray-500">Adipiscing elit sed</p>
          <p className="text-gray-500 mb-6">Labore et dolore tempor</p>
          <a
            href="#"
            className="px-6 py-3 w-full bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
          >
            GET NOW
          </a>
        </div>

        {/* Price Plans Content */}
        <div className="flex flex-col justify-center">
          <p className="uppercase text-sm tracking-wider text-gray-600 font-medium">
            Price Plans
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">
            Get your tickets
          </h2>
          <p className="text-gray-600 mb-6">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-600" />
              <span className="text-gray-900 font-medium">
                Suspendisse dignissim
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-600" />
              <span className="text-gray-900 font-medium">
                Nullam efficitur nunc
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-600" />
              <span className="text-gray-900 font-medium">
                Etiam eu lectus at lectus
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
