// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

// const dummyAddress = [
//   "123 Main Street, New York, USA",
//   "456 Park Avenue, Los Angeles, USA",
// ];

// const Cart = () => {
//   const {
//     products,
//     navigate,
//     cartItems,
//     removeFromCart,
//     updateCartItem,
//     setCartItems,
//     totalCartAmount,
//     getCartCount,
//   } = useContext(AppContext);

//   const [cartArray, setCartArray] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
//   const [paymentOption, setPaymentOption] = useState("COD");
//   const [showAddressOptions, setShowAddressOptions] = useState(false);

//   // Build cart array
//   useEffect(() => {
//     if (!products || !cartItems) return;
//     const temp = [];
//     for (const id in cartItems) {
//       const product = products.find((p) => String(p._id) === String(id));
//       if (product) temp.push({ ...product, quantity: cartItems[id] });
//     }
//     setCartArray(temp);
//   }, [products, cartItems]);

//   const placeOrder = () => {
//     alert(
//       `🎉 Order placed!\nDelivering to: ${selectedAddress}\nPayment: ${paymentOption}`
//     );
//     setCartItems({});
//     navigate("/medicines-and-more");
//   };

//   if (!cartArray.length)
//     return (
//       <div className="py-20 text-center">
//         <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
//         <button
//           onClick={() => navigate("/medicines-and-more")}
//           className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg"
//         >
//           Browse Products
//         </button>
//       </div>
//     );

//   return (
//     <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-16 px-6">
//       {/* Cart Items */}
//       <div className="flex-1">
//         {cartArray.map((product) => (
//           <div
//             key={product._id}
//             className="flex items-center justify-between border rounded-lg p-4 mb-4"
//           >
//             <div
//               className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:ring-2 hover:ring-indigo-500 transition-all duration-300 cursor-pointer"
//               onClick={() =>
//                 navigate(
//                   `/products/${product.category.toLowerCase()}/${product._id}`
//                 )
//               }
//             >
//               <img
//                 src={
//                   product.image?.length > 0
//                     ? `http://localhost:5000/images/${product.image[0]}`
//                     : "/placeholder.png"
//                 }
//                 alt={product.name}
//                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             <div className="flex-1 ml-4">
//               <p>{product.name}</p>
//               <p>₹{product.price}</p>
//               <select
//                 value={product.quantity}
//                 onChange={(e) =>
//                   updateCartItem(product._id, Number(e.target.value))
//                 }
//               >
//                 {Array.from(
//                   { length: Math.max(9, product.quantity) },
//                   (_, i) => i + 1
//                 ).map((num) => (
//                   <option key={num} value={num}>
//                     {num}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <p>₹{product.price * product.quantity}</p>
//               <button
//                 className="text-red-500"
//                 onClick={() => removeFromCart(product._id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Summary */}
//       <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border">
//         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

//         {/* Delivery Address */}
//         <div className="mb-4">
//           <p className="text-sm font-medium text-gray-600">DELIVERY ADDRESS</p>
//           <p className="text-gray-800">{selectedAddress}</p>
//           <button
//             onClick={() => setShowAddressOptions(!showAddressOptions)}
//             className="text-indigo-600 text-sm font-semibold mt-1"
//           >
//             Change
//           </button>

//           {showAddressOptions && (
//             <div className="mt-2 space-y-2">
//               {dummyAddress.map((addr, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => {
//                     setSelectedAddress(addr);
//                     setShowAddressOptions(false);
//                   }}
//                   className={`cursor-pointer px-2 py-1 rounded ${
//                     selectedAddress === addr
//                       ? "bg-indigo-100 text-indigo-700"
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   {addr}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Payment Method */}
//         <div className="mb-4">
//           <p className="text-sm font-medium text-gray-600">PAYMENT METHOD</p>
//           <select
//             value={paymentOption}
//             onChange={(e) => setPaymentOption(e.target.value)}
//             className="w-full border rounded-lg p-2 mt-1"
//           >
//             <option value="COD">Cash On Delivery</option>
//             <option value="CARD">Credit/Debit Card</option>
//             <option value="UPI">UPI</option>
//           </select>
//         </div>

//         {/* Price Details */}
//         <div className="space-y-2">
//           <p className="flex justify-between">
//             <span>Price</span> <span>₹{totalCartAmount()}</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Shipping Fee</span>{" "}
//             <span className="text-green-600">Free</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Tax (2%)</span>{" "}
//             <span>₹{(totalCartAmount() * 0.02).toFixed(2)}</span>
//           </p>
//           <p className="flex justify-between text-lg font-semibold border-t pt-3">
//             <span>Total Amount:</span>{" "}
//             <span>₹{(totalCartAmount() * 1.02).toFixed(2)}</span>
//           </p>
//         </div>

//         {/* Place Order Button */}
//         <button
//           onClick={placeOrder}
//           className="bg-indigo-600 text-white w-full py-3 mt-6 rounded-lg"
//         >
//           {paymentOption === "COD" ? "Place Order" : "Pay Now"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

// const dummyAddress = [
//   "123 Main Street, New York, USA",
//   "456 Park Avenue, Los Angeles, USA",
// ];

// const Cart = () => {
//   const {
//     products,
//     navigate,
//     cartItems,
//     removeFromCart,
//     updateCartItem,
//     setCartItems,
//     totalCartAmount,
//   } = useContext(AppContext);

//   const [cartArray, setCartArray] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
//   const [paymentOption, setPaymentOption] = useState("COD");
//   const [showAddressOptions, setShowAddressOptions] = useState(false);

//   // Build cart array
//   useEffect(() => {
//     if (!products || !cartItems) return;
//     const temp = [];
//     for (const id in cartItems) {
//       const product = products.find((p) => String(p._id) === String(id));
//       if (product) temp.push({ ...product, quantity: cartItems[id] });
//     }
//     setCartArray(temp);
//   }, [products, cartItems]);

//   const placeOrder = () => {
//     alert(
//       `🎉 Order placed!\nDelivering to: ${selectedAddress}\nPayment: ${paymentOption}`
//     );
//     setCartItems({});
//     navigate("/medicines-and-more");
//   };

//   if (!cartArray.length)
//     return (
//       <div className="py-20 text-center">
//         <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
//         <button
//           onClick={() => navigate("/medicines-and-more")}
//           className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg"
//         >
//           Browse Products
//         </button>
//       </div>
//     );

//   return (
//     <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-16 px-6">
//       {/* Cart Items */}
//       <div className="flex-1">
//         {cartArray.map((product) => (
//           <div
//             key={product._id}
//             className="flex items-center justify-between border rounded-lg p-4 mb-4"
//           >
//             <div
//               className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:ring-2 hover:ring-indigo-500 transition-all duration-300 cursor-pointer"
//               onClick={() =>
//                 navigate(
//                   `/products/${product.category.toLowerCase()}/${product._id}`
//                 )
//               }
//             >
//               <img
//                 src={
//                   product.image?.length > 0
//                     ? `http://localhost:5000/images/${product.image[0]}`
//                     : "/placeholder.png"
//                 }
//                 alt={product.name}
//                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             <div className="flex-1 ml-4">
//               <p>{product.name}</p>
//               <p>₹{product.price}</p>
//               <select
//                 value={product.quantity}
//                 onChange={(e) =>
//                   updateCartItem(product._id, Number(e.target.value))
//                 }
//               >
//                 {Array.from(
//                   { length: Math.max(9, product.quantity) },
//                   (_, i) => i + 1
//                 ).map((num) => (
//                   <option key={num} value={num}>
//                     {num}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <p>₹{product.price * product.quantity}</p>
//               <button
//                 className="text-red-500"
//                 onClick={() => removeFromCart(product._id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Summary */}
//       <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border">
//         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

//         {/* Delivery Address */}
//         <div className="mb-4">
//           <p className="text-sm font-medium text-gray-600">DELIVERY ADDRESS</p>
//           <p className="text-gray-800">{selectedAddress}</p>
//           <button
//             onClick={() => setShowAddressOptions(!showAddressOptions)}
//             className="text-indigo-600 text-sm font-semibold mt-1"
//           >
//             Change
//           </button>

