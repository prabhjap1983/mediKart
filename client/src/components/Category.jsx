// import React from 'react';
// import Carousel1 from "../assets/Carousel1.png";

// const categories = [
//   { id: 1, name: 'Medicines', image: Carousel1 },
//   { id: 2, name: 'Wellness', image: 'https://via.placeholder.com/100' },
//   { id: 3, name: 'Personal Care', image: 'https://via.placeholder.com/100' },
//   { id: 4, name: 'Health Devices', image: 'https://via.placeholder.com/100' },
//   { id: 5, name: 'Baby Care', image: 'https://via.placeholder.com/100' },
//   { id: 6, name: 'Skin Care', image: 'https://via.placeholder.com/100' },
//   { id: 7, name: 'Diabetic Care', image: 'https://via.placeholder.com/100' },
//   { id: 8, name: 'Fitness & Supplements', image: 'https://via.placeholder.com/100' },
//   { id: 10, name: 'Ayurveda', image: 'https://via.placeholder.com/100' },
//   { id: 11, name: 'Medical Equipments', image: 'https://via.placeholder.com/100' },
//   { id: 12, name: 'Elderly Care', image: 'https://via.placeholder.com/100' },
//   { id: 13, name: 'Surgical Supplies', image: 'https://via.placeholder.com/100' },
// ];


// const Category = () => {
//   return (
//     <div className="mt-16 px-4 md:px-8">
//       <p className="text-2xl font-medium md:text-3xl mb-6">Categories</p>
      
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//         {categories.map((cat) => (
//           <div
//             key={cat.id}
//             className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-lg transition duration-300"
//           >
//             <img
//               src={cat.image}
//               alt={cat.name}
//               className="w-20 h-20 object-contain mb-2"
//             />
//             <p className="text-sm font-semibold text-gray-800">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;


// import React from 'react';

// const categories = [
//   { id: 1, name: 'Medicines', image: 'https://via.placeholder.com/100' },
//   { id: 2, name: 'Wellness', image: 'https://via.placeholder.com/100' },
//   { id: 3, name: 'Personal Care', image: 'https://via.placeholder.com/100' },
//   { id: 4, name: 'Health Devices', image: 'https://via.placeholder.com/100' },
//   { id: 5, name: 'Baby Care', image: 'https://via.placeholder.com/100' },
//   { id: 6, name: 'Skin Care', image: 'https://via.placeholder.com/100' },
//   { id: 7, name: 'Diabetic Care', image: 'https://via.placeholder.com/100' },
//   { id: 8, name: 'Fitness & Supplements', image: 'https://via.placeholder.com/100' },
//   { id: 10, name: 'Ayurveda', image: 'https://via.placeholder.com/100' },
//   { id: 11, name: 'Medical Equipments', image: 'https://via.placeholder.com/100' },
//   { id: 12, name: 'Elderly Care', image: 'https://via.placeholder.com/100' },
//   { id: 13, name: 'Surgical Supplies', image: 'https://via.placeholder.com/100' },
// ];

// const Category = () => {
//   return (
//     <div className="mt-20 px-6 md:px-16">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Categories</h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//         {categories.map((cat) => (
//           <div
//             key={cat.id}
//             className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center p-4 cursor-pointer hover:scale-105 transform transition-transform"
//           >
//             <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-3">
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-12 h-12 object-contain"
//               />
//             </div>
//             <p className="text-sm font-medium text-gray-700 text-center">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

// import React from 'react';
// import Carousel1 from "../assets/Carousel1.png";

