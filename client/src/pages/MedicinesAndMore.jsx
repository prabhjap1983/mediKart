
// // src/pages/MedicinesAndMore.jsx
// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import ProductCard from "../components/ProductCard";

// const MedicinesAndMore = () => {
//   const { products = [], searchQuery } = useContext(AppContext);

//   const categories = [
//     "All Products",
//     "Medicines",
//     "Wellness",
//     "Personal Care",
//     "Health Devices",
//     "Baby Care",
//     "Skin Care",
//     "Diabetic Care",
//     "Fitness & Supplements",
//     "Ayurveda",
//     "Medical Equipments",
//     "Elderly Care",
//     "Surgical Supplies",
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All Products");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     let updatedProducts = Array.isArray(products) ? [...products] : [];

//     // ✅ search filter
//     const query = String(searchQuery || "").toLowerCase().trim();
//     if (query) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product?.name?.toLowerCase().includes(query)
//       );
//     }

//     // ✅ category filter
//     if (selectedCategory !== "All Products") {
//       updatedProducts = updatedProducts.filter(
//         (product) =>
//           product?.category?.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }

//     setFilteredProducts(updatedProducts);
//   }, [products, searchQuery, selectedCategory]);

//   return (
//     <div className="mt-16 px-4">
//       <h1 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-800">
//         Medicines & More
//       </h1>

//       {/* Categories */}
//       <div className="flex flex-wrap gap-3 mb-8">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={`px-4 py-2 rounded-lg font-medium transition ${
//               selectedCategory === category
//                 ? "bg-blue-600 text-white shadow-md"
//                 : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//             }`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Products Grid */}
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">No products found.</p>
//       )}
//     </div>
//   );
// };

// export default MedicinesAndMore;
// src/pages/MedicinesAndMore.jsx
// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import ProductCard from "../components/ProductCard";

// const MedicinesAndMore = () => {
//   const { products = [], searchQuery } = useContext(AppContext);

//   const categories = [
//     "All Products",
//     "Medicines",
//     "Wellness",
//     "Personal Care",
//     "Health Devices",
//     "Baby Care",
//     "Skin Care",
//     "Diabetic Care",
//     "Fitness & Supplements",
//     "Ayurveda",
//     "Medical Equipments",
//     "Elderly Care",
//     "Surgical Supplies",
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All Products");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     let updatedProducts = Array.isArray(products) ? [...products] : [];

//     // ✅ Search filter
//     const query = String(searchQuery || "").toLowerCase().trim();
//     if (query) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product?.name?.toLowerCase().includes(query)
//       );
//     }

//     // ✅ Category filter
//     if (selectedCategory !== "All Products") {
//       updatedProducts = updatedProducts.filter(
//         (product) =>
//           product?.category?.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }

//     setFilteredProducts(updatedProducts);
//   }, [products, searchQuery, selectedCategory]);

//   return (
//     <div>
//       {/* 🔹 Banner Section */}
//       <div className="relative w-full bg-[#f3f4ff] text-center py-16 rounded-b-3xl shadow-md">
//         <div className="container mx-auto px-6">
//           <h1 className="text-4xl lg:text-5xl font-extrabold text-[#4f46e5] mb-4">
//             Medicines & More
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Explore our wide range of medicines, wellness products, and personal care essentials — all in one place for a healthier tomorrow.
//           </p>
//         </div>
//       </div>

//       {/* Categories */}
//       <div className="px-6 mt-10">
//         <div className="flex flex-wrap gap-3 mb-8 justify-center">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-lg font-medium transition ${
//                 selectedCategory === category
//                   ? "bg-[#4f46e5] text-white shadow-md"
//                   : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500 text-lg text-center mt-12">
//             No products found.
//           </p>
//         )}
//       </div>
//     </div>
    
//   );
// };

// export default MedicinesAndMore;
// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import ProductCard from "../components/ProductCard";

// const MedicinesAndMore = () => {
//   const { products = [], searchQuery } = useContext(AppContext);