//           {showAddressOptions && (
//             <div className="mt-2 space-y-2 border rounded-lg p-2 bg-gray-50 shadow-sm">
//               {dummyAddress.map((addr, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => {
//                     setSelectedAddress(addr);
//                     setShowAddressOptions(false);
//                   }}
//                   className={`cursor-pointer px-2 py-1 rounded ${
//                     selectedAddress === addr
//                       ? "bg-indigo-100 text-indigo-700"
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   {addr}
//                 </div>
//               ))}

//               {/* ➕ Add Address option */}
//               <div
//                 onClick={() => navigate("/add-address")}
//                 className="cursor-pointer px-2 py-1 rounded text-indigo-600 font-medium hover:bg-gray-100"
//               >
//                 ➕ Add address
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Payment Method */}
//         <div className="mb-4">
//           <p className="text-sm font-medium text-gray-600">PAYMENT METHOD</p>
//           <select
//             value={paymentOption}
//             onChange={(e) => setPaymentOption(e.target.value)}
//             className="w-full border rounded-lg p-2 mt-1"
//           >
//             <option value="COD">Cash On Delivery</option>
//             <option value="CARD">Credit/Debit Card</option>
//             <option value="UPI">UPI</option>
//           </select>
//         </div>

//         {/* Price Details */}
//         <div className="space-y-2">
//           <p className="flex justify-between">
//             <span>Price</span> <span>₹{totalCartAmount()}</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Shipping Fee</span>{" "}
//             <span className="text-green-600">Free</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Tax (2%)</span>{" "}
//             <span>₹{(totalCartAmount() * 0.02).toFixed(2)}</span>
//           </p>
//           <p className="flex justify-between text-lg font-semibold border-t pt-3">
//             <span>Total Amount:</span>{" "}
//             <span>₹{(totalCartAmount() * 1.02).toFixed(2)}</span>
//           </p>
//         </div>

