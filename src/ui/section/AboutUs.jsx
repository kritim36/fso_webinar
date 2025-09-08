// "use client";
// import { FaCheckCircle } from "react-icons/fa";

// export default function AboutUs() {
//   return (
//     <section className="relative bg-white py-16">
//       <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-3 gap-10 items-center">
//         {/* Left Image */}
//         <div className="w-full">
//           <img
//             src="/images/event.jpg"
//             alt="Event"
//             className="rounded-lg shadow-lg object-cover w-full h-[400px]"
//           />
//         </div>

//         {/* Middle Image with Play Button */}
//         <div className="relative w-full">
//           <img
//             src="/images/speaker.jpg"
//             alt="Speaker"
//             className="rounded-lg shadow-lg object-cover w-full h-[400px]"
//           />
//           <button className="absolute inset-0 flex items-center justify-center">
//             <div className="bg-white text-black rounded-full p-4 shadow-lg">
//               ▶
//             </div>
//           </button>
//         </div>

//         {/* Right Content */}
//         <div>
//           <h4 className="text-sm tracking-widest text-gray-500 uppercase mb-2">
//             About Us
//           </h4>
//           <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black mb-4">
//             Driving progress in educational forums
//           </h2>
//           <p className="text-gray-500 mb-6">
//             Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
//             aspernatur aut odit aut fugit.
//           </p>

//           <ul className="space-y-3 mb-6">
//             <li className="flex items-center gap-2">
//               <FaCheckCircle className="text-blue-600" /> Lorem ipsum dolor sit amet
//             </li>
//             <li className="flex items-center gap-2">
//               <FaCheckCircle className="text-blue-600" /> Adipiscing elit tempor
//             </li>
//             <li className="flex items-center gap-2">
//               <FaCheckCircle className="text-blue-600" /> Ut enim ad minim
//             </li>
//           </ul>

//           <button className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-700 transition">
//             About Us
//           </button>
//         </div>
//       </div>

//     </section>
//   );
// }


// "use client";
// import { FaCheckCircle } from "react-icons/fa";

// export default function AboutUs() {
//   return (
//     <section className="relative bg-gray-50 py-20">
//       <div className="grid lg:grid-cols-2 items-center">
        
//         <div className="relative h-full grid grid-cols-2 gap-6 px-6 lg:px-16">
//           {/* Event Image */}
//           <div className="flex items-center">
//             <img
//               src="/images/event.jpg"
//               alt="Webinar Event"
//               className="rounded-lg shadow-md object-cover w-full h-[420px]"
//             />
//           </div>

//           {/* Speaker Image with Play Button */}
//           <div className="relative flex items-center">
//             <img
//               src="/images/speaker.jpg"
//               alt="Speaker"
//               className="rounded-lg shadow-md object-cover w-full h-[420px]"
//             />
//             <button className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-white text-black rounded-full p-5 shadow-md hover:scale-110 transition">
//                 ▶
//               </div>
//             </button>
//           </div>
//         </div>

//         <div className="bg-white h-full flex items-center">
//           <div className="px-6 lg:px-16 py-10">
//             <h4 className="text-sm tracking-widest text-gray-500 uppercase mb-3">
//               About Us
//             </h4>
//             <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black mb-4">
//               The Visa Man – Guiding Students to Study Abroad Success
//             </h2>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               We believe that every student deserves the right guidance to achieve 
//               their dream of studying abroad. With a proven track record of success, 
//               we have empowered thousands of students to confidently take their first 
//               step toward global education.
//             </p>

//             <ul className="space-y-3">
//               <li className="flex items-center gap-3">
//                 <FaCheckCircle className="text-blue-600 text-lg" />
//                 <span>24,000+ Students Mentored</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheckCircle className="text-blue-600 text-lg" />
//                 <span>15+ Years of Experience in admissions & visa processes</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheckCircle className="text-blue-600 text-lg" />
//                 <span>Award-Winning Trainer & Global Study Expert</span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <FaCheckCircle className="text-blue-600 text-lg" />
//                 <span>Trusted by Families & Students worldwide</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <section className="relative bg-gray-50 py-20">
      <div className="grid lg:grid-cols-2 items-stretch">
        
        {/* Left Side - Images */}
        <div className="relative h-full grid grid-cols-2 gap-6 px-6 lg:px-16">
          {/* Event Image */}
          <div className="flex items-center">
            <img
              src="/about.jpeg"
              alt="Webinar Event"
              className="rounded-lg shadow-md object-cover w-full h-[420px]"
            />
          </div>

          {/* Speaker Image with White Background Behind */}
          <div className="relative flex items-center">
            <img
              src="/southkorea.jpeg"
              alt="Speaker"
              className="rounded-lg shadow-md object-cover w-full h-[420px]"
            />
            {/* <button className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white text-black rounded-full p-5 shadow-md hover:scale-110 transition">
                ▶
              </div>
            </button> */}
          </div>
        </div>

        {/* Right Side - White Background with Text */}
        <div className="bg-white h-full flex items-center">
          <div className="px-6 lg:px-16 py-10">
            <h4 className="text-sm tracking-widest text-gray-500 uppercase mb-3">
              About Us
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black mb-4">
              The Visa Man – Guiding Students to Study Abroad Success
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We believe that every student deserves the right guidance to achieve 
              their dream of studying abroad. With a proven track record of success, 
              we have empowered thousands of students to confidently take their first 
              step toward global education.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>24,000+ Students Mentored</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>15+ Years of Experience in admissions & visa processes</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>Award-Winning Trainer & Global Study Expert</span>
              </li>
              <li className="flex items-center gap-3">
                <FaCheckCircle className="text-blue-600 text-lg" />
                <span>Trusted by Families & Students worldwide</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


