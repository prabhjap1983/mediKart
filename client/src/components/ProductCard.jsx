
// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const ProductCard = ({ product }) => {
//   const { navigate } = useContext(AppContext);
//   const placeholderImage = "https://via.placeholder.com/200x150?text=No+Image";

//   return product && (
//     <div 
//       className="border border-gray-200 rounded-2xl bg-white p-6 shadow-sm group transition-all duration-300 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 h-[450px]"
//     >
//       {/* Product Image */}
//       <img
//         src={product.image?.[0] || placeholderImage}
//         alt={product.name || "Product"}
//         className="h-44 w-full object-contain mb-6 transition-transform duration-300 group-hover:scale-105"
//       />

//       {/* Product Name */}
//       <h3 className="font-semibold text-base text-gray-800 mb-2 line-clamp-2">
//         {product.name}
//       </h3>

//       {/* Rating */}
//       <div className="flex items-center justify-center text-yellow-500 text-sm mb-3">
//         ★★★★☆ <span className="text-gray-400 ml-1">(4.5)</span>
//       </div>

//       {/* Pricing */}
//       <div className="mb-5">
//         {product.oldPrice && (
//           <p className="text-gray-400 line-through text-sm">₹{product.oldPrice}</p>
//         )}
//         <p className="text-xl font-bold text-green-600">₹{product.price}</p>
//       </div>

//       {/* View Product Button */}
//       <button
//         className="mt-auto w-full border border-gray-300 text-sm px-4 py-2 rounded-xl text-[#4d59e2] bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-200 font-medium"
//         onClick={() => navigate(`/product/${product.id}`)}
//       >
//         View Product
//       </button>
//     </div>
//   );
// };

// export default ProductCard;



// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const ProductCard = ({ product }) => {
//   const { navigate } = useContext(AppContext);
//   const placeholderImage = "https://via.placeholder.com/200x150?text=No+Image";

//   return product && (
//     <div 
//       className="border border-gray-200 rounded-2xl bg-white p-6 shadow-sm group transition-all duration-300 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 h-[450px]"
//     >
//       {/* Product Image with stronger zoom */}
//       <img
//         src={product.image?.[0] || placeholderImage}
//         alt={product.name || "Product"}
//         className="h-44 w-full object-contain mb-6 transition-transform duration-300 group-hover:scale-110"
//       />

//       {/* Product Name */}
//       <h3 className="font-semibold text-base text-gray-800 mb-2 line-clamp-2">
//         {product.name}
//       </h3>

//       {/* Rating */}
//       <div className="flex items-center justify-center text-yellow-500 text-sm mb-3">
//         ★★★★☆ <span className="text-gray-400 ml-1">(4.5)</span>
//       </div>

//       {/* Pricing */}
//       <div className="mb-5">
//         {product.oldPrice && (
//           <p className="text-gray-400 line-through text-sm">₹{product.oldPrice}</p>
//         )}
//         <p className="text-xl font-bold text-green-600">₹{product.price}</p>
//       </div>

//       {/* View Product Button */}
//       <button
//         className="mt-auto w-full border border-gray-300 text-sm px-4 py-2 rounded-xl text-[#4d59e2] bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-200 font-medium"
//         onClick={() => navigate(`/product/${product.id}`)}
//       >
//         View Product
//       </button>
//     </div>
//   );
// };

// export default ProductCard;



// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const ProductCard = ({ product }) => {
//   const { navigate } = useContext(AppContext);
//   const placeholderImage = "https://via.placeholder.com/200x150?text=No+Image";

//   return product && (
//     <div 
//       className="border border-gray-200 rounded-2xl bg-white p-6 shadow-sm group transition-all duration-300 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 h-[450px]"
//       style={{
//         transition: 'border 0.3s ease-in-out',
//         borderColor: 'gray',
//       }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.borderColor = '#4d59e2ff';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.borderColor = 'rgb(229 231 235)'; // Tailwind's border-gray-200
//       }}
//     >
//       {/* Product Image */}
//       <img
//         src={product.image?.[0] || placeholderImage}
//         alt={product.name || "Product"}
//         className="h-44 w-full object-contain mb-6 transition-transform duration-300 group-hover:scale-110"
//       />

