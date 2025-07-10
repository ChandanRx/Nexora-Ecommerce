import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = () => {
    const { data, fetchAllProducts } = getData()
    const navigate = useNavigate()

    useEffect(() => {
        fetchAllProducts()
    }, [])

    const PrevArrow = ({ onClick }) => (
        <div
            onClick={onClick}
            style={{
                zIndex: 3,
                left: "30px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
            }}
        >
            <i className="ri-arrow-left-s-line text-[#222629] bg-[#86C232] p-2 rounded-full text-xl cursor-pointer"></i>
        </div>
    )

    const NextArrow = ({ onClick }) => (
        <div
            onClick={onClick}
            style={{
                zIndex: 3,
                right: "30px",
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
            }}
        >
            <i className="ri-arrow-right-s-line text-[#222629] bg-[#86C232] p-2 rounded-full text-xl cursor-pointer"></i>
        </div>
    )

    const getUniqueCategories = (items, key) => {
        if (!items?.length) return []
        return [...new Set(items.map(item => item[key]))]
    }

    const categories = getUniqueCategories(data, "category")

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    }

    return (
        <Slider {...settings}>
            {data?.slice(0, 7)?.map((item, index) => (
                <div
                    className='bg-[#3a3d41]'
                    key={index}
                >
                    <div className='flex flex-col md:flex-row items-center justify-center px-4 gap-12 h-[650px] font-[Poppins]'>

                        {/* Left: Spinning Image + Labels */}
                        <div className='relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] flex items-center justify-center'>
                            {/* Spinning Background */}
                            <div className='absolute w-full h-full bg-white rounded-full shadow-lg shadow-[#86C232] animate-spin'></div>

                            {/* Product Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className='w-[250px] h-[250px] object-contain rounded-full z-10'
                            />

                            {/* Gradient Texts Around */}
                            <p className='absolute top-[-32px] font-semibold text-sm tracking-wider bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent'>
                                Top Quality
                            </p>
                            <p className='absolute bottom-[-32px] font-semibold text-sm tracking-wider bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent'>
                                Trendy
                            </p>
                            <p className='absolute left-[-42px] top-1/2 -translate-y-1/2 -rotate-90 font-semibold text-sm tracking-wider bg-gradient-to-b from-lime-400 to-purple-500 bg-clip-text text-transparent'>
                                Deals
                            </p>
                            <p className='absolute right-[-42px] top-1/2 -translate-y-1/2 rotate-90 font-semibold text-sm tracking-wider bg-gradient-to-b from-lime-400 to-purple-500 bg-clip-text text-transparent'>
                                New
                            </p>
                        </div>


                        {/* Right: Text + Button + Categories */}
                        <div className='text-[#b7ff53] space-y-5 max-w-xl text-center md:text-left'>
                            <h3 className='text-sm font-medium uppercase tracking-wide bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent'>
                                Discover the Latest & Smartest
                            </h3>
                            <h1 className='text-2xl md:text-4xl font-extrabold uppercase leading-tight line-clamp-2 bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent'>
                                {item.title}
                            </h1>

                            <p className='text-[#C5C6C7] text-base md:text-lg line-clamp-3'>
                                {item.description}
                            </p>


                            {/* Shop Now Button */}
                            <div className="relative inline-block">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-purple-500 rounded-full blur-sm animate-pulse z-0"></div>
                                <button
                                    onClick={() => navigate(`/product/${item.id}`)}
                                    className='relative z-10 uppercase bg-[#222629] text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-all'
                                >
                                    🛍️ Shop Now
                                </button>
                            </div>

                            {/* All Categories Below */}
                            <div className='flex flex-wrap gap-3 justify-center md:justify-start pt-4'>
                                {categories.map((category, i) => (
                                    <div key={i} className="relative inline-block">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-purple-500 rounded-full blur-sm animate-pulse z-0"></div>
                                        <button
                                            onClick={() => navigate(`/category/${category}`)}
                                            className='relative z-10 uppercase bg-[#222629] text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-all'
                                        >
                                            {category}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </Slider>
    )
}

export default Carousel
