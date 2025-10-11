

import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams, Link } from "react-router-dom";
import { Star, StarHalf } from "lucide-react";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const { products, navigate, addToCart } = useContext(AppContext);
  

  const { id } = useParams();
const product = products.find((p) => String(p._id) === String(id));

  const [thumbnail, setThumbnail] = useState(null);

  
  useEffect(() => {
  if (product && Array.isArray(product.image) && product.image.length > 0) {
    setThumbnail(`http://localhost:5000/images/${product.image[0]}`);

  } else {
    setThumbnail(null);
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
            
            <img
              src={thumbnail}
              alt="Selected product"
              className="w-full h-full object-cover hover:scale-105 transition-transform"
            />
          </motion.div>
        </motion.div>

        
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

          
<div className="space-y-1">
  {product.offerPrice && product.offerPrice < product.price ? (
    <div className="flex items-center gap-2">
      <span className="text-gray-500 line-through text-lg">₹{product.price}</span>
      <span className="text-indigo-600 text-3xl font-bold">₹{product.offerPrice}</span>
    </div>
  ) : (
    <p className="text-3xl font-bold text-indigo-600">₹{product.price}</p>
  )}
  <span className="text-gray-500 text-sm">(inclusive of all taxes)</span>
</div>


         
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
