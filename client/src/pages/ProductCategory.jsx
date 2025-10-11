

import { useState, useContext, useRef } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const AddProduct = ({ asset }) => {
  const { axios, categories = [] } = useContext(AppContext); 

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

        
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400"
          required
          disabled={isSubmitting}
        />

        
        <textarea
          rows={5}
          placeholder="Product Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 resize-none"
          required
          disabled={isSubmitting}
        />

        
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