// const categories = [
//   { id: 1, name: 'Medicines', image: Carousel1 },
//   { id: 2, name: 'Wellness', image: 'https://via.placeholder.com/100' },
//   { id: 3, name: 'Personal Care', image: 'https://via.placeholder.com/100' },
//   { id: 4, name: 'Health Devices', image: 'https://via.placeholder.com/100' },
//   { id: 5, name: 'Baby Care', image: 'https://via.placeholder.com/100' },
//   { id: 6, name: 'Skin Care', image: 'https://via.placeholder.com/100' },
//   { id: 7, name: 'Diabetic Care', image: 'https://via.placeholder.com/100' },
//   { id: 8, name: 'Fitness & Supplements', image: 'https://via.placeholder.com/100' },
//   { id: 10, name: 'Ayurveda', image: 'https://via.placeholder.com/100' },
//   { id: 11, name: 'Medical Equipments', image: 'https://via.placeholder.com/100' },
//   { id: 12, name: 'Elderly Care', image: 'https://via.placeholder.com/100' },
//   { id: 13, name: 'Surgical Supplies', image: 'https://via.placeholder.com/100' },
// ];

// // Helper function to divide categories into chunks of 4
// const chunkArray = (arr, size) => {
//   const result = [];
//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// };

// const Category = () => {
//   const categoryChunks = chunkArray(categories, 4);

//   return (
//     <div className="mt-20 px-6 md:px-16">
//       <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Categories</h2>

//       <div className="space-y-8">
//         {categoryChunks.map((chunk, index) => (
//           <div key={index} className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             {chunk.map((cat) => (
//               <div
//                 key={cat.id}
//                 className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center p-4 cursor-pointer hover:scale-105 transform transition-transform"
//               >
//                 <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-3">
//                   <img
//                     src={cat.image}
//                     alt={cat.name}
//                     className="w-12 h-12 object-contain"
//                   />
//                 </div>
//                 <p className="text-sm font-medium text-gray-700 text-center">{cat.name}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;


// import React from "react";
// import { Link } from "react-router-dom";

// const categories = [
//   {
//     title: "Medicines",
//     image: "/assets/medicines.jpg",
//     description: "Get allopathy, homeopathy, and OTC medicines at best prices.",
//     path: "/medicines",
//   },
//   {
//     title: "Personal Care",
//     image: "/assets/personal-care.jpg",
//     description: "Shop for skincare, hygiene, and personal wellness products.",
//     path: "/personal-care",
//   },
//   {
//     title: "Health Devices",
//     image: "/assets/health-devices.jpg",
//     description: "Check out thermometers, BP monitors, and health essentials.",
//     path: "/health-devices",
//   },
//   {
//     title: "Ayurvedic Products",
//     image: "/assets/ayurveda.jpg",
//     description: "Natural and herbal remedies for a balanced lifestyle.",
//     path: "/ayurveda",
//   },
//   {
//     title: "Nutrition & Supplements",
//     image: "/assets/nutrition.jpg",
//     description: "Vitamins, proteins, and immunity boosters for every need.",
//     path: "/nutrition",
//   },
//   {
//     title: "Baby Care",
//     image: "/assets/baby-care.jpg",
//     description: "Safe and trusted baby products from top brands.",
//     path: "/baby-care",
//   },
// ];

// const Category = () => {
//   return (
//     <div style={{ padding: "40px 20px" }}>
//       <h2 style={{ fontSize: "2rem", fontWeight: "600", marginBottom: "30px" }}>
//         Discover Categories
//       </h2>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//           gap: "20px",
//         }}
//       >
//         {categories.map((cat, index) => (
//           <Link
//             to={cat.path}
//             key={index}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "10px",
//               overflow: "hidden",
//               textDecoration: "none",
//               color: "#333",
//               backgroundColor: "#fff",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//               transition: "transform 0.2s ease-in-out",
//             }}
//           >
//             <img
//               src={cat.image}
//               alt={cat.title}
//               style={{ width: "100%", height: "180px", objectFit: "cover" }}
//             />
//             <div style={{ padding: "15px" }}>
//               <h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>{cat.title}</h3>
//               <p style={{ marginTop: "10px", fontSize: "0.9rem" }}>{cat.description}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Category;

// import React from "react";

// const categories = [
//   {
//     title: "Medicines",
//     description: "Buy prescription & OTC medicines safely and conveniently.",
//     image: "/images/medicines.jpg",
//   },
//   {
//     title: "Wellness",
//     description: "Products to support your mental and physical well-being.",
//     image: "/images/wellness.jpg",
//   },
//   {
//     title: "Personal Care",
//     description: "Skincare, haircare & hygiene essentials for everyday health.",
//     image: "/images/personal_care.jpg",
//   },
//   {
//     title: "Health Devices",
//     description: "BP monitors, oximeters, thermometers and more.",
//     image: "/images/health_devices.jpg",
//   },
//   {
//     title: "Baby Care",
//     description: "Gentle and safe products for your baby's needs.",
//     image: "/images/baby_care.jpg",
//   },
//   {
//     title: "Skin Care",
//     description: "Nourish and protect your skin with trusted solutions.",
//     image: "/images/skin_care.jpg",
//   },
//   {
//     title: "Diabetic Care",
//     description: "Essential tools and supplies for diabetic support.",
//     image: "/images/diabetic_care.jpg",
//   },
//   {
//     title: "Fitness & Supplements",
//     description: "Nutrition and gear to power your health journey.",
//     image: "/images/supplements.jpg",
//   },
//   {
//     title: "Ayurveda",
//     description: "Explore Ayurvedic remedies for holistic healing.",
//     image: "/images/ayurveda.jpg",
//   },
//   {
//     title: "Medical Equipments",
//     description: "From nebulizers to walkers — essential devices for care.",
//     image: "/images/medical_equipments.jpg",
//   },
//   {
//     title: "Elderly Care",
//     description: "Adult diapers, support belts & more for senior comfort.",
//     image: "/images/elderly_care.jpg",
//   },
//   {
//     title: "Surgical Supplies",
//     description: "Sterile instruments and surgical products for clinics & homes.",
//     image: "/images/surgical_supplies.jpg",
//   },
// ];

// const CategoriesSection = () => {
//   return (
//     <section className="px-6 md:px-20 py-12 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-10">Explore Our Categories</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.03] transform transition-all duration-300 overflow-hidden group"
//           >
//             <div className="relative overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
//             </div>
//             <div className="p-6">
//               <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
//               <p className="text-gray-600 text-sm">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;

// import React from "react";

// const categories = [
//   {
//     title: "Medicines",
//     description: "Buy prescription & OTC medicines safely and conveniently.",
//     image: "/images/medicines.jpg",
//   },
//   {
//     title: "Wellness",
//     description: "Products to support your mental and physical well-being.",
//     image: "/images/wellness.jpg",
//   },
//   {
//     title: "Personal Care",
//     description: "Skincare, haircare & hygiene essentials for everyday health.",
//     image: "/images/personal_care.jpg",
//   },
//   {
//     title: "Health Devices",
//     description: "BP monitors, oximeters, thermometers and more.",
//     image: "/images/health_devices.jpg",
//   },
//   {
//     title: "Baby Care",
//     description: "Gentle and safe products for your baby's needs.",
//     image: "/images/baby_care.jpg",
//   },
//   {
//     title: "Skin Care",
//     description: "Nourish and protect your skin with trusted solutions.",
//     image: "/images/skin_care.jpg",
//   },
//   {
//     title: "Diabetic Care",
//     description: "Essential tools and supplies for diabetic support.",
//     image: "/images/diabetic_care.jpg",
//   },
//   {
//     title: "Fitness & Supplements",
//     description: "Nutrition and gear to power your health journey.",
//     image: "/images/supplements.jpg",
//   },
//   {
//     title: "Ayurveda",
//     description: "Explore Ayurvedic remedies for holistic healing.",
//     image: "/images/ayurveda.jpg",
//   },
//   {
//     title: "Medical Equipments",
//     description: "From nebulizers to walkers — essential devices for care.",
//     image: "/images/medical_equipments.jpg",
//   },
//   {
//     title: "Elderly Care",
//     description: "Adult diapers, support belts & more for senior comfort.",
//     image: "/images/elderly_care.jpg",
//   },
//   {
//     title: "Surgical Supplies",
//     description: "Sterile instruments and surgical products for clinics & homes.",
//     image: "/images/surgical_supplies.jpg",
//   },
// ];

// const CategoriesSection = () => {
//   return (
//     <section className="px-6 md:px-20 py-14 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//         Explore Our Categories
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
//           >
//             <div className="relative overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300" />
//             </div>

//             <div className="p-5 group-hover:bg-gray-50 transition-colors duration-300">
//               <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-[#6366f1]
//  transition-colors duration-300">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;


// import React from "react";

// const categories = [
//   {
//     title: "Medicines",
//     description: "Buy prescription & OTC medicines safely and conveniently.",
//     image: "/images/medicines.jpg",
//   },
//   {
//     title: "Wellness",
//     description: "Products to support your mental and physical well-being.",
//     image: "/images/wellness.jpg",
//   },
//   {
//     title: "Personal Care",
//     description: "Skincare, haircare & hygiene essentials for everyday health.",
//     image: "/images/personal_care.jpg",
//   },
//   {
//     title: "Health Devices",
//     description: "BP monitors, oximeters, thermometers and more.",
//     image: "/images/health_devices.jpg",
//   },
//   {
//     title: "Baby Care",
//     description: "Gentle and safe products for your baby's needs.",
//     image: "/images/baby_care.jpg",
//   },
//   {
//     title: "Skin Care",
//     description: "Nourish and protect your skin with trusted solutions.",
//     image: "/images/skin_care.jpg",
//   },
//   {
//     title: "Diabetic Care",
//     description: "Essential tools and supplies for diabetic support.",
//     image: "/images/diabetic_care.jpg",
//   },
//   {
//     title: "Fitness & Supplements",
//     description: "Nutrition and gear to power your health journey.",
//     image: "/images/supplements.jpg",
//   },
//   {
//     title: "Ayurveda",
//     description: "Explore Ayurvedic remedies for holistic healing.",
//     image: "/images/ayurveda.jpg",
//   },
//   {
//     title: "Medical Equipments",
//     description: "From nebulizers to walkers — essential devices for care.",
//     image: "/images/medical_equipments.jpg",
//   },
//   {
//     title: "Elderly Care",
//     description: "Adult diapers, support belts & more for senior comfort.",
//     image: "/images/elderly_care.jpg",
//   },
//   {
//     title: "Surgical Supplies",
//     description: "Sterile instruments and surgical products for clinics & homes.",
//     image: "/images/surgical_supplies.jpg",
//   },
// ];

// const CategoriesSection = () => {
//   return (
//     <section className="px-6 md:px-10 lg:px-16 py-14 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//         Explore Our Categories
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-[1400px] mx-auto">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
//           >
//             <div className="relative overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300" />
//             </div>

//             <div className="p-5 group-hover:bg-gray-50 transition-colors duration-300">
//               <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-[#6366f1] transition-colors duration-300">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;



// import React from "react";

// const categories = [
//   {
//     title: "Medicines",
//     description: "Buy prescription & OTC medicines safely and conveniently.",
//     image: "/images/medicines.jpg",
//   },
//   {
//     title: "Wellness",
//     description: "Products to support your mental and physical well-being.",
//     image: "/images/wellness.jpg",
//   },
//   {
//     title: "Personal Care",
//     description: "Skincare, haircare & hygiene essentials for everyday health.",
//     image: "/images/personal_care.jpg",
//   },
//   {
//     title: "Health Devices",
//     description: "BP monitors, oximeters, thermometers and more.",
//     image: "/images/health_devices.jpg",
//   },
//   {
//     title: "Baby Care",
//     description: "Gentle and safe products for your baby's needs.",
//     image: "/images/baby_care.jpg",
//   },
//   {
//     title: "Skin Care",
//     description: "Nourish and protect your skin with trusted solutions.",
//     image: "/images/skin_care.jpg",
//   },
//   {
//     title: "Diabetic Care",
//     description: "Essential tools and supplies for diabetic support.",
//     image: "/images/diabetic_care.jpg",
//   },
//   {
//     title: "Fitness & Supplements",
//     description: "Nutrition and gear to power your health journey.",
//     image: "/images/supplements.jpg",
//   },
//   {
//     title: "Ayurveda",
//     description: "Explore Ayurvedic remedies for holistic healing.",
//     image: "/images/ayurveda.jpg",
//   },
//   {
//     title: "Medical Equipments",
//     description: "From nebulizers to walkers — essential devices for care.",
//     image: "/images/medical_equipments.jpg",
//   },
//   {
//     title: "Elderly Care",
//     description: "Adult diapers, support belts & more for senior comfort.",
//     image: "/images/elderly_care.jpg",
//   },
//   {
//     title: "Surgical Supplies",
//     description: "Sterile instruments and surgical products for clinics & homes.",
//     image: "/images/surgical_supplies.jpg",
//   },
// ];

