import React from 'react'
import banner from '../assets/banner3.jpg'

const MidBanner = () => {
  return (
    <div className='bg-[#3a3d41] md:py-24'>
      <div
        className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px]'
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className='absolute inset-0 bg-black/70 md:rounded-2xl flex items-center justify-center px-4'>
          <div className='text-center text-[#b7ff53] max-w-3xl'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight font-[Poppins]'>
              Trendy Styles for Men, Women & Jewelry Lovers
            </h1>
            <p className='text-[#C5C6C7] text-lg md:text-xl mb-8 font-[Poppins]'>
              Discover the latest stylish apparel for men and women, plus stunning jewelry pieces.
            </p>

            {/* Glowing Gradient Button */}
            <div className='relative inline-block'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-purple-500 rounded-lg blur-sm animate-pulse'></div>
              <button className='relative z-10 bg-[#222629] text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-300 font-[Poppins]'>
                🛍️ Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner
