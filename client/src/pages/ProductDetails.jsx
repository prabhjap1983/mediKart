

// // export default ProductDetails;
// import React, { useContext, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { toast } from "react-toastify";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { products, addToCart } = useContext(AppContext);
//   const navigate = useNavigate();
//   const [quantity, setQuantity] = useState(1);

//   const product = products.find((p) => String(p.id) === id);
//   const placeholderImage = "https://via.placeholder.com/400x300?text=No+Image";

//   if (!product) {
//     return (
//       <div className="text-center text-red-600 text-xl mt-20">
//         Product not found.
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     addToCart(product.id, quantity);
//     toast.success("Product Added To Cart...");
//   };

//   return (
//     <div className="max-w-6xl mx-auto my-12 px-4">
//       <div className="flex flex-col md:flex-row gap-10 bg-white p-6 md:p-10 shadow-lg rounded-2xl">
//         {/* Image Section */}
//         <div className="md:w-1/2 flex items-center justify-center">
//           <img
//             src={product.image?.[0] || placeholderImage}
//             alt={product.name}
//             className="rounded-xl object-contain max-h-[500px] w-full"
//           />
//         </div>

//         {/* Details Section */}
//         <div className="md:w-1/2 space-y-6">
//           <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
//           <p className="text-gray-700 text-lg">
//             {product.description ||
//               "No description available for this product."}
//           </p>

//           {/* Pricing */}
//           <div className="text-2xl font-semibold text-green-600">
//             {product.oldPrice && (
//               <span className="text-gray-400 line-through mr-3 text-xl">
//                 ₹{product.oldPrice}
//               </span>
//             )}
//             ₹{product.price}
//           </div>

//           {/* Quantity Selector */}
//           <div className="flex items-center gap-4">
//             <label htmlFor="quantity" className="text-gray-700 text-lg">
//               Quantity:
//             </label>
//             <select
//               id="quantity"
//               value={quantity}
//               onChange={(e) => setQuantity(Number(e.target.value))}
//               className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               {[1, 2, 3, 4, 5].map((q) => (
//                 <option key={q} value={q}>
//                   {q}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-6 pt-6">
//             <button
//               onClick={() => navigate("/")}
//               className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg text-lg"
//             >
//               Home
//             </button>
//             <button
//               onClick={handleAddToCart}
//               className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg text-lg"
//             >
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext";
// import { useParams, Link } from "react-router-dom";
// import { Star, StarHalf } from "lucide-react";
// import { motion } from "framer-motion";

// const ProductDetails = () => {
//   const { products, navigate, addToCart } = useContext(AppContext);
//   const { id } = useParams();

//   const product = products.find((p) => String(p.id) === String(id));

//   const [thumbnail, setThumbnail] = useState(null);

//   useEffect(() => {
//     if (product?.image?.length > 0) {
//       setThumbnail(product.image[0]);
//     }
//   }, [product]);