//       {/* Product Name */}
//       <h3 className="font-semibold text-base text-gray-800 mb-2 line-clamp-2">
//         {product.name}
//       </h3>

//       {/* Rating */}
//       <div className="flex items-center justify-center text-yellow-500 text-sm mb-3">
//         ★★★★☆ <span className="text-gray-400 ml-1">(4.5)</span>
//       </div>

//       {/* Pricing */}
//       <div className="mb-5">
//         {product.oldPrice && (
//           <p className="text-gray-400 line-through text-sm">₹{product.oldPrice}</p>
//         )}
//         <p className="text-xl font-bold text-green-600">₹{product.price}</p>
//       </div>

//       {/* View Product Button */}
//       <button
//   className="mt-auto w-full text-sm px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 font-medium"
//   style={{
//     border: '1px solid #4d59e2ff',
//     color: '#4d59e2ff',
//   }}
//   // onClick={() => navigate(`/products/${product.category}/${product._id}`)}
//   onClick={() => navigate(`/products/${product.category || 'general'}/${product.id}`)}

// >
//   View Product
// </button>

//     </div>
//   );
// };

// // export default ProductCard;
// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const ProductCard = ({ product }) => {
//   const { navigate } = useContext(AppContext);
//   const placeholderImage = "https://via.placeholder.com/200x150?text=No+Image";

//   if (!product) return null;

//   return (
//     <div 
//       className="border border-gray-200 rounded-2xl bg-white p-0 shadow-sm group transition-all duration-300 flex flex-col hover:shadow-lg hover:-translate-y-1 overflow-hidden"
//       style={{ transition: 'border 0.3s ease-in-out' }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.borderColor = '#4d59e2';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.borderColor = '#e5e7eb';
//       }}
//     >
//       {/* Product Image */}
//       <img
//         src={product.image?.[0] || placeholderImage}
//         alt={product.name || "Product Image"}
//         className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
//       />

//       <div className="p-4 flex flex-col items-center text-center h-full">
//         {/* Product Name */}
//         <h3 className="font-semibold text-base text-gray-800 mb-2 line-clamp-2">
//           {product.name}
//         </h3>

//         {/* Rating */}
//         <div className="flex items-center justify-center text-yellow-500 text-sm mb-3">
//           ★★★★☆ <span className="text-gray-400 ml-1">(4.5)</span>
//         </div>

//         {/* Price */}
//         <div className="mb-4">
//           {product.oldPrice && (
//             <p className="text-gray-400 line-through text-sm">₹{product.oldPrice}</p>
//           )}
//           <p className="text-xl font-bold text-green-600">₹{product.price}</p>
//         </div>

//         {/* View Product Button */}
//         <button
//           className="mt-auto w-full text-sm px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 font-medium"
//           style={{
//             border: '1px solid #4d59e2',
//             color: '#4d59e2',
//           }}
//           onClick={() =>
//             navigate(`/products/${product.category || 'general'}/${product.id}`)
//           }
//         >
//           View Product
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';

// const ProductCard = ({ product }) => {
//   const { navigate } = useContext(AppContext);
//   const placeholderImage = "https://via.placeholder.com/200x150?text=No+Image";
  
//   if (!product) return null;

//   return (
//     <div 
//       className="border border-gray-200 rounded-2xl bg-white shadow-sm group transition-all duration-300 flex flex-col hover:shadow-lg hover:-translate-y-1 overflow-hidden h-full"
//       style={{ transition: 'border 0.3s ease-in-out' }}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.borderColor = '#4d59e2';
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.borderColor = '#e5e7eb';
//       }}
//     >
//       {/* Product Image - Fixed height */}
//       <div className="w-full h-64 overflow-hidden">
//         <img
//         src={
//           product?.image?.length > 0
//             ? `http://localhost:5000/images/${product.image[0]}`
//             : placeholderImage
//         }
//         alt={product.name || "Product Image"}
//         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//       />

