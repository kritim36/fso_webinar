"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWebinars } from "@/store/webinarSlice";
import BookingForm from "./BookingForm";

export default function ConferenceHero() {
  const dispatch = useDispatch();
  const { webinars } = useSelector((state) => state.webinar);

  const [timeLeft, setTimeLeft] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    webinar_id: "",
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  // Fetch webinars on load
  useEffect(() => {
    dispatch(fetchWebinars());
  }, [dispatch]);

  // Set default webinar_id
  useEffect(() => {
    if (webinars.length > 0) {
      setFormData((prev) => ({ ...prev, webinar_id: webinars[0].id }));
    }
  }, [webinars]);

  // Countdown timer
  useEffect(() => {
    if (webinars.length === 0) return;

    const targetDate = new Date(webinars[0].start_time);

    const calculateTimeLeft = () => {
      const difference = targetDate - new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return null;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [webinars]);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative text-center text-white z-10 px-4">
        <p className="uppercase tracking-widest text-sm">Join Us</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Our conference starts in
        </h1>

        {timeLeft ? (
          <div className="flex justify-center gap-6 mt-6 text-2xl md:text-4xl font-bold">
            <div className="text-center">
              <p>{timeLeft.days}</p>
              <span className="text-sm font-light">Days</span>
            </div>
            <span>:</span>
            <div className="text-center">
              <p>{timeLeft.hours}</p>
              <span className="text-sm font-light">Hours</span>
            </div>
            <span>:</span>
            <div className="text-center">
              <p>{timeLeft.minutes}</p>
              <span className="text-sm font-light">Minutes</span>
            </div>
            <span>:</span>
            <div className="text-center">
              <p>{timeLeft.seconds}</p>
              <span className="text-sm font-light">Seconds</span>
            </div>
          </div>
        ) : (
          <p className="mt-6">Loading...</p>
        )}

        <button
          onClick={() => setShowForm(true)}
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md font-medium"
        >
          Join The Visa Man Webinar
        </button>
      </div>

      {showForm && (
        <BookingForm
          formData={formData}
          setFormData={setFormData}
          onClose={() => setShowForm(false)}
        />
      )}
    </section>
  );
}

