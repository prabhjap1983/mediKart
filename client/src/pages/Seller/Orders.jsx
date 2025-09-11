// import React, { useState } from 'react'

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
   
//   const fetchOrders = async() => {
//     setOrders(dummyOrders)
//   };

//   useEffect(() =>{
//     fetchOrders();
//   }, []);
//     return (
//         <div className="md:p-10 p-4 space-y-4">
//             <h2 className="text-lg font-medium">Orders List</h2>
//             {orders.map((order, index) => (
//                 <div key={index} className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800">
//                     <div className="flex gap-5">
//                         <img className="w-12 h-12 object-cover opacity-60" src={boxIcon} alt="boxIcon" />
//                         <>
//                             {order.items.map((item, index) => (
//                                 <div key={index} className="flex flex-col justify-center">
//                                     <p className="font-medium">
//                                         {item.product.name} <span className={`text-indigo-500 ${item.quantity < 2 && "hidden"}`}>x {item.quantity}</span>
//                                     </p>
//                                 </div>
//                             ))}
//                         </>
//                     </div>

//                     <div className="text-sm">
//                         <p className='font-medium mb-1'>{order.address.firstName} {order.address.lastName}</p>
//                         <p>{order.address.street}, {order.address.city}, {order.address.state},{order.address.zipcode}, {order.address.country}</p>
//                     </div>

//                     <p className="font-medium text-base my-auto text-black/70">${order.amount}</p>

//                     <div className="flex flex-col text-sm">
//                         <p>Method: {order.paymentType}</p>
//                         <p>Date: {order.orderDate}</p>
//                         <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Orders

// import React, { useState, useEffect } from 'react';

// const Orders = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Dummy orders data - replace this with your actual context data
//   const dummyOrders = [
//     {
//       _id: "order_1",
//       items: [
//         {
//           product: { name: 'Paracetamol Tablet' },
//           quantity: 2
//         }
//       ],
//       address: {
//         firstName: 'Great',
//         lastName: 'Stack',
//         street: 'Street 123, Main City',
//         city: 'New State',
//         state: '123456',
//         zipcode: 'IN',
//         country: 'India'
//       },
//       amount: 89,
//       paymentType: 'Online',
//       orderDate: new Date().toLocaleDateString(),
//       isPaid: true
//     },
//     {
//       _id: "order_2",
//       items: [
//         {
//           product: { name: 'Digital Thermometer' },
//           quantity: 1
//         },
//         {
//           product: { name: 'Dettol Antiseptic Liquid' },
//           quantity: 1
//         }
//       ],
//       address: {
//         firstName: 'Great',
//         lastName: 'Stack',
//         street: 'Street 123, Main City',
//         city: 'New State',
//         state: '123456',
//         zipcode: 'IN',
//         country: 'India'
//       },
//       amount: 325,
//       paymentType: 'COD',
//       orderDate: new Date().toLocaleDateString(),
//       isPaid: false
//     }
//   ];

//   const fetchOrders = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       // Simulate API call delay
//       setTimeout(() => {
//         setOrders(dummyOrders);
//         setLoading(false);
//       }, 1000);
      
