import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Products2 from './Pages/Products2';
import axios from 'axios';
import Cart from './Pages/Cart';
import ProductRouter from './components/ProductRouter';
import CategoryProduct from './Pages/CategoryProduct';
import SingleProduct from './Pages/SingleProduct';


const App = () => {
  const [location, setLocation] = useState(null)
  const [openDropDown, setOpenDropDown] = useState(false)


  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      try {
        const response = await axios.get(`https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`)
        console.log(response.data);
        const data = response.data

        setLocation({
          country: data?.address?.country || "Unknown country",
          state: data?.address?.state || "Unknown state",
        })

      } catch (error) {
        alert("failed to get location")
        console.log("error fetching location:", error);
      }
    },
      (error) => {
        alert('failed to get location, unvalid location')
        console.error('error fetching location:', error);

      }
    )
  }
  return (
    <>
      <BrowserRouter>
        <Navbar
          location={location}
          getLocation={getLocation}
          openDropDown={openDropDown}
          setOpenDropDown={setOpenDropDown}
        />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Products />} />
          <Route path='/product2' element={<Products2 />} />
          <Route path='/category/:category' element={<CategoryProduct />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/product2/:id' element={<SingleProduct />} />
          <Route path='/cart' element={
            <ProductRouter>
              <Cart location={location} getLocation={getLocation} />
            </ProductRouter>
          }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;