// const CategoriesSection = () => {
//   return (
//     <section className="px-6 py-14 bg-gray-100">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//         Explore Our Categories
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
//         {categories.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
//           >
//             <div className="relative overflow-hidden">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out grayscale hover:grayscale-0"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300" />
//             </div>

//             <div className="p-5 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
//               <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-500 transition-colors duration-300">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;



// import React from "react";

// const categories = [
//   {
//     title: "Medicines",
//     description: "Buy prescription & OTC medicines safely and conveniently.",
//     image: "/images/medicines.jpg",
//   },
//   {
//     title: "Wellness",
//     description: "Products to support your mental and physical well-being.",
//     image: "/images/wellness.jpg",
//   },
//   {
//     title: "Personal Care",
//     description: "Skincare, haircare & hygiene essentials for everyday health.",
//     image: "/images/personal_care.jpg",
//   },
//   {
//     title: "Health Devices",
//     description: "BP monitors, oximeters, thermometers and more.",
//     image: "/images/health_devices.jpg",
//   },
//   {
//     title: "Baby Care",
//     description: "Gentle and safe products for your baby's needs.",
//     image: "/images/baby_care.jpg",
//   },
//   {
//     title: "Skin Care",
//     description: "Nourish and protect your skin with trusted solutions.",
//     image: "/images/skin_care.jpg",
//   },
//   {
//     title: "Diabetic Care",
//     description: "Essential tools and supplies for diabetic support.",
//     image: "/images/diabetic_care.jpg",
//   },
//   {
//     title: "Fitness & Supplements",
//     description: "Nutrition and gear to power your health journey.",
//     image: "/images/supplements.jpg",
//   },
//   {
//     title: "Ayurveda",
//     description: "Explore Ayurvedic remedies for holistic healing.",
//     image: "/images/ayurveda.jpg",
//   },
//   {
//     title: "Medical Equipments",
//     description: "From nebulizers to walkers — essential devices for care.",
//     image: "/images/medical_equipments.jpg",
//   },
//   {
//     title: "Elderly Care",
//     description: "Adult diapers, support belts & more for senior comfort.",
//     image: "/images/elderly_care.jpg",
//   },
//   {
//     title: "Surgical Supplies",
//     description: "Sterile instruments and surgical products for clinics & homes.",
//     image: "/images/surgical_supplies.jpg",
//   },
// ];

// const CategoriesSection = () => {
//   return (
//     <section className="py-14 bg-gray-100">
//       <div className="px-6">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//           Explore Our Categories
//         </h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
//           {categories.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out grayscale hover:grayscale-0"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300" />
//               </div>
              
//               <div className="p-5 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-500 transition-colors duration-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;





