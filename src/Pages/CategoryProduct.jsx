import React, { useEffect, useState } from "react";
import Loading from "../assets/Loading4.webm";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import ProductListView from "../components/ProductListView";

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate();

  const getFilterData = async () => {
    try {
      const encodedCategory = encodeURIComponent(category);
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${encodedCategory}`
      );
      setSearchData(res.data);
    } catch (error) {
      console.error("Error fetching category products:", error);
    }
  };

  useEffect(() => {
    getFilterData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-800 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center"
          >
            <i className="ri-arrow-left-line text-lg"></i> Back
          </button>
          {searchData.map((product, index) => (
            <ProductListView key={index} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-[400px]">
          <video muted autoPlay loop>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
