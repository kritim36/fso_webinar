// "use client";
// import React from "react";
// import {
//   GraduationCap,
//   Landmark,
//   Briefcase,
//   Globe,
//   Users,
//   ShieldCheck,
// } from "lucide-react";

// export default function WebinarSection() {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        
//         {/* Top Row - Content + 2 Icons */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Heading */}
//           <div>
//             <p className="text-sm uppercase tracking-wide text-gray-600 font-medium mb-3">
//               Join Us
//             </p>
//             <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">
//               Study in South Korea <br /> Webinar 2025-26
//             </h2>
//             <p className="text-gray-600 max-w-md leading-relaxed">
//               Learn about tuition fees, courses, scholarships, and the complete 
//               student visa process for South Korea with <strong>The Visa Man</strong>.
//             </p>
//           </div>

//           {/* Right Side - 2 Icons */}
//           <div className="grid grid-cols-2 gap-12">
//             <div className="flex flex-col items-center text-center">
//               <GraduationCap className="w-20 h-20 text-indigo-500 mb-2" />
//               <h3 className="text-base font-semibold text-gray-900 mt-1">
//                 World-ranked universities
//               </h3>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <Landmark className="w-20 h-20 text-indigo-500 mb-2" />
//               <h3 className="text-base font-semibold text-gray-900 mt-1">
//                 Affordable education
//               </h3>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Row - 4 Icons */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//           <div className="flex flex-col items-center text-center">
//             <Briefcase className="w-20 h-20 text-indigo-500 mb-2" />
//             <h3 className="text-base font-semibold text-gray-900 mt-1">
//               Post-study work visa
//             </h3>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <Globe className="w-20 h-20 text-indigo-500 mb-2" />
//             <h3 className="text-base font-semibold text-gray-900 mt-1">
//               Global career scope
//             </h3>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <Users className="w-20 h-20 text-indigo-500 mb-2" />
//             <h3 className="text-base font-semibold text-gray-900 mt-1">
//               Expert mentorship
//             </h3>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <ShieldCheck className="w-20 h-20 text-indigo-500 mb-2" />
//             <h3 className="text-base font-semibold text-gray-900 mt-1">
//               Safe & modern lifestyle
//             </h3>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";
import {
  GraduationCap,
  Landmark,
  Briefcase,
  Globe,
  Users,
  ShieldCheck,
} from "lucide-react";

export default function WebinarSection() {
  return (
    <section className="relative bg-gray-50 py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Gradient blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        {/* Dotted pattern */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-[radial-gradient(circle,rgba(99,102,241,0.3)_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-[radial-gradient(circle,rgba(236,72,153,0.3)_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        {/* Top Row - Content + 2 Icons */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Heading */}
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-600 font-medium mb-3">
              Join Us
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-3">
              Study in South Korea <br /> Webinar 2025-26
            </h2>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Learn about tuition fees, courses, scholarships, and the complete 
              student visa process for South Korea with <strong>The Visa Man</strong>.
            </p>
          </div>

          {/* Right Side - 2 Icons */}
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col items-center text-center">
              <GraduationCap className="w-20 h-20 text-indigo-500 mb-2" />
              <h3 className="text-base font-semibold text-gray-900 mt-1">
                World-ranked universities
              </h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <Landmark className="w-20 h-20 text-indigo-500 mb-2" />
              <h3 className="text-base font-semibold text-gray-900 mt-1">
                Affordable education
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Row - 4 Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-center text-center">
            <Briefcase className="w-20 h-20 text-indigo-500 mb-2" />
            <h3 className="text-base font-semibold text-gray-900 mt-1">
              Post-study work visa
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <Globe className="w-20 h-20 text-indigo-500 mb-2" />
            <h3 className="text-base font-semibold text-gray-900 mt-1">
              Global career scope
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <Users className="w-20 h-20 text-indigo-500 mb-2" />
            <h3 className="text-base font-semibold text-gray-900 mt-1">
              Expert mentorship
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck className="w-20 h-20 text-indigo-500 mb-2" />
            <h3 className="text-base font-semibold text-gray-900 mt-1">
              Safe & modern lifestyle
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
