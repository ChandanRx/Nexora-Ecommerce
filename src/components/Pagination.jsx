import React from 'react'

const getPage = (current, total) => {
  const pages = []
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else if (current <= 3) {
    pages.push(1, 2, 3, '...', total)
  } else if (current >= total - 2) {
    pages.push(1, '...', total - 2, total - 1, total)
  } else {
    pages.push(1, '...', current - 1, current, current + 1, '...', total)
  }
  return pages
}

const Pagination = ({ page, pageHandler, dynamicPage }) => {
  return (
    <div className='mt-10 space-x-3 flex justify-center items-center font-[Poppins]'>
      
      {/* Prev Button */}
      <button
        className={`px-4 py-1.5 rounded-full font-semibold transition-all ${
          page === 1
            ? 'bg-[#474B4F] text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] hover:scale-105'
        }`}
        disabled={page === 1}
        onClick={() => pageHandler(page - 1)}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {getPage(page, dynamicPage)?.map((item, index) => (
        <span
          key={index}
          onClick={() => typeof item === 'number' && pageHandler(item)}
          className={`px-3 py-1 rounded-full cursor-pointer font-semibold transition-all ${
            item === page
              ? 'bg-[#b7ff53] text-[#222629]'
              : typeof item === 'number'
              ? 'text-[#86C232] hover:text-[#b7ff53]'
              : 'text-gray-400'
          }`}
        >
          {item}
        </span>
      ))}

      {/* Next Button */}
      <button
        className={`px-4 py-1.5 rounded-full font-semibold transition-all ${
          page === dynamicPage
            ? 'bg-[#474B4F] text-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] hover:scale-105'
        }`}
        disabled={page === dynamicPage}
        onClick={() => pageHandler(page + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
