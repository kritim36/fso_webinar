// "use client";
// import React from "react";
// import { UserGraduate, Users, Briefcase } from "lucide-react";

// const WhoShouldJoin = () => {
//   return (
//     <section className="relative bg-white px-6 md:px-16 py-16">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#3b0a77]">
//           Who Should Attend the Webinar?
//         </h2>
//       </div>

//       {/* Cards */}
//       <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {/* Card 1 */}
//         <div className="flex flex-col items-center bg-white border border-[#3b0a77] rounded-2xl shadow-md p-8 text-center">
//           <div className="bg-[#3b0a77] text-white p-4 rounded-full mb-4">
//             <UserGraduate className="w-8 h-8" />
//           </div>
//           <h3 className="text-lg font-semibold text-[#3b0a77]">
//             Students
//           </h3>
//           <p className="text-gray-600 mt-2 text-sm">
//             Students planning higher studies abroad
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="flex flex-col items-center bg-white border border-[#3b0a77] rounded-2xl shadow-md p-8 text-center">
//           <div className="bg-[#3b0a77] text-white p-4 rounded-full mb-4">
//             <Users className="w-8 h-8" />
//           </div>
//           <h3 className="text-lg font-semibold text-[#3b0a77]">
//             Parents
//           </h3>
//           <p className="text-gray-600 mt-2 text-sm">
//             Parents looking for scholarship/loan options
//           </p>
//         </div>

//         {/* Card 3 */}
//         <div className="flex flex-col items-center bg-white border border-[#3b0a77] rounded-2xl shadow-md p-8 text-center">
//           <div className="bg-[#3b0a77] text-white p-4 rounded-full mb-4">
//             <Briefcase className="w-8 h-8" />
//           </div>
//           <h3 className="text-lg font-semibold text-[#3b0a77]">
//             Professionals
//           </h3>
//           <p className="text-gray-600 mt-2 text-sm">
//             Professionals exploring education opportunities abroad
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoShouldJoin;


"use client";
import React from "react";
import { GraduationCap, Users, Briefcase } from "lucide-react"; // ✅ valid icons

const WhoShouldJoin = () => {
  return (
    <section className="relative bg-white px-6 md:px-16 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3b0a77]">
          Who Should Attend the Webinar?
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-white border border-[#3b0a77] rounded-2xl shadow-md p-8 text-center">
          <div className="bg-[#3b0a77] text-white p-4 rounded-full mb-4">
            <GraduationCap className="w-8 h-8" /> {/* ✅ changed */}
          </div>
          <h3 className="text-lg font-semibold text-[#3b0a77]">Students</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Students planning higher studies abroad
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center bg-white border border-[#3b0a77] rounded-2xl shadow-md p-8 text-center">
          <div className="bg-[#3b0a77] text-white p-4 rounded-full mb-4">
            <Users className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-[#3b0a77]">Parents</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Parents looking for scholarship/loan options
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white border border-[#3b0a77] rounded-2xl shadow-md p-8 text-center">
          <div className="bg-[#3b0a77] text-white p-4 rounded-full mb-4">
            <Briefcase className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-[#3b0a77]">Professionals</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Professionals exploring education opportunities abroad
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldJoin;
