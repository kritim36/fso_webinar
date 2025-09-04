// "use client";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     "Home",
//     "About",
//     "Speakers",
//     // "How it Works",
//     "Blogs",
//     // "Feedback",
//     "Contact",
//   ];

//   // Detect scroll to change background
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-[#3b0a77]/95 backdrop-blur-md shadow-lg text-white" : "bg-transparent text-[#3b0a77]/95"
//       } `}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold tracking-wider">
//           FSO
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               href={`#${item.toLowerCase().replace(/ /g, "")}`}
//               className="hover:text-pink-400 transition"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setOpen(!open)}>
//           {open ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden bg-purple-900/95 backdrop-blur-md px-6 py-4 space-y-4">
//           {navItems.map((item) => (
//             <Link
//               key={item}
//               href={`#${item.toLowerCase().replace(/ /g, "")}`}
//               onClick={() => setOpen(false)}
//               className="block text-lg hover:text-pink-400 transition"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react"; // User icon for login/register
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "About", "Speakers", "Blogs", "Contact"];

  // Detect scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#3b0a77]/95 backdrop-blur-md shadow-lg "
          : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Left Section: Logo + Menu */}
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            FSO
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "")}`}
                className="hover:text-pink-400 transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section: Login/Register icon */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/login" className="hover:text-pink-400 transition">
            <User size={22} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-purple-900/95 backdrop-blur-md px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "")}`}
              onClick={() => setOpen(false)}
              className="block text-lg hover:text-pink-400 transition"
            >
              {item}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="block text-lg hover:text-pink-400 transition"
          >
            Login / Register
          </Link>
        </div>
      )}
    </nav>
  );
}



// "use client";
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <div className="text-2xl font-bold text-white">AGORA</div>
//         </div>

//         {/* Menu */}
//         <ul className="hidden md:flex space-x-8 text-white">
//           <li className="hover:text-blue-400 cursor-pointer">Home</li>
//           <li className="hover:text-blue-400 cursor-pointer">Pages</li>
//           <li className="hover:text-blue-400 cursor-pointer">Blog</li>
//           <li className="hover:text-blue-400 cursor-pointer">Events</li>
//           <li className="hover:text-blue-400 cursor-pointer">Shop</li>
//         </ul>

//         {/* Icons */}
//         <div className="flex space-x-4 text-white">
//           <button className="hover:text-blue-400">🔍</button>
//           <button className="hover:text-blue-400">🛒</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
