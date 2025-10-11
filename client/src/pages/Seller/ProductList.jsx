

import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
    const { products, fetchProducts, axios } = useContext(AppContext);

    const toggleStock = async (id, inStock) => {
        try {
            const { data } = await axios.post("/api/product/stock", { id, inStock });
            if (data.success) {
                fetchProducts();
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
};

  return (
    <div className="flex-1 py-10 flex flex-col justify-between">
      <div className="w-full md:p-10 p-4">
        <h2 className="pb-6 text-xl font-semibold text-gray-800">
          All Products
        </h2>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md bg-white">
          <table className="w-full border-collapse">
           
            <thead className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide">
              <tr>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left hidden md:table-cell">
                  Price / Offer Price
                </th>
                <th className="px-6 py-3 text-center">In Stock</th>
              </tr>
            </thead>

            
            <tbody className="text-gray-600 text-sm divide-y divide-gray-200">
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  
                  <td className="px-6 py-4 flex items-center space-x-4">
                    <div className="w-14 h-14 border rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={`http://localhost:5000/images/${product.image[0]}`}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="truncate font-medium text-gray-800">
                      {product.name}
                    </span>
                  </td>

                  
                  <td className="px-6 py-4">{product.category}</td>

                 
                  <td className="px-6 py-4 hidden md:table-cell">
                    {product.offerPrice && product.offerPrice < product.price ? (
                      <div>
                        <span className="line-through text-gray-400 mr-2">
                          ₹{product.price}
                        </span>
                        <span className="text-green-600 font-semibold">
                          ₹{product.offerPrice}
                        </span>
                      </div>
                    ) : (
                      <span className="font-medium text-gray-800">
                        ₹{product.price}
                      </span>
                    )}
                  </td>

                  
                  <td className="px-6 py-4 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={product.inStock}      
                            onChange={() => toggleStock(product._id, !product.inStock)} 
                          />
                      <div className="w-11 h-6 bg-gray-300 peer-checked:bg-indigo-600 rounded-full transition-colors duration-300"></div>
                      <span className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