//   if (!product) {
//     return (
//       <div className="max-w-6xl w-full px-6 py-20 text-center">
//         <h2 className="text-2xl font-semibold">Product not found</h2>
//         <button
//           onClick={() => navigate("/products")}
//           className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition shadow-lg hover:scale-105"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   // ⭐ Render rating stars (example: 3.5)
//   const renderStars = (rating = 4.2) => {
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     return (
//       <div className="flex items-center gap-1 text-yellow-500">
//         {Array(fullStars)
//           .fill(0)
//           .map((_, i) => (
//             <Star key={i} size={18} fill="currentColor" />
//           ))}
//         {hasHalfStar && <StarHalf size={18} fill="currentColor" />}
//         <span className="ml-2 text-gray-500 text-sm">({rating.toFixed(1)})</span>
//       </div>
//     );
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="max-w-6xl w-full px-6 py-8"
//     >
//       {/* Breadcrumb */}
//       <nav className="text-gray-600 text-sm mb-6">
//         <Link to="/" className="hover:underline hover:text-indigo-600 transition">
//           Home
//         </Link>{" "}
//         /
//         <Link to="/products" className="hover:underline hover:text-indigo-600 transition">
//           Products
//         </Link>{" "}
//         /<span className="text-indigo-500 font-medium"> {product.name}</span>
//       </nav>

//       <div className="flex flex-col md:flex-row gap-12">
//         {/* Left Side Images */}
//         <motion.div
//           initial={{ x: -30, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="flex gap-4 w-full md:w-1/2"
//         >
//           {product.image?.length > 1 && (
//             <div className="flex flex-col gap-3">
//               {/* {product.image.map((img, index) => (
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   key={index}
//                   onClick={() => setThumbnail(`http://localhost:5000/images/${image}`)}
//                   className={`border rounded-md overflow-hidden cursor-pointer transition-all shadow-sm ${
//                     thumbnail === img
//                       ? "border-indigo-500 ring-2 ring-indigo-300"
//                       : "border-gray-300 hover:border-gray-400"
//                   }`}
//                 >
//                   <img
//                     src={`http://localhost:5000/images/${product.image}`}
//                     alt={`Thumbnail ${index + 1}`}
//                     className="w-20 h-20 object-cover"
//                   />
//                 </motion.div> */}
//                 {product.image?.map((img, index) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     key={index}
//     onClick={() => setThumbnail(`http://localhost:5000/images/${img}`)} // ✅ use 'img'
//     className={`border rounded-md overflow-hidden cursor-pointer transition-all shadow-sm ${
//       thumbnail === `http://localhost:5000/images/${img}`
//         ? "border-indigo-500 ring-2 ring-indigo-300"
//         : "border-gray-300 hover:border-gray-400"
//     }`}
//   >
//     <img
//       src={`http://localhost:5000/images/${img}`} // ✅ use 'img'
//       alt={`Thumbnail ${index + 1}`}
//       className="w-20 h-20 object-cover"
//     />
//   </motion.div>


//               ))}
//             </div>
//           )}

//           <motion.div
//             initial={{ scale: 0.95, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="border border-gray-300 rounded-lg overflow-hidden flex-1 shadow-md"
//           >
//             {/* <img
//               src={`http://localhost:5000/images/${thumbnail}`}
//               alt="Selected product"
//               className="w-full h-full object-cover hover:scale-105 transition-transform"
//             /> */}
//             <img
//   src={thumbnail || `http://localhost:5000/images/${product.image[0]}`} // fallback to first image
//   alt="Selected product"
//   className="w-full h-full object-cover hover:scale-105 transition-transform"
// />

//           </motion.div>
//         </motion.div>

//         {/* Right Side Details */}
//         <motion.div
//           initial={{ x: 30, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="w-full md:w-1/2 space-y-6"
//         >
//           <div>
//             <h1 className="text-3xl font-semibold text-gray-800 drop-shadow-sm">
//               {product.name}
//             </h1>
//             {renderStars(product.rating || 4.3)}
//           </div>

//           {/* Price Section */}
//           <div>
//             {product.oldPrice && (
//               <p className="text-gray-500 line-through">MRP: ₹{product.oldPrice}</p>
//             )}
//             <p className="text-3xl font-bold text-indigo-600">₹{product.price}</p>
//             <span className="text-gray-500 text-sm">(inclusive of all taxes)</span>
//           </div>

//           {/* About Product */}
//           {product.description && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               <p className="text-lg font-medium">About Product</p>
//               <ul className="list-disc ml-5 mt-2 text-gray-600 space-y-1">
//                 {Array.isArray(product.description) ? (
//                   product.description.map((desc, index) => (
//                     <li key={index}>{desc}</li>
//                   ))
//                 ) : (
//                   <li>{product.description}</li>
//                 )}
//               </ul>
//             </motion.div>
//           )}

//           {/* Buttons */}
//           <div className="flex gap-4 pt-6">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => addToCart(product.id)}
//               className="flex-1 py-3 font-medium rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition shadow-sm"
//             >
//               Add to Cart
//             </motion.button>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 addToCart(product.id);
//                 navigate("/cart");
//               }}
//               className="flex-1 py-3 font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition shadow-md"
//             >
//               Buy Now
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default ProductDetails;

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams, Link } from "react-router-dom";
import { Star, StarHalf } from "lucide-react";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { products, navigate, addToCart } = useContext(AppContext);
  // const { id } = useParams();

  // const product = products.find((p) => String(p.id) === String(id));

  const { id } = useParams();
