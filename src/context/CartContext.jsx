import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify"

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cartItem, setCartItem] = useState([])


    const addToCart = (product) => {
        const iSInCart = cartItem.find(item => item.id === product.id);
        if (iSInCart) {
            toast.info("item already in the cart")
        } else {
            setCartItem([
                ...cartItem,
                {
                    ...product,
                    quantity: 1,
                    orignalPrice: product.price
                }
            ]),
                toast.success("Item added to cart")
        }
    }

    const updateQuantity = (items, id, action) => {
        const updateCart = items.map((item) => {
            if (item.id === id) {
                const quantity = action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1)
                return {
                    ...item,
                    quantity,
                    price: quantity * item.orignalPrice,
                };
            }

            return item;
        })
        setCartItem(updateCart)
    }

    const deleteItem = (id) =>{
        const filteredCart = cartItem.filter((item)=>item.id !== id )
        setCartItem(filteredCart);
        toast.success("Item deleted from cart");
    }

    return (
        <CartContext.Provider value={{
            cartItem,
            setCartItem,
            addToCart,
            updateQuantity,
            deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)