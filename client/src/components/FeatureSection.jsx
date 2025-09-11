// import React from "react";
// import { FaTruckMedical, FaCapsules, FaRegThumbsUp } from "react-icons/fa6";

// const features = [
//   {
//     icon: <FaTruckMedical size={40} className="text-teal-600" />,
//     title: "Fast & Reliable Delivery",
//     description: "Get your medicines delivered quickly and safely to your doorstep.",
//   },
//   {
//     icon: <FaCapsules size={40} className="text-blue-600" />,
//     title: "100% Genuine Medicines",
//     description: "We ensure all products are authentic and approved by authorities.",
//   },
//   {
//     icon: <FaRegThumbsUp size={40} className="text-green-600" />,
//     title: "Trusted by Thousands",
//     description: "Millions of users trust MediCart for their healthcare needs.",
//   },
// ];

// const FeatureSection = () => {
//   return (
//     <div className="w-full py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose MediCart?</h2>
        
//         <div className="grid md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center p-6 border border-gray-100 shadow-md rounded-xl hover:shadow-lg transition-all duration-300"
//             >
//               {feature.icon}
//               <h3 className="mt-4 text-xl font-semibold text-gray-800">{feature.title}</h3>
//               <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;



// import React from "react";
// import { FaTruckMedical, FaCapsules, FaRegThumbsUp } from "react-icons/fa6";

// const features = [
//   {
//     icon: <FaTruckMedical size={40} />,
//     title: "Fast & Reliable Delivery",
//     description: "Swift and secure medicine delivery right to your doorstep.",
//     color: "text-teal-600",
//   },
//   {
//     icon: <FaCapsules size={40} />,
//     title: "100% Genuine Medicines",
//     description: "Every product is authentic and sourced from trusted suppliers.",
//     color: "text-blue-600",
//   },
//   {
//     icon: <FaRegThumbsUp size={40} />,
//     title: "Trusted by Thousands",
//     description: "MediCart is a go-to platform for healthcare for many users.",
//     color: "text-green-600",
//   },
// ];

// const FeatureSection = () => {
//   return (
//     <div className="w-full py-16 bg-white">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-gray-900 mb-12">
//           Why Choose <span className="text-blue-600">MediCart?</span>
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
//             >
//               <div className={`transition-all duration-300 group-hover:text-blue-600 ${feature.color}`}>
//                 {feature.icon}
//               </div>
//               <h3 className="mt-5 text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-all duration-300">
//                 {feature.title}
//               </h3>
//               <p className="mt-3 text-sm text-gray-600 leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;



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
