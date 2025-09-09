"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BookingForm from "../section/BookingForm";


export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    webinar_id: "",
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const navItems = ["Home", "About", "Speakers", "Why_Us", "Gallery"];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const isHome = pathname === "/";
  const navbarBg = isHome
    ? scrolled
      ? "bg-[#3b0a77]/95 backdrop-blur-md shadow-lg"
      : "bg-transparent"
    : "bg-[#3b0a77]/95 backdrop-blur-md shadow-lg";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg} text-white`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
          <div className="flex items-center space-x-12">
            <Link href="/" className="text-2xl font-bold tracking-wider">
              FSO
            </Link>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`/#${item.toLowerCase().replace(/ /g, "")}`}
                  className="hover:text-pink-400 transition"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setShowForm(true)}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition"
            >
              Book Now
            </button>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-purple-900/95 backdrop-blur-md px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                onClick={() => setOpen(false)}
                className="block text-lg hover:text-black transition"
              >
                {item}
              </Link>
            ))}
            <button
              onClick={() => {
                setShowForm(true);
                setOpen(false);
              }}
              className="block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-center"
            >
              Book Now
            </button>
          </div>
        )}
      </nav>

      {/* Popup BookingForm */}
      {showForm && (
        <BookingForm
          formData={formData}
          setFormData={setFormData}
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
