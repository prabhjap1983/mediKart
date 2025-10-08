// import React from 'react'

// const MyOrders = () => {
//   return (
//     <div>MyOrders</div>
//   )
// }

// export default MyOrders

// import React, { useEffect, useState } from 'react';
// import { dummyOrders } from '../assets/assets';

// const MyOrders = () => {
//   const [myOrders, setMyOrders] = useState([]);

//   const fetchOrders = async () => {
//     setMyOrders(dummyOrders);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div className="mt-12 pb-16">
//       <div>
//         <h2 className="text-2xl font-medium md:text-3xl">My Orders</h2>
//       </div>
//       <div>
//         {myOrders.map((order, index) => (
//           <div
//             key={index}
//             className="my-8 border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
//           >
//             <p className="flex justify-between items-center gap-6">
//               <span>Order ID: {order._id}</span>
//               <span>Payment: {order.paymentType}</span>
//               <span>Total Amount: ${order.amount}</span>
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyOrders;


// import React, { useEffect, useState } from "react";

// const MyOrders = () => {
//   const [myOrders, setMyOrders] = useState([]);

//   // Dummy orders defined locally (not imported)
//   const dummyOrders = [
//     {
//       _id: "order_1",
//       amount: 89,
//       paymentType: "Online",
//     },
//     {
//       _id: "order_2",
//       amount: 325,
//       paymentType: "COD",
//     },
//   ];

//   const fetchOrders = async () => {
//     setMyOrders(dummyOrders);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   return (
//     <div className="mt-12 pb-16">
//       <h2 className="text-2xl font-medium md:text-3xl">My Orders</h2>

