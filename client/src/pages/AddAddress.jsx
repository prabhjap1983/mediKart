// import React from 'react'

// const AddAddress = () => {
//   return (
//     <div>AddAddress</div>
//   )
// }

// export default AddAddress

// // src/pages/AddAddress.jsx
// import React, { use, useState } from "react";
// import Address_details from "../assets/Address_details.png"; // replace with your actual image path
// import { AppContext } from "../context/AppContext";

// const AddAddress = () => {
//   const [address, setAddress] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     country: "",
//     phone: "",
//   });

//   const {axios,user,navigate } = useContext(AppContext);
//   const handleChange = (e) => {
//     setAddress({
//       ...address,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // const handleSubmit = (e) => {
//   //   try{
//   //     e.preventDefault();
//   //     const {data} = axios.post("/api/address/add", {address});
//   //   } catch (error){

//   //   }
//   //   // console.log("Address Saved:", address);
//   //   // alert("Address Saved Successfully!");
//   // };
// const submitHandler = async (e) => {
//   try {
//     e.preventDefault();
//     const { data } = await axios.post('/api/address/add', { address });
//     if (data.success) {
//       toast.success(data.message);
//       navigate('/cart');
//     } else {
//       toast.error(data.message);
//     }
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

// useEffect(() => {
//   if (!user) {
//     navigate("/cart");
//   }
// }, []);

//   return (
//     <div className="min-h-screen bg-gray-50 flex justify-center items-center">
//       <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-5xl flex gap-8">
//         {/* Left: Form */}
//         <form onSubmit={handleSubmit} className="w-2/3">
//           <h2 className="text-xl font-semibold mb-6">Address Details</h2>
//           <div className="grid grid-cols-2 gap-4">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={address.firstName}
//               onChange={handleChange}
//               className="border rounded-lg p-3 w-full"
//             />
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={address.lastName}
//               onChange={handleChange}
//               className="border rounded-lg p-3 w-full"
//             />
//           </div>

//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={address.email}
//             onChange={handleChange}
//             className="border rounded-lg p-3 w-full mt-4"
//           />

//           <input
//             type="text"
//             name="street"
//             placeholder="Street"
//             value={address.street}
//             onChange={handleChange}
//             className="border rounded-lg p-3 w-full mt-4"
//           />

//           <div className="grid grid-cols-2 gap-4 mt-4">
//             <input
//               type="text"
//               name="city"
//               placeholder="City"
//               value={address.city}
//               onChange={handleChange}
//               className="border rounded-lg p-3 w-full"
//             />
//             <input
//               type="text"
//               name="state"
//               placeholder="State"
//               value={address.state}
//               onChange={handleChange}
//               className="border rounded-lg p-3 w-full"
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4 mt-4">
//             <input
//               type="text"
//               name="zipCode"
//               placeholder="Zip Code"
//               value={address.zipCode}
//               onChange={handleChange}
//               className="border rounded-lg p-3 w-full"
//             />
//             <input
//               type="text"
//               name="country"
//               placeholder="Country"
//               value={address.country}
//               onChange={handleChange}
//               className="border rounded-lg p-3 w-full"
//             />
//           </div>

//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone"
//             value={address.phone}
//             onChange={handleChange}
//             className="border rounded-lg p-3 w-full mt-4"
//           />

//           <button
//             type="submit"
//             className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 mt-6 rounded-lg w-full font-semibold transition"
//           >
//             Save Address
//           </button>
//         </form>

//         {/* Right: Image */}
//         <div className="w-1/3 flex justify-center items-center">
//           <img
//             src={Address_details}
//             alt="address illustration"
//             className="w-64 h-64 object-contain"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddAddress;
import React, { useState, useEffect, useContext } from "react";
import Address_details from "../assets/Address_details.png"; // replace with your actual image path
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const { axios, user, navigate } = useContext(AppContext);

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/address/add", { address });
      if (data.success) {
        toast.success(data.message || "Address saved successfully!");
        navigate("/cart");
      } else {
        toast.error(data.message || "Failed to save address");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/cart");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-2xl p-8 w-full max-w-5xl flex gap-8">
        {/* Left: Form */}
        <form onSubmit={submitHandler} className="w-2/3">
          <h2 className="text-xl font-semibold mb-6">Address Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={address.firstName}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={address.lastName}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={address.email}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full mt-4"
          />

          <input
            type="text"
            name="street"
            placeholder="Street"
            value={address.street}
            onChange={handleChange}
            className="border rounded-lg p-3 w-full mt-4"
          />

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={address.city}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={address.state}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={address.zipCode}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={address.country}
              onChange={handleChange}
              className="border rounded-lg p-3 w-full"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={address.phone}
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
