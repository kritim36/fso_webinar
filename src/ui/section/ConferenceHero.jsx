"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { fetchWebinars, verifyPayment, resetRegistration } from "@/store/webinarSlice";
import BookingForm from "./BookingForm";

export default function ConferenceHero() {
  const dispatch = useDispatch();
  const { webinars, registration, paymentVerified  } = useSelector((state) => state.webinar);
  const [timeLeft, setTimeLeft] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    webinar_id: "",
    name: "",
    email: "",
    phone: "",
  });

  // Fetch webinars on load
  useEffect(() => {
    dispatch(fetchWebinars());
    // Trigger entrance animation
    setTimeout(() => setIsLoaded(true), 100);
  }, [dispatch]);

  // Set default webinar_id
  useEffect(() => {
    if (webinars.length > 0) {
      setFormData((prev) => ({ ...prev, webinar_id: webinars[0].id }));
    }
  }, [webinars]);

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

  const [particles, setParticles] = useState([]);

useEffect(() => {
  const newParticles = [...Array(20)].map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
    animationDuration: `${3 + Math.random() * 2}s`,
  }));
  setParticles(newParticles);
}, []);

  const CountdownCard = ({ value, label, delay = 0 }) => (
    <div
      className={`relative group transform transition-all duration-700 delay-${delay} ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <div className="relative">
          <p className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-blue-100 bg-clip-text text-transparent">
            {value?.toString().padStart(2, "0") || "00"}
          </p>
          <span className="text-xs md:text-sm font-medium text-blue-100 uppercase tracking-wider">
            {label}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Dynamic background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed scale-110 transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551836022-4c4c79ecde51')",
        }}
      />

      {/* Animated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/70 to-indigo-900/80"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

      {/* Floating particles effect */}
      {/* <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div> */}
      <div className="absolute inset-0">
  {particles.map((style, i) => (
    <div
      key={i}
      className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
      style={style}
    />
  ))}
</div>


      {/* Main content */}
      <div className="relative text-center text-white z-10 px-4 max-w-6xl mx-auto">
        {/* Header section */}
        <div
          className={`transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-white/20 backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="uppercase tracking-widest text-sm font-medium text-blue-100">
              Join Us Live
            </p>
          </div>
        </div>

        {/* Main title */}
        <div
          className={`transform transition-all duration-1000 delay-200 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Our conference starts in
            </span>
          </h1>
        </div>

        {/* Countdown timer */}
        {timeLeft ? (
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 mb-12">
            <CountdownCard value={timeLeft.days} label="Days" delay={300} />
            <div
              className={`hidden md:flex items-center text-6xl font-thin text-white/60 transform transition-all duration-700 delay-400 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              :
            </div>
            <CountdownCard value={timeLeft.hours} label="Hours" delay={500} />
            <div
              className={`hidden md:flex items-center text-6xl font-thin text-white/60 transform transition-all duration-700 delay-600 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              :
            </div>
            <CountdownCard
              value={timeLeft.minutes}
              label="Minutes"
              delay={700}
            />
            <div
              className={`hidden md:flex items-center text-6xl font-thin text-white/60 transform transition-all duration-700 delay-800 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              :
            </div>
            <CountdownCard
              value={timeLeft.seconds}
              label="Seconds"
              delay={900}
            />
          </div>
        ) : (
          <div className="mt-8 mb-12">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
              <span className="text-lg font-medium">
                Loading conference details...
              </span>
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div
          className={`transform transition-all duration-1000 delay-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            onClick={() => setShowForm(true)}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 transition-all duration-300 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1"
          >
            {/* Button glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>

            <div className="relative flex items-center gap-3">
              <svg
                className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Join The Visa Man Webinar</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Additional info */}
        <div
          className={`mt-8 transform transition-all duration-1000 delay-1200 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-blue-100/80 text-sm max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals in our exclusive webinar. Learn the
            latest strategies and connect with industry experts.
          </p>
        </div>
      </div>

      {/* Booking form modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 animate-fadeIn">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowForm(false)}
          ></div>
          <BookingForm
            formData={formData}
            setFormData={setFormData}
            onClose={() => setShowForm(false)}
          />
        </div>
      )}

      {/* Custom styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .delay-300 {
          transition-delay: 300ms;
        }
        .delay-400 {
          transition-delay: 400ms;
        }
        .delay-500 {
          transition-delay: 500ms;
        }
        .delay-600 {
          transition-delay: 600ms;
        }
        .delay-700 {
          transition-delay: 700ms;
        }
        .delay-800 {
          transition-delay: 800ms;
        }
        .delay-900 {
          transition-delay: 900ms;
        }
        .delay-1000 {
          transition-delay: 1000ms;
        }
        .delay-1200 {
          transition-delay: 1200ms;
        }
      `}</style>
    </section>
  );
}
