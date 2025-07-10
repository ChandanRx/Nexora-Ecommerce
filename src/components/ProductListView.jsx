import React from 'react';
import { useCart } from '../context/CartContext';

const ProductListView = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="space-y-4 mt-4">
      <div className="bg-[#101820] border border-[#86C232] text-[#C5C6C7] rounded-lg p-4 flex flex-col md:flex-row gap-6 items-center hover:shadow-xl transition-all duration-300">
        
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="h-40 w-40 md:h-56 md:w-56 object-cover rounded-md hover:scale-105 transition cursor-pointer"
        />

        {/* Product Details */}
        <div className="space-y-3 md:w-full">
          <h2 className="font-bold text-lg md:text-xl hover:text-[#b7ff53] line-clamp-3">
            {product.title}
          </h2>
          
          <p className="text-lg font-semibold text-[#b7ff53]">
            ₹<span className="text-2xl md:text-3xl">{product.price}</span> 
            <span className="ml-2 text-sm text-gray-400">({product.discount}% off)</span>
          </p>

          <p className="text-sm text-gray-300">
            FREE delivery <span className="text-white font-medium">Fri, 18 Apr</span> <br />
            Or fastest delivery <span className="text-white font-medium">Tomorrow, 17 Apr</span>
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] font-semibold px-4 py-2 rounded hover:scale-105 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