//     } catch (err) {
//       setError('Failed to fetch orders');
//       setLoading(false);
//       console.error('Error fetching orders:', err);
//     }
//   };

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   if (loading) {
//     return (
//       <div className="md:p-10 p-4 space-y-4">
//         <h2 className="text-lg font-medium">Orders List</h2>
//         <div className="flex justify-center items-center p-8">
//           <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
//           <span className="ml-2">Loading orders...</span>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="md:p-10 p-4 space-y-4">
//         <h2 className="text-lg font-medium">Orders List</h2>
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           <p>Error: {error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="md:p-10 p-4 space-y-4">
//       <h2 className="text-lg font-medium">Orders List</h2>
      
//       {!orders || orders.length === 0 ? (
//         <div className="text-center p-8 text-gray-500">
//           No orders found.
//         </div>
//       ) : (
//         orders.map((order, index) => (
//           <div key={order._id || index} className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-5 max-w-4xl rounded-md border border-gray-300 text-gray-800">
//             <div className="flex gap-5">
//               {/* Box icon */}
//               <div className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center opacity-60">
//                 <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
//                 </svg>
//               </div>
//               <div>
//                 {order.items?.map((item, itemIndex) => (
//                   <div key={itemIndex} className="flex flex-col justify-center">
//                     <p className="font-medium">
//                       {item.product?.name || 'Unknown Product'} 
//                       <span className={`text-indigo-500 ml-1 ${item.quantity < 2 && "hidden"}`}>
//                         x {item.quantity}
//                       </span>
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="text-sm">
//               <p className='font-medium mb-1'>
//                 {order.address?.firstName || ''} {order.address?.lastName || ''}
//               </p>
//               <p>
//                 {order.address?.street || ''}, {order.address?.city || ''}, {order.address?.state || ''}, {order.address?.zipcode || ''}, {order.address?.country || ''}
//               </p>
//             </div>

//             <p className="font-medium text-base my-auto text-black/70">₹{order.amount || 0}</p>

//             <div className="flex flex-col text-sm">
//               <p>Method: {order.paymentType || 'N/A'}</p>
//               <p>Date: {order.orderDate || 'N/A'}</p>
//               <p>Payment: {order.isPaid ? "Paid" : "Pending"}</p>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Orders;

import React, { useState, useEffect } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy orders data - replace this with your actual context data
  const dummyOrders = [
    {
      _id: "order_1",
      items: [{ product: { name: "Paracetamol Tablet" }, quantity: 2 }],
      address: {
        firstName: "Great",
        lastName: "Stack",
        street: "Street 123, Main City",
        city: "New State",
        state: "123456",
        zipcode: "IN",
        country: "India",
      },
      amount: 89,
      paymentType: "Online",
      orderDate: new Date().toLocaleDateString(),
      isPaid: true,
    },
    {
      _id: "order_2",
      items: [
        { product: { name: "Digital Thermometer" }, quantity: 1 },
        { product: { name: "Dettol Antiseptic Liquid" }, quantity: 1 },
      ],
      address: {
        firstName: "Great",
        lastName: "Stack",
        street: "Street 123, Main City",
        city: "New State",
        state: "123456",
        zipcode: "IN",
        country: "India",
      },
      amount: 325,
      paymentType: "COD",
      orderDate: new Date().toLocaleDateString(),
      isPaid: false,
    },
  ];

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError(null);

      setTimeout(() => {
        setOrders(dummyOrders);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError("Failed to fetch orders");
      setLoading(false);
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="md:p-10 p-4">
        <h2 className="text-lg font-semibold mb-4">Orders List</h2>
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
          <span className="ml-3 text-gray-600 font-medium">
            Loading orders...
          </span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="md:p-10 p-4">
        <h2 className="text-lg font-semibold mb-4">Orders List</h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:p-10 p-4">
      <h2 className="text-lg font-semibold mb-6">Orders List</h2>

      {!orders || orders.length === 0 ? (
        <div className="text-center py-10 text-gray-500 border rounded-lg">
          No orders found.
        </div>
      ) : (
        <div className="space-y-5">
          {orders.map((order, index) => (
            <div
              key={order._id || index}
              className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr_1fr] md:items-center gap-5 p-6 max-w-4xl rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition bg-white"
            >
              {/* Product List */}
              <div className="flex gap-5">
                <div className="w-12 h-12 bg-green-100 rounded-md flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
                <div>
                  {order.items?.map((item, itemIndex) => (
                    <p key={itemIndex} className="font-medium text-gray-800">
                      {item.product?.name || "Unknown Product"}{" "}
                      <span
                        className={`text-indigo-500 ml-1 ${
                          item.quantity < 2 && "hidden"
                        }`}
                      >
                        x {item.quantity}
                      </span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="text-sm text-gray-600">
                <p className="font-semibold text-gray-800 mb-1">
                  {order.address?.firstName || ""}{" "}
                  {order.address?.lastName || ""}
                </p>
                <p>
                  {order.address?.street}, {order.address?.city},{" "}
                  {order.address?.state}, {order.address?.zipcode},{" "}
                  {order.address?.country}
                </p>
              </div>

              {/* Amount */}
              <p className="font-bold text-lg my-auto text-green-600">
                ₹{order.amount || 0}
              </p>

              {/* Payment Info */}
              <div className="flex flex-col text-sm space-y-1">
                <p className="text-gray-700">Method: {order.paymentType}</p>
                <p className="text-gray-700">Date: {order.orderDate}</p>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium w-fit ${
                    order.isPaid
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.isPaid ? "Paid" : "Pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
