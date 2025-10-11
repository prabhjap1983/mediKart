
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

      
      <div className="p-4 flex flex-col text-center flex-grow">
        
        
        <div className="h-12 flex items-center justify-center mb-2">
          <h3 className="font-semibold text-base text-gray-800 line-clamp-2 leading-tight">
            {product.name}
          </h3>
        </div>
        
       
        <div className="h-6 flex items-center justify-center text-yellow-500 text-sm mb-3">
          ★★★★☆ <span className="text-gray-400 ml-1">(4.5)</span>
        </div>
        
        
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
        
        
        <div className="flex-grow"></div>
        
        
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
