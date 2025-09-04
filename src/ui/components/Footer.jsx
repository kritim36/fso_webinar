"use client";
import React from "react";
import { FaFacebookF, FaXTwitter, FaDribbble, FaInstagram } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0d0f12] text-gray-300 py-12 border-t border-gray-800 mb-28">
      <div className="container mx-auto flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <Image src="/logo.png" alt="Agora Logo" width={40} height={40} /> */}
          <span className="text-xl font-bold text-white">FSO</span>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="flex space-x-8 text-sm font-medium">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Shop</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex space-x-6 text-lg">
          <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-200 transition"><FaXTwitter /></a>
          <a href="#" className="hover:text-pink-500 transition"><FaDribbble /></a>
          <a href="#" className="hover:text-orange-400 transition"><FaInstagram /></a>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        FSO © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
