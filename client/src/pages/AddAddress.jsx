// import React from 'react'

// const AddAddress = () => {
//   return (
//     <div>AddAddress</div>
//   )
// }

// export default AddAddress

// src/pages/AddAddress.jsx
import React, { useState } from "react";
import Address_details from "../assets/Address_details.png"; // replace with your actual image path

const AddAddress = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Saved:", formData);
    alert("Address Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-5xl flex gap-8">
        {/* Left: Form */}
        <form onSubmit={handleSubmit} className="w-2/3">
          <h2 className="text-xl font-semibold mb-6">Address Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full mt-4"
          />

          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full mt-4"
          />

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={formData.zip}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full mt-4"
          />

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 mt-6 rounded-lg w-full font-semibold transition"
          >
            Save Address
          </button>
        </form>

        {/* Right: Image */}
        <div className="w-1/3 flex justify-center items-center">
          <img
            src={Address_details}
            alt="address illustration"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
