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

// // export default ProductCategory;
// import React, { useContext, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import ProductCard from "../components/ProductCard";

// const ProductCategory = () => {
//   const { category } = useParams();
//   const { products } = useContext(AppContext);

//   const [sortBy, setSortBy] = useState("default");

//   // normalize category path
//   const normalizedCategory = category.replace(/-/g, " ").toLowerCase();

//   // Filter products by category
//   let filteredProducts = products.filter(
//     (p) => p.category.toLowerCase() === normalizedCategory
//   );

//   // Sorting
//   if (sortBy === "priceLowHigh") {
//     filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
//   } else if (sortBy === "priceHighLow") {
//     filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
//   } else if (sortBy === "nameAZ") {
//     filteredProducts = [...filteredProducts].sort((a, b) =>
//       a.name.localeCompare(b.name)
//     );
//   }

//   // Category Descriptions (you can expand this later)
//   const categoryDescriptions = {
//     "pain relief": "Find trusted medicines for headaches, muscle pain, arthritis, and body aches.",
//     "fever": "Antipyretic medicines to help reduce fever and provide comfort.",
//     "antibiotics": "Wide range of antibiotics prescribed for bacterial infections.",
//     "vitamins": "Boost your immunity and overall health with essential vitamins & supplements.",
//     "skin care": "Dermatologist-recommended creams, ointments, and skin treatments.",
//     "cough & cold": "Relief from cough, cold, and sore throat symptoms.",
//     "all medicines": "Browse our complete range of healthcare products and medicines."
//   };

//   return (
//     <div className="p-6">
//       {/* Breadcrumb */}
//       <nav className="text-sm text-gray-500 mb-4">
//         <Link to="/" className="hover:underline text-[#4d59e2]">Home</Link> 
//         <span className="mx-2">›</span> 
//         <span className="capitalize">{category.replace(/-/g, " ")}</span>
//       </nav>

//       {/* Header */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
//         <div>
//           <h1 className="text-3xl font-bold text-[#4d59e2] capitalize mb-2">
//             {category.replace(/-/g, " ")} Category
//           </h1>
//           <p className="text-gray-600 max-w-2xl">
//             {categoryDescriptions[normalizedCategory] || "Explore our products in this category."}
//           </p>
//         </div>

//         {/* Sort Dropdown */}
//         {filteredProducts.length > 0 && (
//           <select
//             value={sortBy}
//             onChange={(e) => setSortBy(e.target.value)}
//             className="mt-4 sm:mt-0 border rounded-lg px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#4d59e2]"
//           >
//             <option value="default">Sort By</option>
//             <option value="priceLowHigh">Price: Low to High</option>
//             <option value="priceHighLow">Price: High to Low</option>
//             <option value="nameAZ">Name: A - Z</option>
//           </select>
//         )}
//       </div>

//       {/* Product Grid */}
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {filteredProducts.map((product) => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       ) : (
//         <div className="flex flex-col items-center mt-12 text-center text-gray-600">
//           <img 
//             src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png" 
//             alt="No products" 
//             className="w-32 mb-4 opacity-70"
//           />
//           <p className="text-lg">No products found in this category.</p>
//           <Link to="/" className="mt-4 text-[#4d59e2] hover:underline">
//             Browse All Medicines
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductCategory;

import { useState, useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const AddProduct = ({ asset }) => {
  const { axios, categories = [] } = useContext(AppContext); // Single useContext

  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [offerPrice, setOfferPrice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Basic validation
    if (!name || !price || !offerPrice || !description || !category) {
      toast.error("Please fill all required fields");
      return;
    }

    const validFiles = files.filter(Boolean);
    if (validFiles.length === 0) {
      toast.error("Please select at least one image");
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("offerPrice", offerPrice);
      formData.append("category", category);
      validFiles.forEach((file) => formData.append("image", file));

      const response = await axios.post("/api/product/add-product", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response?.data?.success) {
        setSuccessMessage("Product added successfully!");
        formRef.current?.scrollIntoView({ behavior: "smooth" });

        // Reset form
        setName("");
        setDescription("");
        setPrice("");
        setOfferPrice("");
        setCategory("");
        setFiles([]);

        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        toast.error(response?.data?.message || "Failed to add product");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-10 flex flex-col items-center bg-gradient-to-br from-indigo-50 to-white min-h-screen">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="md:p-10 p-6 space-y-6 w-full max-w-3xl bg-white shadow-lg rounded-2xl border border-gray-200"
      >
        {successMessage && (
          <div className="p-3 mb-4 rounded-lg bg-green-100 text-green-700 text-center font-medium">
            {successMessage}
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add New Product
        </h2>

        {/* Product Images */}
        <div>
          <p className="text-base font-medium text-gray-700">
            Product Images <span className="text-red-500">*</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-3">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <label key={index} htmlFor={`image${index}`} className="cursor-pointer">
                  <input
                    type="file"
                    id={`image${index}`}
                    accept="image/*"
                    hidden
                    onChange={(e) => {
                      const updatedFiles = [...files];
                      updatedFiles[index] = e.target.files[0];
                      setFiles(updatedFiles);
                    }}
                  />
                  <div className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg overflow-hidden bg-gray-50 hover:border-indigo-400 transition">
                    {files[index] ? (
                      <img
                        src={URL.createObjectURL(files[index])}
                        alt={`upload-${index}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={asset?.upload_area}
                        alt={`placeholder-${index}`}
                        className="w-10 h-10 opacity-70"
                      />
                    )}
                  </div>
                </label>
              ))}
          </div>
        </div>

        {/* Product Name */}
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          required
          disabled={isSubmitting}
        />

        {/* Product Description */}
        <textarea
          rows={5}
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 resize-none"
          required
          disabled={isSubmitting}
        />

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          required
          disabled={isSubmitting || categories.length === 0}
        >
          <option value="">Select Category</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Price & Offer Price */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
            required
            disabled={isSubmitting}
          />
          <input
            type="number"
            placeholder="Offer Price"
            value={offerPrice}
            onChange={(e) => setOfferPrice(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
            required
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {isSubmitting ? "ADDING PRODUCT..." : "ADD PRODUCT"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

