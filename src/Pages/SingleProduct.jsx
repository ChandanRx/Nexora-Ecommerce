import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import Breadcrums from "../components/Breadcrumps";
import Loading from "../assets/Loading4.webm";
import "remixicon/fonts/remixicon.css";

const SingleProduct = () => {
  const { id } = useParams(); // id format: fs-1 or ps-1
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!id || !id.includes("-")) return;
        const [prefix, pid] = id.split("-");
        let response;

        if (prefix === "fs") {
          response = await axios.get(`https://fakestoreapi.com/products/${pid}`);
        } else if (prefix === "ps") {
          response = await axios.get(`https://dummyjson.com/products/${pid}`);
        } else return;

        if (response?.data) {
          const prod = response.data;
          setProduct({
            id: id,
            title: prod.title,
            description: prod.description,
            category: prod.category,
            price: prod.price,
            image: prod.image || (prod.images ? prod.images[0] : ""),
          });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#101820]">
        <video autoPlay muted loop>
          <source src={Loading} type="video/mp4" />
        </video>
      </div>
    );
  }

  const originalPrice = Math.round(product.price * 1.2);

  return (
    <div className="bg-[#101820] text-[#C5C6C7] font-[Poppins] min-h-screen px-4 py-8 md:px-0">
      <Breadcrums title={product.title} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="rounded-2xl w-full object-contain border border-[#86C232] p-4 bg-[#1a1d21]"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-5">
          <h1 className="text-2xl md:text-3xl font-bold text-[#b7ff53]">
            {product.title}
          </h1>

          <div className="uppercase text-sm font-medium text-[#86C232]">
            {product.category}
          </div>

          <div className="text-xl font-bold text-[#86C232]">
            ₹{product.price}
            <span className="line-through text-gray-500 ml-3 text-base">
              ₹{originalPrice}
            </span>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-[#b7ff53]">Quantity:</label>
            <input
              type="number"
              min={1}
              value={1}
              readOnly
              className="w-20 border border-[#86C232] bg-[#1e1e1e] text-white rounded-lg px-3 py-1"
            />
          </div>

          <button
            onClick={() => addToCart(product)}
            className="mt-4 flex items-center gap-2 px-6 py-2 text-sm md:text-base bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] font-semibold rounded-md hover:scale-105 transition"
          >
            <i className="ri-shopping-cart-fill text-lg"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
