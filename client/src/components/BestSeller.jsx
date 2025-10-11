
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ProductCard from './ProductCard';

const BestSeller = () => {
  const { products } = useContext(AppContext);

  return (
    <div className="mt-16 px-4 md:px-10">
      <p className="text-2xl font-medium md:text-3xl mb-6">Best Sellers</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">

        {products
          .filter((product) => product.inStock !== false) 
          .slice(0, 100)
          .map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSeller;

