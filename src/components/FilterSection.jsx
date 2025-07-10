import React from 'react'
import { getData } from '../context/DataContext'

const FilterSection = ({
  search,
  setSearch,
  priceRange,
  setPriceRange,
  category,
  setCategory,
  handleCategoryChange
}) => {
  const { categoryList = [] } = getData() || {}

  return (
    <div className='bg-[#101820] mt-10 p-5 rounded-xl h-max hidden md:block w-[500px] text-[#C5C6C7] font-[Poppins] border border-[#86C232]/40'>

      {/* Search Box */}
      <input
        type="text"
        className='bg-[#1e1e1e] rounded-md p-2 border border-[#86C232] w-full text-white placeholder:text-gray-400 focus:outline-none'
        placeholder='Search Products'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}
      <h2 className='mt-6 font-bold text-lg text-[#86C232]'>Category</h2>
      <div className='flex flex-col mt-3 gap-2'>
        {categoryList?.map((cat, index) => (
          <label
            key={index}
            className="flex items-center gap-2 cursor-pointer hover:text-[#b7ff53]"
          >
            <input
              type="radio"
              name='category'
              value={cat}
              checked={category === cat}
              onChange={handleCategoryChange}
              className="accent-[#b7ff53]"
            />
            <span className='uppercase'>{cat}</span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <h2 className='mt-6 font-bold text-lg text-[#86C232]'>Price Range</h2>
      <div className='flex flex-col gap-2 mt-2'>
        <label className='text-sm text-[#C5C6C7]'>Price: ${priceRange[0]} - ${priceRange[1]}</label>
        <input
          type="range"
          min='0'
          max='1000'
          value={priceRange[1]}
          className='w-full accent-[#b7ff53]'
          onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
        />
      </div>

      {/* Reset Button */}
      <button
        className='mt-6 bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] font-semibold rounded-md py-2 px-4 w-full hover:scale-105 transition-all'
        onClick={() => {
          setSearch("")
          setCategory("All")
          setPriceRange([0, 1000])
        }}
      >
        Reset Filter
      </button>
    </div>
  )
}

export default FilterSection
