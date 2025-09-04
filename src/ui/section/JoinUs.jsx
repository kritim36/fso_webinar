// "use client";
// import React from "react";
// import {
//   Beaker,
//   Target,
//   Users,
//   Layers,
//   Cpu,
//   Briefcase,
// } from "lucide-react"; // Icons

// export default function JoinUs() {
//   const features = [
//     { icon: <Users className="w-12 h-12 text-indigo-500" />, title: "Innovative learning" },
//     { icon: <Target className="w-12 h-12 text-indigo-500" />, title: "Scholarly symposiums" },
//     { icon: <Layers className="w-12 h-12 text-indigo-500" />, title: "Networking hub" },
//     { icon: <Beaker className="w-12 h-12 text-indigo-500" />, title: "Research presentations" },
//     { icon: <Cpu className="w-12 h-12 text-indigo-500" />, title: "Technology in education" },
//     { icon: <Briefcase className="w-12 h-12 text-indigo-500" />, title: "Career development" },
//   ];

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
//         {/* Left Side - Heading */}
//         <div>
//           <p className="text-sm uppercase tracking-wider text-gray-600 font-medium">
//             Join Us
//           </p>
//           <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
//             Annual education <br /> conference 2026
//           </h2>
//           <p className="text-gray-600 max-w-md">
//             Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//             aspernatur aut odit aut fugit, sed quia.
//           </p>
//         </div>

//         {/* Right Side - Features Grid */}
//         <div className="grid grid-cols-2 gap-10">
//           {features.map((feature, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <div className="mb-3">{feature.icon}</div>
//               <h3 className="text-base font-semibold text-gray-900">{feature.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React from "react";
import {
  Users,
  Target,
  Layers,
  Beaker,
  Cpu,
  Briefcase,
} from "lucide-react"; // icons

export default function ConferenceSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        
        {/* Top Row - Content + 2 Icons */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Heading */}
          <div>
            <p className="text-sm uppercase tracking-wider text-gray-600 font-medium">
              Join Us
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 mb-4">
              Annual education <br /> conference 2026
            </h2>
            <p className="text-gray-600 max-w-md">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia.
            </p>
          </div>

          {/* Right Side - 2 Icons */}
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-indigo-500 mb-3" />
              <h3 className="text-base font-semibold text-gray-900">
                Innovative learning
              </h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <Target className="w-12 h-12 text-indigo-500 mb-3" />
              <h3 className="text-base font-semibold text-gray-900">
                Scholarly symposiums
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom Row - 4 Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="flex flex-col items-center text-center">
            <Layers className="w-12 h-12 text-indigo-500 mb-3" />
            <h3 className="text-base font-semibold text-gray-900">
              Networking hub
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <Beaker className="w-12 h-12 text-indigo-500 mb-3" />
            <h3 className="text-base font-semibold text-gray-900">
              Research presentations
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <Cpu className="w-12 h-12 text-indigo-500 mb-3" />
            <h3 className="text-base font-semibold text-gray-900">
              Technology in education
            </h3>
          </div>
          <div className="flex flex-col items-center text-center">
            <Briefcase className="w-12 h-12 text-indigo-500 mb-3" />
            <h3 className="text-base font-semibold text-gray-900">
              Career development
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
