import React, { useEffect, useState } from 'react';
import { getData } from '../context/DataContext';
import Pagination from '../components/Pagination';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import notfound from "../assets/notfound.json";
import Loading from "../assets/Loading4.webm";

const Products = () => {
    const { data, fetchAllProducts } = getData();
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('All');
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [page, setPage] = useState(1);

    const fakestoreData = data.filter((item) => item.source === "fakestore");

    useEffect(() => {
        fetchAllProducts();
    }, []);

    const categoryList = ["All", ...new Set(fakestoreData.map((item) => item.category))];

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        setPage(1);
    };

    const handleResetFilters = () => {
        setSearch('');
        setCategory('All');
        setPriceRange([0, 5000]);
        setPage(1);
    };

    const filteredData = fakestoreData?.filter(
        (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) &&
            (category === "All" || item.category === category) &&
            item.price >= priceRange[0] &&
            item.price <= priceRange[1]
    );

    const pageHandler = (selectedPage) => {
        setPage(selectedPage);
        window.scrollTo(0, 0);
    };

    const dynamicPage = Math.ceil(filteredData?.length / 8);

    return (
        <div className="mx-auto px-4 pb-4 font-[Poppins] bg-[#3a3d41] text-[#C5C6C7] min-h-screen ">
            {data?.length > 0 ? (
                <div className="flex gap-6">
                    {/* Sidebar Filter */}
                    <div className="w-1/4 hidden md:block mt-4">
                        <div className="bg-[#101820] border border-[#86C232] rounded-xl p-5 shadow min-h-[400px]">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="bg-[#1e1e1e] text-white placeholder:text-gray-400 border border-[#86C232] rounded-md px-3 py-2 w-full mb-4"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <label className="block mb-1 text-sm font-semibold text-[#86C232]">Category</label>
                            <div className="mb-4 space-y-2">
                                {categoryList?.map((cat, index) => (
                                    <label key={index} className="flex items-center gap-2 cursor-pointer text-sm">
                                        <input
                                            type="radio"
                                            name="category"
                                            value={cat}
                                            checked={category === cat}
                                            onChange={handleCategoryChange}
                                        />
                                        <span className="uppercase">{cat}</span>
                                    </label>
                                ))}
                            </div>

                            <label className="text-[#b7ff53] font-medium">
                                Price: ₹{priceRange[0]} - ₹{priceRange[1]}
                            </label>
                            <input
                                type="range"
                                min={0}
                                max={5000}
                                value={priceRange[1]}
                                onChange={(e) =>
                                    setPriceRange([priceRange[0], Number(e.target.value)])
                                }
                                className="w-full transition-all mb-4 accent-[#86C232]"
                            />

                            <button
                                onClick={handleResetFilters}
                                className="bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] font-semibold px-4 py-2 rounded w-full hover:scale-105 transition"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="w-full md:w-3/4">
                        {filteredData?.length > 0 ? (
                            <>
                                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mt-4">
                                    {filteredData
                                        .slice((page - 1) * 8, page * 8)
                                        .map((product) => (
                                            <div
                                                key={product.id}
                                                className="border border-gray-900 rounded-lg overflow-hidden bg-white shadow-sm hover:scale-105 hover:shadow-lg duration-300 flex flex-col justify-between cursor-pointer"

                                                onClick={() =>
                                                    navigate(`/product/${product.id}`)
                                                }
                                            >
                                                <div className="flex justify-center items-center bg-white py-4">
                                                    <img
                                                        src={product.image}
                                                        alt={product.title}
                                                        className="h-40 w-40 object-contain"
                                                    />
                                                </div>
                                                <div className="bg-[#222629] p-4">
                                                    <h3 className="text-sm font-medium text-gray-50 line-clamp-2 h-10">
                                                        {product.title}
                                                    </h3>
                                                    <p className="text-lg font-bold text-gray-100 my-2">₹{product.price}</p>
                                                    <button
                                                        className="bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] text-sm font-semibold py-2 rounded-md w-full flex items-center justify-center gap-2 hover:scale-105 transition"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            addToCart(product);
                                                        }}
                                                    >
                                                        <i className="ri-shopping-cart-fill text-xl"></i>
                                                        Add To Cart
                                                    </button>
                                                </div>                      </div>
                                        ))}
                                </div>

                                {/* Pagination */}
                                <div className="flex justify-center mt-8 space-x-2">
                                    <Pagination
                                        pageHandler={pageHandler}
                                        page={page}
                                        dynamicPage={dynamicPage}
                                    />
                                </div>
                            </>
                        ) : (
                            <div className="flex justify-center items-center md:h-[600px] md:w-[900px] mt-10">
                                <Lottie animationData={notfound} className="w-[500px]" />
                            </div>
                        )}
                    </div>
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

export default Products;
