// "use client";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// const speakers = [
//   {
//     name: "Bhavik Siddhpura",
//     role: "Speaker",
//     image: "/bhavik.jpg",
//   },
//   // {
//   //   name: "Nathan Jones",
//   //   role: "Speaker",
//   //   image: "/images/speaker2.jpg",
//   // },
//   // {
//   //   name: "Natalie Carter",
//   //   role: "Speaker",
//   //   image: "/images/speaker3.jpg",
//   // },
// ];

// export default function Speakers() {
//   return (
//     <section className="relative bg-gradient-to-b from-white to-blue-50 py-16">
//       <div className="container mx-auto px-6 lg:px-20">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h4 className="uppercase text-sm text-gray-500 tracking-widest mb-2">
//             Speakers
//           </h4>
//           <h2 className="text-3xl md:text-4xl font-bold text-black">
//             Conference speakers
//           </h2>
//         </div>

//         {/* Speakers Grid */}
//         <div className="grid md:grid-cols-3 gap-10">
//           {speakers.map((speaker, index) => (
//             <div key={index} className="group relative text-center">
//               {/* Speaker Image */}
//               <div className="relative overflow-hidden rounded-lg shadow-lg">
//                 <img
//                   src={speaker.image}
//                   alt={speaker.name}
//                   className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-blue-600 bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition duration-500">
//                   <p className="px-6 mb-4 text-sm">
//                     Consectetur adipiscing elit, sed do euism consectetur adipiscing elit, sed.
//                   </p>
//                   <div className="flex space-x-3">
//                     <a href="#" className="p-2 bg-white text-blue-600 rounded-full hover:bg-gray-200">
//                       <FaFacebookF />
//                     </a>
//                     <a href="#" className="p-2 bg-white text-blue-600 rounded-full hover:bg-gray-200">
//                       <FaTwitter />
//                     </a>
//                     <a href="#" className="p-2 bg-white text-blue-600 rounded-full hover:bg-gray-200">
//                       <FaLinkedinIn />
//                     </a>
//                     <a href="#" className="p-2 bg-white text-blue-600 rounded-full hover:bg-gray-200">
//                       <FaInstagram />
//                     </a>
//                   </div>
//                 </div>
//               </div>

//               {/* Speaker Info */}
//               <h3 className="mt-4 text-lg font-semibold">{speaker.name}</h3>
//               <p className="text-gray-500">{speaker.role}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//     </section>
//   );
// }

"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const speakers = [
  {
    name: "Bhavik Siddhpura",
    role: "Speaker",
    image: "/bhavik.jpg",
  },
  // You can add more speakers here...
];

export default function Speakers() {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient blobs */}
        <div className="absolute top-10 left-0 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

        {/* Dotted patterns */}
        <div className="absolute top-20 right-20 w-40 h-40 bg-[radial-gradient(circle,rgba(59,130,246,0.25)_1px,transparent_1px)] [background-size:22px_22px] opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-44 h-44 bg-[radial-gradient(circle,rgba(29,78,216,0.25)_1px,transparent_1px)] [background-size:22px_22px] opacity-40"></div>

        {/* Floating circle animation */}
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-indigo-300 rounded-full opacity-20 animate-ping"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="uppercase text-sm text-gray-500 tracking-widest mb-2">
            Speakers
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Conference Speakers
          </h2>
        </div>

        {/* Speakers Grid */}
        <div className="grid md:grid-cols-3 gap-10">
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
                <div className="absolute inset-0 bg-blue-600 bg-opacity-90 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition duration-500">
                  <p className="px-6 mb-4 text-sm">
                    Consectetur adipiscing elit, sed do euism consectetur adipiscing elit, sed.
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
        </div>
      </div>
    </section>
  );
}
