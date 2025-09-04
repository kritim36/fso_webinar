"use client";
import React from "react";

export default function MapFullScreen() {
  return (
    <div className="w-full h-[75vh]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.601987985725!2d72.6050686!3d22.9974727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848ac8a7faf3%3A0x9e4b3fd6461377a7!2sFirst%20Step%20Overseas%20Consultants!5e0!3m2!1sen!2sin!4v1693826374563!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0 rounded-lg"
      ></iframe>
    </div>
  );
}
