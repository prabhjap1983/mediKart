import React from "react";
import about from "../assets/about.jpg"; // 🔁 Replace if needed

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-fadeIn">
          <p className="text-sm uppercase text-[#4d59e2ff] tracking-wider font-semibold">
            Your Health, Our Priority
          </p>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            Discover the Trusted Healthcare Partner – MediKart
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            MediKart is your one-stop solution for purchasing genuine medicines,
            healthcare essentials, and wellness products online. We bridge the
            gap between verified pharmacies and customers by offering safe,
            affordable, and fast doorstep delivery.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Be it prescription drugs, daily supplements, or wellness needs—
            MediKart ensures a seamless and secure shopping experience with
            quality and trust at its core.
          </p>
          <a
            href="/about"
            className="inline-block bg-gradient-to-r from-[#4d59e2ff] to-[#3c45b5] text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={about}
            alt="MediKart About"
            className="rounded-3xl shadow-xl w-full max-w-[550px] transform hover:scale-105 transition-transform duration-300"
            />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

