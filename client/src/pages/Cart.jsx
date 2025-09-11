import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const dummyAddress = [
  "123 Main Street, New York, USA",
  "456 Park Avenue, Los Angeles, USA",
];

const Cart = () => {
  const {
    products,
    navigate,
    cartCount,
    totalCartAmount,
    cartItems,
    removeFromCart,
    updateCartItem,
    setCartItems, // ✅ clear cart
  } = useContext(AppContext);

  const [cartArray, setCartArray] = useState([]);
  const [address, setAddress] = useState(dummyAddress);
  const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
  const [paymentOption, setPaymentOption] = useState("COD");
  const [showAddressOptions, setShowAddressOptions] = useState(false);

  // ✅ Build cart array
const getCart = async () => {
  try {
    const { data } = await axios.get("/api/cart", { withCredentials: true });

    if (data.success) {
      let tempArray = [];

      for (const productId in data.cartItems) {
        const product = products.find(
          (p) => String(p._id) === String(productId)
        );

        if (product) {
          tempArray.push({
            ...product,
            quantity: data.cartItems[productId],
          });
        }
      }

      setCartArray(tempArray);
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    toast.error("Failed to fetch cart");
  }
};


  useEffect(() => {
    if (products.length > 0 && cartItems) {
      getCart();
    }
  }, [products, cartItems]);

  // ✅ Place order
  const placeOrder = () => {
    alert(
      `🎉 Order placed successfully!\n\nDelivering to: ${selectedAddress}\nPayment: ${paymentOption}`
    );
    setCartItems({}); // Clear cart
    navigate("/medicines-and-more");
  };

  // ✅ Banner Component
  const ShoppingCartBanner = () => (
    <div className="relative w-full bg-[#f3f4ff] text-center py-16 rounded-b-3xl shadow-md">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
          <span className="text-black">Shopping</span>{" "}
          <span className="text-[#4f46e5]">Cart</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Review your selected items, manage quantities, and proceed to secure checkout easily.
        </p>
      </div>
    </div>
  );

  // ✅ Empty Cart
  if (cartArray.length === 0) {
    return (
      <div>
        <ShoppingCartBanner />
        <div className="py-20 text-center">
          <h2 className="text-2xl font-semibold">🛒 Your cart is empty</h2>
          <p className="text-gray-500 mt-2">
            Looks like you haven’t added anything yet.
          </p>
          <button
            onClick={() => navigate("/medicines-and-more")}
            className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  // ✅ Cart with items
  return (
    <div>
      <ShoppingCartBanner />

      {/* Cart Layout */}
      <div className="flex flex-col md:flex-row py-16 max-w-6xl w-full px-6 mx-auto gap-8">
        {/* 🛒 Cart Products */}
        <div className="flex-1 max-w-4xl">
          <h1 className="text-2xl font-semibold mb-6">
            Shopping Cart{" "}
            <span className="text-sm text-indigo-500 ml-2">
              ({cartCount()} items)
            </span>
          </h1>

          {cartArray.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded-lg p-4 mb-4 bg-white shadow-sm"
            >
              {/* Image */}
              <div
                onClick={() => {
                  navigate(
                    `/products/${product.category.toLowerCase()}/${product.id}`
                  );
                  window.scrollTo(0, 0);
                }}
                className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-200 rounded-lg overflow-hidden"
              >
                <img
                  className="max-w-full h-full object-cover"
                  // src={product.image[0]}
                  src={`http://localhost:5000/images/${product.image[0]}`}
                  alt={product.name}
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 ml-4">
                <p className="font-semibold">{product.name}</p>
                <p className="text-gray-500 text-sm">₹{product.price}</p>
                <div className="flex items-center mt-2">
                  <p>Qty:</p>
                  <select
                    onChange={(e) =>
                      updateCartItem(product.id, Number(e.target.value))
                    }
                    value={cartItems[product.id]}
                    className="ml-2 border rounded px-2 py-1 text-sm"
                  >
                    {Array.from(
                      { length: Math.max(9, cartItems[product.id]) },
                      (_, i) => i + 1
                    ).map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Subtotal + Remove */}
              <div className="text-right">
                <p className="font-medium">
                  ₹{product.price * product.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="mt-2 text-red-500 hover:text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Continue Shopping */}
          <button
            onClick={() => navigate("/medicines-and-more")}
            className="flex items-center mt-6 gap-2 text-indigo-500 font-medium hover:underline"
          >
            ← Continue Shopping
          </button>
        </div>

        {/* 🧾 Order Summary */}
        <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <hr className="mb-4" />

          {/* Delivery Address */}
          <div className="mb-6">
            <p className="text-sm font-medium uppercase">Delivery Address</p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-gray-600 text-sm w-[80%] truncate">
                {selectedAddress}
              </p>
              <button
                onClick={() => setShowAddressOptions(!showAddressOptions)}
                className="text-indigo-500 text-sm font-medium hover:underline"
              >
                Change
              </button>
            </div>

            {/* Dropdown for Address Options */}
            {showAddressOptions && (
              <div className="mt-3 border border-gray-300 rounded-lg bg-white shadow p-2 space-y-2">
                {address.map((addr, index) => (
                  <p
                    key={index}
                    onClick={() => {
                      setSelectedAddress(addr);
                      setShowAddressOptions(false);
                    }}
                    className={`p-2 cursor-pointer rounded text-sm ${
                      selectedAddress === addr
                        ? "bg-indigo-100 font-medium"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {addr}
                  </p>
                ))}

                {/* Add New Address */}
                <p
                  onClick={() => navigate("/add-address")}
                  className="p-2 cursor-pointer text-indigo-500 hover:underline text-sm"
                >
                  ➕ Add New Address
                </p>
              </div>
            )}
          </div>

          {/* Payment */}
          <div className="mb-6">
            <p className="text-sm font-medium uppercase">Payment Method</p>
            <select
              value={paymentOption}
              onChange={(e) => setPaymentOption(e.target.value)}
              className="w-full border border-gray-300 bg-white px-3 py-2 rounded-lg mt-2"
            >
              <option value="COD">Cash On Delivery</option>
              <option value="Online">Online Payment</option>
            </select>
          </div>

          <hr className="mb-4" />

          {/* Totals */}
          <div className="space-y-2 text-gray-700">
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{totalCartAmount()}</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="text-green-600">Free</span>
            </p>
            <p className="flex justify-between">
              <span>Tax (2%)</span>
              <span>₹{(totalCartAmount() * 0.02).toFixed(2)}</span>
            </p>
            <p className="flex justify-between text-lg font-semibold border-t pt-3">
              <span>Total</span>
              <span>₹{(totalCartAmount() * 1.02).toFixed(2)}</span>
            </p>
            <p className="text-xs text-gray-500">
              Estimated Delivery: 3-5 business days
            </p>
          </div>

          {/* ✅ Place Order Button */}
          <button
            onClick={placeOrder}
            className="bg-[#ff5733] hover:bg-[#e64a19] text-white px-6 py-3 mt-8 rounded-lg w-full font-semibold transition"
          >
            {paymentOption === "COD" ? "Place Order" : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
