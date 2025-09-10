"use client";
 import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const speakers = [
  {
    name: "Bhavik Siddhpura",
    role: "Speaker",
    image: "/bhavik.jpg",
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Enhanced gradient blobs with subtle animation */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-float-slow animation-delay-3000"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-br from-indigo-300/15 to-blue-300/15 rounded-full blur-3xl animate-float-slow animation-delay-6000"></div>

        {/* Geometric patterns with better positioning */}
        <div className="absolute top-16 left-16 w-32 h-32 bg-[radial-gradient(circle,rgba(59,130,246,0.15)_2px,transparent_2px)] [background-size:24px_24px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-[radial-gradient(circle,rgba(147,51,234,0.15)_2px,transparent_2px)] [background-size:24px_24px] opacity-60 animate-pulse animation-delay-2000"></div>

        {/* Flowing lines for visual interest */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-200/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20  relative z-10">
                 <div className="text-center mb-12">
           <h4 className="uppercase text-sm text-gray-500 tracking-widest mb-2">
             Speakers
           </h4>
           <h2 className="text-3xl md:text-4xl font-bold text-black">
             Conference Speakers
           </h2>
         </div>
        <div className="grid lg:grid-cols-2 items-center gap-16 lg:gap-20">
          {/* Left Side - Enhanced Images */}
                    {speakers.map((speaker, index) => (
            <div key={index} className="group relative text-center">
              {/* Speaker Image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition duration-500">
                  <p className="px-6 mb-4 text-sm">
                    Contact Detail
                  </p>
                  <div className="flex space-x-3">
                    <a href="#" className="p-2 bg-white text-blue-600 rounded-full hover:bg-gray-200">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="p-2 bg-white text-blue-600 rounded-full hover:bg-gray-200">
                      <FaTwitter />
                    </a>
                    <a href="#" className="p-2 bg-white text-blue-600 rounded-full hover:bg-gray-200">
                      <FaLinkedinIn />
                    </a>
                    <a href="#" className="p-2 bg-white text-blue-600 rounded-full hover:bg-gray-200">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>

              {/* Speaker Info */}
              <h3 className="mt-4 text-lg font-semibold">{speaker.name}</h3>
              <p className="text-gray-500">{speaker.role}</p>
            </div>
          ))}

          {/* Right Side - Premium Content Card */}
          <div className="relative">
            {/* Background card with glassmorphism effect */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-white/50 to-white/30 rounded-2xl"></div>

            <div className="relative z-10 p-8 lg:p-12">
              {/* Enhanced header */}
              <div className="flex items-center space-x-3 mb-6">
                {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <FaGraduationCap className="text-white text-xl" />
                </div> */}
                <div>
                  <h4 className="text-sm tracking-wider text-blue-600 uppercase font-bold mb-1">
                    The Visa Man
                  </h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              {/* Main heading with improved typography */}
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Bhavik Siddhpura
                </span>
                <br />
              </h2>

              {/* Enhanced description */}
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                Mr. Bhavik Siddhpura is a mentor, renowned study abroad speaker, motivator, 
                entrepreneur, YouTuber the youngest pioneer in overseas education with more 
                than 15 years of expertise. He is a British Council & IDP Certified trainer, 
                has counselled more than 24000 Students in 15 years of journey. Proud BNI member 
                and has been awarded numerous time as Best Performer by British Council & IDP.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float-slow {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(20px, -20px) rotate(1deg);
          }
          66% {
            transform: translate(-20px, 10px) rotate(-0.5deg);
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </section>
  );
}
