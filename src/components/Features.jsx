import React from 'react'
import 'remixicon/fonts/remixicon.css'

const features = [
  { icon: 'ri-truck-line', text: 'Free Shipping', subtext: 'On orders over $100' },
  { icon: 'ri-shield-check-line', text: 'Secure Payment', subtext: '100% protected payments' },
  { icon: 'ri-arrow-go-back-line', text: 'Easy Returns', subtext: '30-day return policy' },
  { icon: 'ri-time-line', text: '24/7 Support', subtext: 'Dedicated customer service' },
]

const Features = () => {
  return (
    <div className="bg-[#0f161b] py-10 px-4 sm:px-6 lg:px-8 font-[Poppins]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center justify-center text-center sm:text-left group transition-transform duration-300 hover:scale-105"
            >
              <i className={`${feature.icon} text-4xl bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent`} />
              <div className="ml-4 text-left">
                <p className="text-base font-semibold bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent">
                  {feature.text}
                </p>
                <p className="mt-1 text-sm text-[#C5C6C7]">{feature.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