//       </div>

//       {/* Content Container - Takes remaining space */}
//       <div className="p-4 flex flex-col text-center flex-grow">
        
//         {/* Product Name - Fixed height area */}
//         <div className="h-12 flex items-center justify-center mb-2">
//           <h3 className="font-semibold text-base text-gray-800 line-clamp-2 leading-tight">
//             {product.name}
//           </h3>
//         </div>
        
//         {/* Rating - Fixed height */}
//         <div className="h-6 flex items-center justify-center text-yellow-500 text-sm mb-3">
//           ★★★★☆ <span className="text-gray-400 ml-1">(4.5)</span>
//         </div>
        
//         {/* Price - Fixed height area */}
//         <div className="h-16 flex flex-col items-center justify-center mb-4">
//           {product.oldPrice && (
//             <p className="text-gray-400 line-through text-sm">₹{product.oldPrice}</p>
//           )}
//           <p className="text-xl font-bold text-green-600">₹{product.price}</p>
//         </div>
        
//         {/* Spacer to push button to bottom */}
//         <div className="flex-grow"></div>
        
//         {/* View Product Button - Always at bottom */}
//         <button
//           className="w-full text-sm px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 font-medium"
//           style={{
//             border: '1px solid #4d59e2',
//             color: '#4d59e2',
//           }}
//           // onClick={() =>
//           //   navigate(`/products/${product.category || 'general'}/${product.id}`)
//           // }
//           onClick={() => navigate(`/products/${product.category}/${product._id}`)}

//         >
//           View Product
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;


import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ProductCard = ({ product }) => {
  const { navigate } = useContext(AppContext);
  const placeholderImage = "https://via.placeholder.com/200x150?text=No+Image";
  
  if (!product) return null;

  const hasOffer = product.offerPrice && product.offerPrice < product.price;

  return (
    <div 
      className="border border-gray-200 rounded-2xl bg-white shadow-sm group transition-all duration-300 flex flex-col hover:shadow-lg hover:-translate-y-1 overflow-hidden h-full"
      style={{ transition: 'border 0.3s ease-in-out' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#4d59e2';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e5e7eb';
      }}
    >
      {/* Product Image */}
      <div className="w-full h-64 overflow-hidden">
        <img
          src={
            product?.image?.length > 0
              ? `http://localhost:5000/images/${product.image[0]}`
              : placeholderImage
          }
          alt={product.name || "Product Image"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col text-center flex-grow">
        
        {/* Product Name */}
        <div className="h-12 flex items-center justify-center mb-2">
          <h3 className="font-semibold text-base text-gray-800 line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </div>
        
        {/* Rating */}
        <div className="h-6 flex items-center justify-center text-yellow-500 text-sm mb-3">
          ★★★★☆ <span className="text-gray-400 ml-1">(4.5)</span>
        </div>
        
        {/* Price */}
        <div className="h-16 flex items-center justify-center mb-4 gap-2">
          {hasOffer && (
            <span className="text-gray-400 line-through text-sm">
              ₹{product.price}
            </span>
          )}
          <span className={`font-bold ${hasOffer ? 'text-green-600 text-xl' : 'text-gray-800 text-xl'}`}>
            ₹{hasOffer ? product.offerPrice : product.price}
          </span>
        </div>
        
        {/* Spacer */}
        <div className="flex-grow"></div>
        
        {/* View Product Button */}
        <button
          className="w-full text-sm px-4 py-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 font-medium"
          style={{
            border: '1px solid #4d59e2',
            color: '#4d59e2',
          }}
          onClick={() => navigate(`/products/${product.category}/${product._id}`)}
        >
          View Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
