import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css';


import { ClerkProvider } from '@clerk/clerk-react'
import { DataProvider } from './context/DataContext.jsx';
import { NewDataProvider } from './context/NewDataContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from 'react-scroll-to-top';
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider >
      <CartProvider>
        <NewDataProvider>
          <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
            <App />
            <ScrollToTop
              smooth
              color="white"
              style={{
                background: "linear-gradient(to right, #A3E635, #A855F7)", // lime-400 to purple-500
                borderRadius: "9999px",
                color:"black",
                fontWeight:"bold",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                border: "2px solid black",
                zIndex: 50,
              }}
            />
            <ToastContainer />
          </ClerkProvider>
        </NewDataProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>,
)
