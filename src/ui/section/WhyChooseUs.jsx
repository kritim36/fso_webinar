// "use client";
// import React from "react";
// import { GraduationCap, Users, Building2 } from "lucide-react"; // icons

// const WhyChooseUs = () => {
//   return (
//     <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 bg-gradient-to-r from-orange-50 to-green-50">
//       {/* Left Side */}
//       <div className="md:w-1/2 space-y-6">
//         <p className="text-orange-600 font-semibold uppercase tracking-wide">
//           Why The Visa Man for South Korea?
//         </p>
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
//           Reliable advice for Indian students of Korean studies
//         </h2>
//         <p className="text-gray-600 leading-relaxed">
//           Make your dream of studying in South Korea a reality with <b>The Visa
//           Man</b>. From admission to visa sanction, we will be with you at every
//           stage. <br /> <br />
//           Get in touch with us today and begin your path to a brighter future in
//           South Korea.
//         </p>
//         <button className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition-all">
//           Learn More
//         </button>
//       </div>

//       {/* Right Side - Features */}
//       <div className="md:w-1/2 mt-10 md:mt-0 space-y-6">
//         {/* Card 1 */}
//         <div className="flex items-start bg-white rounded-2xl shadow-md p-6">
//           <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
//             <GraduationCap className="w-8 h-8" />
//           </div>
//           <div className="ml-4">
//             <h3 className="text-lg font-semibold text-gray-900">
//               Well-trained Personnel
//             </h3>
//             <p className="text-gray-600 text-sm mt-2">
//               Our team has 15+ years of industry expertise to guide you in your
//               South Korea journey.
//             </p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="flex items-start bg-white rounded-2xl shadow-md p-6">
//           <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
//             <Building2 className="w-8 h-8" />
//           </div>
//           <div className="ml-4">
//             <h3 className="text-lg font-semibold text-gray-900">
//               Strong University Affiliations
//             </h3>
//             <p className="text-gray-600 text-sm mt-2">
//               Good partnerships with top universities for improved admission
//               chances.
//             </p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="flex items-start bg-white rounded-2xl shadow-md p-6">
//           <div className="bg-orange-100 text-orange-600 p-3 rounded-xl">
//             <Users className="w-8 h-8" />
//           </div>
//           <div className="ml-4">
//             <h3 className="text-lg font-semibold text-gray-900">
//               Personalized Counseling
//             </h3>
//             <p className="text-gray-600 text-sm mt-2">
//               Ideal guidance and individualized attention tailored to every
//               student’s needs.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

"use client";
import React from "react";
import { GraduationCap, Users, Building2 } from "lucide-react"; // icons

const WhyChooseUs = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 bg-white">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-6">
        <p className="text-[#3b0a77] font-semibold uppercase tracking-wide">
          Why The Visa Man for South Korea?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3b0a77] leading-snug">
          Reliable advice for Indian students of Korean studies
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Make your dream of studying in South Korea a reality with{" "}
          <b>The Visa Man</b>. From admission to visa sanction, we will be with
          you at every stage. <br /> <br />
          Get in touch with us today and begin your path to a brighter future in
          South Korea.
        </p>
        {/* <button className="bg-[#3b0a77] text-white px-6 py-3 rounded-md shadow-md hover:opacity-90 transition-all">
          Learn More
        </button> */}
      </div>

      {/* Right Side - Features */}
      <div className="md:w-1/2 mt-10 md:mt-0 space-y-6">
        {/* Card 1 */}
        <div className="flex items-start bg-white border border-[#3b0a77] rounded-2xl shadow-md p-6">
          <div className="bg-[#3b0a77] text-white p-3 rounded-xl">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-[#3b0a77]">
              Well-trained Personnel
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Our team has 15+ years of industry expertise to guide you in your
              South Korea journey.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start bg-white border border-[#3b0a77] rounded-2xl shadow-md p-6">
          <div className="bg-[#3b0a77] text-white p-3 rounded-xl">
            <Building2 className="w-8 h-8" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-[#3b0a77]">
              Strong University Affiliations
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Good partnerships with top universities for improved admission
              chances.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start bg-white border border-[#3b0a77] rounded-2xl shadow-md p-6">
          <div className="bg-[#3b0a77] text-white p-3 rounded-xl">
            <Users className="w-8 h-8" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-[#3b0a77]">
              Personalized Counseling
            </h3>
            <p className="text-gray-600 text-sm mt-2">
              Ideal guidance and individualized attention tailored to every
              student’s needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

