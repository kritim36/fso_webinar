// "use client";
// import React from "react";
// import {
//   GraduationCap,
//   Landmark,
//   Briefcase,
//   Globe,
//   Users,
//   ShieldCheck,
// } from "lucide-react"; // updated icons

// export default function WebinarSection() {
//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        
//         {/* Top Row - Content + 2 Icons */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Side - Heading */}
//           <div>
//             <p className="text-sm uppercase tracking-wider text-gray-600 font-medium">
//               Join Us
//             </p>
//             <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
//               Study in South Korea <br /> Webinar 2025-26
//             </h2>
//             <p className="text-gray-600 max-w-md">
//               Learn about tuition fees, courses, scholarships, and the complete 
//               student visa process for South Korea with <strong>The Visa Man</strong>.
//             </p>
//           </div>

//           {/* Right Side - 2 Icons */}
//           <div className="grid grid-cols-2 gap-10">
//             <div className="flex flex-col items-center text-center">
//               <GraduationCap className="w-12 h-12 text-indigo-500 mb-3" />
//               <h3 className="text-base font-semibold text-gray-900">
//                 World-ranked universities
//               </h3>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <Landmark className="w-12 h-12 text-indigo-500 mb-3" />
//               <h3 className="text-base font-semibold text-gray-900">
//                 Affordable education
//               </h3>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Row - 4 Icons */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
//           <div className="flex flex-col items-center text-center">
//             <Briefcase className="w-12 h-12 text-indigo-500 mb-3" />
//             <h3 className="text-base font-semibold text-gray-900">
//               Post-study work visa
//             </h3>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <Globe className="w-12 h-12 text-indigo-500 mb-3" />
//             <h3 className="text-base font-semibold text-gray-900">
//               Global career scope
//             </h3>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <Users className="w-12 h-12 text-indigo-500 mb-3" />
//             <h3 className="text-base font-semibold text-gray-900">
//               Expert mentorship
//             </h3>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <ShieldCheck className="w-12 h-12 text-indigo-500 mb-3" />
//             <h3 className="text-base font-semibold text-gray-900">
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
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-16">
        
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
