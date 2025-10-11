
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom"; 

const MedicinesAndMore = () => {
  const { products = [], searchQuery } = useContext(AppContext);
  const { category: urlCategory } = useParams(); 
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
