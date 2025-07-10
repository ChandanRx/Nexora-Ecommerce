import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0f161b] text-[#C5C6C7] py-10 text-sm font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">

        {/* Brand Info */}
        <div>
          <Link to="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-500">Nexora</Link>
          <p className="mt-2">Powering Your World with the Best in Electronics.</p>
          <p className="mt-2">123 Electronics St, Style City, NY 10001</p>
          <p>Email: <span className="text-[#86C232]">support@zaptro.com</span></p>
          <p>Phone: <span className="text-[#86C232]">(123) 456-7890</span></p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-500 mb-2">
            Customer Service
          </h3>
          <ul className="space-y-1">
            {['Contact Us', 'Shipping & Returns', 'FAQs', 'Order Tracking', 'Size Guide'].map((item, i) => (
              <li
                key={i}
                className="hover:text-[#b7ff53] cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-500 mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2 text-xl text-[#b7ff53]">
            <i className="ri-facebook-fill hover:text-white cursor-pointer"></i>
            <i className="ri-instagram-line hover:text-white cursor-pointer"></i>
            <i className="ri-twitter-fill hover:text-white cursor-pointer"></i>
            <i className="ri-pinterest-line hover:text-white cursor-pointer"></i>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-purple-500 mb-2">Stay in the Loop</h3>
          <p>Subscribe for offers & updates</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 p-2 rounded-l bg-[#1e1e1e] border border-[#86C232] text-white placeholder:text-gray-400"
            />
            <button className="bg-gradient-to-r from-lime-400 to-purple-500 text-[#222629] font-semibold px-4 rounded-r transition-transform hover:scale-105 shadow-md">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center border-t border-[#474B4F] pt-4 text-[#b7ff53]">
        <p>&copy; {new Date().getFullYear()} <span className="text-[#86C232] font-semibold">Nexora</span>. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
