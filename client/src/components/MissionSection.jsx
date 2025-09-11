import React from "react";
import about from "../assets/about.jpg";
import trusted_india from "../assets/trusted_india.png";
import our_missions from "../assets/our_missions.png";
import { motion } from "framer-motion";

const Section = ({ title, text1, text2, reverse, image }) => (
  <section
    className={`container mx-auto px-4 flex flex-col-reverse ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } items-center gap-12`}
  >
    <motion.div
      className="lg:w-1/2 space-y-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl lg:text-5xl font-extrabold text-black">
        {title}
      </h2>
      <p className="text-lg leading-relaxed text-gray-600">{text1}</p>
      <p className="text-lg leading-relaxed text-gray-600">{text2}</p>
    </motion.div>

    <motion.div
      className="lg:w-1/2 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={title}
        className="rounded-2xl w-full h-[350px] object-cover mx-auto transition-transform duration-500 transform hover:scale-105 shadow-xl hover:shadow-2xl"
      />
    </motion.div>
  </section>
);

const MissionAndTrusted = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 space-y-32">
      <Section
        title="Our Mission"
        text1="At Medikart, our mission is to bridge the gap between quality healthcare and accessibility. We’re dedicated to providing innovative medical equipment and health solutions that enhance lives."
        text2="We aim to be India’s most trusted healthcare partner by ensuring affordability, reliability, and excellent support across all our offerings."
        image={our_missions}
      />
      <Section
        title="Trusted by India"
        text1="Medikart is proudly made in India and trusted by thousands of hospitals, professionals, and families across the country. Our commitment to integrity and quality makes us a dependable choice."
        text2="From CPAP machines to oxygen concentrators, our customers count on us for fast delivery, expert support, and reliable performance."
        reverse
        image={trusted_india}
      />
    </div>
  );
};

export default MissionAndTrusted;
