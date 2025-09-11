// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About



import React from "react";

const About = () => {
  return (
    <section className="bg-gray-50">
      {/* Hero Section (Gradient & Centered) */}
      <div className="bg-gradient-to-r from-[#f7f8ff] via-[#f0f1ff] to-[#e7e9ff] text-gray-800 py-20 px-6 text-center rounded-b-3xl shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          About <span className="text-[#4d59e2]">Medikart</span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
          Your trusted healthcare partner – delivering innovative medical
          products, reliable services, and compassionate care for a healthier tomorrow.
        </p>
      </div>

      {/* Main About Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-12 relative z-10">
        <div className="md:flex items-center gap-10">
          {/* Left: Image */}
          <div className="flex-shrink-0 flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              src="https://img.freepik.com/free-vector/medical-team-concept-illustration_114360-1515.jpg"
              alt="Medikart Healthcare"
              className="rounded-2xl shadow-md w-80 h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right: Text */}
          <div className="text-gray-700 space-y-4">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-[#4d59e2]">Medikart</span> is
              a healthcare-focused company dedicated to improving lives through
              high-quality medical equipment and services. We bring
              world-class healthcare solutions closer to hospitals, clinics, and
              individuals who need them most.
            </p>
            <p className="leading-relaxed">
              Our mission is to make healthcare more{" "}
              <span className="font-semibold">accessible, reliable, and affordable</span>. 
              We empower healthcare professionals and ensure patient comfort 
              through modern technology and customer-centric service.
            </p>
            <p className="leading-relaxed">
              With a strong focus on{" "}
              <span className="font-semibold">innovation and care</span>, we
              bridge the gap between advanced medical technology and everyday
              healthcare needs.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <a
                href="/products"
                className="px-6 py-3 bg-[#4d59e2] text-white rounded-xl shadow-md hover:bg-[#3c46b8] transform hover:-translate-y-1 transition-all"
              >
                Explore Products
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-[#4d59e2] text-[#4d59e2] rounded-xl shadow-md hover:bg-[#f0f1ff] transform hover:-translate-y-1 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "Quality",
              desc: "Delivering globally certified medical products with uncompromised safety and reliability."
            },
            {
              title: "Care",
              desc: "Putting patients first and supporting healthcare professionals in every step of their journey."
            },
            {
              title: "Innovation",
              desc: "Bringing modern healthcare technology at affordable costs to improve everyday healthcare delivery."
            }
          ].map((value, i) => (
            <div
              key={i}
              className="p-6 bg-[#f0f1ff] rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-[#4d59e2] mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="mt-20 text-center bg-gradient-to-r from-[#f7f8ff] to-[#f0f1ff] rounded-2xl p-10 shadow-inner">
          <h2 className="text-3xl font-bold text-[#4d59e2] mb-6">
            Our Mission & Vision
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Our mission is to empower healthcare providers and ensure
            patient comfort with the best medical solutions. <br />
            Our vision is to make modern healthcare products accessible to every corner
            of the world, building a healthier tomorrow together.
          </p>
        </div>
      </div>
       <div className="border-t border-gray-300 w-11/12 mx-auto mt-12"></div>
    </section>
  );
};

export default About;
