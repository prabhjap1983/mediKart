
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

  
  const getPrice = (product) =>
    product.offerPrice && product.offerPrice < product.price
      ? product.offerPrice
      : product.price;

 
  useEffect(() => {
    if (!products || !cartItems) return;
    const temp = [];
    for (const id in cartItems) {
      const product = products.find((p) => String(p._id) === String(id));
      if (product) temp.push({ ...product, quantity: cartItems[id] });
    }
    setCartArray(temp);
  }, [products, cartItems]);

  // Fetch addresses 
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
          navigate("/"); 
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

  
  const cartTotal = cartArray.reduce(
    (sum, item) => sum + getPrice(item) * item.quantity,
    0
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto py-16 px-6">
      
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

      
      <div className="max-w-[360px] w-full bg-white p-6 rounded-lg shadow-md border">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        
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

