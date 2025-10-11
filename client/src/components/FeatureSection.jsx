import React from "react";
import { FaTruckMedical, FaCapsules, FaRegThumbsUp } from "react-icons/fa6";

const features = [
  {
    icon: <FaTruckMedical size={40} className="text-white" />,
    title: "Fast & Reliable Delivery",
    description: "Swift and secure medicine delivery right to your doorstep.",
    bg: "from-teal-500 to-teal-400",
  },
  {
    icon: <FaCapsules size={40} className="text-white" />,
    title: "100% Genuine Medicines",
    description: "Every product is authentic and sourced from trusted suppliers.",
    bg: "bg-[color:#4d59e2ff]", 
  },
  {
    icon: <FaRegThumbsUp size={40} className="text-white" />,
    title: "Trusted by Thousands",
    description: "MediKart is a go-to platform for healthcare for many users.",
    bg: "from-green-500 to-green-400",
  },
];

const FeatureSection = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
           Why Choose <span style={{ color: "#4d59e2ff" }}>MediKart?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.bg} shadow-md group-hover:scale-105 transition`}
              >
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-800 transition group-hover:text-[color:#4d59e2ff]">
             {feature.title}
                </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
