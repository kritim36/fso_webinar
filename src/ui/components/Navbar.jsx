// "use client";
// import { useState, useEffect } from "react";
// import { Menu, X, User } from "lucide-react"; // User icon for login/register
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { usePathname, useRouter } from "next/navigation";
// import { fetchCurrentUser, logout } from "@/store/authSlice";

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const pathname = usePathname();
//   const { user, tokens } = useSelector((state) => state.auth);

//   const [menuOpen, setMenuOpen] = useState(false);


//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   const navItems = ["Home", "About", "Speakers", "Blogs", "Contact"];

//   useEffect(() => {
//     setMounted(true);
//   }, []);

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

//   useEffect(() => {
//     // If tokens exist but user not loaded, fetch user info
//     if (tokens.access && !user) {
//       dispatch(fetchCurrentUser());
//     }
//   }, [tokens, user, dispatch]);

//   const handleLogout = () => {
//     dispatch(logout());
//     router.push("/"); // redirect to homepage after logout
//   };

//   if (!mounted) {
//     // ✅ Avoid mismatch by rendering nothing until client mounts
//     return null;
//   }

// const isHome = pathname === "/";
//   const navbarBg = isHome
//     ? scrolled
//       ? "bg-[#3b0a77]/95 backdrop-blur-md shadow-lg"
//       : "bg-transparent"
//     : "bg-[#3b0a77]/95 backdrop-blur-md shadow-lg";


//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
//         // scrolled
//         //   ? "bg-[#3b0a77]/95 backdrop-blur-md shadow-lg "
//         //   : "bg-transparent"
//         ${navbarBg} text-white`}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
//         {/* Left Section: Logo + Menu */}
//         <div className="flex items-center space-x-12">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold tracking-wider">
//             FSO
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item}
//                 href={`#${item.toLowerCase().replace(/ /g, "")}`}
//                 className="hover:text-pink-400 transition"
//               >
//                 {item}
//               </Link>
//             ))}
//           </div>
//         </div>

//         {/* Right Section: Login/Register icon */}
//         <div className="hidden md:flex items-center space-x-6 relative">
//           {/* <Link href="/login" className="hover:text-pink-400 transition">
//             <User size={22} />
//           </Link> */}

//           {!tokens.access ? (
//             // ✅ Not logged in → show Login/Register
//             <>
//               <button
//                 onClick={() => router.push("/login")}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => router.push("/register")}
//                 className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg"
//               >
//                 Register
//               </button>
//             </>
//           ) : (
//             // ✅ Logged in → show user dropdown
//             <div className="relative">
//               <button
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200"
//               >
//                 {user?.avatar ? (
//                   <img
//                     src={user.avatar}
//                     alt="User"
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                 ) : (
//                   <User className="w-6 h-6 text-gray-700" />
//                 )}
//               </button>

//               {menuOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-4 text-gray-800">
//                   <div className="text-center font-semibold mb-2">
//                     {user?.username || "User"}
//                   </div>
//                   <hr className="mb-2" />

//                   <button
//                     onClick={() => {
//                       router.push("/profile");
//                       setMenuOpen(false);
//                     }}
//                     className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100"
//                   >
//                     My Profile
//                   </button>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 text-red-600"
//                   >
//                     Logout
//                   </button>
//                   </div>
//               )}
//             </div>
//           )}
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
//           {/* <Link
//             href="/login"
//             onClick={() => setOpen(false)}
//             className="block text-lg hover:text-pink-400 transition"
//           >
//             Login / Register
//           </Link> */}

//           {!tokens.access ? (
//             <Link
//               href="/login"
//               onClick={() => setOpen(false)}
//               className="block text-lg hover:text-pink-400 transition"
//             >
//               Login / Register
//             </Link>
//           ) : (
//             <div className="space-y-2">
//               <div className="text-center font-semibold">
//                 {user?.username || "User"}
//               </div>
//               <button
//                 onClick={() => {
//                   router.push("/profile");
//                   setOpen(false);
//                 }}
//                 className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700"
//               >
//                 My Profile
//               </button>
//               <button
//                 onClick={handleLogout}
//                 className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-700 text-red-400"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const navItems = ["Home", "About", "Speakers", "Blogs", "Contact"];

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) {
    return null;
  }

  const isHome = pathname === "/";
  const navbarBg = isHome
    ? scrolled
      ? "bg-[#3b0a77]/95 backdrop-blur-md shadow-lg"
      : "bg-transparent"
    : "bg-[#3b0a77]/95 backdrop-blur-md shadow-lg";

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navbarBg} text-white`}
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

          {/* Right Section: Book Now Button */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setShowForm(true)}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition"
            >
              Book Now
            </button>
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

      {/* Popup Booking Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-gradient-to-b from-black via-[#0a0a1a] to-black p-8 rounded-2xl w-[90%] max-w-lg shadow-lg text-white">
            <h2 className="text-2xl font-bold mb-4">Book Your Seat</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="Country Preference"
                className="w-full p-3 rounded-md bg-[#1a1a2e] text-white focus:outline-none"
              />

              {/* Payment Section */}
              <div className="p-4 rounded-md bg-[#1a1a2e]">
                <p className="mb-2">💳 Payment Section</p>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700"
                >
                  Proceed to Payment
                </button>
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="updates" className="w-4 h-4" />
                <label htmlFor="updates" className="text-sm">
                  Send me updates about future events
                </label>
              </div>

              {/* Submit & Cancel */}
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
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
      )}
    </>
  );
}
