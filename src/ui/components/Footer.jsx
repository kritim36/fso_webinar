"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
} from "react-icons/fa6";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Only generate random positions on client
    const generated = [...Array(12)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 2}s`,
    }));
    setParticles(generated);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById("footer");
    if (footerElement) {
      observer.observe(footerElement);
    }

    return () => {
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "#",
      color: "hover:text-blue-500",
      bg: "hover:bg-blue-500/10",
    },
    {
      icon: FaTwitter,
      href: "#",
      color: "hover:text-gray-200",
      bg: "hover:bg-gray-200/10",
    },
    {
      icon: FaDribbble,
      href: "#",
      color: "hover:text-pink-500",
      bg: "hover:bg-pink-500/10",
    },
    {
      icon: FaInstagram,
      href: "#",
      color: "hover:text-orange-400",
      bg: "hover:bg-orange-400/10",
    },
  ];

  const navItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Why Us", href: "/#why_us" },
    { name: "Gallery", href: "/#gallery" },
  ];

  const contactInfo = [
    { icon: FaPhone, text: "+91 9558550056 ", href: "tel:+919558550056" },
    {
      icon: FaEnvelope,
      text: "admission@firststepoverseas.com",
      href: "mailto:admission@firststepoverseas.com",
    },
    { icon: FaLocationDot, text: "Gujarat, India", href: "#" },
  ];

  return (
    <footer
      id="footer"
      className="relative bg-gradient-to-br from-[#3b0a77] via-[#4a1185] to-[#2d0a5e] text-gray-300 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse"></div>

        {/* Floating particles */}
        {/* {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))} */}

         {particles.map((style, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full animate-pulse"
            style={style}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          {/* Top Section */}
          <div
            className={`text-center mb-12 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Logo Section */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="relative">
                <div
                                    className={`w-[88px] h-[72px] sm:w-[100px] sm:h-[68] lg:w-[120px] lg:h-[80px] rounded-2xl flex items-center justify-center transition-all duration-300 
                                         bg-white/40 backdrop-blur-md border border-white/50
                                        group-hover:scale-110`}
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
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-12">
              Empowering students to achieve their dreams of studying abroad
              through expert guidance, comprehensive support, and personalized
              consultation services.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Navigation Links */}
            <div
              className={`transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h4 className="text-white font-bold text-lg mb-6 relative">
                <span className="relative z-10">Quick Links</span>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500"></div>
              </h4>
              <nav>
                <ul className="space-y-3">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.href}
                        className="group flex items-center space-x-2 hover:text-white transition-all duration-300 hover:translate-x-2"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Information */}
            <div
              className={`transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h4 className="text-white font-bold text-lg mb-6 relative">
                <span className="relative z-10">Get in Touch</span>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500"></div>
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="group flex items-center space-x-3 hover:text-white transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-600/30 to-blue-600/30 rounded-lg flex items-center justify-center group-hover:from-purple-600/50 group-hover:to-blue-600/50 transition-all duration-300">
                      <info.icon className="w-4 h-4 text-purple-300 group-hover:text-white" />
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter/Social */}
            <div
              className={`transform transition-all duration-1000 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
            >
              <h4 className="text-white font-bold text-lg mb-6 relative">
                <span className="relative z-10">Stay Connected</span>
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500"></div>
              </h4>

              <p className="text-sm text-gray-300 mb-6">
                Follow us on social media for the latest updates, success
                stories, and educational opportunities.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/10 ${social.color} ${social.bg} transition-all duration-300 hover:scale-110 hover:border-white/20 hover:shadow-lg`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Awards/Certifications */}
          <div
            className={`text-center mb-8 transform transition-all duration-1000 delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 py-8 border-t border-purple-700/30">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Trusted Partner</p>
                  <p className="text-xs text-purple-200">
                    45,000+ Success Stories
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">
                    Certified Consultants
                  </p>
                  <p className="text-xs text-purple-200">Expert Guidance</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Global Network</p>
                  <p className="text-xs text-purple-200">850+ Universities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className={`relative z-10 border-t border-gradient-to-r from-purple-700/30 via-blue-700/30 to-purple-700/30 bg-black/20 backdrop-blur-sm transform transition-all duration-1000 delay-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <span className="font-medium text-purple-300">FSO</span> ©{" "}
              {currentYear}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-purple-300 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 z-20 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "1200ms" }}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