const product = products.find((p) => String(p._id) === String(id));

  const [thumbnail, setThumbnail] = useState(null);

  // useEffect(() => {
  //   if (product?.image?.length > 0) {
  //     // ✅ Always store full URL
  //     setThumbnail(`http://localhost:5000/images/${product.image[0]}`);
  //   }
  // }, [product]);
  useEffect(() => {
  if (product && Array.isArray(product.image) && product.image.length > 0) {
    setThumbnail(`http://localhost:5000/images/${product.image[0]}`);

  } else {
    setThumbnail(null); // no image
  }
}, [product]);


  if (!product) {
    return (
      <div className="max-w-6xl w-full px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold">Product not found</h2>
        <button
          onClick={() => navigate("/products")}
          className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition shadow-lg hover:scale-105"
        >
          Go Back
        </button>
      </div>
    );
  }

  // ⭐ Render rating stars (example: 3.5)
  const renderStars = (rating = 4.2) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-1 text-yellow-500">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        {hasHalfStar && <StarHalf size={18} fill="currentColor" />}
        <span className="ml-2 text-gray-500 text-sm">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl w-full px-6 py-8"
    >
      {/* Breadcrumb */}
      <nav className="text-gray-600 text-sm mb-6">
        <Link to="/" className="hover:underline hover:text-indigo-600 transition">
          Home
        </Link>{" "}
        /
        <Link to="/products" className="hover:underline hover:text-indigo-600 transition">
          Products
        </Link>{" "}
        /<span className="text-indigo-500 font-medium"> {product.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Side Images */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 w-full md:w-1/2"
        >
          {product.image?.length > 1 && (
            <div className="flex flex-col gap-3">
              {product.image?.map((img, index) => {
                const imgUrl = `http://localhost:5000/images/${img}`;
                return (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    key={index}
                    onClick={() => setThumbnail(imgUrl)}
                    className={`border rounded-md overflow-hidden cursor-pointer transition-all shadow-sm ${
                      thumbnail === imgUrl
                        ? "border-indigo-500 ring-2 ring-indigo-300"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-20 h-20 object-cover"
                    />
                  </motion.div>
                );
              })}
            </div>
          )}

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="border border-gray-300 rounded-lg overflow-hidden flex-1 shadow-md"
          >
            {/* ✅ Always show selected image */}
            <img
              src={thumbnail}
              alt="Selected product"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </motion.div>
        </motion.div>

        {/* Right Side Details */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <div>
            <h1 className="text-3xl font-semibold text-gray-800 drop-shadow-sm">
              {product.name}
            </h1>
            {renderStars(product.rating || 4.3)}
          </div>

          {/* Price Section */}
          <div>
            {product.oldPrice && (
              <p className="text-gray-500 line-through">MRP: ₹{product.oldPrice}</p>
            )}
            <p className="text-3xl font-bold text-indigo-600">₹{product.price}</p>
            <span className="text-gray-500 text-sm">(inclusive of all taxes)</span>
          </div>

          {/* About Product */}
          {product.description && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-lg font-medium">About Product</p>
              <ul className="list-disc ml-5 mt-2 text-gray-600 space-y-1">
                {Array.isArray(product.description) ? (
                  product.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))
                ) : (
                  <li>{product.description}</li>
                )}
              </ul>
            </motion.div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addToCart(product._id)}
              className="flex-1 py-3 font-medium rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200 transition shadow-sm"
            >
              Add to Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                addToCart(product.id);
                navigate("/cart");
              }}
              className="flex-1 py-3 font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition shadow-md"
            >
              Buy Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