//   const categories = [
//     "All Products",
//     "Medicines",
//     "Wellness",
//     "Personal Care",
//     "Health Devices",
//     "Baby Care",
//     "Skin Care",
//     "Diabetic Care",
//     "Fitness & Supplements",
//     "Ayurveda",
//     "Medical Equipments",
//     "Elderly Care",
//     "Surgical Supplies",
//   ];

//   const [selectedCategory, setSelectedCategory] = useState("All Products");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     let updatedProducts = Array.isArray(products) ? [...products] : [];

//     // ✅ Search filter
//     const query = String(searchQuery || "").toLowerCase().trim();
//     if (query) {
//       updatedProducts = updatedProducts.filter((product) =>
//         product?.name?.toLowerCase().includes(query)
//       );
//     }

//     // ✅ Category filter
//     if (selectedCategory !== "All Products") {
//       updatedProducts = updatedProducts.filter(
//         (product) =>
//           product?.category?.toLowerCase() === selectedCategory.toLowerCase()
//       );
//     }

//     setFilteredProducts(updatedProducts);
//   }, [products, searchQuery, selectedCategory]);

//   return (
//     <div>
//       {/* 🔹 Banner Section */}
// <div className="relative w-full bg-[#f3f4ff] text-center py-16 rounded-b-3xl shadow-md">
//   <div className="container mx-auto px-6">
//     <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
//       <span className="text-[#4f46e5]">Medicines </span>
//       <span className="text-black">&</span>
//       <span className="text-[#4f46e5]"> More</span>
//     </h1>
//     <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//       Explore our wide range of medicines, wellness products, and personal care essentials — all in one place for a healthier tomorrow.
//     </p>
//   </div>
// </div>


//       {/* Categories and Products */}
//       <div className="px-6 mt-10 mb-16"> {/* Added mb-16 for spacing from footer */}
//         {/* Categories */}
//         <div className="flex flex-wrap gap-3 mb-8 justify-center">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-lg font-medium transition ${
//                 selectedCategory === category
//                   ? "bg-[#4f46e5] text-white shadow-md"
//                   : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredProducts.map((product) => (
//               // <ProductCard key={product.id} product={product} />
//               <ProductCard key={product._id} product={product} />

//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-500 text-lg text-center mt-12">
//             No products found.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MedicinesAndMore;
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom"; // ✅ import useParams

const MedicinesAndMore = () => {
  const { products = [], searchQuery } = useContext(AppContext);
  const { category: urlCategory } = useParams(); // ✅ read category from URL
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (urlCategory) setSelectedCategory(urlCategory);
  }, [urlCategory]);

  useEffect(() => {
    let updatedProducts = Array.isArray(products) ? [...products] : [];

    const query = String(searchQuery || "").toLowerCase().trim();
    if (query) {
      updatedProducts = updatedProducts.filter((product) =>
        product?.name?.toLowerCase().includes(query)
      );
    }

    if (selectedCategory !== "All Products") {
      updatedProducts = updatedProducts.filter(
        (product) =>
          product?.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredProducts(updatedProducts);
  }, [products, searchQuery, selectedCategory]);

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full bg-[#f3f4ff] text-center py-16 rounded-b-3xl shadow-md">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="text-[#4f46e5]">Medicines </span>
            <span className="text-black">&</span>
            <span className="text-[#4f46e5]"> More</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our wide range of medicines, wellness products, and personal care essentials — all in one place.
          </p>
        </div>
      </div>

      {/* Category Buttons */}
      <div className="px-6 mt-10 mb-16">
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {[
            "All Products",
            "Medicines",
            "Wellness",
            "Personal Care",
            "Health Devices",
            "Baby Care",
            "Skin Care",
            "Diabetic Care",
            "Fitness & Supplements",
            "Ayurveda",
            "Medical Equipments",
            "Elderly Care",
            "Surgical Supplies",
          ].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedCategory === category
                  ? "bg-[#4f46e5] text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg text-center mt-12">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default MedicinesAndMore;
