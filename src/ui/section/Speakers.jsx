"use client";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const speakers = [
  {
    name: "Diana Green",
    role: "Speaker",
    image: "/images/speaker1.jpg",
  },
  {
    name: "Nathan Jones",
    role: "Speaker",
    image: "/images/speaker2.jpg",
  },
  {
    name: "Natalie Carter",
    role: "Speaker",
    image: "/images/speaker3.jpg",
  },
];

export default function Speakers() {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="uppercase text-sm text-gray-500 tracking-widest mb-2">
            Speakers
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Conference speakers
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
