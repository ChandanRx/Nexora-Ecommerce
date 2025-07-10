import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const Navbar = ({ location, getLocation, openDropDown, setOpenDropDown }) => {
  const [openNav, setOpenNav] = useState(false)
  const { cartItem } = useCart()
  const toggleDropDown = () => setOpenDropDown(!openDropDown)
  const Location = useLocation();

  return (
    <div className='bg-[#0f161b] text-[#86C232] shadow-lg font-[Poppins] transition-all'>
      <div className='max-w-6xl mx-auto px-4 py-8 flex justify-between items-center'>

        {/* Left Section */}
        <div className='flex gap-6 items-center'>
          {/* Logo */}
          <Link to="/">
            <h1 className="text-4xl md:text-4xl font-extrabold tracking-widest flex items-center gap-2">
              <span className="bg-gradient-to-r from-purple-500 to-lime-400 text-white px-3 py-1 rounded-full shadow-lg shadow-lime-400 animate-pulse text-2xl">
                N
              </span>
              <span className="bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_1.5px_1.5px_rgba(183,255,83,0.8)]">
                EXORA
              </span>
            </h1>
          </Link>


          {/* Location */}
          <div className='hidden md:flex gap-2 items-center cursor-pointer'>
            <span className="font-medium tracking-wide">
              {location ? (
                <div className="leading-tight drop-shadow-[0_1.5px_1.5px_rgba(183,255,83,0.6)] space-y-0.5 bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent">
                  <p className="uppercase text-sm md:text-base">{location.state}</p>
                  <p className="uppercase text-xs md:text-sm">{location.country}</p>
                </div>
              ) : (
                <span className="uppercase bg-gradient-to-r from-lime-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_1.5px_1.5px_rgba(183,255,83,0.6)] text-sm">
                  Add Address
                </span>
              )}
            </span>

            <span
              className="text-sm text-[#b7ff53] ml-1 cursor-pointer hover:scale-110 transition-transform"
              onClick={toggleDropDown}
            >
              ▼
            </span>


          </div>

          {/* Dropdown Box */}
          {openDropDown && (
            <div className='w-[250px] bg-[#222629] text-[#86C232] border border-[#86C232] p-4 rounded-md fixed top-20 left-60 shadow-lg z-50'>
              <div className='flex justify-between items-center mb-2'>
                <h2 className='font-semibold text-lg'>Change Location</h2>
                <span className='text-xl cursor-pointer hover:text-[#b7ff53]' onClick={toggleDropDown}>×</span>
              </div>

              {/* Glowing Gradient Button */}
              <div className="relative inline-block w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-purple-500 rounded-lg blur-sm animate-pulse z-0"></div>
                <button
                  className='relative z-10 w-full bg-[#222629] text-white font-semibold py-2 rounded-lg hover:scale-105 transition-transform'
                  onClick={getLocation}
                >
                  📡 Detect My Location
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Right Section */}
        <nav className='flex items-center gap-5'>
          {/* Desktop Nav */}
          <ul className='hidden md:flex gap-6 text-lg font-medium'>
            {[
              { path: "/", label: "Home" },
              { path: "/product", label: "Product1" },
              { path: "/Product2", label: "Product2" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" }
            ].map(({ path, label }) => {
              const isActive = Location.pathname.toLowerCase() === path.toLowerCase();

              return (
                <div key={path} className="relative group">
                  <NavLink
                    to={path}
                    className={`text-[#222629] px-1 transition duration-300 ${isActive ? "text-[#b7ff53]" : "text-white hover:text-[#b7ff53]"}`}
                  >
                    {label}
                  </NavLink>
                  <span
                    className={`
                absolute left-0 -bottom-1 h-0.5 w-full rounded-full
                bg-gradient-to-r from-lime-400 to-purple-500
                transition-transform duration-300 ease-in-out
                origin-left
                ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
              `}
                  />
                </div>
              );
            })}
          </ul>




          {/* Cart */}
          <Link to={"/cart"} className='relative text-2xl text-[#2D1B00]'>
            🛒
            <span className='bg-[#b7ff53] text-[#222629] text-xs px-2 py-0.5 rounded-full absolute -top-2 -right-3'>
              {cartItem.length}
            </span>
          </Link>

          {/* Auth */}
          <div className='hidden md:block'>
            <SignedOut>
              <div className="relative inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-purple-500 rounded-full blur-sm animate-pulse z-0"></div>
                <SignInButton>
                  <button className="relative z-10 px-4 py-1.5 rounded-full bg-[#222629] text-white font-[Poppins] hover:text-[#b7ff53] transition">
                    Sign In
                  </button>
                </SignInButton>
              </div>
            </SignedOut>

            <SignedIn>
              <div className="relative inline-block">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-purple-500 rounded-full blur-sm animate-pulse z-0"></div>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: "w-8 h-8",
                      avatarBox: "rounded-full",
                    },
                  }}
                />
              </div>
            </SignedIn>

          </div>

          {/* Hamburger */}
          <div className='md:hidden text-3xl ml-2 cursor-pointer' onClick={() => setOpenNav(!openNav)}>
            {openNav ? "❌" : "☰"}
          </div>
        </nav>
      </div>

      {/* Mobile Nav */}
      {openNav && (
        <div className='md:hidden bg-[#222629] text-[#b7ff53] border-t py-4 px-6 shadow-md text-lg font-medium'>
          <ul className='space-y-4'>
            <li><NavLink to="/" onClick={() => setOpenNav(false)}>Home</NavLink></li>
            <li><NavLink to="/product" onClick={() => setOpenNav(false)}>Product1</NavLink></li>
            <li><NavLink to="/Product2" onClick={() => setOpenNav(false)}>Product2</NavLink></li>
            <li><NavLink to="/about" onClick={() => setOpenNav(false)}>About</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setOpenNav(false)}>Contact</NavLink></li>
            <li>
              <SignedOut>
                <div className="relative inline-block">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-purple-500 rounded-full blur-sm animate-pulse z-0"></div>
                  <SignInButton>
                    <button className="relative z-10 px-4 py-1.5 rounded-full bg-[#222629] text-white font-[Poppins] hover:text-[#b7ff53] transition">
                      Sign In
                    </button>
                  </SignInButton>
                </div>
              </SignedOut>

              <SignedIn>
                <div className="relative inline-block">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-400 to-purple-500 rounded-full blur-sm animate-pulse z-0"></div>
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8",
                        avatarBox: "rounded-full",
                      },
                    }}
                  />
                </div>
              </SignedIn>

            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