//       {myOrders.length === 0 ? (
//         <p className="text-gray-500 mt-6">No orders found.</p>
//       ) : (
//         myOrders.map((order, index) => (
//           <div
//             key={order._id || index}
//             className="my-8 border border-gray-300 rounded-lg p-4 py-5 max-w-4xl"
//           >
//             <p className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
//               <span>
//                 <strong>Order ID:</strong> {order._id}
//               </span>
//               <span>
//                 <strong>Payment:</strong> {order.paymentType}
//               </span>
//               <span className="text-indigo-600 font-medium">
//                 <strong>Total Amount:</strong> ₹{order.amount}
//               </span>
//             </p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default MyOrders;
// import React, { useState, useEffect } from "react";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Dummy orders data - now includes product images
//   const dummyOrders = [
//     {
//       _id: "order_1",
//       items: [
//         {
//           product: {
//             name: "Paracetamol Tablet",
//             image: [
//               "https://images.unsplash.com/photo-1588776814546-46e5a1c1a3a7?w=400&h=400&fit=crop",
//             ],
//           },
//           quantity: 2,
//         },
//       ],
//       address: {
//         firstName: "Great",
//         lastName: "Stack",
//         street: "Street 123, Main City",
//         city: "New State",
//         state: "123456",
//         zipcode: "IN",
//         country: "India",
//       },
//       amount: 89,
//       paymentType: "Online",
//       orderDate: new Date().toLocaleDateString(),
//       isPaid: true,
//     },
//     {
//       _id: "order_2",
//       items: [
//         {
//           product: {
//             name: "Digital Thermometer",
//             image: [
//               "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=400&fit=crop",
//             ],
//           },
//           quantity: 1,
//         },
//         {
//           product: {
//             name: "Dettol Antiseptic Liquid",
//             image: [
//               "https://images.unsplash.com/photo-1615485737452-4bb02aa6cbb4?w=400&h=400&fit=crop",
//             ],
//           },
//           quantity: 1,
//         },
//       ],
//       address: {
//         firstName: "Great",
//         lastName: "Stack",
//         street: "Street 123, Main City",
//         city: "New State",
//         state: "123456",
//         zipcode: "IN",
//         country: "India",
//       },
//       amount: 325,
//       paymentType: "COD",
//       orderDate: new Date().toLocaleDateString(),
//       isPaid: false,
//     },
//   ];

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       setTimeout(() => {
//         setOrders(dummyOrders);
//         setLoading(false);
//       }, 1000);
//     } catch (err) {
//       setError("Failed to fetch orders");
//       setLoading(false);
//       console.error("Error fetching orders:", err);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   if (loading) {
//     return (
//       <div className="md:p-10 p-4">
//         <h2 className="text-lg font-semibold mb-4">Orders List</h2>
//         <div className="flex justify-center items-center py-10">
//           <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
//           <span className="ml-3 text-gray-600 font-medium">Loading orders...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="md:p-10 p-4">
//         <h2 className="text-lg font-semibold mb-4">Orders List</h2>
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="md:p-10 p-4">
//       <h2 className="text-lg font-semibold mb-6">Orders List</h2>

//       {!orders || orders.length === 0 ? (
//         <div className="text-center py-10 text-gray-500 border rounded-lg">
//           No orders found.
//         </div>
//       ) : (
//         <div className="space-y-5">
//           {orders.map((order, index) => (
//             <div
//               key={order._id || index}
//               className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-6 max-w-4xl rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
//             >
//               {/* Product List */}
//               <div className="flex gap-5">
//                 {order.items?.map((item, itemIndex) => (
//                   <div key={itemIndex} className="flex items-center gap-3">
//                     <img
//                       src={item.product?.image?.[0]}
//                       alt={item.product?.name}
//                       className="w-12 h-12 rounded-md object-cover border"
//                     />
//                     <p className="font-medium text-gray-800">
//                       {item.product?.name || "Unknown Product"}
//                       <span
//                         className={`text-indigo-500 ml-1 ${
//                           item.quantity < 2 && "hidden"
//                         }`}
//                       >
//                         × {item.quantity}
//                       </span>
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Address */}
//               <div className="text-sm text-gray-600">
//                 <p className="font-semibold text-gray-800 mb-1">
//                   {order.address?.firstName || ""} {order.address?.lastName || ""}
//                 </p>
//                 <p>
//                   {order.address?.street}, {order.address?.city}, {order.address?.state}, {order.address?.zipcode}, {order.address?.country}
//                 </p>
//               </div>

//               {/* Amount */}
//               <p className="font-bold text-lg my-auto text-green-600">₹{order.amount || 0}</p>

//               {/* Payment Info */}
//               <div className="flex flex-col text-sm space-y-1">
//                 <p className="text-gray-700">Method: {order.paymentType}</p>
//                 <p className="text-gray-700">Date: {order.orderDate}</p>
//                 <span
//                   className={`px-2 py-1 rounded-full text-xs font-medium w-fit ${
//                     order.isPaid
//                       ? "bg-green-100 text-green-700"
//                       : "bg-yellow-100 text-yellow-700"
//                   }`}
//                 >
//                   {order.isPaid ? "Paid" : "Pending"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;


// import React, { useState, useEffect, useContext } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Loader2, Package, XCircle } from "lucide-react";
// import { AppContext } from "../context/AppContext";

// const Orders = () => {
//   const { products } = useContext(AppContext);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Dummy orders data with matching product IDs from context
//   const dummyOrders = [
//     {
//       _id: "order_1",
//       items: [
//         { productId: 1, quantity: 2 }, // ✅ Paracetamol Tablet
//       ],
//       total: 200,
//       status: "Delivered",
//     },
//     {
//       _id: "order_2",
//       items: [
//         { productId: 2, quantity: 1 }, // ✅ Digital Thermometer
//         { productId: 4, quantity: 1 }, // ✅ Dettol Antiseptic Liquid
//       ],
//       total: 520,
//       status: "Pending",
//     },
//   ];

//   useEffect(() => {
//     // Simulating API call
//     setTimeout(() => {
//       setOrders(dummyOrders);
//       setLoading(false);
//     }, 1000);
//   }, []);

//   const getProductDetails = (id) => {
//     return products.find((p) => String(p.id) === String(id));
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <Loader2 className="animate-spin w-10 h-10 text-blue-600" />
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen text-red-600">
//         <XCircle className="w-8 h-8 mr-2" /> {error}
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       {/* ✅ Banner (no gap with navbar) */}
//       <div className="bg-blue-600 text-white py-6 px-6 shadow-md">
//         <h1 className="text-3xl font-bold">My Orders</h1>
//         <p className="text-sm text-blue-100">Track all your purchases here</p>
//       </div>

//       {/* ✅ Orders list */}
//       <div className="p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {orders.map((order) => (
//           <Card key={order._id} className="rounded-2xl shadow-lg hover:shadow-xl transition">
//             <CardContent className="p-5">
//               <div className="flex items-center gap-2 mb-3">
//                 <Package className="w-5 h-5 text-blue-600" />
//                 <h2 className="text-lg font-semibold">Order ID: {order._id}</h2>
//               </div>
//               <ul className="text-gray-700 mb-3 space-y-2">
//                 {order.items.map((item, idx) => {
//                   const product = getProductDetails(item.productId);
//                   return (
//                     <li key={idx} className="flex items-center gap-3">
//                       {product && (
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="w-12 h-12 rounded-lg object-cover border"
//                         />
//                       )}
//                       <span>
//                         {product ? product.name : "Unknown Product"} × {item.quantity}
//                       </span>
//                     </li>
//                   );
//                 })}
//               </ul>
//               <p className="text-gray-800 font-medium">Total: ₹{order.total}</p>
//               <p
//                 className={`mt-2 text-sm font-semibold ${
//                   order.status === "Delivered" ? "text-green-600" : "text-yellow-600"
//                 }`}
//               >
//                 {order.status}
//               </p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Orders;
// import React, { useState, useEffect, useContext } from "react";
// import { AppContext } from "../context/AppContext"; // ✅ adjust path if needed

// const Orders = () => {
//   const { products } = useContext(AppContext); // ✅ fetch products from context
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Dummy orders (only store productId + qty)
//   const dummyOrders = [
//     {
//       _id: "order_1",
//       items: [{ productId: 1, quantity: 2 }], // ✅ only productId
//       address: {
//         firstName: "Great",
//         lastName: "Stack",
//         street: "Street 123, Main City",
//         city: "New State",
//         state: "123456",
//         zipcode: "IN",
//         country: "India",
//       },
//       amount: 89,
//       paymentType: "Online",
//       orderDate: new Date().toLocaleDateString(),
//       isPaid: true,
//     },
//     {
//       _id: "order_2",
//       items: [
//         { productId: 2, quantity: 1 },
//         { productId: 4, quantity: 1 },
//       ],
//       address: {
//         firstName: "Great",
//         lastName: "Stack",
//         street: "Street 123, Main City",
//         city: "New State",
//         state: "123456",
//         zipcode: "IN",
//         country: "India",
//       },
//       amount: 325,
//       paymentType: "COD",
//       orderDate: new Date().toLocaleDateString(),
//       isPaid: false,
//     },
//   ];

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       setTimeout(() => {
//         setOrders(dummyOrders);
//         setLoading(false);
//       }, 1000);
//     } catch (err) {
//       setError("Failed to fetch orders");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // helper to get product details
//   const getProduct = (id) => products.find((p) => String(p.id) === String(id));

//   if (loading) {
//     return (
//       <div className="md:p-10 p-4">
//         <h2 className="text-lg font-semibold mb-4">Orders List</h2>
//         <div className="flex justify-center items-center py-10">
//           <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
//           <span className="ml-3 text-gray-600 font-medium">Loading orders...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="md:p-10 p-4">
//         <h2 className="text-lg font-semibold mb-4">Orders List</h2>
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="md:p-10 p-4">
//       <h2 className="text-lg font-semibold mb-6">Orders List</h2>

//       {!orders || orders.length === 0 ? (
//         <div className="text-center py-10 text-gray-500 border rounded-lg">
//           No orders found.
//         </div>
//       ) : (
//         <div className="space-y-5">
//           {orders.map((order, index) => (
//             <div
//               key={order._id || index}
//               className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-6 max-w-4xl rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
//             >
//               {/* Product List */}
//               <div className="flex gap-5">
//                 {order.items?.map((item, itemIndex) => {
//                   const product = getProduct(item.productId);
//                   return (
//                     <div key={itemIndex} className="flex items-center gap-3">
//                       {product && (
//                         <img
//                           src={product.image[0]}
//                           alt={product.name}
//                           className="w-12 h-12 rounded-md object-cover border"
//                         />
//                       )}
//                       <p className="font-medium text-gray-800">
//                         {product ? product.name : "Unknown Product"}
//                         <span
//                           className={`text-indigo-500 ml-1 ${
//                             item.quantity < 2 && "hidden"
//                           }`}
//                         >
//                           × {item.quantity}
//                         </span>
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Address */}
//               <div className="text-sm text-gray-600">
//                 <p className="font-semibold text-gray-800 mb-1">
//                   {order.address?.firstName} {order.address?.lastName}
//                 </p>
//                 <p>
//                   {order.address?.street}, {order.address?.city},{" "}
//                   {order.address?.state}, {order.address?.zipcode},{" "}
//                   {order.address?.country}
//                 </p>
//               </div>

//               {/* Amount */}
//               <p className="font-bold text-lg my-auto text-green-600">
//                 ₹{order.amount || 0}
//               </p>

//               {/* Payment Info */}
//               <div className="flex flex-col text-sm space-y-1">
//                 <p className="text-gray-700">Method: {order.paymentType}</p>
//                 <p className="text-gray-700">Date: {order.orderDate}</p>
//                 <span
//                   className={`px-2 py-1 rounded-full text-xs font-medium w-fit ${
//                     order.isPaid
//                       ? "bg-green-100 text-green-700"
//                       : "bg-yellow-100 text-yellow-700"
//                   }`}
//                 >
//                   {order.isPaid ? "Paid" : "Pending"}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Orders;
// import React, { useState, useEffect, useContext } from "react";
// import { AppContext } from "../context/AppContext";

// const Orders = () => {
//   const { products } = useContext(AppContext);
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Dummy orders
//   const dummyOrders = [
//     {
//       _id: "order_1",
//       items: [{ productId: 1, quantity: 2 }],
//       address: {
//         firstName: "Great",
//         lastName: "Stack",
//         street: "Street 123, Main City",
//         city: "New State",
//         state: "123456",
//         zipcode: "IN",
//         country: "India",
//       },
//       amount: 89,
//       paymentType: "Online",
//       orderDate: new Date().toISOString(),
//       isPaid: true,
//     },
//     {
//       _id: "order_2",
//       items: [
//         { productId: 2, quantity: 1 },
//         { productId: 4, quantity: 1 },
//       ],
//       address: {
//         firstName: "Great",
//         lastName: "Stack",
//         street: "Street 123, Main City",
//         city: "New State",
//         state: "123456",
//         zipcode: "IN",
//         country: "India",
//       },
//       amount: 325,
//       paymentType: "COD",
//       orderDate: new Date().toISOString(),
//       isPaid: false,
//     },
//   ];

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError(null);

//       setTimeout(() => {
//         setOrders(dummyOrders);
//         setLoading(false);
//       }, 1000);
//     } catch (err) {
//       setError("Failed to fetch orders");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const getProduct = (id) => products.find((p) => String(p.id) === String(id));

//   const formatDate = (dateString) => {
//     const options = { day: "2-digit", month: "short", year: "numeric" };
//     return new Date(dateString).toLocaleDateString("en-GB", options);
//   };

//   if (loading) {
//     return (
//       <div className="md:p-10 p-4">
//         <h2 className="text-lg font-semibold mb-4">Orders List</h2>
//         <div className="flex justify-center items-center py-10">
//           <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
//           <span className="ml-3 text-gray-600 font-medium">
//             Loading orders...
//           </span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="md:p-10 p-4">
//         <h2 className="text-lg font-semibold mb-4">Orders List</h2>
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* 🔹 Banner Section (same style as Medicines & More) */}
//       <div className="relative w-full bg-[#f3f4ff] text-center py-16 rounded-b-3xl shadow-md">
//         <div className="container mx-auto px-6">
//           <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
//             <span className="text-[#4f46e5]">My </span>
//             <span className="text-black">Orders</span>
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Track your purchases, check payment status, and view order details
//             all in one place.
//           </p>
//         </div>
//       </div>

//       {/* Orders List */}
//       <div className="md:p-10 p-4">
//         {!orders || orders.length === 0 ? (
//           <div className="text-center py-16 text-gray-500 border rounded-lg shadow-sm bg-white">
//             No orders found.
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {orders.map((order, index) => (
//               <div
//                 key={order._id || index}
//                 className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-6 max-w-5xl rounded-2xl border border-gray-200 shadow hover:shadow-md transition bg-white"
//               >
//                 {/* Products */}
//                 <div className="flex flex-wrap gap-4">
//                   {order.items?.map((item, itemIndex) => {
//                     const product = getProduct(item.productId);
//                     return (
//                       <div
//                         key={itemIndex}
//                         className="flex items-center gap-3 border rounded-lg px-3 py-2"
//                       >
//                         {product && (
//                           <img
//                             src={product.image[0]}
//                             alt={product.name}
//                             className="w-12 h-12 rounded-md object-cover border"
//                           />
//                         )}
//                         <p className="font-medium text-gray-800">
//                           {product ? product.name : "Unknown Product"}
//                           {item.quantity > 1 && (
//                             <span className="text-indigo-500 ml-1">
//                               × {item.quantity}
//                             </span>
//                           )}
//                         </p>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 {/* Address */}
//                 <div className="text-sm text-gray-600">
//                   <p className="font-semibold text-gray-800 mb-1">
//                     {order.address?.firstName} {order.address?.lastName}
//                   </p>
//                   <p className="leading-snug">
//                     {order.address?.street}, {order.address?.city},{" "}
//                     {order.address?.state}, {order.address?.zipcode},{" "}
//                     {order.address?.country}
//                   </p>
//                 </div>

//                 {/* Amount */}
//                 <p className="font-bold text-xl text-green-600 my-auto">
//                   ₹{order.amount || 0}
//                 </p>

//                 {/* Payment Info */}
//                 <div className="flex flex-col text-sm space-y-1">
//                   <p className="text-gray-700">Method: {order.paymentType}</p>
//                   <p className="text-gray-700">
//                     Date: {formatDate(order.orderDate)}
//                   </p>
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${
//                       order.isPaid
//                         ? "bg-green-100 text-green-700"
//                         : "bg-yellow-100 text-yellow-700"
//                     }`}
//                   >
//                     {order.isPaid ? "Paid" : "Pending"}
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Orders;


// import React, { useEffect, useState, useContext } from "react";
// import { AppContext } from "../context/AppContext"; // ✅ fixed import path

// const MyOrders = () => {
//   const { products } = useContext(AppContext);
//   const [myOrders, setMyOrders] = useState([]);

//   // Dummy orders using actual products from AppContext
//   const dummyOrders = [
//     {
//       _id: "67e258f98f87e63366786400",
//       amount: 30,
//       paymentType: "Online",
//       createdAt: new Date("2025-03-25T12:17:44"),
//       status: "Delivered",
//       items: [
//         {
//           product: {
//             id: 1,
//             image: products.find((p) => p.id === 1)?.image || [],
//             name: "Paracetamol Tablet",
//             category: "Medicines",
//             price: 30,
//           },
//           quantity: 2,
//           status: "Delivered",
//         },
//       ],
//     },
//     {
//       _id: "67e258f98f87e63366786312",
//       amount: 325,
//       paymentType: "COD",
//       createdAt: new Date("2025-03-25T12:17:13"),
//       status: "Processing",
//       items: [
//         {
//           product: {
//             id: 8,
//             image: products.find((p) => p.id === 8)?.image || [],
//             name: "Zen Sara Aromatherapy Oil",
//             category: "Wellness",
//             price: 350,
//           },
//           quantity: 1,
//           status: "Processing",
//         },
//       ],
//     },
//     {
//       _id: "67e258f98f87e63366786313",
//       amount: 440,
//       paymentType: "Online",
//       createdAt: new Date("2025-03-25T12:17:13"),
//       status: "Delivered",
//       items: [
//         {
//           product: {
//             id: 16,
//             image: products.find((p) => p.id === 16)?.image || [],
//             name: "Mamaearth Ubtan Face Wash",
//             category: "Personal Care",
//             price: 220,
//           },
//           quantity: 2,
//           status: "Delivered",
//         },
//       ],
//     },
//   ];

//   const fetchOrders = async () => {
//     setMyOrders(dummyOrders);
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const formatDate = (dateString) => {
//     const options = {
//       day: "2-digit",
//       month: "2-digit",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     };
//     return new Date(dateString)
//       .toLocaleDateString("en-GB", options)
//       .replace(",", ",");
//   };

//   return (
//     <div className="mt-12 pb-16">
//       <h2 className="text-2xl font-medium md:text-3xl mb-8">My Orders</h2>

//       {myOrders.length === 0 ? (
//         <p className="text-gray-500 mt-6">No orders found.</p>
//       ) : (
//         <div className="space-y-4">
//           {myOrders.map((order, index) => (
//             <div
//               key={order._id || index}
//               className="bg-white rounded-lg border border-gray-200 p-6"
//             >
//               {/* Order Header */}
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 pb-3 border-b border-gray-100">
//                 <div className="flex items-center gap-4 mb-2 md:mb-0">
//                   <span className="text-sm text-gray-600">
//                     Order ID: {order._id}
//                   </span>
//                   <span
//                     className={`px-3 py-1 rounded-full text-xs font-medium ${
//                       order.paymentType === "Online"
//                         ? "bg-blue-100 text-blue-700"
//                         : "bg-gray-100 text-gray-700"
//                     }`}
//                   >
//                     Payment: {order.paymentType}
//                   </span>
//                 </div>
//                 <div className="text-lg font-semibold text-gray-900">
//                   Total Amount: ₹{order.amount}
//                 </div>
//               </div>

//               {/* Order Items */}
//               {order.items &&
//                 order.items.map((item, itemIndex) => (
//                   <div
//                     key={itemIndex}
//                     className="flex items-center gap-6 py-4"
//                   >
//                     {/* Product Image */}
//                     <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
//                       <img
//                         src={item.product.image && item.product.image[0]}
//                         alt={item.product.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>

//                     {/* Product Info */}
//                     <div className="flex-1">
//                       <h3 className="font-medium text-gray-900 text-lg mb-1">
//                         {item.product.name}
//                       </h3>
//                       <p className="text-sm text-gray-500 mb-1">
//                         {item.product.category}
//                       </p>
//                     </div>

//                     {/* Order Details */}
//                     <div className="text-right text-sm text-gray-600 min-w-[150px]">
//                       <p className="mb-1">
//                         <span className="font-medium">Quantity:</span>{" "}
//                         {item.quantity}
//                       </p>
//                       <p className="mb-1">
//                         <span className="font-medium">Status:</span>{" "}
//                         {item.status}
//                       </p>
//                       <p className="mb-1">
//                         <span className="font-medium">Date:</span>{" "}
//                         {formatDate(order.createdAt)}
//                       </p>
//                     </div>

//                     {/* Amount */}
//                     <div className="text-right min-w-[100px]">
//                       <p className="text-lg font-medium text-gray-900">
//                         Amount: ₹{item.product.price * item.quantity}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyOrders;


import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext"; // ✅ fixed import path

const MyOrders = () => {
  const { products } = useContext(AppContext);
  const [myOrders, setMyOrders] = useState([]);

  // Dummy orders
  const dummyOrders = [
    {
      _id: "67e258f98f87e63366786400",
      amount: 30,
      paymentType: "Online",
      createdAt: new Date("2025-03-25T12:17:44"),
      status: "Delivered",
      items: [
        {
          product: {
            id: 1,
            image: products.find((p) => p.id === 1)?.image || [],
            name: "Paracetamol Tablet",
            category: "Medicines",
            price: 30,
          },
          quantity: 2,
          status: "Delivered",
        },
      ],
    },
    {
      _id: "67e258f98f87e63366786312",
      amount: 325,
      paymentType: "COD",
      createdAt: new Date("2025-03-25T12:17:13"),
      status: "Processing",
      items: [
        {
          product: {
            id: 8,
            image: products.find((p) => p.id === 8)?.image || [],
            name: "Zen Sara Aromatherapy Oil",
            category: "Wellness",
            price: 350,
          },
          quantity: 1,
          status: "Processing",
        },
      ],
    },
    {
      _id: "67e258f98f87e63366786313",
      amount: 440,
      paymentType: "Online",
      createdAt: new Date("2025-03-25T12:17:13"),
      status: "Delivered",
      items: [
        {
          product: {
            id: 16,
            image: products.find((p) => p.id === 16)?.image || [],
            name: "Mamaearth Ubtan Face Wash",
            category: "Personal Care",
            price: 220,
          },
          quantity: 2,
          status: "Delivered",
        },
      ],
    },
  ];

  const fetchOrders = async () => {
    setMyOrders(dummyOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Processing":
        return "bg-yellow-100 text-yellow-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="mt-12 pb-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
        My Orders
      </h2>

      {myOrders.length === 0 ? (
        <p className="text-gray-500 mt-6">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {myOrders.map((order, index) => (
            <div
              key={order._id || index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition p-6"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 pb-4 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-3 mb-2 md:mb-0">
                  <span className="text-sm text-gray-600 font-medium">
                    Order ID: {order._id}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.paymentType === "Online"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.paymentType}
                  </span>
                </div>
                <div className="text-lg font-bold text-green-600">
                  ₹{order.amount}
                </div>
              </div>

              {/* Order Items */}
              <div className="divide-y divide-gray-100">
                {order.items &&
                  order.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center gap-6 py-4"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
                        <img
                          src={item.product.image && item.product.image[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 text-base">
                          {item.product.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {item.product.category}
                        </p>
                      </div>

                      {/* Order Details */}
                      <div className="text-right text-sm text-gray-600 min-w-[150px]">
                        <p>
                          <span className="font-medium">Qty:</span>{" "}
                          {item.quantity}
                        </p>
                        <p>
                          <span className="font-medium">Date:</span>{" "}
                          {formatDate(order.createdAt)}
                        </p>
                      </div>

                      {/* Amount */}
                      <div className="text-right min-w-[120px]">
                        <p className="text-base font-semibold text-gray-900">
                          ₹{item.product.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;


// import React, { useEffect, useState, useContext } from "react";
// import { AppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const MyOrders = () => {
//   const { axios, user, navigate } = useContext(AppContext);
//   const [myOrders, setMyOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchOrders = async () => {
//     try {
//       const { data } = await axios.get("/api/order/user", { withCredentials: true });
//       if (data.success) {
//         setMyOrders(data.orders);
//       } else {
//         toast.error(data.message || "Failed to fetch orders");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       fetchOrders();
//     } else {
//       setLoading(false);
//     }
//   }, [user]);

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleString("en-GB", {
//       day: "2-digit",
//       month: "short",
//       year: "numeric",
//       hour: "2-digit",
//       minute: "2-digit",
//     });
//   };

//   const getStatusClasses = (status) => {
//     switch (status) {
//       case "Delivered":
//         return "bg-green-100 text-green-700";
//       case "Processing":
//         return "bg-yellow-100 text-yellow-700";
//       case "Cancelled":
//         return "bg-red-100 text-red-700";
//       default:
//         return "bg-gray-100 text-gray-700";
//     }
//   };

//   if (loading) {
//     return <div className="text-center py-16 text-gray-500">Loading orders...</div>;
//   }

//   if (!user) {
//     return (
//       <div className="text-center py-16">
//         <p className="text-gray-600">Please log in to view your orders.</p>
//         <button
//           onClick={() => navigate("/login")}
//           className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg"
//         >
//           Go to Login
//         </button>
//       </div>
//     );
//   }

//   if (myOrders.length === 0) {
//     return (
//       <div className="text-center py-16">
//         <p className="text-gray-600">No orders found.</p>
//         <button
//           onClick={() => navigate("/")}
//           className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg"
//         >
//           Shop Now
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="mt-12 pb-16 px-4 md:px-8">
//       <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-900">
//         My Orders
//       </h2>

//       <div className="space-y-6">
//         {myOrders.map((order) => (
//           <div
//             key={order._id}
//             className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition p-6"
//           >
//             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 pb-4 border-b border-gray-100">
//               <div className="flex flex-wrap items-center gap-3 mb-2 md:mb-0">
//                 <span className="text-sm text-gray-600 font-medium">
//                   Order ID: {order._id}
//                 </span>
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClasses(
//                     order.status
//                   )}`}
//                 >
//                   {order.status}
//                 </span>
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs font-medium ${
//                     order.paymentType === "Online"
//                       ? "bg-blue-100 text-blue-700"
//                       : "bg-gray-100 text-gray-700"
//                   }`}
//                 >
//                   {order.paymentType}
//                 </span>
//               </div>
//               <div className="text-lg font-bold text-green-600">
//                 ₹{order.amount}
//               </div>
//             </div>

//             <div className="divide-y divide-gray-100">
//               {order.items.map((item, index) => (
//                 <div key={index} className="flex items-center gap-6 py-4">
//                   <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200">
//                     <img
//                       src={
//                         item.product.image?.length > 0
//                           ? `http://localhost:5000/images/${item.product.image[0]}`
//                           : "/placeholder.png"
//                       }
//                       alt={item.product.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   <div className="flex-1">
//                     <h3 className="font-medium text-gray-900 text-base">
//                       {item.product.name}
//                     </h3>
//                     <p className="text-sm text-gray-500">
//                       {item.product.category}
//                     </p>
//                   </div>

//                   <div className="text-right text-sm text-gray-600 min-w-[150px]">
//                     <p>
//                       <span className="font-medium">Qty:</span> {item.quantity}
//                     </p>
//                     <p>
//                       <span className="font-medium">Date:</span>{" "}
//                       {formatDate(order.createdAt)}
//                     </p>
//                   </div>

//                   <div className="text-right min-w-[120px]">
//                     <p className="text-base font-semibold text-gray-900">
//                       ₹{item.product.price * item.quantity}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MyOrders;

