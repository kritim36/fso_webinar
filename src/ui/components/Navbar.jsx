"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookingForm from "../section/BookingForm";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import {
  fetchWebinars,
  verifyPayment,
  resetRegistration,
} from "@/store/webinarSlice";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
    const { webinars, registration, paymentVerified } = useSelector(
      (state) => state.webinar
    );
  const [formData, setFormData] = useState({
    webinar_id: 1,
    name: "",
    email: "",
    phone: "",
  });

    // Load webinars
    useEffect(() => {
      dispatch(fetchWebinars());
    }, [dispatch]);
  
    // Set default webinar_id
    // useEffect(() => {
    //   if (webinars.length > 0) {
    //     setFormData((prev) => ({ ...prev, webinar_id: webinars[0].id }));
    //   }
    // }, [webinars]);

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

  const navItems = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Speakers", href: "/#speakers", id: "speakers" },
    { name: "Why Us", href: "/#why_us", id: "why_us" },
    { name: "Gallery", href: "/#gallery", id: "gallery" },
    { name: "FAQ", href: "/#faq", id: "faq" },
  ];

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const isHome = pathname === "/";
  const navbarBg = isHome
    ? scrolled
      ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-purple-100"
      : "bg-transparent"
    : "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-purple-100";

  const textColor = isHome && !scrolled ? "text-white" : "text-gray-800";
  const logoColor =
    isHome && !scrolled
      ? "text-white"
      : "bg-gradient-to-r from-[#3b0a77] to-purple-600 bg-clip-text text-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${navbarBg} ${textColor}`}
      >
        {/* Top notification bar */}
        <div
          className={`bg-gradient-to-r from-[#3b0a77] to-purple-600 text-white text-center py-2 text-sm font-medium transform transition-all duration-700 ${
            isLoaded
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>
              🎯 Join our exclusive South Korea workshop @ INR 199 - Limited seats
              available!
            </span>
            <button
              onClick={() => setShowForm(true)}
              className="ml-4 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors duration-300"
            >
              Register Now
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between py-2">
            {/* Logo Section */}
            <div
              className={`flex items-center space-x-3 transform transition-all duration-700 delay-200 ${
                isLoaded
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              <Link href="/" className="group flex items-center space-x-3">
                {/* Enhanced Logo */}
                <div className="relativer">
                  <div
                    className={`w-[88px] h-[72px] sm:w-[100px] sm:h-[68] lg:w-[120px] lg:h-[80px] rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isHome && !scrolled
                        ? "bg-white/30 backdrop-blur-md border border-white/40"
                        : ""
                        // : "bg-gradient-to-br from-[#3b0a77] to-purple-600 shadow-lg"
                    } group-hover:scale-110`}
                  >
                    <div className="relative h-[40px] w-[250px] m-2 lg:m-2 sm:m-1 sm:h-[68px] sm:w-[200px]">
                      <Image
                        src="/FSO_Logo.png"
                        alt="FSO Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div
              className={`hidden md:flex items-center space-x-1 transform transition-all duration-700 delay-400 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-8 opacity-0"
              }`}
            >
              {navItems.map((item, index) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-xl font-medium transition-all duration-300 group ${
                    activeSection === item.id
                      ? isHome && !scrolled
                        ? "text-white bg-white/20 backdrop-blur-md"
                        : "text-[#3b0a77] bg-purple-50"
                      : isHome && !scrolled
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-gray-600 hover:text-[#3b0a77] hover:bg-purple-50"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item.name}
                  {/* Active indicator */}
                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? isHome && !scrolled
                          ? "bg-white scale-100"
                          : "bg-[#3b0a77] scale-100"
                        : "bg-transparent scale-0"
                    }`}
                  ></div>
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop CTA */}
              <div
                className={`hidden md:block transform transition-all duration-700 delay-600 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <button
                  onClick={() => setShowForm(true)}
                  className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-500 hover:via-purple-500 hover:to-blue-600 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  {/* Button glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>

                  <div className="relative flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
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
                    <span>Book Now</span>
                  </div>
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden p-2 rounded-xl transition-all duration-300 ${
                  isHome && !scrolled
                    ? "text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-[#3b0a77] hover:bg-purple-50"
                }`}
                onClick={() => setOpen(!open)}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    size={24}
                    className={`absolute inset-0 transition-all duration-300 ${
                      open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-purple-100 px-6 py-6 space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 transform ${
                  activeSection === item.id
                    ? "text-[#3b0a77] bg-purple-50 translate-x-2"
                    : "text-gray-600 hover:text-[#3b0a77] hover:bg-purple-50 hover:translate-x-2"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  {activeSection === item.id && (
                    <div className="w-2 h-2 bg-[#3b0a77] rounded-full"></div>
                  )}
                </div>
              </Link>
            ))}

            {/* Mobile CTA */}
            <button
              onClick={() => {
                setShowForm(true);
                setOpen(false);
              }}
              className="w-full mt-4 px-6 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 text-white rounded-xl font-semibold shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
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
                <span>Book Consultation</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Booking Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-[60] animate-fadeIn">
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

      {/* Custom Styles */}
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
      `}</style>
    </>
  );
}