// import React from "react";
// import { useNavigate } from "react-router-dom";
// import medicines from "../assets/medicines.jpg";
// const categories = [
//   {
//     title: "Medicines",
//     description: "Buy prescription & OTC medicines safely and conveniently.",
//     image: medicines,
//     path: "medicines",
//   },
//   {
//     title: "Wellness",
//     description: "Products to support your mental and physical well-being.",
//     image: "/images/wellness.jpg",
//     path: "wellness",
//   },
//   {
//     title: "Personal Care",
//     description: "Skincare, haircare & hygiene essentials for everyday health.",
//     image: "/images/personal_care.jpg",
//     path: "personal-care",
//   },
//   {
//     title: "Health Devices",
//     description: "BP monitors, oximeters, thermometers and more.",
//     image: "/images/health_devices.jpg",
//     path: "health-devices",
//   },
//   {
//     title: "Baby Care",
//     description: "Gentle and safe products for your baby's needs.",
//     image: "/images/baby_care.jpg",
//     path: "baby-care",
//   },
//   {
//     title: "Skin Care",
//     description: "Nourish and protect your skin with trusted solutions.",
//     image: "/images/skin_care.jpg",
//     path: "skin-care",
//   },
//   {
//     title: "Diabetic Care",
//     description: "Essential tools and supplies for diabetic support.",
//     image: "/images/diabetic_care.jpg",
//     path: "diabetic-care",
//   },
//   {
//     title: "Fitness & Supplements",
//     description: "Nutrition and gear to power your health journey.",
//     image: "/images/supplements.jpg",
//     path: "fitness-supplements",
//   },
//   {
//     title: "Ayurveda",
//     description: "Explore Ayurvedic remedies for holistic healing.",
//     image: "/images/ayurveda.jpg",
//     path: "ayurveda",
//   },
//   {
//     title: "Medical Equipments",
//     description: "From nebulizers to walkers — essential devices for care.",
//     image: "/images/medical_equipments.jpg",
//     path: "medical-equipments",
//   },
//   {
//     title: "Elderly Care",
//     description: "Adult diapers, support belts & more for senior comfort.",
//     image: "/images/elderly_care.jpg",
//     path: "elderly-care",
//   },
//   {
//     title: "Surgical Supplies",
//     description: "Sterile instruments and surgical products for clinics & homes.",
//     image: "/images/surgical_supplies.jpg",
//     path: "surgical-supplies",
//   },
// ];

// const CategoriesSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-16 px-6 max-w-[1200px] mx-auto">
//       {/* Bigger Heading */}
//       <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
//         Explore Our Categories
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(`/product/${cat.path}`)}
//             className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition cursor-pointer overflow-hidden group"
//           >
//             {/* Image with hover zoom */}
//             <div className="overflow-hidden">
//               <img
//                 src={cat.image}
//                 alt={cat.title}
//                 className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-6 text-center">
//               <h3 className="text-lg font-semibold transition-colors duration-300 text-black group-hover:text-[#4d59e2]">
//                 {cat.title}
//               </h3>
//               <p className="text-gray-600 text-sm mt-3 leading-relaxed">
//                 {cat.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;
// const CategoriesSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-16 px-6 max-w-[1200px] mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//         Explore Our Categories
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(`/${cat.path}`)}
//             className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition cursor-pointer overflow-hidden group"
//           >
//             {/* Image with hover zoom */}
//             <div className="overflow-hidden">
//               <img
//                 src={cat.image}
//                 alt={cat.title}
//                 className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-6 text-center">
//               <h3 className="text-lg font-semibold transition-colors duration-300 text-[#4d59e2] group-hover:text-[#3740a3]">
//                 {cat.title}
//               </h3>
//               <p className="text-gray-600 text-sm mt-3 leading-relaxed">
//                 {cat.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;
// const CategoriesSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-16 px-6 max-w-[1200px] mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
//         Explore Our Categories
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(`/${cat.path}`)}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden group"
//           >
//             {/* Image with hover zoom */}
//             <div className="overflow-hidden">
//               <img
//                 src={cat.image}
//                 alt={cat.title}
//                 className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-5">
//               <h3 className="text-lg font-semibold transition" style={{ color: "#4d59e2" }}>
//                 {cat.title}
//               </h3>
//               <p className="text-gray-600 text-sm mt-2">{cat.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;

