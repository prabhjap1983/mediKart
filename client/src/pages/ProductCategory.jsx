// import React from 'react'

// const ProductCategory = () => {
//   return (
//     <div>ProductCategory</div>
//   )
// }

// export default ProductCategory
// import React from "react";
// import { useParams } from "react-router-dom";

// const ProductCategory = () => {
//   const { category } = useParams();

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-[#4d59e2] capitalize">
//         {category} Category
//       </h1>
//       <p className="text-gray-600 mt-2">
//         Products for {category} will appear here.
//       </p>
//     </div>
//   );
// };

// export default ProductCategory;
import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

const ProductCategory = () => {
  const { category } = useParams();
  const { products } = useContext(AppContext);

  const [sortBy, setSortBy] = useState("default");

  // normalize category path
  const normalizedCategory = category.replace(/-/g, " ").toLowerCase();

  // Filter products by category
  let filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === normalizedCategory
  );

  // Sorting
  if (sortBy === "priceLowHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "nameAZ") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  // Category Descriptions (you can expand this later)
  const categoryDescriptions = {
    "pain relief": "Find trusted medicines for headaches, muscle pain, arthritis, and body aches.",
    "fever": "Antipyretic medicines to help reduce fever and provide comfort.",
    "antibiotics": "Wide range of antibiotics prescribed for bacterial infections.",
    "vitamins": "Boost your immunity and overall health with essential vitamins & supplements.",
    "skin care": "Dermatologist-recommended creams, ointments, and skin treatments.",
    "cough & cold": "Relief from cough, cold, and sore throat symptoms.",
    "all medicines": "Browse our complete range of healthcare products and medicines."
  };

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:underline text-[#4d59e2]">Home</Link> 
        <span className="mx-2">›</span> 
        <span className="capitalize">{category.replace(/-/g, " ")}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-[#4d59e2] capitalize mb-2">
            {category.replace(/-/g, " ")} Category
          </h1>
          <p className="text-gray-600 max-w-2xl">
            {categoryDescriptions[normalizedCategory] || "Explore our products in this category."}
          </p>
        </div>

        {/* Sort Dropdown */}
        {filteredProducts.length > 0 && (
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="mt-4 sm:mt-0 border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4d59e2]"
          >
            <option value="default">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="nameAZ">Name: A - Z</option>
          </select>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-12 text-center text-gray-600">
          <img 
            src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png" 
            alt="No products" 
            className="w-32 mb-4 opacity-70"
          />
          <p className="text-lg">No products found in this category.</p>
          <Link to="/" className="mt-4 text-[#4d59e2] hover:underline">
            Browse All Medicines
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductCategory;
