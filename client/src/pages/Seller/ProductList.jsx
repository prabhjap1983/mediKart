// import React from 'react'
// import { useContext } from 'react';
// import { AppContext } from '../../context/AppContext';

// const ProductList = () => {
//   const { products } = useContext(AppContext);
  
//     return (
//         <div className="flex-1 py-10 flex flex-col justify-between">
//             <div className="w-full md:p-10 p-4">
//                 <h2 className="pb-4 text-lg font-medium">All Products</h2>
//                 <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
//                     <table className="md:table-auto table-fixed w-full overflow-hidden">
//                         <thead className="text-gray-900 text-sm text-left">
//                             <tr>
//                                 <th className="px-4 py-3 font-semibold truncate">Product</th>
//                                 <th className="px-4 py-3 font-semibold truncate">Category</th>
//                                 <th className="px-4 py-3 font-semibold truncate hidden md:block">Selling Price</th>
//                                 <th className="px-4 py-3 font-semibold truncate">In Stock</th>
//                             </tr>
//                         </thead>
//                         <tbody className="text-sm text-gray-500">
//                             {products.map((product) => (
//                                 <tr key={product._id} className="border-t border-gray-500/20">
//                                     <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
//                                         <div className="border border-gray-300 rounded overflow-hidden">
//                                             <img src={product.image[0]} alt="Product" className="w-16" />
//                                         </div>
//                                         <span className="truncate max-sm:hidden w-full">{product.name}</span>
//                                     </td>
//                                     <td className="px-4 py-3">{product.category}</td>
//                                     {/* <td className="px-4 py-3 max-sm:hidden">${product.offerPrice}</td> */}
//                                     <td className="px-4 py-3 max-sm:hidden">
//                                     {product.oldPrice ? (
//                                       <div>
//                                         <span className="line-through text-gray-400 mr-2">₹{product.oldPrice}</span>
//                                         <span className="text-green-600 font-semibold">₹{product.price}</span>
//                                       </div>
//                                     ) : (
//                                       <span>₹{product.price}</span>
//                                     )}
//                                   </td>

//                                     <td className="px-4 py-3">
//                                         <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
//                                             <input type="checkbox" className="sr-only peer" defaultChecked={product.inStock} />
//                                             <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
//                                             <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
//                                         </label>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProductList

// import React, { useContext } from "react";
// import { AppContext } from "../../context/AppContext";

// const ProductList = () => {
//   const { products } = useContext(AppContext);

//   return (
//     <div className="flex-1 py-10 flex flex-col justify-between">
//       <div className="w-full md:p-10 p-4">
//         <h2 className="pb-6 text-xl font-semibold text-gray-800">
//           All Products
//         </h2>

//         <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-md bg-white">
//           <table className="w-full border-collapse">
//             {/* Table Head */}
//             <thead className="bg-gray-100 text-gray-700 text-sm uppercase tracking-wide">
//               <tr>
//                 <th className="px-6 py-3 text-left">Product</th>
//                 <th className="px-6 py-3 text-left">Category</th>
//                 <th className="px-6 py-3 text-left hidden md:table-cell">
//                   Selling Price
//                 </th>
//                 <th className="px-6 py-3 text-center">In Stock</th>
//               </tr>
//             </thead>

//             {/* Table Body */}
//             <tbody className="text-gray-600 text-sm divide-y divide-gray-200">
//               {products.map((product) => (
//                 <tr
//                   key={product._id}
//                   className="hover:bg-gray-50 transition-colors"
//                 >
//                   {/* Product Column */}
//                   <td className="px-6 py-4 flex items-center space-x-4">
//                     <div className="w-14 h-14 border rounded-lg overflow-hidden flex-shrink-0">
//                       <img
//                         // src={product.image[0]}
//                         src={`http://localhost:5000/images/${product.image[0]}`}
//                         alt={product.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <span className="truncate font-medium text-gray-800">
//                       {product.name}
//                     </span>
//                   </td>

//                   {/* Category */}
//                   <td className="px-6 py-4">{product.category}</td>

//                   {/* Price with old/new price */}
//                   <td className="px-6 py-4 hidden md:table-cell">
//                     {product.oldPrice ? (
//                       <div>
//                         <span className="line-through text-gray-400 mr-2">
//                           ₹{product.oldPrice}
//                         </span>
//                         <span className="text-green-600 font-semibold">
//                           ₹{product.price}
//                         </span>
//                       </div>
//                     ) : (
//                       <span className="font-medium text-gray-800">
//                         ₹{product.price}
//                       </span>
//                     )}
//                   </td>

//                   {/* Stock toggle */}
//                   <td className="px-6 py-4 text-center">
//                     <label className="relative inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         className="sr-only peer"
//                         defaultChecked={product.inStock}
//                       />
//                       <div className="w-11 h-6 bg-gray-300 peer-checked:bg-indigo-600 rounded-full transition-colors duration-300"></div>
//                       <span className="dot absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-5"></span>
//                     </label>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;

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
            {/* Table Head */}
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

            {/* Table Body */}
            <tbody className="text-gray-600 text-sm divide-y divide-gray-200">
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {/* Product Column */}
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

                  {/* Category */}
                  <td className="px-6 py-4">{product.category}</td>

                  {/* Price with offer price */}
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

                  {/* Stock toggle */}
                  <td className="px-6 py-4 text-center">
                    <label className="relative inline-flex items-center cursor-pointer">
                                                <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={product.inStock}      // ✅ controlled
                            onChange={() => toggleStock(product._id, !product.inStock)} // ✅ add onChange
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