// const CategoriesSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-14 px-6 max-w-[1200px] mx-auto">
//       <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//         Discover the Possibilities
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(`/${cat.path}`)}
//             className="bg-white rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer overflow-hidden"
//           >
//             {/* Image */}
//             <img
//               src={cat.image}
//               alt={cat.title}
//               className="w-full h-56 object-cover"
//             />

//             {/* Content */}
//             <div className="p-5 text-center">
//               <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
//               <p className="text-gray-600 text-sm">{cat.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;

// const Categories = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
//       {categories.map((category, index) => (
//         <div
//           key={index}
//           onClick={() => navigate(`/${category.path}`)}
//           className="cursor-pointer border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
//         >
//           {/* ✅ make sure to bind src correctly */}
//           <img
//             src={category.image}
//             alt={category.title}
//             className="w-full h-40 object-cover rounded-t-2xl"
//           />
//           <div className="p-4">
//             <h3 className="text-lg font-semibold">{category.title}</h3>
//             <p className="text-gray-600 text-sm">{category.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Categories;


// const CategoriesSection = () => {
//   const navigate = useNavigate();

//   const handleCardClick = (path) => {
//     navigate(`/product/${path}`);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className="bg-gray-100 w-full">
//       <section className="py-14 px-6 max-w-[1200px] mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//           Explore Our Categories
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {categories.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => handleCardClick(item.path)}
//               className="cursor-pointer bg-white border border-gray-300 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out grayscale hover:grayscale-0"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition duration-300" />
//               </div>

//               <div className="p-5 bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
//                 <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-indigo-500 transition-colors duration-300">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CategoriesSection;
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import medicines from "../assets/medicines.jpg";
// import wellness from "../assets/wellness.jpeg";
// import personal_car from "../assets/personal_car.jpeg";
// import health_device from "../assets/health_device.jpeg";
// import baby_care from "../assets/baby_care.jpg";
// import skin_care from "../assets/skin_care.jpeg";
// import diabetic_care from "../assets/diabetic_care.jpeg";
// import fitness_supplements from "../assets/fitness_supplements.jpg";
// import ayurveda from "../assets/ayurveda.jpg";
// import medical_equipments from "../assets/medical_equipments.jpg";
// import surgical_supplies from "../assets/surgical_supplies.jpg";
// import elderly_care from "../assets/elderly_care.jpg";
// const categories = [
//   {
//     title: "Medicines",
//     description: "Buy prescription & OTC medicines safely and conveniently.",
//     image: medicines,
//     path: "medicines",
//   },
//   {
//     title: "Wellness",
//     description: "Products to support your mental and physical well-being.",
//     image: wellness,
//     path: "wellness",
//   },
//   {
//     title: "Personal Care",
//     description: "Skincare, haircare & hygiene essentials for everyday health.",
//     image: personal_car,
//     path: "personal-care",
//   },
//   {
//     title: "Health Devices",
//     description: "BP monitors, oximeters, thermometers and more.",
//     image: health_device,
//     path: "health-devices",
//   },
//   {
//     title: "Baby Care",
//     description: "Gentle and safe products for your baby's needs.",
//     image: baby_care,
//     path: "baby-care",
//   },
//   {
//     title: "Skin Care",
//     description: "Nourish and protect your skin with trusted solutions.",
//     image: skin_care,
//     path: "skin-care",
//   },
//   {
//     title: "Diabetic Care",
//     description: "Essential tools and supplies for diabetic support.",
//     image: diabetic_care,
//     path: "diabetic-care",
//   },
//   {
//     title: "Fitness & Supplements",
//     description: "Nutrition and gear to power your health journey.",
//     image: fitness_supplements,
//     path: "fitness-supplements",
//   },
//   {
//     title: "Ayurveda",
//     description: "Explore Ayurvedic remedies for holistic healing.",
//     image: ayurveda,
//     path: "ayurveda",
//   },
//   {
//     title: "Medical Equipments",
//     description: "From nebulizers to walkers — essential devices for care.",
//     image: medical_equipments,
//     path: "medical-equipments",
//   },
//   {
//     title: "Elderly Care",
//     description: "Adult diapers, support belts & more for senior comfort.",
//     image: elderly_care,
//     path: "elderly-care",
//   },
//   {
//     title: "Surgical Supplies",
//     description: "Sterile instruments and surgical products for clinics & homes.",
//     image: surgical_supplies,
//     path: "surgical-supplies",
//   },
// ];
// const CategoriesSection = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="py-16 px-6 max-w-[1200px] mx-auto">
//       {/* Heading */}
//       <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
//         Explore Our Categories
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
//         {categories.map((cat, index) => (
//           <div
//             key={index}
//             onClick={() => navigate(`/product/${cat.path}`)}
//             className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden group"
//           >
//             {/* Image with softer hover overlay */}
//             <div className="relative overflow-hidden">
//               <img
//                 src={cat.image}
//                 alt={cat.title}
//                 className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
//               />
//               {/* Lighter shadow overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
//             </div>

