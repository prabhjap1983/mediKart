
import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";

const CheckoutPage = () => {
  const { cartItems, products, totalCartAmount, updateCartItem } =
    useContext(AppContext);

  const cartProducts = products.filter((p) => cartItems[p.id]);
  const [tempQty, setTempQty] = useState({});

  return (
    <div>
      
      <div className="w-full bg-gradient-to-r from-indigo-100 to-indigo-50 py-16 text-center">
        <h1 className="text-5xl font-bold text-[#4f46e5]">Checkout</h1>
        <p className="mt-3 text-gray-600 text-lg">Review Your Order...</p>
      </div>

    
      <div className="max-w-3xl mx-auto my-12 px-4">
        <div className="bg-white shadow-xl rounded-2xl p-6">
          <h2 className="text-lg font-semibold border-b pb-3 mb-6">
            Order Summary
          </h2>

          {cartProducts.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-500">
                  Price: ₹{product.price}
                </p>

                
                <div className="flex items-center gap-2 mt-1">
                  <label className="text-sm text-gray-500">Qty:</label>
                  <select
                    defaultValue={cartItems[product.id]}
                    onChange={(e) =>
                      setTempQty((prev) => ({
                        ...prev,
                        [product.id]: Number(e.target.value),
                      }))
                    }
                    className="border px-2 py-1 rounded-md"
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              
              <p className="font-semibold text-[#4f46e5]">
                ₹{(product.price * cartItems[product.id]).toFixed(2)}
              </p>
            </div>
          ))}

         
          <div className="border-t pt-4 mt-6 flex justify-between items-center">
            <h3 className="text-xl font-bold">Total</h3>
            <h3 className="text-xl font-bold text-[#4f46e5]">
              ₹{totalCartAmount().toFixed(2)}
            </h3>
          </div>

          
          <button
            onClick={() => {
              cartProducts.forEach((product) => {
                const qty = tempQty[product.id] || cartItems[product.id];
                updateCartItem(product.id, qty);
              });
              toast.success("Order updated successfully!");
            }}
            
  className="bg-[#ff4500] hover:bg-[#e03e00] text-white px-6 py-3 mt-8 rounded-lg w-full font-semibold transition"
>
  Update Order
</button>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
