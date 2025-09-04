// "use client";
// import React from "react";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen">
      
//       {/* Left side with gradient + wavy bg */}
//       <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2 min-h-screen bg-gradient-to-b from-black via-[#0a0a0f] to-[#111827]">
//         {/* Wavy bg overlay */}
//         <div className="absolute inset-0 bg-[url('/waves.svg')]/40 bg-cover opacity-40"></div>

//         <div className="relative z-10 space-y-6 text-white">
//           <p className="uppercase tracking-widest text-sm">
//             18 - 21 October, New York, USA
//           </p>
//           <h1 className="text-5xl md:text-3xl font-bold leading-tight">
//             Master Your Abroad Journey : <br /> Study Visa & Admission Secrets Revealed in 2025
//           </h1>
//           <p className="tracking-widest text-sm">
//             Join our exclusive paid webinar and discover proven strategies for student visas, scholarships, and admission success.
//           </p>
//           <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
//             Book Your Seat Now
//           </button>
//         </div>
//       </div>

//       {/* Right image */}
//       <div className="relative w-full md:w-1/2 h-screen">
//         <Image
//           src="/bhavik.jpg"
//           alt="Conference Speaker"
//           fill
//           className="object-cover"
//         />


//         {/* Small video preview */}
//         {/* <div className="absolute bottom-10 left-10 w-36 h-24 bg-gray-200 rounded-md overflow-hidden shadow-lg">
//           <Image src="/preview.jpg" alt="Preview" fill className="object-cover" />
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Hero;


// "use client";
// import React from "react";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen">
      
//       {/* Left side with wavy background */}
//       <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2 min-h-screen overflow-hidden">
        
//         {/* Waves background */}
//         <div className="absolute inset-0">
//           <Image
//             src="/waves.svg"
//             alt="Background waves"
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Dark overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-[#111827]/90" />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 space-y-6 text-white">
//           <p className="uppercase tracking-widest text-sm">
//             18 - 21 October, New York, USA
//           </p>
//           <h1 className="text-5xl md:text-3xl font-bold leading-tight">
//             Master Your Abroad Journey : <br /> Study Visa & Admission Secrets Revealed in 2025
//           </h1>
//           <p className="tracking-widest text-sm max-w-md">
//             Join our exclusive paid webinar and discover proven strategies for student visas,
//             scholarships, and admission success.
//           </p>
//           <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
//             Book Your Seat Now
//           </button>
//         </div>
//       </div>

//       {/* Right image */}
//       <div className="relative w-full md:w-1/2 h-screen">
//         <Image
//           src="/bhavik.jpg"
//           alt="Conference Speaker"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-screen">
      {/* Left side with wavy background */}
      <div className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2 min-h-screen overflow-hidden">
        
        {/* Waves background */}
        <div className="absolute inset-0">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a1a] to-black" />

          {/* Vertical wavy stripes */}
          <div className="absolute inset-0 bg-[url('/waves.svg')] bg-cover opacity-30 animate-waves" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-6 text-white">
          <p className="uppercase tracking-widest text-sm">
            18 - 21 October, New York, USA
          </p>
          <h1 className="text-5xl md:text-3xl font-bold leading-tight">
            Master Your Abroad Journey : <br /> Study Visa & Admission Secrets Revealed in 2025
          </h1>
          <p className="tracking-widest text-sm max-w-md">
            Join our exclusive paid webinar and discover proven strategies for student visas,
            scholarships, and admission success.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
            Book Your Seat Now
          </button>
        </div>
      </div>

      {/* Right image */}
      <div className="relative w-full md:w-1/2 h-screen">
        <Image
          src="/bhavik.jpg"
          alt="Conference Speaker"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;