//             {/* Content */}
//             <div className="p-6 text-center">
//               <h3 className="text-2xl font-bold transition-colors duration-300 text-gray-900 group-hover:text-[#4d59e2]">
//                 {cat.title}
//               </h3>
//               <p className="text-gray-600 text-md mt-4 leading-relaxed group-hover:text-gray-800">
//                 {cat.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CategoriesSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import medicines from "../assets/medicines.jpg";
import wellness from "../assets/wellness.jpeg";
import personal_car from "../assets/personal_car.jpeg";
import health_device from "../assets/health_device.jpeg";
import baby_care from "../assets/baby_care.jpg";
import skin_care from "../assets/skin_care.jpeg";
import diabetic_care from "../assets/diabetic_care.jpeg";
import fitness_supplements from "../assets/fitness_supplements.jpg";
import ayurveda from "../assets/ayurveda.jpg";
import medical_equipments from "../assets/medical_equipments.jpg";
import surgical_supplies from "../assets/surgical_supplies.jpg";
import elderly_care from "../assets/elderly_care.jpg";

const categories = [
  { title: "Medicines", description: "Buy prescription & OTC medicines safely and conveniently.", image: medicines, path: "Medicines" },
  { title: "Wellness", description: "Products to support your mental and physical well-being.", image: wellness, path: "Wellness" },
  { title: "Personal Care", description: "Skincare, haircare & hygiene essentials for everyday health.", image: personal_car, path: "Personal Care" },
  { title: "Health Devices", description: "BP monitors, oximeters, thermometers and more.", image: health_device, path: "Health Devices" },
  { title: "Baby Care", description: "Gentle and safe products for your baby's needs.", image: baby_care, path: "Baby Care" },
  { title: "Skin Care", description: "Nourish and protect your skin with trusted solutions.", image: skin_care, path: "Skin Care" },
  { title: "Diabetic Care", description: "Essential tools and supplies for diabetic support.", image: diabetic_care, path: "Diabetic Care" },
  { title: "Fitness & Supplements", description: "Nutrition and gear to power your health journey.", image: fitness_supplements, path: "Fitness & Supplements" },
  { title: "Ayurveda", description: "Explore Ayurvedic remedies for holistic healing.", image: ayurveda, path: "Ayurveda" },
  { title: "Medical Equipments", description: "From nebulizers to walkers — essential devices for care.", image: medical_equipments, path: "Medical Equipments" },
  { title: "Elderly Care", description: "Adult diapers, support belts & more for senior comfort.", image: elderly_care, path: "Elderly Care" },
  { title: "Surgical Supplies", description: "Sterile instruments and surgical products for clinics & homes.", image: surgical_supplies, path: "Surgical Supplies" },
];


const CategoriesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 max-w-[1200px] mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
        Explore Our Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/medicines-and-more/${cat.path}`)} // ✅ navigate to MedicinesAndMore page
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold transition-colors duration-300 text-gray-900 group-hover:text-[#4d59e2]">
                {cat.title}
              </h3>
              <p className="text-gray-600 text-md mt-4 leading-relaxed group-hover:text-gray-800">
                {cat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
