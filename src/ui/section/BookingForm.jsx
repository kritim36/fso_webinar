"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { registerWebinar, resetRegistration } from "@/store/webinarSlice";

export default function BookingForm({ formData, setFormData, onClose }) {
  const dispatch = useDispatch();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerWebinar(formData));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-gradient-to-b from-black via-[#0a0a1a] to-black p-8 rounded-2xl w-[90%] max-w-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Book Your Seat</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
            required
          />

          <div className="p-4 rounded-md bg-[#1a1a2e]">
            <p className="mb-2">💳 Payment will open after confirming booking</p>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                dispatch(resetRegistration());
              }}
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
  );
}
