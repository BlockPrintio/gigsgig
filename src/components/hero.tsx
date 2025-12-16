import React from "react";
import Image from "next/image";
import illustration from "../assets/Img/Herosection.png";

const Hero: React.FC = () => {
  return (
    <section className="w-full relative bg-gradient-to-br from-green-100 to-white py-24 md:py-32 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12 md:gap-16">

        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            Book trusted help for <span className="text-green-600">GigsGig</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Connect with fellow students to get things done quickly and affordably within your university.
          </p>
          <div className="relative w-full max-w-lg mx-auto md:mx-0">
            <input
              type="text"
              placeholder="What do you need help with?"
              className="w-full pl-6 pr-36 py-4 border border-gray-300 rounded-full shadow-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-green-800 text-white font-bold rounded-full shadow-md hover:bg-green-900 hover:scale-105 active:scale-95 transition transform duration-200 whitespace-nowrap flex items-center justify-center">
              Get Help
            </button>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="font-semibold">Popular:</span>
            <span className="cursor-pointer hover:text-green-600 underline decoration-dotted">Cleaning</span>,
            <span className="cursor-pointer hover:text-green-600 underline decoration-dotted">Moving</span>,
            <span className="cursor-pointer hover:text-green-600 underline decoration-dotted">Handyman</span>
          </div>
        </div>

        {/* Right Side: Image */}
        <div>
          <Image
            src={illustration}
            alt="Students helping each other"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