//         {/* Place Order Button */}
//         <button
//           onClick={placeOrder}
//           className="bg-indigo-600 text-white w-full py-3 mt-6 rounded-lg"
//         >
//           {paymentOption === "COD" ? "Place Order" : "Pay Now"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Cart = () => {
  const {
    products,
    navigate,
    cartItems,
    removeFromCart,
    updateCartItem,
    setCartItems,
    totalCartAmount,
    axios,
    user,
  } = useContext(AppContext);

  const [cartArray, setCartArray] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentOption, setPaymentOption] = useState("COD");
  const [showAddressOptions, setShowAddressOptions] = useState(false);

  // Helper: get effective price (offerPrice if lower than price)
  const getPrice = (product) =>
    product.offerPrice && product.offerPrice < product.price
      ? product.offerPrice
      : product.price;

  // Build cart array from cartItems
  useEffect(() => {
    if (!products || !cartItems) return;
    const temp = [];
    for (const id in cartItems) {
      const product = products.find((p) => String(p._id) === String(id));
      if (product) temp.push({ ...product, quantity: cartItems[id] });
    }
    setCartArray(temp);
  }, [products, cartItems]);

  // Fetch addresses from backend
  const getAddress = async () => {
    try {
      const { data } = await axios.get("/api/address/get");
      if (data.success) {
        setAddresses(data.addresses);
        if (data.addresses.length > 0) {
          setSelectedAddress(data.addresses[0]);
        }
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const placeOrder = async () => {
    try {
      if (!selectedAddress) {
        return toast.error("Please select an address");
      }
      if (paymentOption === "COD") {
        const { data } = await axios.post("/api/order/cod", {
          items: cartArray.map((item) => ({
            product: item._id,
            quantity: item.quantity,
          })),
          address: selectedAddress._id,
        });
        if (data.success) {
          toast.success(data.message);
          setCartItems([]);
          navigate("/my-orders");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      getAddress();
    }
  }, [user]);

  if (!cartArray.length)
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
        <button
          onClick={() => navigate("/medicines-and-more")}
          className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg"
        >
          Browse Products
        </button>
      </div>
    );

  // ✅ Updated totalCartAmount to consider offerPrice
  const cartTotal = cartArray.reduce(
    (sum, item) => sum + getPrice(item) * item.quantity,
    0
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-16 px-6">
      {/* Cart Items */}
      <div className="flex-1">
        {cartArray.map((product) => (
          <div
            key={product._id}
            className="flex items-center justify-between border rounded-lg p-4 mb-4"
          >
            <div
              className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:ring-2 hover:ring-indigo-500 transition-all duration-300 cursor-pointer"
              onClick={() =>
                navigate(
                  `/products/${product.category.toLowerCase()}/${product._id}`
                )
              }
            >
              <img
                src={
                  product.image?.length > 0
                    ? `http://localhost:5000/images/${product.image[0]}`
                    : "/placeholder.png"
                }
                alt={product.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 ml-4">
              <p>{product.name}</p>

              {/* Show both price and offerPrice */}
              {product.offerPrice && product.offerPrice < product.price ? (
                <p>
                  <span className="line-through text-gray-400 mr-2">
                    ₹{product.price}
                  </span>
                  <span className="text-green-600 font-semibold">
                    ₹{product.offerPrice}
                  </span>
                </p>
              ) : (
                <p>₹{product.price}</p>
              )}

              <select
                value={product.quantity}
                onChange={(e) =>
                  updateCartItem(product._id, Number(e.target.value))
                }
              >
                {Array.from(
                  { length: Math.max(9, product.quantity) },
                  (_, i) => i + 1
                ).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <p>₹{(getPrice(product) * product.quantity).toFixed(2)}</p>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(product._id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        {/* Delivery Address */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600">DELIVERY ADDRESS</p>
          {selectedAddress ? (
            <p className="text-gray-800">
              {selectedAddress.street}, {selectedAddress.city},{" "}
              {selectedAddress.state}, {selectedAddress.zipCode}
            </p>
          ) : (
            <p className="text-gray-500">No address selected</p>
          )}

          <button
            onClick={() => setShowAddressOptions(!showAddressOptions)}
            className="text-indigo-600 text-sm font-semibold mt-1"
          >
            Change
          </button>

          {showAddressOptions && (
            <div className="mt-2 space-y-2 border rounded-lg p-2 bg-gray-50 shadow-sm">
              {addresses.map((addr, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setSelectedAddress(addr);
                    setShowAddressOptions(false);
                  }}
                  className={`cursor-pointer px-2 py-1 rounded ${
                    selectedAddress === addr
                      ? "bg-indigo-100 text-indigo-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {addr.street}, {addr.city}, {addr.state}
                </div>
              ))}

              <div
                onClick={() => navigate("/add-address")}
                className="cursor-pointer px-2 py-1 rounded text-indigo-600 font-medium hover:bg-gray-100"
              >
                ➕ Add address
              </div>
            </div>
          )}
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <p className="text-sm font-medium text-gray-600">PAYMENT METHOD</p>
          <select
            value={paymentOption}
            onChange={(e) => setPaymentOption(e.target.value)}
            className="w-full border rounded-lg p-2 mt-1"
          >
            <option value="COD">Cash On Delivery</option>
            <option value="CARD">Credit/Debit Card</option>
            <option value="UPI">UPI</option>
          </select>
        </div>

        {/* Price Details */}
        <div className="space-y-2">
          <p className="flex justify-between">
            <span>Price</span> <span>₹{cartTotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fee</span> <span className="text-green-600">Free</span>
          </p>
          <p className="flex justify-between">
            <span>Tax (2%)</span>{" "}
            <span>₹{(cartTotal * 0.02).toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-lg font-semibold border-t pt-3">
            <span>Total Amount:</span>{" "}
            <span>₹{(cartTotal * 1.02).toFixed(2)}</span>
          </p>
        </div>

        {/* Place Order Button */}
        <button
          onClick={placeOrder}
          className="bg-indigo-600 text-white w-full py-3 mt-6 rounded-lg"
        >
          {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
        </button>
      </div>
    </div>
  );
};

export default Cart;

// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const Cart = () => {
//   const {
//     products,
//     navigate,
//     cartItems,
//     removeFromCart,
//     updateCartItem,
//     setCartItems,
//     totalCartAmount,
//     axios,
//     user,
//   } = useContext(AppContext);

//   const [cartArray, setCartArray] = useState([]);
//   const [addresses, setAddresses] = useState([]); // ✅ store fetched addresses
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [paymentOption, setPaymentOption] = useState("COD");
//   const [showAddressOptions, setShowAddressOptions] = useState(false);

//   // ✅ Build cart array from cartItems
//   useEffect(() => {
//     if (!products || !cartItems) return;
//     const temp = [];
//     for (const id in cartItems) {
//       const product = products.find((p) => String(p._id) === String(id));
//       if (product) temp.push({ ...product, quantity: cartItems[id] });
//     }
//     setCartArray(temp);
//   }, [products, cartItems]);

//   // ✅ Fetch addresses from backend
//   const getAddress = async () => {
//     try {
//       const { data } = await axios.get("/api/address/get");
//       if (data.success) {
//         setAddresses(data.addresses); // ✅ fixed
//         if (data.addresses.length > 0) {
//           setSelectedAddress(data.addresses[0]); // ✅ auto-select first address
//         }
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const placeOrder = async () => {
//   try {
//     if (!selectedAddress) {
//       return toast.error("Please select an address");
//     }
//     // place order with cod
//     if (paymentOption === "COD") {
//       const { data } = await axios.post("/api/order/cod", {
//         items: cartArray.map((item) => ({
//           product: item._id,
//           quantity: item.quantity,
//         })),
//         address: selectedAddress._id,
//       });
//       if (data.success) {
//         toast.success(data.message);
//         setCartItems([]);
//         navigate("/my-orders");
//       } else {
//         toast.error(data.message);
//       }
//     }
//   } catch (error) {
//     toast.error(error.message);
//   }
// };

//   useEffect(() => {
//     if (user) {
//       getAddress();
//     }
//   }, [user]);

//   // // ✅ Place order
//   // const placeOrder = () => {
//   //   if (!selectedAddress) {
//   //     toast.error("Please select a delivery address!");
//   //     return;
//   //   }
//   //   alert(
//   //     `🎉 Order placed!\nDelivering to: ${selectedAddress.street}, ${selectedAddress.city}\nPayment: ${paymentOption}`
//   //   );
//   //   setCartItems({});
//   //   navigate("/medicines-and-more");
//   // };

//   // ✅ Empty cart UI
//   if (!cartArray.length)
//     return (
//       <div className="py-20 text-center">
//         <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
//         <button
//           onClick={() => navigate("/medicines-and-more")}
//           className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg"
//         >
//           Browse Products
//         </button>
//       </div>
//     );

//   return (
//     <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-16 px-6">
//       {/* Cart Items */}
//       <div className="flex-1">
//         {cartArray.map((product) => (
//           <div
//             key={product._id}
//             className="flex items-center justify-between border rounded-lg p-4 mb-4"
//           >
//             <div
//               className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:ring-2 hover:ring-indigo-500 transition-all duration-300 cursor-pointer"
//               onClick={() =>
//                 navigate(
//                   `/products/${product.category.toLowerCase()}/${product._id}`
//                 )
//               }
//             >
//               <img
//                 src={
//                   product.image?.length > 0
//                     ? `http://localhost:5000/images/${product.image[0]}`
//                     : "/placeholder.png"
//                 }
//                 alt={product.name}
//                 className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             <div className="flex-1 ml-4">
//               <p>{product.name}</p>
//               <p>₹{product.price}</p>
//               <select
//                 value={product.quantity}
//                 onChange={(e) =>
//                   updateCartItem(product._id, Number(e.target.value))
//                 }
//               >
//                 {Array.from(
//                   { length: Math.max(9, product.quantity) },
//                   (_, i) => i + 1
//                 ).map((num) => (
//                   <option key={num} value={num}>
//                     {num}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <p>₹{product.price * product.quantity}</p>
//               <button
//                 className="text-red-500"
//                 onClick={() => removeFromCart(product._id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Summary */}
//       <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border">
//         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

//         {/* Delivery Address */}
//         <div className="mb-4">
//           <p className="text-sm font-medium text-gray-600">DELIVERY ADDRESS</p>
//           {selectedAddress ? (
//             <p className="text-gray-800">
//               {selectedAddress.street}, {selectedAddress.city},{" "}
//               {selectedAddress.state}, {selectedAddress.zipCode}
//             </p>
//           ) : (
//             <p className="text-gray-500">No address selected</p>
//           )}

//           <button
//             onClick={() => setShowAddressOptions(!showAddressOptions)}
//             className="text-indigo-600 text-sm font-semibold mt-1"
//           >
//             Change
//           </button>

//           {showAddressOptions && (
//             <div className="mt-2 space-y-2 border rounded-lg p-2 bg-gray-50 shadow-sm">
//               {addresses.map((addr, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => {
//                     setSelectedAddress(addr);
//                     setShowAddressOptions(false);
//                   }}
//                   className={`cursor-pointer px-2 py-1 rounded ${
//                     selectedAddress === addr
//                       ? "bg-indigo-100 text-indigo-700"
//                       : "hover:bg-gray-100"
//                   }`}
//                 >
//                   {addr.street}, {addr.city}, {addr.state}
//                 </div>
//               ))}

//               {/* ➕ Add Address option */}
//               <div
//                 onClick={() => navigate("/add-address")}
//                 className="cursor-pointer px-2 py-1 rounded text-indigo-600 font-medium hover:bg-gray-100"
//               >
//                 ➕ Add address
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Payment Method */}
//         <div className="mb-4">
//           <p className="text-sm font-medium text-gray-600">PAYMENT METHOD</p>
//           <select
//             value={paymentOption}
//             onChange={(e) => setPaymentOption(e.target.value)}
//             className="w-full border rounded-lg p-2 mt-1"
//           >
//             <option value="COD">Cash On Delivery</option>
//             <option value="CARD">Credit/Debit Card</option>
//             <option value="UPI">UPI</option>
//           </select>
//         </div>

//         {/* Price Details */}
//         <div className="space-y-2">
//           <p className="flex justify-between">
//             <span>Price</span> <span>₹{totalCartAmount()}</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Shipping Fee</span>{" "}
//             <span className="text-green-600">Free</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Tax (2%)</span>{" "}
//             <span>₹{(totalCartAmount() * 0.02).toFixed(2)}</span>
//           </p>
//           <p className="flex justify-between text-lg font-semibold border-t pt-3">
//             <span>Total Amount:</span>{" "}
//             <span>₹{(totalCartAmount() * 1.02).toFixed(2)}</span>
//           </p>
//         </div>

//         {/* Place Order Button */}
//         <button
//           onClick={placeOrder}
//           className="bg-indigo-600 text-white w-full py-3 mt-6 rounded-lg"
//         >
//           {paymentOption === "COD" ? "Place Order" : "Proceed to Checkout"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;




// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

// const dummyAddress = ["123 Main Street, New York, USA", "456 Park Avenue, Los Angeles, USA"];

// const Cart = () => {
//   const { products, navigate, cartItems, removeFromCart, updateCartItem, setCartItems, totalCartAmount, getCartCount } =
//     useContext(AppContext);

//   const [cartArray, setCartArray] = useState([]);
//   const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
//   const [paymentOption, setPaymentOption] = useState("COD");
//   const [showAddressOptions, setShowAddressOptions] = useState(false);

//   // Build cart array
//   useEffect(() => {
//     if (!products || !cartItems) return;
//     const temp = [];
//     for (const id in cartItems) {
//       const product = products.find((p) => String(p._id) === String(id));
//       if (product) temp.push({ ...product, quantity: cartItems[id] });
//     }
//     setCartArray(temp);
//   }, [products, cartItems]);

//   const placeOrder = () => {
//     alert(`🎉 Order placed!\nDelivering to: ${selectedAddress}\nPayment: ${paymentOption}`);
//     setCartItems({});
//     navigate("/medicines-and-more");
//   };

//   if (!cartArray.length)
//     return (
//       <div className="py-20 text-center">
//         <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
//         <button onClick={() => navigate("/medicines-and-more")} className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg">
//           Browse Products
//         </button>
//       </div>
//     );

//   return (
//     <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-16 px-6">
//       {/* Cart Items */}
//       <div className="flex-1">
//         {cartArray.map((product) => (
//           <div key={product._id} className="flex items-center justify-between border rounded-lg p-4 mb-4">
//             {/* <img
//               src={product.image?.[0] || ""}
//               alt={product.name}
//               className="w-24 h-24 object-cover cursor-pointer"
//               onClick={() => navigate(`/products/${product.category.toLowerCase()}/${product._id}`)}
//             /> */}
//             {/* <img
//   src={product.image?.length > 0 ? `http://localhost:5000/images/${product.image[0]}` : "/placeholder.png"}
//   alt={product.name}
//   className="w-24 h-24 object-cover cursor-pointer"
//   onClick={() => navigate(`/products/${product.category.toLowerCase()}/${product._id}`)}
// /> */}
// <div
//   className="w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:ring-2 hover:ring-indigo-500 transition-all duration-300 cursor-pointer"
//   onClick={() =>
//     navigate(`/products/${product.category.toLowerCase()}/${product._id}`)
//   }
// >
//   <img
//     src={
//       product.image?.length > 0
//         ? `http://localhost:5000/images/${product.image[0]}`
//         : "/placeholder.png"
//     }
//     alt={product.name}
//     className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
//   />
// </div>

//             <div className="flex-1 ml-4">
//               <p>{product.name}</p>
//               <p>₹{product.price}</p>
//               <select value={product.quantity} onChange={(e) => updateCartItem(product._id, Number(e.target.value))}>
//                 {Array.from({ length: Math.max(9, product.quantity) }, (_, i) => i + 1).map((num) => (
//                   <option key={num} value={num}>
//                     {num}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <p>₹{product.price * product.quantity}</p>
//               <button className="text-red-500" onClick={() => removeFromCart(product._id)}>
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Order Summary */}
//       <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border">
//         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//         <div className="space-y-2">
//           <p className="flex justify-between">
//             <span>Subtotal</span> <span>₹{totalCartAmount()}</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Shipping Fee</span> <span className="text-green-600">Free</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Tax (2%)</span> <span>₹{(totalCartAmount() * 0.02).toFixed(2)}</span>
//           </p>
//           <p className="flex justify-between text-lg font-semibold border-t pt-3">
//             <span>Total</span> <span>₹{(totalCartAmount() * 1.02).toFixed(2)}</span>
//           </p>
//         </div>

//         <button onClick={placeOrder} className="bg-indigo-600 text-white w-full py-3 mt-6 rounded-lg">
//           {paymentOption === "COD" ? "Place Order" : "Pay Now"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

// const dummyAddress = [
//   "123 Main Street, New York, USA",
//   "456 Park Avenue, Los Angeles, USA",
// ];

// const Cart = () => {
//   const {
//     products,
//     navigate,
//     cartCount,
//     totalCartAmount,
//     cartItems,
//     removeFromCart,
//     updateCartItem,
//     setCartItems, // ✅ clear cart
//   } = useContext(AppContext);

//   const [cartArray, setCartArray] = useState([]);
//   const [address, setAddress] = useState(dummyAddress);
//   const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
//   const [paymentOption, setPaymentOption] = useState("COD");
//   const [showAddressOptions, setShowAddressOptions] = useState(false);

//   // ✅ Build cart array
//   const getCart = () => {
//     let tempArray = [];
//     for (const key in cartItems) {
//       const product = products.find(
//         (product) => String(product._id) === String(key)
//       );
//       if (product) {
//         tempArray.push({ ...product, quantity: cartItems[key] });
//       }
//     }
//     setCartArray(tempArray);
//   };

//   useEffect(() => {
//     if (products.length > 0 && cartItems) {
//       getCart();
//     }
//   }, [products, cartItems]);

//   // ✅ Place order
//   const placeOrder = () => {
//     alert(
//       `🎉 Order placed successfully!\n\nDelivering to: ${selectedAddress}\nPayment: ${paymentOption}`
//     );
//     setCartItems({}); // Clear cart
//     navigate("/medicines-and-more");
//   };

//   // ✅ Banner Component
//   const ShoppingCartBanner = () => (
//     <div className="relative w-full bg-[#f3f4ff] text-center py-16 rounded-b-3xl shadow-md">
//       <div className="container mx-auto px-6">
//         <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
//           <span className="text-black">Shopping</span>{" "}
//           <span className="text-[#4f46e5]">Cart</span>
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//           Review your selected items, manage quantities, and proceed to secure checkout easily.
//         </p>
//       </div>
//     </div>
//   );

//   // ✅ Empty Cart
//   if (cartArray.length === 0) {
//     return (
//       <div>
//         <ShoppingCartBanner />
//         <div className="py-20 text-center">
//           <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
//           <p className="text-gray-500 mt-2">
//             Looks like you haven’t added anything yet.
//           </p>
//           <button
//             onClick={() => navigate("/medicines-and-more")}
//             className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
//           >
//             Browse Products
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Cart with items
//   return (
//     <div>
//       <ShoppingCartBanner />

//       {/* Cart Layout */}
//       <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto gap-8">
//         {/* 🛒 Cart Products */}
//         <div className="flex-1 max-w-4xl">
//           <h1 className="text-2xl font-semibold mb-6">
//             Shopping Cart{" "}
//             <span className="text-sm text-indigo-500 ml-2">
//               ({cartCount()} items)
//             </span>
//           </h1>

//           {cartArray.map((product, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between border rounded-lg p-4 mb-4 bg-white shadow-sm"
//             >
//               {/* Image */}
//               <div
//                 onClick={() => {
//                   navigate(
//                     `/products/${product.category.toLowerCase()}/${product._id}`
//                   );
//                   window.scrollTo(0, 0);
//                 }}
//                 className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden"
//               >
//                 <img
//                   className="max-w-full h-full object-cover"
//                   // src={product.image[0]}
//                   src={`http://localhost:5000/images/${product.image[0]}`}
//                   alt={product.name}
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="flex-1 ml-4">
//                 <p className="font-semibold">{product.name}</p>
//                 <p className="text-gray-500 text-sm">₹{product.price}</p>
//                 <div className="flex items-center mt-2">
//                   <p>Qty:</p>
//                   <select
//                     onChange={(e) =>
//                       updateCartItem(product._id, Number(e.target.value))
//                     }
//                     value={cartItems[product._id]}
//                     className="ml-2 border rounded px-2 py-1 text-sm"
//                   >
//                     {Array.from(
//                       { length: Math.max(9, cartItems[product._id]) },
//                       (_, i) => i + 1
//                     ).map((num) => (
//                       <option key={num} value={num}>
//                         {num}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Subtotal + Remove */}
//               <div className="text-right">
//                 <p className="font-medium">
//                   ₹{product.price * product.quantity}
//                 </p>
//                 <button
//                   onClick={() => removeFromCart(product._id)}
//                   className="mt-2 text-red-500 hover:text-red-600 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Continue Shopping */}
//           <button
//             onClick={() => navigate("/medicines-and-more")}
//             className="flex items-center mt-6 gap-2 text-indigo-500 font-medium hover:underline"
//           >
//             ← Continue Shopping
//           </button>
//         </div>

//         {/* 🧾 Order Summary */}
//         <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border border-gray-200">
//           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//           <hr className="mb-4" />

//           {/* Delivery Address */}
//           <div className="mb-6">
//             <p className="text-sm font-medium uppercase">Delivery Address</p>
//             <div className="flex items-center justify-between mt-2">
//               <p className="text-gray-600 text-sm w-[80%] truncate">
//                 {selectedAddress}
//               </p>
//               <button
//                 onClick={() => setShowAddressOptions(!showAddressOptions)}
//                 className="text-indigo-500 text-sm font-medium hover:underline"
//               >
//                 Change
//               </button>
//             </div>

//             {/* Dropdown for Address Options */}
//             {showAddressOptions && (
//               <div className="mt-3 border border-gray-300 rounded-lg bg-white shadow p-2 space-y-2">
//                 {address.map((addr, index) => (
//                   <p
//                     key={index}
//                     onClick={() => {
//                       setSelectedAddress(addr);
//                       setShowAddressOptions(false);
//                     }}
//                     className={`p-2 cursor-pointer rounded text-sm ${
//                       selectedAddress === addr
//                         ? "bg-indigo-100 font-medium"
//                         : "hover:bg-gray-100"
//                     }`}
//                   >
//                     {addr}
//                   </p>
//                 ))}

//                 {/* Add New Address */}
//                 <p
//                   onClick={() => navigate("/add-address")}
//                   className="p-2 cursor-pointer text-indigo-500 hover:underline text-sm"
//                 >
//                   ➕ Add New Address
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Payment */}
//           <div className="mb-6">
//             <p className="text-sm font-medium uppercase">Payment Method</p>
//             <select
//               value={paymentOption}
//               onChange={(e) => setPaymentOption(e.target.value)}
//               className="w-full border border-gray-300 bg-white px-3 py-2 rounded-lg mt-2"
//             >
//               <option value="COD">Cash On Delivery</option>
//               <option value="Online">Online Payment</option>
//             </select>
//           </div>

//           <hr className="mb-4" />

//           {/* Totals */}
//           <div className="space-y-2 text-gray-700">
//             <p className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹{totalCartAmount()}</span>
//             </p>
//             <p className="flex justify-between">
//               <span>Shipping Fee</span>
//               <span className="text-green-600">Free</span>
//             </p>
//             <p className="flex justify-between">
//               <span>Tax (2%)</span>
//               <span>₹{(totalCartAmount() * 0.02).toFixed(2)}</span>
//             </p>
//             <p className="flex justify-between text-lg font-semibold border-t pt-3">
//               <span>Total</span>
//               <span>₹{(totalCartAmount() * 1.02).toFixed(2)}</span>
//             </p>
//             <p className="text-xs text-gray-500">
//               Estimated Delivery: 3-5 business days
//             </p>
//           </div>

//           {/* ✅ Place Order Button */}
//           <button
//             onClick={placeOrder}
//             className="bg-[#ff5733] hover:bg-[#e64a19] text-white px-6 py-3 mt-8 rounded-lg w-full font-semibold transition"
//           >
//             {paymentOption === "COD" ? "Place Order" : "Pay Now"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

// const dummyAddress = [
//   "123 Main Street, New York, USA",
//   "456 Park Avenue, Los Angeles, USA",
// ];

// const Cart = () => {
//   const {
//     products,
//     navigate,
//     cartCount,
//     totalCartAmount,
//     cartItems,
//     removeFromCart,
//     updateCartItem,
//     setCartItems, // ✅ clear cart
//   } = useContext(AppContext);

//   const [cartArray, setCartArray] = useState([]);
//   const [address, setAddress] = useState(dummyAddress);
//   const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
//   const [paymentOption, setPaymentOption] = useState("COD");

//   // ✅ Build cart array
//   const getCart = () => {
//     let tempArray = [];
//     for (const key in cartItems) {
//       const product = products.find(
//         (product) => String(product.id) === String(key)
//       );
//       if (product) {
//         tempArray.push({ ...product, quantity: cartItems[key] });
//       }
//     }
//     setCartArray(tempArray);
//   };

//   useEffect(() => {
//     if (products.length > 0 && cartItems) {
//       getCart();
//     }
//   }, [products, cartItems]);

//   // ✅ Place order
//   const placeOrder = () => {
//     alert(
//       `🎉 Order placed successfully!\n\nDelivering to: ${selectedAddress}\nPayment: ${paymentOption}`
//     );
//     setCartItems({}); // Clear cart
//     navigate("/medicines-and-more");
//   };

//   // ✅ Banner Component
//   const ShoppingCartBanner = () => (
//     <div className="relative w-full bg-[#f3f4ff] text-center py-16 rounded-b-3xl shadow-md">
//       <div className="container mx-auto px-6">
//         <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
//           <span className="text-black">Shopping</span>{" "}
//           <span className="text-[#4f46e5]">Cart</span>
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//           Review your selected items, manage quantities, and proceed to secure checkout easily.
//         </p>
//       </div>
//     </div>
//   );

//   // ✅ Empty Cart
//   if (cartArray.length === 0) {
//     return (
//       <div>
//         <ShoppingCartBanner />
//         <div className="py-20 text-center">
//           <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
//           <p className="text-gray-500 mt-2">
//             Looks like you haven’t added anything yet.
//           </p>
//           <button
//             onClick={() => navigate("/medicines-and-more")}
//             className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
//           >
//             Browse Products
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // ✅ Cart with items
//   return (
//     <div>
//       <ShoppingCartBanner />

//       {/* Cart Layout */}
//       <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto gap-8">
//         {/* 🛒 Cart Products */}
//         <div className="flex-1 max-w-4xl">
//           <h1 className="text-2xl font-semibold mb-6">
//             Shopping Cart{" "}
//             <span className="text-sm text-indigo-500 ml-2">
//               ({cartCount()} items)
//             </span>
//           </h1>

//           {cartArray.map((product, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between border rounded-lg p-4 mb-4 bg-white shadow-sm"
//             >
//               {/* Image */}
//               <div
//                 onClick={() => {
//                   navigate(
//                     `/products/${product.category.toLowerCase()}/${product.id}`
//                   );
//                   window.scrollTo(0, 0);
//                 }}
//                 className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden"
//               >
//                 <img
//                   className="max-w-full h-full object-cover"
//                   src={product.image[0]}
//                   alt={product.name}
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="flex-1 ml-4">
//                 <p className="font-semibold">{product.name}</p>
//                 <p className="text-gray-500 text-sm">₹{product.price}</p>
//                 <div className="flex items-center mt-2">
//                   <p>Qty:</p>
//                   <select
//                     onChange={(e) =>
//                       updateCartItem(product.id, Number(e.target.value))
//                     }
//                     value={cartItems[product.id]}
//                     className="ml-2 border rounded px-2 py-1 text-sm"
//                   >
//                     {Array.from(
//                       { length: Math.max(9, cartItems[product.id]) },
//                       (_, i) => i + 1
//                     ).map((num) => (
//                       <option key={num} value={num}>
//                         {num}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Subtotal + Remove */}
//               <div className="text-right">
//                 <p className="font-medium">
//                   ₹{product.price * product.quantity}
//                 </p>
//                 <button
//                   onClick={() => removeFromCart(product.id)}
//                   className="mt-2 text-red-500 hover:text-red-600 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Continue Shopping */}
//           <button
//             onClick={() => navigate("/medicines-and-more")}
//             className="flex items-center mt-6 gap-2 text-indigo-500 font-medium hover:underline"
//           >
//             ← Continue Shopping
//           </button>
//         </div>

//         {/* 🧾 Order Summary */}
//         <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border border-gray-200">
//           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//           <hr className="mb-4" />

//           {/* Delivery Address */}
//           <div className="mb-6">
//             <p className="text-sm font-medium uppercase">Delivery Address</p>
//             <div className="flex items-center justify-between mt-2">
//               <p className="text-gray-600 text-sm w-[80%] truncate">
//                 {selectedAddress}
//               </p>
//               <button
//                 onClick={() => {
//                   const newAddress = prompt("Enter new delivery address:");
//                   if (newAddress) {
//                     setSelectedAddress(newAddress);
//                     setAddress([...address, newAddress]);
//                   }
//                 }}
//                 className="text-indigo-500 text-sm font-medium hover:underline"
//               >
//                 Change
//               </button>
//             </div>
//           </div>

//           {/* Payment */}
//           <div className="mb-6">
//             <p className="text-sm font-medium uppercase">Payment Method</p>
//             <select
//               value={paymentOption}
//               onChange={(e) => setPaymentOption(e.target.value)}
//               className="w-full border border-gray-300 bg-white px-3 py-2 rounded-lg mt-2"
//             >
//               <option value="COD">Cash On Delivery</option>
//               <option value="Online">Online Payment</option>
//             </select>
//           </div>

//           <hr className="mb-4" />

//           {/* Totals */}
//           <div className="space-y-2 text-gray-700">
//             <p className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹{totalCartAmount()}</span>
//             </p>
//             <p className="flex justify-between">
//               <span>Shipping Fee</span>
//               <span className="text-green-600">Free</span>
//             </p>
//             <p className="flex justify-between">
//               <span>Tax (2%)</span>
//               <span>₹{(totalCartAmount() * 0.02).toFixed(2)}</span>
//             </p>
//             <p className="flex justify-between text-lg font-semibold border-t pt-3">
//               <span>Total</span>
//               <span>₹{(totalCartAmount() * 1.02).toFixed(2)}</span>
//             </p>
//             <p className="text-xs text-gray-500">
//               Estimated Delivery: 3-5 business days
//             </p>
//           </div>

//           {/* ✅ Place Order Button */}
//           <button
//             onClick={placeOrder}
//             className="bg-[#ff5733] hover:bg-[#e64a19] text-white px-6 py-3 mt-8 rounded-lg w-full font-semibold transition"
//           >
//             {paymentOption === "COD" ? "Place Order" : "Pay Now"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;




// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

// const dummyAddress = [
//   "123 Main Street, New York, USA",
//   "456 Park Avenue, Los Angeles, USA",
// ];

// const Cart = () => {
//   const {
//     products,
//     navigate,
//     cartCount,
//     totalCartAmount,
//     cartItems,
//     removeFromCart,
//     updateCartItem,
//     setCartItems, // ✅ assuming you have this in context to clear cart
//   } = useContext(AppContext);

//   const [cartArray, setCartArray] = useState([]);
//   const [address, setAddress] = useState(dummyAddress);
//   const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
//   const [paymentOption, setPaymentOption] = useState("COD");

//   // Build cart array
//   const getCart = () => {
//     let tempArray = [];
//     for (const key in cartItems) {
//       const product = products.find(
//         (product) => String(product.id) === String(key)
//       );
//       if (product) {
//         tempArray.push({ ...product, quantity: cartItems[key] });
//       }
//     }
//     setCartArray(tempArray);
//   };

//   useEffect(() => {
//     if (products.length > 0 && cartItems) {
//       getCart();
//     }
//   }, [products, cartItems]);

//   // ✅ Handle Place Order
//   const handlePlaceOrder = () => {
//     alert(
//       `🎉 Order placed successfully!\n\nDelivering to: ${selectedAddress}\nPayment: ${paymentOption}`
//     );
//     setCartItems({}); // Clear cart
//     navigate("/medicines-and-more");
//   };

//   // ✅ Empty cart UI
//   if (cartArray.length === 0) {
//     return (
//       <div>
//         <div className="relative w-full bg-gradient-to-r from-[#eef2ff] via-[#f5f6ff] to-[#f0f4ff] text-center py-16 rounded-b-3xl shadow-md">
//   <div className="container mx-auto px-6">
//     <h1 className="text-4xl lg:text-5xl font-extrabold text-[#4f46e5] mb-4">
//       Your Cart
//     </h1>
//     <p className="text-gray-700 max-w-2xl mx-auto text-lg">
//       Review your products and place your order with ease.
//     </p>

// </div>

//         </div>

//         <div className="py-20 text-center">
//           <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
//           <p className="text-gray-500 mt-2">
//             Looks like you haven’t added anything yet.
//           </p>
//           <button
//             onClick={() => navigate("/medicines-and-more")}
//             className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
//           >
//             Browse Products
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div>
//   {/* Banner */}
//   <div className="bg-gradient-to-r from-[#4f46e5] to-[#4338ca] py-10 px-6 shadow-md">
//     <div className="max-w-6xl mx-auto text-center">
//       <h1 className="text-3xl md:text-4xl font-bold mb-3">
//         <span className="text-black">Shopping</span>{" "}
//         <span className="text-white">Cart</span>
//       </h1>
//       <p className="text-base md:text-lg text-white opacity-90">
//         Review your items, choose your delivery options, and place order securely.
//       </p>
//     </div>
//   </div>


//       {/* Cart Layout */}
//       <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto gap-8">
//         {/* 🛒 Cart Products */}
//         <div className="flex-1 max-w-4xl">
//           <h1 className="text-2xl font-semibold mb-6">
//             Shopping Cart{" "}
//             <span className="text-sm text-indigo-500 ml-2">
//               ({cartCount()} items)
//             </span>
//           </h1>

//           {cartArray.map((product, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-between border rounded-lg p-4 mb-4 bg-white shadow-sm"
//             >
//               {/* Image */}
//               <div
//                 onClick={() => {
//                   navigate(
//                     `/products/${product.category.toLowerCase()}/${product.id}`
//                   );
//                   window.scrollTo(0, 0);
//                 }}
//                 className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden"
//               >
//                 <img
//                   className="max-w-full h-full object-cover"
//                   src={product.image[0]}
//                   alt={product.name}
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="flex-1 ml-4">
//                 <p className="font-semibold">{product.name}</p>
//                 <p className="text-gray-500 text-sm">₹{product.price}</p>
//                 <div className="flex items-center mt-2">
//                   <p>Qty:</p>
//                   <select
//                     onChange={(e) =>
//                       updateCartItem(product.id, Number(e.target.value))
//                     }
//                     value={cartItems[product.id]}
//                     className="ml-2 border rounded px-2 py-1 text-sm"
//                   >
//                     {Array.from(
//                       { length: Math.max(9, cartItems[product.id]) },
//                       (_, i) => i + 1
//                     ).map((num) => (
//                       <option key={num} value={num}>
//                         {num}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Subtotal + Remove */}
//               <div className="text-right">
//                 <p className="font-medium">
//                   ₹{product.price * product.quantity}
//                 </p>
//                 <button
//                   onClick={() => removeFromCart(product.id)}
//                   className="mt-2 text-red-500 hover:text-red-600 text-sm"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Continue Shopping */}
//           <button
//             onClick={() => navigate("/medicines-and-more")}
//             className="flex items-center mt-6 gap-2 text-indigo-500 font-medium hover:underline"
//           >
//             ← Continue Shopping
//           </button>
//         </div>

//         {/* 🧾 Order Summary */}
//         <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border border-gray-200">
//           <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//           <hr className="mb-4" />

//           {/* Address */}
//           <div className="mb-6">
//             <p className="text-sm font-medium uppercase">Delivery Address</p>
//             <div className="relative mt-2">
//               <select
//                 value={selectedAddress}
//                 onChange={(e) => setSelectedAddress(e.target.value)}
//                 className="w-full border border-gray-300 bg-white px-3 py-2 rounded-lg"
//               >
//                 {address.map((addr, i) => (
//                   <option key={i} value={addr}>
//                     {addr}
//                   </option>
//                 ))}
//               </select>
//               <p className="text-indigo-500 text-sm mt-2 cursor-pointer hover:underline">
//                 + Add new address
//               </p>
//             </div>
//           </div>

//           {/* Payment */}
//           <div className="mb-6">
//             <p className="text-sm font-medium uppercase">Payment Method</p>
//             <select
//               value={paymentOption}
//               onChange={(e) => setPaymentOption(e.target.value)}
//               className="w-full border border-gray-300 bg-white px-3 py-2 rounded-lg mt-2"
//             >
//               <option value="COD">Cash On Delivery</option>
//               <option value="Online">Online Payment</option>
//             </select>
//           </div>

//           <hr className="mb-4" />

//           {/* Totals */}
//           <div className="space-y-2 text-gray-700">
//             <p className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹{totalCartAmount()}</span>
//             </p>
//             <p className="flex justify-between">
//               <span>Shipping Fee</span>
//               <span className="text-green-600">Free</span>
//             </p>
//             <p className="flex justify-between">
//               <span>Tax (2%)</span>
//               <span>₹{(totalCartAmount() * 0.02).toFixed(2)}</span>
//             </p>
//             <p className="flex justify-between text-lg font-semibold border-t pt-3">
//               <span>Total</span>
//               <span>₹{(totalCartAmount() * 1.02).toFixed(2)}</span>
//             </p>
//             <p className="text-xs text-gray-500">
//               Estimated Delivery: 3-5 business days
//             </p>
//           </div>

//           {/* Place Order */}
//           <button
//             onClick={handlePlaceOrder}
//             className="w-full py-3 mt-6 bg-indigo-500 text-white font-medium rounded-lg shadow hover:bg-indigo-600 transition"
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

// const dummyAddress = [
//   "123 Main Street, New York, USA",
//   "456 Park Avenue, Los Angeles, USA",
// ];

// const Cart = () => {
//   const {
//     products,
//     navigate,
//     cartCount,
//     totalCartAmount,
//     cartItems,
//     removeFromCart,
//     updateCartItem,
//     setCartItems, // ✅ assuming you have this in context to clear cart
//   } = useContext(AppContext);

//   const [cartArray, setCartArray] = useState([]);
//   const [address, setAddress] = useState(dummyAddress);
//   const [showAddress, setShowAddress] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
//   const [paymentOption, setPaymentOption] = useState("COD");

//   // Build cart array
//   const getCart = () => {
//     let tempArray = [];
//     for (const key in cartItems) {
//       const product = products.find(
//         (product) => String(product.id) === String(key)
//       );
//       if (product) {
//         tempArray.push({ ...product, quantity: cartItems[key] });
//       }
//     }
//     setCartArray(tempArray);
//   };

//   useEffect(() => {
//     if (products.length > 0 && cartItems) {
//       getCart();
//     }
//   }, [products, cartItems]);

//   // ✅ Handle Place Order
//   const handlePlaceOrder = () => {
//     alert(`🎉 Order placed successfully!\n\nDelivering to: ${selectedAddress}\nPayment: ${paymentOption}`);
//     setCartItems({}); // Clear cart
//     navigate("/medicines-and-more");
//   };

//   // ✅ Empty cart UI
//   if (cartArray.length === 0) {
//     return (
//       <div className="py-20 text-center">
//         <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
//         <p className="text-gray-500 mt-2">
//           Looks like you haven’t added anything yet.
//         </p>
//         <button
//           onClick={() => navigate("/medicines-and-more")}
//           className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
//         >
//           Browse Products
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto gap-8">
//       {/* 🛒 Cart Products */}
//       <div className="flex-1 max-w-4xl">
//         <h1 className="text-3xl font-semibold mb-6">
//           Shopping Cart{" "}
//           <span className="text-sm text-indigo-500 ml-2">
//             ({cartCount()} items)
//           </span>
//         </h1>

//         {cartArray.map((product, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between border rounded-lg p-4 mb-4 bg-white shadow-sm"
//           >
//             {/* Image */}
//             <div
//               onClick={() => {
//                 navigate(
//                   `/products/${product.category.toLowerCase()}/${product.id}`
//                 );
//                 window.scrollTo(0, 0);
//               }}
//               className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden"
//             >
//               <img
//                 className="max-w-full h-full object-cover"
//                 src={product.image[0]}
//                 alt={product.name}
//               />
//             </div>

//             {/* Product Details */}
//             <div className="flex-1 ml-4">
//               <p className="font-semibold">{product.name}</p>
//               <p className="text-gray-500 text-sm">₹{product.price}</p>
//               <div className="flex items-center mt-2">
//                 <p>Qty:</p>
//                 <select
//                   onChange={(e) =>
//                     updateCartItem(product.id, Number(e.target.value))
//                   }
//                   value={cartItems[product.id]}
//                   className="ml-2 border rounded px-2 py-1 text-sm"
//                 >
//                   {Array.from(
//                     { length: Math.max(9, cartItems[product.id]) },
//                     (_, i) => i + 1
//                   ).map((num) => (
//                     <option key={num} value={num}>
//                       {num}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {/* Subtotal + Remove */}
//             <div className="text-right">
//               <p className="font-medium">
//                 ₹{product.price * product.quantity}
//               </p>
//               <button
//                 onClick={() => removeFromCart(product.id)}
//                 className="mt-2 text-red-500 hover:text-red-600 text-sm"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}

//         {/* Continue Shopping */}
//         <button
//           onClick={() => navigate("/medicines-and-more")}
//           className="flex items-center mt-6 gap-2 text-indigo-500 font-medium hover:underline"
//         >
//           ← Continue Shopping
//         </button>
//       </div>

//       {/* 🧾 Order Summary */}
//       <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border border-gray-200">
//         <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
//         <hr className="mb-4" />

//         {/* Address */}
//         <div className="mb-6">
//           <p className="text-sm font-medium uppercase">Delivery Address</p>
//           <div className="relative mt-2">
//             <select
//               value={selectedAddress}
//               onChange={(e) => setSelectedAddress(e.target.value)}
//               className="w-full border border-gray-300 bg-white px-3 py-2 rounded-lg"
//             >
//               {address.map((addr, i) => (
//                 <option key={i} value={addr}>
//                   {addr}
//                 </option>
//               ))}
//             </select>
//             <p className="text-indigo-500 text-sm mt-2 cursor-pointer hover:underline">
//               + Add new address
//             </p>
//           </div>
//         </div>

//         {/* Payment */}
//         <div className="mb-6">
//           <p className="text-sm font-medium uppercase">Payment Method</p>
//           <select
//             value={paymentOption}
//             onChange={(e) => setPaymentOption(e.target.value)}
//             className="w-full border border-gray-300 bg-white px-3 py-2 rounded-lg mt-2"
//           >
//             <option value="COD">Cash On Delivery</option>
//             <option value="Online">Online Payment</option>
//           </select>
//         </div>

//         <hr className="mb-4" />

//         {/* Totals */}
//         <div className="space-y-2 text-gray-700">
//           <p className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹{totalCartAmount()}</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Shipping Fee</span>
//             <span className="text-green-600">Free</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Tax (2%)</span>
//             <span>₹{(totalCartAmount() * 0.02).toFixed(2)}</span>
//           </p>
//           <p className="flex justify-between text-lg font-semibold border-t pt-3">
//             <span>Total</span>
//             <span>₹{(totalCartAmount() * 1.02).toFixed(2)}</span>
//           </p>
//           <p className="text-xs text-gray-500">
//             Estimated Delivery: 3-5 business days
//           </p>
//         </div>

//         {/* Place Order */}
//         <button
//           onClick={handlePlaceOrder}
//           className="w-full py-3 mt-6 bg-indigo-500 text-white font-medium rounded-lg shadow hover:bg-indigo-600 transition"
//         >
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";

// const dummyAddress = [
//   "123 Main Street, New York, USA",
//   "456 Park Avenue, Los Angeles, USA",
// ];

// const Cart = () => {
//   const {
//     products,
//     navigate,
//     cartCount,
//     totalCartAmount,
//     cartItems,
//     removeFromCart,
//     updateCartItem,
//   } = useContext(AppContext);

//   const [cartArray, setCartArray] = useState([]);
//   const [address, setAddress] = useState(dummyAddress);
//   const [showAddress, setShowAddress] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
//   const [paymentOption, setPaymentOption] = useState("COD");

//   // ✅ Build cart array from cartItems
//   const getCart = () => {
//     let tempArray = [];
//     for (const key in cartItems) {
//       const product = products.find(
//         (product) => String(product.id) === String(key)
//       );
//       if (product) {
//         tempArray.push({ ...product, quantity: cartItems[key] });
//       }
//     }
//     setCartArray(tempArray);
//   };

//   useEffect(() => {
//     if (products.length > 0 && cartItems) {
//       getCart();
//     }
//   }, [products, cartItems]);

//   // ✅ If no items in cart
//   if (cartArray.length === 0) {
//     return (
//       <div className="py-16 text-center">
//         <h2 className="text-2xl font-semibold">Your cart is empty 🛒</h2>
//         <button
//           onClick={() => navigate("/medicines-and-more")}
//           className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
//         >
//           Shop Now
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto">
//       {/* 🛒 Left side - Cart Products */}
//       <div className="flex-1 max-w-4xl">
//         <h1 className="text-3xl font-medium mb-6">
//           Shopping Cart{" "}
//           <span className="text-sm text-indigo-500">
//             {cartCount()} Items
//           </span>
//         </h1>

//         {/* Header Row */}
//         <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
//           <p className="text-left">Product Details</p>
//           <p className="text-center">Subtotal</p>
//           <p className="text-center">Action</p>
//         </div>

//         {/* Cart Items */}
//         {cartArray.map((product, index) => (
//           <div
//             key={index}
//             className="grid grid-cols-[2fr_1fr_1fr] text-gray-700 items-center text-sm md:text-base font-medium pt-3 border-b pb-3"
//           >
//             {/* Product Info */}
//             <div className="flex items-center md:gap-6 gap-3">
//               <div
//                 onClick={() => {
//                   navigate(
//                     `/products/${product.category.toLowerCase()}/${product.id}`
//                   );
//                   window.scrollTo(0, 0);
//                 }}
//                 className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden"
//               >
//                 <img
//                   className="max-w-full h-full object-cover"
//                   src={product.image[0]}
//                   alt={product.name}
//                 />
//               </div>
//               <div>
//                 <p className="hidden md:block font-semibold">{product.name}</p>
//                 <div className="font-normal text-gray-500/70">
//                   <div className="flex items-center">
//                     <p>Qty:</p>
//                     <select
//                       onChange={(e) =>
//                         updateCartItem(product.id, Number(e.target.value))
//                       }
//                       value={cartItems[product.id]}
//                       className="outline-none ml-2 border rounded px-1"
//                     >
//                       {Array.from(
//                         { length: Math.max(9, cartItems[product.id]) },
//                         (_, i) => i + 1
//                       ).map((num) => (
//                         <option key={num} value={num}>
//                           {num}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Subtotal */}
//             <p className="text-center">
//               ₹{product.price * product.quantity}
//             </p>

//             {/* Remove Button */}
//             <button
//               onClick={() => removeFromCart(product.id)}
//               className="cursor-pointer mx-auto text-red-500 hover:text-red-600"
//             >
//               ✕
//             </button>
//           </div>
//         ))}

//         {/* Continue Shopping */}
//         <button
//           onClick={() => navigate("/medicines-and-more")}
//           className="group cursor-pointer flex items-center mt-8 gap-2 text-indigo-500 font-medium"
//         >
//           ← Continue Shopping
//         </button>
//       </div>

//       {/* 🧾 Right side - Order Summary */}
//       <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70">
//         <h2 className="text-xl font-medium">Order Summary</h2>
//         <hr className="border-gray-300 my-5" />

//         {/* Address Section */}
//         <div className="mb-6">
//           <p className="text-sm font-medium uppercase">Delivery Address</p>
//           <div className="relative flex justify-between items-start mt-2">
//             <p className="text-gray-500">{selectedAddress}</p>
//             <button
//               onClick={() => setShowAddress(!showAddress)}
//               className="text-indigo-500 hover:underline cursor-pointer"
//             >
//               Change
//             </button>
//             {showAddress && (
//               <div className="absolute top-12 left-0 py-1 bg-white border border-gray-300 text-sm w-full z-10">
//                 {address.map((addr, i) => (
//                   <p
//                     key={i}
//                     onClick={() => {
//                       setSelectedAddress(addr);
//                       setShowAddress(false);
//                     }}
//                     className="p-2 hover:bg-gray-100 cursor-pointer"
//                   >
//                     {addr}
//                   </p>
//                 ))}
//                 <p className="text-indigo-500 text-center cursor-pointer p-2 hover:bg-indigo-500/10">
//                   + Add address
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* Payment */}
//           <p className="text-sm font-medium uppercase mt-6">Payment Method</p>
//           <select
//             value={paymentOption}
//             onChange={(e) => setPaymentOption(e.target.value)}
//             className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
//           >
//             <option value="COD">Cash On Delivery</option>
//             <option value="Online">Online Payment</option>
//           </select>
//         </div>

//         <hr className="border-gray-300" />

//         {/* Totals */}
//         <div className="text-gray-700 mt-4 space-y-2">
//           <p className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹{totalCartAmount()}</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Shipping Fee</span>
//             <span className="text-green-600">Free</span>
//           </p>
//           <p className="flex justify-between">
//             <span>Tax (2%)</span>
//             <span>₹{(totalCartAmount() * 0.02).toFixed(2)}</span>
//           </p>
//           <p className="flex justify-between text-lg font-medium mt-3">
//             <span>Total Amount:</span>
//             <span>₹{(totalCartAmount() * 1.02).toFixed(2)}</span>
//           </p>
//         </div>

//         {/* Place Order */}
//         <button className="w-full py-3 mt-6 cursor-pointer bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
//           Place Order
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React, { useContext, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const CartPage = () => {
//   const { cartItems, products, updateCartItem, removeFromCart, totalCartAmount } =
//     useContext(AppContext);
//   const navigate = useNavigate();

//   const cartProducts = products.filter((p) => cartItems[p.id]);
//   const [tempQty, setTempQty] = useState({}); // store temporary quantities

//   if (cartProducts.length === 0) {
//     return <h2 className="text-center mt-20 text-gray-600">Your cart is empty</h2>;
//   }

//   return (
//     <div className="max-w-6xl mx-auto my-12 px-4">
//       {cartProducts.map((product) => (
//         <div
//           key={product.id}
//           className="flex flex-col md:flex-row items-center gap-6 mb-8 p-6 shadow-lg bg-white rounded-2xl"
//         >
//           <img
//             src={product.image?.[0]}
//             alt={product.name}
//             className="w-40 h-40 object-cover rounded-lg"
//           />
//           <div className="flex-1">
//             <h3 className="text-xl font-semibold">{product.name}</h3>
//             <p className="text-gray-600">₹{product.price}</p>
//             <div className="flex items-center gap-4 mt-2">
//               <select
//                 defaultValue={cartItems[product.id]}
//                 onChange={(e) =>
//                   setTempQty((prev) => ({ ...prev, [product.id]: Number(e.target.value) }))
//                 }
//                 className="border px-3 py-2 rounded-md"
//               >
//                 {[1, 2, 3, 4, 5].map((q) => (
//                   <option key={q} value={q}>
//                     {q}
//                   </option>
//                 ))}
//               </select>

//               <button
//                 onClick={() => {
//                   const qty = tempQty[product.id] || cartItems[product.id];
//                   updateCartItem(product.id, qty);
//                   toast.success("Cart Updated");
//                 }}
//                 className="bg-gray-600 text-white px-4 py-2 rounded-lg"
//               >
//                 Update
//               </button>

//               <button
//                 onClick={() => {
//                   removeFromCart(product.id);
//                   toast.error("Removed from Cart");
//                 }}
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}

//       <div className="flex justify-between items-center mt-6">
//         <h2 className="text-2xl font-bold">
//           Total: ₹{totalCartAmount().toFixed(2)}
//         </h2>
//         <button
//           onClick={() => navigate("/checkout")}
//           className="bg-green-600 text-white px-6 py-3 rounded-lg"
//         >
//           Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
// import React, { useContext, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const CartPage = () => {
//   const { cartItems, products, updateCartItem, removeFromCart, totalCartAmount } =
//     useContext(AppContext);
//   const navigate = useNavigate();

//   const cartProducts = products.filter((p) => cartItems[p.id]);
//   const [tempQty, setTempQty] = useState({});

//   return (
//     <div>
//       {/* ✅ Top Banner styled like About section */}
//       {/* ✅ Moderate Height Banner for Shopping Cart */}
// <div className="w-full">
//   <div className="bg-gradient-to-r from-[#f0f4ff] to-[#eef2ff] h-[220px] flex flex-col justify-center items-center rounded-none shadow-sm text-center">
//     <h2 className="text-4xl md:text-5xl font-bold">
//       <span className="text-black">Shopping </span>
//       <span className="text-indigo-600">Cart</span>
//     </h2>
//     <p className="mt-3 text-lg text-gray-700">
//       Review your selected items and proceed to checkout.
//     </p>
//   </div>
// </div>


//       {/* ✅ Cart Items */}
//       <div className="max-w-6xl mx-auto my-12 px-4">
//         {cartProducts.length === 0 ? (
//           <h2 className="text-center mt-20 text-gray-600">Your cart is empty</h2>
//         ) : (
//           <>
//             {cartProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="flex flex-col md:flex-row items-center gap-6 mb-8 p-6 shadow-lg bg-white rounded-2xl"
//               >
//                 <img
//                   src={product.image?.[0]}
//                   alt={product.name}
//                   className="w-40 h-40 object-cover rounded-lg"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-xl font-semibold">{product.name}</h3>
//                   <p className="text-gray-600">₹{product.price}</p>
//                   <div className="flex items-center gap-4 mt-2">
//                     <select
//                       defaultValue={cartItems[product.id]}
//                       onChange={(e) =>
//                         setTempQty((prev) => ({
//                           ...prev,
//                           [product.id]: Number(e.target.value),
//                         }))
//                       }
//                       className="border px-3 py-2 rounded-md"
//                     >
//                       {[1, 2, 3, 4, 5].map((q) => (
//                         <option key={q} value={q}>
//                           {q}
//                         </option>
//                       ))}
//                     </select>

//                     <button
//                       onClick={() => {
//                         const qty = tempQty[product.id] || cartItems[product.id];
//                         updateCartItem(product.id, qty);
//                         toast.success("Cart Updated");
//                       }}
//                       className="bg-gray-600 text-white px-4 py-2 rounded-lg"
//                     >
//                       Update
//                     </button>

//                     <button
//                   onClick={() => {
//                     // 🔥 Remove the whole product from cart directly
//                     removeFromCart(product.id);
//                     toast.error(`${product.name} removed from Cart`);
//                   }}
//                   className="bg-red-600 text-white px-4 py-2 rounded-lg"
//                 >
//                   Remove
//                 </button>

//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* ✅ Total Section */}
//             <div className="flex justify-between items-center mt-6">
//               <h2 className="text-2xl font-bold">
//                 Total: ₹{totalCartAmount().toFixed(2)}
//               </h2>
//               <button
//                 onClick={() => navigate("/checkout")}
//                 className="bg-green-600 text-white px-6 py-3 rounded-lg"
//               >
//                 Checkout
//               </button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CartPage;
